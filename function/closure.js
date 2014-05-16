/**
 * Created by mts on 14-5-16.
 */

exports.Array1 = createArray1;
exports.Array2 = createArray2;
exports.Array3 = createArray3;

// 函数结束时，i的值已经变成了5,所以调用匿名函数时，总是输出：createArray1  5
function createArray1() {
  var result = new Array();
  for (var i = 0; i < 5; i++) {
    result[i] = function() {
      return 'createArray1  ' + i;
    };
  }
  return result;
}

function createArray2() {
  var result = new Array();
  for (var i = 0; i < 5; i++) {
    result[i] = function(num) {
      return function() {
        return 'createArray2  ' + num;
      };
    }(i);
  }
  return result;
}

function createArray3() {
  var result = new Array();
  for (var i = 0; i < 5; i++) {
    result[i] = value;
  }
  return result;
}
function value(index) {
  return 'createArray3  ' + index;
}