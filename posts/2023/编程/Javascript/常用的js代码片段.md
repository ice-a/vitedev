---
title: 常用的js代码片段
date: 2022-02-02
tag:
- javascript
- code
category:
- code
---
# 
# 获取选择到的字
``` JavaScript
function getSelectedText() {
	if (window.getSelection) { // This technique is the most likely to be standardized.         
		// getSelection() returns a Selection object, which we do not document.        
		return window.getSelection()
			.toString();
	} else if (document.getSelection) {
		// This is an older, simpler technique that returns a string        
		return document.getSelection();
	} else if (document.selection) {
		// This is the IE-specific technique.         
		// We do not document the IE selection property or TextRange objects.         
		return document.selection.createRange()
			.text;
	}
}
```

# 阻止右键
``` JavaScript
document.body.onselectstart = document.body.oncontextmenu = function() {
	return false;
}
```

# 动态加载
``` JavaScript
//NO.1
function loadScript(url, callback){
    var script = document.createElement ("script")
    script.type = "text/javascript";
    if (script.readyState){ //IE
        script.onreadystatechange = function(){
            if (this.readyState == "loaded" || this.readyState == "complete"){
                this.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

//NO.2
function loadScript(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                var script = document.createElement ("script");
                script.type = "text/javascript";
                script.text = xhr.responseText;
                document.body.appendChild(script);
                callback();
            }
        }
    };
    xhr.send(null);
}
```

# dom加载完执行
``` JavaScript
function domLoad(fn){
    if(document.addEventListener){
        document.addEventListener("DOMContentLoaded", fn, false);
    }else{
        if(window.ActiveXObject){
            document.write("<script id='ie_onload' defer src='javascript:void(0)'><\/script>");
            document.getElementById("ie_onload").onreadystatechange = function(){
                if(this.readyState == "complete"){
                    this.onreadystatechange = null;
                    fn();
                }
            }
        }
        if(/WebKit/i.test(navigator.userAgent)){
            var _timer = setInterval(function(){
                if(/loaded|complete/.test(document.readyState)){
                    clearInterval(_timer);
                    fn();
                }
            }, 10);
        }
    }
}
```

# 加载样式表
``` JavaScript
function addSheet(url){
    var oLink = document.createElement('link'),oHead = document.getElementsByTagName('head')[0];
    oLink.rel = 'stylesheet';
    oLink.type = 'text/css';
    oLink.href = url;
    oHead.appendChild(oLink);
}
```

# 获取css
``` JavaScript
function getStyle(o, attr){
    if(o.currentStyle){
        return o.currentStyle[attr];
    }
    else{
        return getComputedStyle(o,false)[attr];
    }
}
```

# 获取服务器时间
``` JavaScript
function getNowDate(callback){
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'null.txt', true); //null.txt不存在，我们不需要
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 3){ //状态3响应
            callback(xhr.getResponseHeader('Date')); //返回时间，那么可以利用获得的时间做倒计时程序了。
        }
    };
    xhr.send(null);
}
```

# cookie处理
``` JavaScript
function Cookie(name, value, options){
    if(typeof value != 'undefined'){
        options = options || {};
        if(value === null){
            options.expires = -1; //过期
        }
        var expires = '';
        //存在时间选项
        if(options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)){
            var date;
            if(typeof options.expires == 'number'){
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            }else{
                date = options.expires;
            }
            expires = '; expires='+date.toUTCString();
        }
        var path = options.path ? '; path='+options.path : '';
        var domain = options.domain ? '; domain='+options.domain : '';
        var secure = options.secure ? '; secure' : '';
        //写入cookie
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    }else{//读取cookie
        var cookValue = null;
        if(document.cookie && document.cookie != ''){
            var cookie = document.cookie.split(';');
            for(var i = 0, len = cookie.length; i < len; i++){
                var c = cookie[i].replace(/^\s+|\s+$/g, '');
                if(c.substring(0, name.length + 1) == (name + '=')){
                    cookValue = decodeURIComponent(c.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookValue;
    }
}
//设置
Cookie("user", "Jununx");
//获取
Cookie("user");
//删除
Cookie("user", null);
```
