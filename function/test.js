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
var test_closure = true;

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