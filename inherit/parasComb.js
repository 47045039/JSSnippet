/**
 * Created by mts on 14-5-16.
 */

// 寄生组合方式实现继承。最理想的继承方式。
// 只调用了一次Super的构造函数,并且因此避免了在Sub.prototype上面创建不必要的、多余的属性。
// 与此同时,原型链还能保持不变;因此,还能够正常使用instanceof和isPrototypeOf()判断继承关系。
exports = module.exports;
exports.Super = Super;
exports.Sub = Sub;

function Super(name) {
  this.name = name;
  this.colors = ['red', 'green'];
}

Super.prototype.superSay = function() {
  console.log('Super superSay: My name is ', this.name);
}

Super.prototype.superShow = function() {
  console.log('Super superShow: My colors are ', this.colors);
}

function Sub(name, age) {
  Super.call(this, name);  // 调用一次Super的构造方法
  this.age = age;
}

function creator(sup) {
  function F() {};
  F.prototype = sup;
  return new F(); // 返回值是F的一个实例。该实例从sup中得到了Super的原型属性与方法。
}

function inherit(subType, superType) {
  var proto = creator(superType.prototype);  // proto得到了Super的原型属性与方法。
  //var proto = Object.create(superType.prototype);
  proto.constructor = subType;  // 给proto添加constructor属性。
  subType.prototype = proto;    // 设置subType的原型为proto。
}

inherit(Sub, Super);

Sub.prototype.subSay = function() {
  console.log('Sub subSay: My name is ', this.name);
}

Sub.prototype.subSayAge = function() {
  console.log('Sub subSayAge: My age is ', this.age);
}