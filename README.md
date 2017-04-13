# blog-web

> 个人博客

## 用vue-cli搭建框架

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 引入框架
- ui museui
- css normalize

> 需要全局引入的时候放在main.js 打包，main.js是webpack打包的入口。

# 搭建主页
- 引入stylus
- 搭建主页

```
 <meta name="viewport"
          content="width=device-width,initial-scale=1.0,
        maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```
# 引入Markdown
## marked.js前段展示
```
//html
<div v-html="compiledMarkdown"></div>
//js
 computed: {
      compiledMarkdown () {
        return marked(this.input, {sanitize: true});
      }
    }
```
## node文件读取
```
var fs = require('fs');
var path = require('path');

var apiRoutes = express.Router()

var filePath = path.join(__dirname, "..", 'README.md')
var mdData;
fs.readFile(filePath, {flag: 'r+', encoding: 'utf8'}, function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  mdData = data;
});
apiRoutes.get('/makedown', function (req, res) {
  res.json({
    errNo: 0,
    data: {mdData}
  });
})
```
# 重构首页
- 提取toolbar
- 引入better-scroll

# 列表页加载更多
> 计算当数据的高度，监听BScroll的滚动，当滚动到合适位置加载更多。

# 点击条目
传递整个点击的条目信息

# SPA问题
- 动态绑定router-link
```
<router-link class="title-1" :to="'/article/' + index">百度{{index}}</router-link>
```
- 前进返回
默认的vue-router会自动处理

# 动态路由匹配组件复用问题
当使用路由参数时，例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：
当时当从/user/foo进入user/bar，从新刷新页面可以可以，当时当从user/bar退回/user/foo不能恢复之前的/user/foo
因此现在的解决方法是让foo和bar分别定义一个组件，然后包含一个相同的组件（权宜之计，目前水平不够只能这样）
```
//路由
 routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
//
```
# 文章编辑

# 文章的读写流程

# 文章编辑
类型选择
# 文章详情bug

# 去除第三方UI框架

|名称|z-index|
|---|----|
|toolbar|100|
|content|0|
|slider|101|

# 调整结构
# fix bug
修复markdown左右不滚动
去掉父布局的auto
# 登入弹窗
# OAuth认证
## 表单提交 与 json提交
原始数据
```
{
  phone: 18301247317,
  password: 123456,
  tFloat: 0.1,
  tStr: 'aaa'
}
```
表单提交的数据是
```
phone:18301247317
password:123456
tFloat:0.1
tStr:aaa
```
json提交的数据是
```
{phone: 18301247317, password: 123456, tFloat: 0.1, tStr: "aaa"}
```

## vue-resource开启表单提交
```
当使用vue-resource发送注册的POST请求时，Fiddler捕获到了2次请求，第1次是由浏览器发送的OPTIONS预请求，
第2次才是实际的POST请求。这和使用$.ajax时是不一样的，因为$.ajax会将非GET请求的Content-Type设置为
application/x-www-form-urlencoded，而vue-resource发送POST请求的Content-Type为
application/json;charset=UTF-8（json提交）
```
1全局启用
```
Vue.http.options.emulateJSON = true
```
2局部启用
```
this.$http.post(this.registerUrl, this.registerModel ,{ emulateJSON : true})
    .then( (response) => {
        this.msg = '注册成功！'
    })
```
源码
```
        if (request.emulateJSON) {
            request.body = Url.params(request.body);
            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        } else {
            request.body = JSON.stringify(request.body);
        }
```

## es6 模块语法
### export
```
/**
 * Created by yghysdr on 2017/4/12.
 * 数据的存储与读取
 * ECMAScript6 方式导出
 * import的时候 按需引入 使用那一模块直接引入即可
 */

/**
 * 导出函数 直接使用
 * @param id
 * @param key
 * @param def
 * @returns {*}
 */
export function loadFromSession (id, key, def) {
  let info = window.sessionStorage._blog_info;
  if (!info) {
    return def;
  }
  info = JSON.parse(info)[id];
  if (!info) {
    return def;
  }
  let ret = info[key];
  return ret || def;
}
/**
 * 导出类，使用时需要创建类的实例
 * es6 类中不支持直接创建成员变量，成员变量都是在函数中直接使用（this.成员变量）
 */
export class Storage {
  constructor () {
    this.token = 'user_token';
    this.curentUser = 'user_current';
  }
}
/**
 * 导出对象 直接使用
 */
export let StorageKey = {
  currentUser: 'user_current',
  token: 'user_token',
  phone: 'user_phone'
};

```
### import
```
  import {saveToSession, Storage, StorageKey} from '../../assets/js/storageUtils';
  //导入class需要创建
  let myStorage = new Storage();
  //myStorage.token 可以获取到Storage里面的成员变量token
```
## login跳转
使用编程式路由时，当页面没有Router对象时，创建
```
//创建
  import Router from 'vue-router';
  let router = new Router();
//跳转
  router.push({ path: '/Edit' });
```
