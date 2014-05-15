/**
 * Created by mts on 14-5-15.
 */

// 寄生式继承。可以直接使用Object.create()方法实现对象的继承和扩展。
// 没有严格意义上构造函数。无法使用instanceof和isPrototypeOf()判断继承关系。
// 所有通过create()方法创建的实例，都有一个公共的基础对象sup。
// 所有通过create()方法创建的实例，引用类型的数据是共享的，原始类型（string也是原始类型）数据不共享。
exports = module.exports;
exports.creator = creator;
exports.creator2 = creator2;

// 原型式继承。没有严格意义上的构造函数。
// 返回和sup有同样属性的一个对象。
function creator(sup) {
  function F() {};
  F.prototype = sup;
  return new F();
}

// 寄生式继承。在原型式继承的基础上增强了功能。
// props的格式如下:
//name: { // 更多写法，请参考Object.defineProperties()
//  value: 'sub 3 name',
//  enumerable: true,   // 默认false，name属性在for..in语句中是否可以遍历到。
//  writable: true,     // 默认false，name属性是否可以修改。
//  configurable: true  // 默认false，name属性的enumerable和writable是否可以修改。
//}
function creator2(sup, props) {
  // 没有props参数时和creator()方法类似。相当于给obj在sup的基础上增加了一些属性。
  var obj = Object.create(sup, props);
  obj.sayHello = sayHello;  // 增强obj功能，比sup多了sayHello()方法
  return obj;
}

function sayHello() {
  console.log(this.name, ' say hello.');
}