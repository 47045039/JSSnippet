/**
 * Created by mts on 14-5-14.
 */

// 稳妥对象：没有公共属性，不使用this指针。在某些安全要求高的场景使用。限制较多。
// Person方法返回的对象就是稳妥对象。它没有任何公共属性，也不使用this指针。
// say方法所有的Person对象共享，但是调用时很不方便，必须外部传递参数。
// say2方法不需要传递任何参数。但是各个Person对象不能共享say2方法，多消耗了内存。
exports = module.exports = Person;
exports.Person = Person;

function Person(name, age) {
  var p = new Object();

  p.say = say;

  p.say2 = function() {
    console.log('-------------', name + ' say 2: My age is ' + age);
  }

  return p;
}

function say(name, age) {
  console.log('-------------', name + ' say: My age is ' + age);
}