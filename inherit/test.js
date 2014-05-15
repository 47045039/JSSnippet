/**
 * Created by mts on 14-5-15.
 */

var util = require('util');
var log_opt = {
  depth: 2,
  showHidden: true
}

var test_prototype = false;
var test_constructor = false;
var test_comb = false;
var test_parasitic = false;
var test_parasComb = true;

if (test_prototype) {
  var proto = require('./prototype');

  var sup = new proto.Super();
  sup.superSay();

  console.log(proto.Super.name);      // Super
  console.log(sup.constructor.name);  // Super
  console.log(proto.Super.prototype.constructor.name);  // Super

  //  console.log(util.inspect(proto.Super, log_opt));
  //  console.log(util.inspect(proto.Super.prototype, log_opt));

  var sub = new proto.Sub();
  sub.superSay();
  sub.subSay();

  var sub2 = new proto.Sub();
  sub2.superSay();
  sub2.subSay();

  // 如果直接调用sub.setSuperParam()相当于是给sub新增加了一个实例属性，而不是改变Super中的实例属性。
  proto.Sub.prototype.setSuperParam('sub change the super param');

  sub.superSay();
  sub2.superSay();

  // sub.colors和sub2.colors指向同一个Super实例的实例属性。
  console.log(sub.colors);
  console.log(sub2.colors);
  sub.colors.push('blue');
  console.log(sub.colors);
  console.log(sub2.colors);

  console.log(proto.Sub.name);        // Sub

  // sub.prototype指向一个Super实例，即sub的构造方法指向Super方法，所以sub的构造方法名字是Super。
  // 所以以下2个输出都是Super
  console.log(sub.constructor.name);  // Super
  console.log(proto.Sub.prototype.constructor.name);  // Super()

  //  console.log(util.inspect(proto.Sub, log_opt));
  //  console.log(util.inspect(proto.Sub.prototype, log_opt));
}

if (test_constructor) {
  var constructor = require('./constructor');

  var sup = new constructor.Super('super 1');
  sup.say();
  sup.dumpCols();

  var sub = new constructor.Sub('sub 1', 111);
  var sub2 = new constructor.Sub('sub 2', 222);
  console.log(sub.colors);
  console.log(sub2.colors);
  sub.colors.push('yellow');
  console.log(sub.colors);
  console.log(sub2.colors);

  sub.say();
  sub2.say();

  // NOTE： Super中定义的原型方法，在Sub中不可见。
  //  sub.dumpCols();
  //  sub2.dumpCols();
  sub.dumpCols2();
  sub2.dumpCols2();

  console.log(sub.say === sub2.say);  // true

  console.log(sub instanceof constructor.Sub);  // true
  console.log(constructor.Sub.prototype.isPrototypeOf(sub));  // true

  // 无法通过instanceof和isPrototypeOf()判断出Super和Sub之间的关系
  console.log(sub instanceof constructor.Super);  // false
  console.log(constructor.Super.prototype.isPrototypeOf(sub)); // false
}

if (test_comb) {
  var comb = require('./comb');

  var sup = new comb.Super('super 1');
  sup.say();
  sup.dumpCols();

  var sub = new comb.Sub('sub 1', 111);
  var sub2 = new comb.Sub('sub 2', 222);
  console.log(sub.colors);
  console.log(sub2.colors);
  sub.colors.push('yellow');
  console.log(sub.colors);
  console.log(sub2.colors);

  sub.say();
  sub2.say();

  // NOTE： Super中定义的原型方法，在Sub中可见。
  sub.dumpCols();
  sub2.dumpCols();

  sub.dumpCols2();
  sub2.dumpCols2();

  console.log(sub.say === sub2.say);  // true

  console.log(sub instanceof comb.Sub);  // true
  console.log(comb.Sub.prototype.isPrototypeOf(sub));  // true

  // 可以通过instanceof和isPrototypeOf()判断出Super和Sub之间的关系
  console.log(sub instanceof comb.Super);  // true
  console.log(comb.Super.prototype.isPrototypeOf(sub)); // true
}

