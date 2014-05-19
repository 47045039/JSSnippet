/**
 * Created by mts on 14-5-19.
 */

exports = module.exports;

exports.assignHandler = assignHandler;
exports.assignHandler2 = assignHandler2;

// 以下代码创建了一个作为 element 元素事件处理程序的闭包,而这个闭包则又创建了一个循环引用。由于
// 匿名函数保存了一个对 assignHandler()的活动对象的引用,因此就会导致无法减少 element 的引用
// 数。只要匿名函数存在,element 的引用数至少也是 1,因此它所占用的内存就永远不会被回收。
function assignHandler() {
  var element = document.getElementById("someElement");
  element.onclick = function() {
    alert(element.id);
  };
}


// 通过把 element.id 的一个副本保存在一个变量中,并且在闭包中引用该变量消除了循环引用。
// 但是闭包会引用包含函数的整个活动对象,而其中包含着 element。即使闭包不直接引用 element,
// 包含函数的活动对象中也仍然会保存一个引用。因此,有必要把 element 变量设置为 null。
function assignHandler2() {
  var element = document.getElementById("someElement");
  var id = element.id;
  element.onclick = function() {
    alert(id);
  };
  element = null;
}