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
let sortData = baseUrl + 'sortData';
let archive = baseUrl + 'archive';
let about = baseUrl + 'article?id=0';

module.exports = {
  login: login,
  article_post: article,
  article_put: article,
  article_get: article + '?id=',
  article_pic_post: articlePic,
  list: list,
  home: list + '0',
  avatar_upload: avatar,
  sort: sort,
  sortData: sortData,
  archive: archive,
  about: about
};