if (test_parasitic) {
  var creator = require('./parasitic').creator;

  var say = function() {
    console.log('Super say: My name is ', this.name);
  };
  var say2 = function() {
    console.log('Sub say: My name is ', this.name);
  };
  var sup = {
    name: 'super name',
    colors: ['red', 'green'],
    say: say
  }

  var sub = creator(sup);
  console.log(sub.name);  // super name
  console.log(sub.colors);// [ 'red', 'green' ]
  sub.say();

  var sub2 = creator(sup);
  console.log(sub.name === sub2.name);  // true
  sub2.name = 'sub 2 name';
  // sub和sub2的原始类型对象不共享。
  console.log(sub.name);  // super name
  console.log(sub2.name); // sub 2 name
  console.log(sub.name === sub2.name);  // false(原始类型，直接比较值。不是共享数据，所以不同)

  console.log(sub.colors === sub2.colors);  // true
  sub2.colors.push('blue');
  // sub和sub2的引用类型对象是共享的。
  console.log(sub.colors);  // [ 'red', 'green', 'blue' ]
  console.log(sub2.colors); // [ 'red', 'green', 'blue' ]
  console.log(sub.colors === sub2.colors);  // true(引用类型，直接比较指针地址。共享数据，所以相同)

  console.log(sub.say === sub2.say);  // true
  sub2.say = say2;
  // sub和sub2的方法不共享。
  sub.say();  // Super say: My name is  super name
  sub2.say(); // Sub say: My name is  sub 2 name
  console.log(sub.say === sub2.say);  // false(方法是共享数据，sub2直接修改了say指针，所以不同)

  console.log('######################################################');
  var creator2 = require('./parasitic').creator2;
  var sub3 = creator2(sup, {
    name: {               // 用法需要参考Object.defineProperties()
      value: 'sub 3 name',
      enumerable: true,   // 默认false，name属性在for..in语句中是否可以遍历到。
      writable: true,     // 默认false，name属性是否可以修改。
      configurable: true  // 默认false，name属性的enumerable和writable是否可以修改。
    }
  });

  sub3.say();
  sub3.sayHello();
  console.log(sub3.name);
  console.log(sub3.colors); // [ 'red', 'green', 'blue' ]
  console.log(sub3); // { name: 'sub 3 name', sayHello: [Function: sayHello] }
}

if (test_parasComb) {
  var comb = require('./parasComb');

  var sup = new comb.Super('super 1 name');
  sup.superSay();  // Super superSay: My name is  super 1 name
  console.log(sup); // { name: 'super 1 name', colors: [ 'red', 'green' ] }

  var sub = new comb.Sub('sub 1 name', 20);
  console.log(sub); // { name: 'sub 1 name', colors: [ 'red', 'green' ], age: 20 }
  sub.superSay(); // Super superSay: My name is  sub 1 name
  sub.superShow();// Super superShow: My colors are  [ 'red', 'green' ]
  sub.subSay();   // Sub subSay: My name is  sub 1 name
  sub.subSayAge();// Sub subSayAge: My age is  20

  var sub2 = new comb.Sub('sub 2 name', 30);
  console.log(sub2);  // { name: 'sub 2 name', colors: [ 'red', 'green' ], age: 30 }
  sub2.name = 'sub 2 new name';
  console.log(sub2);  // { name: 'sub 2 new name', colors: [ 'red', 'green' ], age: 30 }
  console.log(sub);   // { name: 'sub 1 name', colors: [ 'red', 'green' ], age: 20 }

  console.log('#######################################################');
  console.log(sub instanceof comb.Sub);     // true
  console.log(sub instanceof comb.Super);   // true
  console.log(comb.Sub.prototype.isPrototypeOf(sub));   // true
  console.log(comb.Super.prototype.isPrototypeOf(sub)); // true
}