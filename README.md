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
