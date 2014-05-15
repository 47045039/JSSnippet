/**
 * Created by mts on 14-5-15.
 */

// 原型链实现继承。
// 因为以下问题，实践中比较少用到。
// 问题1: Super实例中的superParam变成了所有Sub实例中共享的原型属性。
//        即sub1修改了superParam，则sub2的superParam也一些被改动了。
// 问题2: 创建Sub实例时，无法向Super的构造方法中传递参数，并且不影响其它的Sub实例。
//        原因就是问题1中提到的Super的实例属性变成了Sub的原型共享属性。
exports.Super = Super;
exports.Sub = Sub;

function Super() {
  this.superParam = 'super param';
  this.colors = ['red', 'green'];
}

Super.prototype.getSuperParam = function() {
  return this.superParam;
}

Super.prototype.setSuperParam = function(param) {
  this.superParam = param;
}

Super.prototype.superSay = function() {
  console.log('Super superSay: My param is ===>> ', this.getSuperParam());
}

function Sub() {
  this.subParam = 'sub param';
}

Sub.prototype = new Super();

//Sub.prototype.getSuperParam = function() {
//  return 'super param in Sub type';
//}

Sub.prototype.getSubParam = function() {
  return this.subParam;
}

//Sub.prototype.superSay = function() {
//  console.log('Sub superSay: My param is ===>> ', this.getSuperParam());
//}

Sub.prototype.subSay = function() {
  console.log('Sub subSay: My param is ===>> ', this.getSubParam());
}

