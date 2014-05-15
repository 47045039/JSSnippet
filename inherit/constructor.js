/**
 * Created by mts on 14-5-15.
 */

// 借用构造函数实现继承，比较少单独使用。
// 存在以下问题：
// 问题1: Super中的方法如果需要开放给Sub，则该方法必须在构造方法中声明。Super原型中定义的方法，Sub实例不可见。
// 问题2: Sub实例实际上和Super本质上没有什么关系。无法通过instanceof和isPrototypeOf()判断Super和Sub的关系。
exports = module.exports;
exports.Super = Super;
exports.Sub = Sub;

function Super(name) {
  this.colors = ['red', 'green', 'blue'];
  this.name = name;
  this.say = say;
}

Super.prototype.dumpCols = function() {
  console.log('Super colors: ', this.colors);
}

function say() {
  console.log('Super say: My name is ', this.name);
}

function Sub(name, age) {
  Super.call(this, name);
  this.age= age;
}

Sub.prototype.dumpCols2 = function() {
  console.log('Sub dump colors: ', this.colors);
}