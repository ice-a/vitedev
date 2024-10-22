---
title: vue构建的项目docker部署
date: 2024-08-08
category:
  - 部署
---
# 
# 创建一个vue项目
```bash
npm init vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install
npm run build
```
# 编写Dockerfile文件
```bash
# 使用官方nginx镜像作为基础镜像 
FROM nginx:latest 
# 将dist目录中的文件复制到nginx的默认站点目录 
COPY dist/ /usr/share/nginx/html/ # 可选：如果你的Vue应用使用了history模式的路由，你可能需要一个配置来重定向所有的请求到index.html 
COPY nginx.conf /etc/nginx/conf.d/default.conf
```
# 构建镜像
```bash
docker build -t vue_demo .
```
# 运行镜像
```bash
docker run -d -p 80:80 vue_demo
```