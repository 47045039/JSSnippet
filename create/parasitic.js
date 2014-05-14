/**
 * Created by mts on 14-5-14.
 */

// 寄生构造函数模式生成对象。
// 返回的实际对象是一个Array实例。该实例比一般的Array对象多了一个toSpecialString方法。
exports = module.exports = SpecialArray;
exports.SpecialArray = SpecialArray;

function SpecialArray() {
  var array = new Array();
  array.push.apply(array, arguments);
  array.toSpecialString = toSpecialString;
  return array;
}

function toSpecialString() {
  return this.join('|');
}
