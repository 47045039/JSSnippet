/**
 * Created by mts on 14-5-14.
 */

var test_factory = false;
var test_constructor = false;
var test_prototype = false;
var test_parasitic = false;
var test_durable = true;

if (test_factory) {
  var factory = require('./factory');

  var p1 = factory('person 1', 20);
  p1.say();
  console.log(p1);

  var p2 = factory.createPerson('person 2', 30);
  p2.say();
  console.log(p2);
}

if (test_constructor) {
  var constructor = require('./constructor');

  // constructor无返回值，所以必须要用new关键字
  var p1 = new constructor('person 1', 20);
  p1.say();
  console.log(p1);
  console.log(p1 instanceof constructor);
  console.log(p1.constructor === constructor);

  // constructor无返回值，所以必须要用new关键字
  var p2 = new constructor.Person('person 2', 30);
  p2.say();
  console.log(p2);
  console.log(p2 instanceof constructor.Person);
  console.log(p2.constructor === constructor.Person);
}

function hasPrototypeProperty(object, name){
  return !object.hasOwnProperty(name) && (name in object);
}

if (test_prototype) {
  var prototype = require('./prototype');

  // constructor无返回值，所以必须要用new关键字
  var p1 = new prototype('person 1', 20);
  p1.say();
  console.log(p1);
  console.log(p1.name);
  console.log('p1 has own name: ', p1.hasOwnProperty('name'));
  console.log('p1 has prototype name: ', hasPrototypeProperty(p1, 'name'));
  delete(p1.name);
  console.log('p1 has own name: ', p1.hasOwnProperty('name'));
  console.log('p1 has prototype name: ', hasPrototypeProperty(p1, 'name'));
  console.log(p1.name);

  console.log(p1);
  console.log(p1 instanceof prototype);
  console.log(p1.constructor === prototype);
  console.log(p1.constructor.prototype === prototype.prototype);
  console.log(Object.getPrototypeOf(p1) === prototype.prototype);
  console.log(prototype.prototype.isPrototypeOf(p1));

  // constructor无返回值，所以必须要用new关键字
  var p2 = new prototype.Person('person 2', 30);
  p2.say();
  console.log(p2);
  console.log(p2.name);
  console.log('p2 has own name: ', p2.hasOwnProperty('name'));
  console.log('p2 has prototype name: ', hasPrototypeProperty(p2, 'name'));
  delete(p2.name);
  console.log('p2 has own name: ', p2.hasOwnProperty('name'));
  console.log('p2 has prototype name: ', hasPrototypeProperty(p2, 'name'));
  console.log(p2.name);

  console.log(p2);
  console.log(p2 instanceof prototype.Person);
  console.log(p2.constructor === prototype.Person);
  console.log(p2.constructor.prototype === prototype.Person.prototype);
  console.log(Object.getPrototypeOf(p2) === prototype.Person.prototype);
  console.log(prototype.Person.prototype.isPrototypeOf(p2));
}

if (test_parasitic) {
  var parasitic = require('./parasitic');

  var arr1 = parasitic('red', 'green', 'blue');
//  console.log(arr1);
  console.log(arr1.toSpecialString());
  console.log(arr1 instanceof Array);
  console.log(arr1 instanceof parasitic);
  console.log(arr1.constructor === Array);
  console.log(arr1.constructor.prototype === Array.prototype);

  var arr2 = parasitic.SpecialArray('black', 'white');
//  console.log(arr2);
  console.log(arr2.toSpecialString());
  console.log(arr2 instanceof Array);
  console.log(arr2 instanceof parasitic.SpecialArray);
  console.log(arr2.constructor === Array);
  console.log(arr2.constructor.prototype === Array.prototype);
}

if (test_durable) {
  var durable = require('./durable');

  var p1 = durable('person 1', 20);
  p1.say('person 111111111', 22);
  p1.say2();

  var p2 = durable.Person('person 2', 30);
  p2.say('person 222222222', 33);
  p2.say2();

  console.log(p1.say === p2.say);
  console.log(p1.say2 === p2.say2);
}