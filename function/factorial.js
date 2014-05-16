/**
 * Created by mts on 14-5-16.
 */

exports = module.exports;
exports.fact1 = factorial1;   // factorial1声明提升，可以直接使用
exports.fact2 = factorial2;   // factorial2声明提升，可以直接使用
//exports.fact3 = factorial3;   // 必须要在函数定义之后才能使用

// 在本文件内部调用时，某些情况下会出问题。如下代码会出问题：
// var func = factorial1;
// factorial1 = null;
// func(5);
function factorial1(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial1(num - 1);
  }
}

// 严格模式下无法工作。
function factorial2(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}

// 严格模式下也可正常工作。
var factorial3 = function f(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};

exports.fact3 = factorial3;   // 必须要在函数定义之后才能使用