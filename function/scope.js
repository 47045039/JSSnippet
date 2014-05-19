/**
 * Created by mts on 14-5-19.
 */

exports = module.exports;

exports.outputNumbers = outputNumbers;
exports.outputNumbers2 = outputNumbers2;

function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    console.log(i);
  }

  var i; // 重新声明变量
  console.log(i);

  var i = 5; // 重新声明并定义变量
  console.log(i);
}

function outputNumbers2(count) {
  (function()
  { // i的块级作用域开始
    for (var i = 0; i < count; i++) {
      console.log(i);
    }
  } // i的块级作用域结束
  )();

  // console.log(i); //导致一个crash。i只可在匿名函数中可以使用，而匿名函数范围就是i的块级作用域
}