---
title: mysql主从同步集群搭建
date: 2023-06-06
tag:
- mysql
category:
- 数据库
---
# 
docker方式搭建
# 主服务器配置
## 1.创建并启动mysql主服务器
```
docker run -d -p 3306:3306 -v /home/yuluo/shardingsphere-env/master/conf:/etc/mysql/conf.d -v /home/yuluo/shardingsphere-env/master/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name yuluo-mysql-master mysql:8.0.29
eg:
docker run -d -p 3306:3306 -v F:\db\mysql\conf:/etc/mysql/conf.d -v F:\db\mysql\data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-master mysql:8.0.29
```
## 2.创建mysql主服务器配置文件
my.cnf
```
[mysqld]
# 服务器唯一id，默认值1
server-id=1
# 设置日志格式，默认值ROW
binlog_format=STATEMENT
# 二进制日志名，默认binlog
# log-bin=binlog
# 设置需要复制的数据库，默认复制全部数据库
#binlog-do-db=mytestdb
# 设置不需要复制的数据库
#binlog-ignore-db=mysql
#binlog-ignore-db=infomation_schema
```
## 3.测试连接
```
#进入容器：env LANG=C.UTF-8 避免容器中显示中文乱码
docker exec -it mysql-master env LANG=C.UTF-8 /bin/bash
#进入容器内的mysql命令行
mysql -uroot -p123456
#修改默认密码校验方式
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
```
## 4.主节点创建slave用户
```
create user 'lds_slave'@'%';
# 设置密码
alter user 'lds_slave'@'%' identified with mysql_native_password by '123456';
# 授予复制权限
grant replication slave on *.* to 'lds_slave'@'%';
# 刷新权限
flush privileges;
```
## 5.在主机中查询master的状态
```
记录File和Position的值
 File          | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+---------------+----------+--------------+------------------+-------------------+
| binlog.000002 |     1345 |              |                  |                   |
+---------------+----------+--------------+------------------+-------------------+
```
# 从服务器配置
## 1.启动从服务器
```
docker run -d -p 3306:3306 -v /home/yuluo/shardingsphere-env/master/conf:/etc/mysql/conf.d -v /home/yuluo/shardingsphere-env/master/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name yuluo-mysql-master mysql:8.0.29
eg:
docker run -d -p 3307:3306 -v F:\db\mysql_slave\conf:/etc/mysql/conf.d -v F:\db\mysql_slave\data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-slave1 mysql:8.0.29
```
## 2.从服务器配置
```
[mysqld]
# 服务器唯一id，每台服务器的id必须不同，如果配置其他从机，注意修改id
server-id=2
# 中继日志名，默认xxxxxxxxxxxx-relay-bin
#relay-log=relay-bin
```
## 3.测试连接
```
#进入容器：env LANG=C.UTF-8 避免容器中显示中文乱码
docker exec -it mysql-slave1 env LANG=C.UTF-8 /bin/bash
#进入容器内的mysql命令行
mysql -uroot -p123456
#修改默认密码校验方式
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
```
## 4.在从机中配置主从关系
```
change master to master_host='192.168.28.23',master_user='lds_slave',master_password='123456',master_port=3306,master_log_file='binlog.000002',master_log_pos=1345;
```
## 5.启动从机的复制功能
```
start slave
# 查看状态(不需要分号)
show slave status\G
slave_io_running

下边两个都是Yes搭建成功
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
```
# 从服务器配置2
## 1.创建并启动从服务器2
```
docker run -d -p 3306:3306 -v /home/yuluo/shardingsphere-env/master/conf:/etc/mysql/conf.d -v /home/yuluo/shardingsphere-env/master/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name yuluo-mysql-master mysql:8.0.29
eg:
docker run -d -p 3308:3306 -v F:\db\mysql_slave2\conf:/etc/mysql/conf.d -v F:\db\mysql_slave2\data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-slave2 mysql:8.0.29
```
## 2.配置文件
```
[mysqld]
# 服务器唯一id，每台服务器的id必须不同，如果配置其他从机，注意修改id
server-id=3
# 中继日志名，默认xxxxxxxxxxxx-relay-bin
#relay-log=relay-bin
```
## 3.配置主从关系
```
change master to master_host='192.168.28.23',master_user='lds_slave',master_password='123456',master_port=3306,master_log_file='binlog.000002',master_log_pos=1345;
```
## 4.启动从机的复制功能
```
start slave
# 查看状态(不需要分号)
show slave status\G
slave_io_running

下边两个都是Yes搭建成功
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
```
## 5.同步测试
```
master中
CREATE DATABASE db_user;

USE db_user;

CREATE TABLE t_user (
 id BIGINT AUTO_INCREMENT,
 uname VARCHAR(30),
 PRIMARY KEY (id)
);

INSERT INTO t_user(uname) VALUES('zhang3');
INSERT INTO t_user(uname) VALUES(@@hostname);
# 在从机中查看
```
# 停止和重置
```
-- 在从机上执行。功能说明：停止I/O 线程和SQL线程的操作。
stop slave; 

-- 在从机上执行。功能说明：用于删除SLAVE数据库的relaylog日志文件，并重新启用新的relaylog文件。
reset slave;

-- 在主机上执行。功能说明：删除所有的binglog日志文件，并将日志索引文件清空，重新开始所有新的日志文件。
-- 用于第一次进行搭建主从库时，进行主库binlog初始化工作；
reset master;
```
# 常见问题错误解决
```
-- 在从机停止slave
stop slave; 

-- 在主机查看mater状态
SHOW MASTER STATUS;
-- 在主机刷新日志
FLUSH LOGS;
-- 再次在主机查看mater状态（会发现File和Position发生了变化）
SHOW MASTER STATUS;
-- 修改从机连接主机的SQL，并重新连接即可

-- 查看server_id 
show variables like 'server_id';

-- 如果为1 查看配置文件是否映射进去

重启容器问题解决
启动docker容器后提示 WARNING: IPv4 forwarding is disabled. Networking will not work.
C:\Users\administrator>mysql -h 192.168.100.201 -P 3306 -u root -p
#修改配置文件：
vim /usr/lib/sysctl.d/00-system.conf
#追加
net.ipv4.ip_forward=1
#接着重启网络
systemctl restart network
```