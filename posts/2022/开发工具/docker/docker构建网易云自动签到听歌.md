---
title: docker构建网易云自动签到听歌
date: 2024-06-02 15:46:08
---
#
# 下载配置config.json
```bash
curl -fsSL -o config.json https://raw.githubusercontent.com/miloce/NeteaseCloudMusicTasks/main/config.example.json
```

# 获取微信推送消息通知
- 打开这个网站 `https://www.pushplus.plus`  微信扫码登录
- 选择发送消息 -> `一对一消息`
- 复制你的token![image.png](http://doc.lideshan.top/media/202406/2024-06-03_092333_8457180.6694628586002874.png)
# 修改config.json的配置
大概在25行的
username
大概29行的
password
大概33行的
cookie
大概36行的
X-Real-IP
大概59行的pushToken

```json
{
    /* 开源地址: https://github.com/miloce/NeteaseCloudMusicTasks */
    "version": "2.21",
    "sha": "commitId",
    "users": [
        {
            "username": "17337139558",
            "countrycode": "",
            "password": "passwprd",
            "cookie": "",
            "X-Real-IP": "",
            "enable": true
        } 
    ],
    "setting": {
        "push": {
            "serverChan": {
                "module": "serverChan",
                "enable": false,
                "KEY": "",
                "merge": true
            },
            "pushPlus": {
                "module": "pushPlus",
                "enable": true,
                "pushToken": "",
                "template": "markdown",
                "topic": "",
                "merge": true
            },
            "CoolPush": {
                "module": "CoolPush",
                "enable": false,
                "method": "send",
                "Skey": "",
                "merge": true
            },
            "WeCom": {
                "module": "WeCom",
                "enable": false,
                "corpid": "",
                "agentid": "",
                "secret": "",
                "userid": "@all",
                "msgtype": "text",
                "merge": false
            },
            "Telegram": {
                "module": "Telegram",
                "enable": false,
                "server": "",
                "userId": "",
                "botToken": "",
                "merge": true
            },
            "Bark": {
                "module": "Bark",
                "enable": false,
                "Bark_url": "",
                "Bark_key": "",
                "merge": false
            },
            "pushdeer": {
                "module": "pushdeer",
                "enable": false,
                "server": "",
                "pushkey": "",
                "merge": false
            }
        },
        "sign": true,
        "yunbei_task": {
            "162005": {
                "taskName": "发布动态",
                "module": "publishEvent",
                "enable": false,
                "id": [],
                "msg": [
                    "每日分享",
                    "今日分享",
                    "分享歌单"
                ],
                "delete": true
            },
            "216002": {
                "taskName": "访问云音乐商城",
                "module": "visitMall",
                "enable": true
            },
            "200002": {
                "taskName": "云贝推歌",
                "module": "rcmdSong",
                "enable": false,
                "songId": [],
                "yunbeiNum": 10,
                "reason": [
                    "有些美好会迟到，但音乐能带你找到",
                    "希望找到和我一样喜欢这首歌的朋友",
                    "人间好声音，推荐给你听"
                ]
            },
            "162006": {
                "taskName": "发布Mlog",
                "module": "publishMlog",
                "enable": true,
                "songId": [65528],
                "text": [
                    "分享$artist的歌曲: $song",
                    "分享歌曲: $song"
                ],
                "size": 500,
                "delete": true
            },
            "166000": {
                "taskName": "分享歌曲/歌单",
                "module": "share",
                "enable": true
            },
            "656007": {
                "taskName": "浏览会员中心",
                "module": "visitVipCenter",
                "enable": true
            }
        },
        "musician_task": {
            "749006": {
                "taskName": "音乐人中心签到",
                "module": "musicianSignin",
                "enable": true
            },
            "740004": {
                "taskName": "发布动态",
                "module": "publishEvent",
                "enable": true,
                "id": [],
                "msg": [
                    "每日分享",
                    "今日分享",
                    "分享歌单"
                ],
                "delete": true
            },
            "755000": {
                "taskName": "发布主创说",
                "module": "publishComment",
                "enable": false,
                "id": [],
                "msg": [
                    "感谢大家收听"
                ],
                "delete": true
            },
            "732004": {
                "taskName": "回复粉丝评论",
                "module": "replyComment",
                "enable": false,
                "id": [],
                "msg": [
                    "感谢收听"
                ],
                "delete": true
            },
            "755001": {
                "taskName": "回复粉丝私信",
                "module": "sendPrivateMsg",
                "enable": false,
                "id": [],
                "msg": [
                    "你好"
                ]
            },
            "739008": {
                "taskName": "观看课程",
                "module": "watchCollegeLesson",
                "enable": false
            },
            "740005": {
                "taskName": "访问自己的云圈",
                "module": "visitMyCircle",
                "enable": false,
                "circleId": ""
            },
            "744005": {
                "taskName": "发布mlog",
                "module": "publishMlog",
                "enable": false,
                "songId": [],
                "text": [
                    "分享$artist的歌曲: $song",
                    "分享歌曲: $song"
                ],
                "size": 500,
                "delete": true
            }
        },
        "vip_task": {
            "816": {
                "taskName": "创建共享歌单",
                "module": "createSharedPlaylist",
                "enable": true,
                "name": [
                    "木一哦歌单",
                    "我的歌单木一哦"
                ],
                "delete": true                
            }
        },
        "daka": {
            "enable": true,
            "full_stop": true,
            "auto": true,
            "tolerance": 10,
            "song_number": 300,
            "sleep_time": 10,
            "upload_num": 300
        },
        "other": {
            "play_playlists": {
                "enable": false,
                "playlist_ids": [],
                "times": 1
            }
        },
        "follow": true
    }
}
```
# 随机时间执行
```bash
docker run -itd --restart=on-failure \
    -v $(pwd)/config.json:/root/config.json \
    --name netease-cloud-music-tasks \
    enwaiax/netease-cloud-music-tasks:latest
```