import { link } from "fs";
import { text } from "stream/consumers";

// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "爱喝水的木子",
    // 站点描述
    description: "Hello World",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "https://lideshan.cn",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "leemuzi",
      cover: "/images/logo/logo.webp",
      email: "leebigshan@gmail.com",
      link: "https://lideshan.cn",
    },
  },
  // 备案信息
  icp: "豫ICP备2021025932号-1",
  // 建站日期
  since: "2021-09-13",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      [
        'script',
        { defer: '',src: 'https://umami.lideshan.top/script.js','data-website-id':"3f7ba7f3-4099-4c3d-a9ac-7cd8b65bcdbc" }
      ],
      //Google Analytics
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-PFX76MXT59' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PFX76MXT59');`
      ],
      
      //Google AdSense
      [
        "script",
        {
          "data-ad-client": "ca-pub-8097273255284826",
          async: '',
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        },
      ],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://lideshan.cn/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文库",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
        { text: "全部分类", link: "/pages/categories", icon: "folder" },
        { text: "全部标签", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "专栏",
      items: [
        { text: "技术分享", link: "/pages/categories/技术分享", icon: "technical" },
        { text: "我的项目", link: "/pages/project", icon: "code" },
        { text: "效率工具", link: "/pages/tools", icon: "tools" },
      ],
    },
    {
      text: "友链",
      items: [
        { text: "友链鱼塘", link: "/pages/friends", icon: "fish" },
        { text: "友情链接", link: "/pages/link", icon: "people" },
      ],
    },
    {
      text: "我的",
      items: [
        { text: "畅所欲言", link: "/pages/message", icon: "chat" },
        { text: "致谢名单", link: "/pages/thanks", icon: "reward" },
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "主站",
          url: "/",
        },
        {
          icon: "https://avatars.githubusercontent.com/u/50564847?s=400&u=b6de40623f7e76a73b26ca01fa6cdf8bd162363e&v=4",
          name: "top站",
          url: "https://lideshan.top/",
        },
        {
          icon: "/images/logo/zhihu.png",
          name: "知乎",
          url: "https://www.zhihu.com/people/love_water_blue"
        },
        {
          icon: "/images/logo/juejin.png",
          name: "掘金",
          url: "https://juejin.cn/user/712139267643543"
        },
        {
          icon: "/images/logo/bokeyuan.png",
          name: "博客园",
          url: "https://www.cnblogs.com/ldsice"
        },
        {
          icon: "/images/logo/csdn.png",
          name: "CSDN",
          url: "https://blog.csdn.net/Linux_rm_rf_"
        },
        {
          icon: "/images/logo/bili.png",
          name: "哔哩哔哩",
          url: "https://space.bilibili.com/309278307"
        }
      ],
    },
    {
      name: "服务",
      list: [
        {
          icon: "/images/logo/cn.svg",
          name: "起始页",
          url: "https://lideshan.cn/",
        },
        {
          icon: "/images/logo/hot.svg",
          name: "今日热榜",
          url: "https://hot.imsyy.top/",
        },
        {
          icon: "/images/logo/count.svg",
          name: "站点监测",
          url: "https://umami.lideshan.top/",
        },
      ],
    },
    {
      name: "项目",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "Ice-a",
          url: "https://github.com/ice-a",
        },
        {
          icon: "/images/logo/ip.svg",
          name: "Ip-check",
          url: "https://ip.lideshan.top/",
        },
        {
          icon: "/images/logo/tools.svg",
          name: "It-tools",
          url: "https://tools.lideshan.top/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "Dev-备忘录",
          url: "https://dev.lideshan.top/",
        },
        {
          icon: "/images/logo/alist.svg",
          name: "Alist云盘",
          url: "http://pan.lideshan.top/",
        },
        {
          icon: "/images/logo/linux.svg",
          name: "Linux命令查询",
          url: "https://bash.lideshan.top/",
        },
      ],
    },
    {
      name: "稀奇古怪的玩意",
      list: [
        {
          icon: '/images/logo/avatar.svg',
          name: '疯狂的头像',
          url: "https://avatar.hlds.fun/"
        },
        {
          icon: '/images/logo/nan5.svg',
          name: '修仙模拟器',
          url: "https://remake.lideshan.top/public/index.html/"
        },
        {
          icon: "/images/logo/eat.svg",
          name: '吃什么',
          url: 'https://eat.lideshan.top/'
        }
      ]
    },
  ],
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "mailto:1943158197@qq.com",
      },
      {
        icon: "github",
        link: "https://www.github.com/ice-a/",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/309278307",
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=1943158197",
      }
    ],
    // sitemap
    sitemap: [
      {
        text: "博客",
        items: [
          { text: "近期文章", link: "/" },
          { text: "全部分类", link: "/pages/categories" },
          { text: "全部标签", link: "/pages/tags" },
          { text: "文章归档", link: "/pages/archives", newTab: true },
          { text: "关于",link:"/pages/about",newTab: true},
        ],
      },
      {
        text: "AFF",
        items: [
          { text: "AI工具", link: "https://ai.lideshan.top/", newTab: true },
          { text: "流量卡平台1", link: "https://www.hemorn.cn/index?k=bzBzYWFuSDkvYXM9", newTab: true },
          { text: "流量卡平台2", link: "https://172.lot-ml.com/ProductEn/Index/00de96ec16cfec53", newTab: true },
          { text: "节点01", link: "https://1s.bigmeok.me/user#/register?code=ZTrIUOBr", newTab: true },
          { text: "节点02", link: "https://1s.bigmeok.me/user#/register?code=ZTrIUOBr", newTab: true },
        ],
      },
      // {
      //   text: "页面",
      //   items: [
      //     { text: "畅所欲言", link: "/pages/message" },
      //     { text: "关于本站", link: "/pages/about" },
      //     { text: "隐私政策", link: "/pages/privacy" },
      //     { text: "版权协议", link: "/pages/cc" },
      //   ],
      // },
      {
        text: "稀奇古怪的玩意",
        items:[
          {text:"吃什么",link:"https://eat.lideshan.top/",newTab:true},
          {text:"临时",link:"https://leemuzi.us.kg/",newTab:true},
          {text:"遮罩头像",link:"http://avatar.lideshan.cn/",newTab:true},
          {text:"疯狂的头像",link:"https://avatar.hlds.fun/",newTab:true},
          {text:"人生模拟器",link:"https://remake.lideshan.top/public/index.html/",newTab:true},
        ]
      },
      {
        text: "服务",
        items: [
          { text: "ai绘画", link: "https://ai.hlds.fun/", newTab: true },
          { text: "umami统计", link: "https://umami.lideshan.top/", newTab: true },
          { text: "rss", link: "https://lideshan.cn/rss.xml", newTab: true },
          { text: "api疯狂星期四", link: "https://api.hlds.fun/", newTab: true },
          { text: "图床", link: "https://img.lideshan.top/", newTab: true },
          // {
          //   text: "反馈投诉",
          //   link: "https://eqnxweimkr5.feishu.cn/share/base/form/shrcnCXCPmxCKKJYI3RKUfefJre",
          //   newTab: true,
          // },
        ],
      },
      {
        text: "工具类Ⅰ",
        items: [
          { text: "搜索", link: "https://s.lideshan.top/",newTab: true},
          { text: "CTF", link: "https://ctf.lideshan.cn/",newTab: true},
          { text: "简历生成", link: "https://me.lideshan.top/",newTab: true},
          { text: "图片格式转换", link: "https://img.lideshan.cn/",newTab: true},
          { text: "docker加速", link: "https://docker.hlds.fun/",newTab: true},
        ]
      },
      {
        text: "工具类Ⅱ",
        items: [
          { text: "ip-check", link: "https://ip.lideshan.top/",newTab: true},
          { text: "it-tools", link: "https://tools.lideshan.top/",newTab: true},
          { text: "开发备忘录", link: "https://dev.lideshan.top/",newTab: true},
          { text: "linux命令", link: "https://bash.lideshan.top/",newTab: true},
          { text: "Alist", link: "http://pan.lideshan.top/",newTab: true},
        ]
      },
      {
        text: "其他站点",
        items: [
          { text: "top", link: "https://lideshan.top/",newTab: true},
          { text: "hlds", link: "https://hlds.fun/",newTab: true},
          { text: "leemuzi uk", link: "https://leemuzi.uk/",newTab: true},
          { text: "leemuzi uskg", link: "https://leemuzi.us.kg/",newTab: true},
          { text: "lovewater uskg", link: "https://lovewater.us.kg/",newTab: true},
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: false,
    // 评论系统选择
    type: "artalk",
    // 评论系统配置
    artalk: {
      site: "",
      server: "",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "<h3>记录一些<strong>东西<br></strong><h3><h2><span>爱喝水的木子</span><h2>",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "春节",
        date: "2025-01-29",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: true,
    // url
    url: "https://m.leemuzi.uk/api",
    // id
    id: 12731020721,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: "",
  },
  // 打赏
  rewardData: {
    enable: true,
    // 微信二维码
    wechat: "https://img.lideshan.top/i/2024/07/12/6690eb97d97fd.jpg",
    // 支付宝二维码
    alipay: "https://img.lideshan.top/i/2024/07/12/6690ebb390be9.jpg",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "3FXGYXpMMLt9Pqb7",
  },
};
