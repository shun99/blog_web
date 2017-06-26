/**
 * Created by yghysdr on 2017/4/12.
 * api 接口
 */

// let baseUrl = 'http://www.yghysdr.cn/api/';
let baseUrl = 'http://127.0.0.1:3000/api/';
let login = baseUrl + 'login';
let article = baseUrl + 'article';
let list = baseUrl + 'list?type=';
let avatar = baseUrl + 'avatar';
let articlePic = baseUrl + 'article_pic';
let sort = baseUrl + 'sort';
let archive = baseUrl + 'archive';

module.exports = {
  login: login,
  article_post: article,
  article_put: article,
  article_get: article + '?id=',
  article_pic_post: articlePic,
  home: list + '0',
  android: list + '1',
  node: list + '2',
  web: list + '3',
  life: list + '100',
  avatar_upload: avatar,
  sort: sort,
  archive: archive
};
