/**
 * Created by mts on 14-5-19.
 */

exports = module.exports;

exports.Object1 = Object1;
exports.Person = Person;

// 在创建 Object 的实例后,除了使用 publicMethod这一个途径外,没有任何办法可以直接
// 访问 privateVariable 和 privateFunction()。
function Object1() {
  // 私有变量
  var privateVariable = 10;
  var prop = false;

  // 私有函数
  function privateFunction(name) {
    return name + ' = ' + prop;
  }

  // 特权方法
  this.publicMethod1 = function() {
    return privateVariable++;
  };

  // 特权方法
  this.publicMethod2 = function(name) {
    return privateFunction(name);
  }
}

// 在 Person 构造函数外部,没有任何办法直接访问 name。
// 但是，多个Person实例无法共享getName和setName方法。
function Person(name) {
  this.getName = function() {
    return name;
  };

  this.setName = function(value) {
    name = value;
  };
}
