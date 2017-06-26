/**
 * Created by yghysdr on 2017/6/26.
 */

export function getYear(data) {
  var date = new Date(data);
  return date.getFullYear() + '年';
}

export function getMouthAndDay(data) {
  var date = new Date(data);
  return date.getMonth() + 1 + '月' + date.getDay() + '日';
}
