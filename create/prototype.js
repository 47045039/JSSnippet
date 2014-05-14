/**
 * Created by mts on 14-5-14.
 */

// 原型模式。
// 属性不共享，方法共享。
exports = module.exports = Person;
exports.Person = Person;

function Person(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.name = 'person prototype name';

Person.prototype.say = function() {
  console.log('-------------', this.name + ' say: My age is ' + this.age);
};
