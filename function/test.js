/**
 * Created by mts on 14-5-16.
 */

var util = require('util');
var log_opt = {
  depth: 2,
  showHidden: true
}

var test_function = false;
var test_factorial = false;
var test_closure = false;
var test_this = false;
var test_scope = true;

if (test_function) {
  require('./function');
}

if (test_factorial) {
  var facts = require('./factorial');

  var fact1 = facts.fact1;
  console.log(fact1(5));
  var other = fact1;
  fact1 = null;  // 外部赋空值，不影响使用。
  console.log(other(5));

  var fact2 = facts.fact2;
  console.log(fact2(5));

  var fact3 = facts.fact3;
  console.log(fact3(5));
}

if (test_closure) {
  var closure = require('./closure');

  var arr1 = closure.Array1();
  arr1.forEach(function(func) {
    console.log(func());
  });

  console.log('###############################');

  var arr2 = closure.Array2();
  var index2 = 0;
  arr2.forEach(function(func) {
    console.log(func(index2++));
  });

  console.log('###############################');

  var arr3 = closure.Array3();
  var index3 = 0;
  arr3.forEach(function(func) {
    console.log(func(index3++));
  });
}

var name = 'global context name';
if (test_this) {
  var that = require('./this');

  that.object1.showNameFunc()();  // TODO: 'undefined' ??? why not 'global context name' ???

  that.object2.showNameFunc()();  // object 2 name

  var obj3 = that.object3;
  var func;
  obj3.showName();  // object 3 name
  (obj3.showName)();  // object 3 name
  (func = obj3.showName)(); // TODO: 'undefined' ??? why not 'global context name' ???
}

if (test_scope) {
  var scope = require('./scope');

  scope.outputNumbers(2);  // 0  1  2  5

  scope.outputNumbers2(2);  // 0  1
}