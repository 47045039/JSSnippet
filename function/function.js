/**
 * Created by mts on 14-5-16.
 */


sayHi1();  // 可以正常使用。
function sayHi1() {
  console.log("Hi 111111111111111111!");
}


//sayHi2();  // 错误:函数还不存在，会crash
var sayHi2 = function() {
  console.log("Hi 222222222222222222!");
};


// 不要这样做!
if (true) {
  function sayHi3() {  // sayHi3函数被定义
    console.log("Hi 333333333333333333!");
  }
} else {
  function sayHi3() {  // sayHi3函数被重新定义
    console.log("Yo 333333333333333333!");
  }
}
sayHi3();  // Yo 333333333333333333!


// 可以这样做
var sayHi4;
if (true) {
  sayHi4 = function() {
    console.log("Hi 44444444444444444!");
  };
} else {
  sayHi4 = function() {
    console.log("Yo 44444444444444444!");
  };
}
sayHi4();


// 闭包函数，compare可以调用其外部的createComparison函数的propertyName参数。
function createComparison(propertyName) {
  return function compare(object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}
var compare = createComparison("name");
console.log(compare({ name: "Nicholas" }, { name: "Greg" }));