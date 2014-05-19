/**
 * Created by mts on 14-5-19.
 */

var test_privilege = true;

if (test_privilege) {
  var privilege = require('./privilege');

  var obj1 = new privilege.Object1();
  console.log(obj1.publicMethod1());   // 10
  console.log(obj1.publicMethod2('prop'));  // prop = false

  var person1 = new privilege.Person('Person 1 name');
  var person2 = new privilege.Person('Person 2 name');
  console.log(person1.getName());  // Person 1 name
  console.log(person2.getName());  // Person 2 name

  person1.setName('Person 1 new name');
  person2.setName('Person 2 new name');
  console.log(person1.getName());  // Person 1 new name
  console.log(person2.getName());  // Person 2 new name
}
