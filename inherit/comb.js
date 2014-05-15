/**
 * Created by mts on 14-5-15.
 */

// 组合方式实现继承。实际应用中常使用这种方式实现继承。
// 使用原型链的继承方式实现方法的继承。
// 使用借用构造方法的继承方式实现属性的继承。
// Super原型中定义的方法，Sub实例可以使用。
// 可以使用instanceof和isPrototypeOf()判断Super和Sub之间的关系。
// 避免了单纯的使用原型链实现继承的Super实例属性变成Sub的原型属性的问题。
// 存在以下问题：
// 问题1: 需要调用2次Super的构造方法。
exports = module.exports;
exports.Super = Super;
exports.Sub = Sub;

function Super(name) {
  this.colors = ['red', 'green', 'blue'];
  this.name = name;
  this.say = say;
}

function say() {
  console.log('Super say: My name is ', this.name);
}

Super.prototype.dumpCols = function() {
  console.log('Super colors: ', this.colors);
}

function Sub(name, age) {
  Super.call(this, name);
  this.age = age;
}

Sub.prototype = new Super();

Sub.prototype.constructor = Sub;

Sub.prototype.dumpCols2 = function() {
  console.log('Sub dump colors: ', this.colors);
}