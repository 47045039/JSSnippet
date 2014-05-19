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

exports = module.exports = singleton;
exports.singleton = singleton;
