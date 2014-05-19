/**
 * Created by mts on 14-5-19.
 */


// 单实例
var singleton = (function() {
  // 私有变量和私有函数
  var privateVariable = 10;

  function privateFunction() {
    return privateVariable++;
  };

  // 公有方法和属性
  return {
    publicProperty: 'singleton public property',
    publicMethod: function() {
      return privateFunction();
    }
  };
})();

function CustomType() {}

CustomType.prototype.show = function() {
  console.log('I am a instance of CustomType.');
}

var singleton2 = function() {
  // 私有变量和私有函数
  var privateVariable = 10;

  function privateFunction() {
    return --privateVariable;
  }

  // 创建对象
  var object = new CustomType();

  //添加特权/公有属性和方法
  object.publicProperty = 'singleton 2 public property';
  object.publicMethod = function() {
    return privateFunction();
  };

  //返回这个对象
  return object;
}();

exports = module.exports = singleton;
exports.singleton = singleton;
exports.singleton2 = singleton2;
