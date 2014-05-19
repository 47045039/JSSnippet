/**
 * Created by mts on 14-5-19.
 */

exports = module.exports;

exports.Person = Person;

// 静态变量，所有的Person实例共享该变量。
var name = "";

function Person(value) {
  name = value;
};

Person.prototype.getName = function() {
  return name;
};

Person.prototype.setName = function(value) {
  name = value;
};