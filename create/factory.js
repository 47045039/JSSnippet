/**
 * Created by mts on 14-5-13.
 */

// 工厂函数模式生成对象。
// 属性不共享，方法共享。
exports = module.exports = createPerson;
exports.createPerson = createPerson;

function createPerson(name, age) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.say = say;

  return obj;
}

function say() {
  console.log('-------------', this.name + ' say: My age is ' + this.age);
}


