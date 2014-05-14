/**
 * Created by mts on 14-5-14.
 */

// 构造函数模式生成对象。
// 属性不共享，而方法共享。
exports = module.exports = Person;
exports.Person = Person;

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = say;
}

function say() {
  console.log('-------------', this.name + ' say: My age is ' + this.age);
}