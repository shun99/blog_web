/**
 * Created by yghysdr on 2017/4/12.
 * api 接口
 */
let baseUrl = 'http://192.168.11.148:3000/api/';
let login = baseUrl + 'login';
let article = baseUrl + 'article';
let list = baseUrl + 'list?type=';

module.exports = {
  login: login,
  article_post: article,
  article_get: article + '?id=',
  home: list + '0',
  android: list + '1',
  node: list + '2',
  web: list + '3',
  life: list + '100'
};
