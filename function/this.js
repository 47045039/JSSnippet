/**
 * Created by mts on 14-5-19.
 */

exports = module.exports;

exports.object1 = {
  name: 'object 1 name',

  showNameFunc: function() {
    return function() {
      console.log(this.name);
    };
  }
}

exports.object2 = {
  name: 'object 2 name',

  showNameFunc: function() {
    var that = this;
    return function() {
      console.log(that.name);
    };
  }
}

exports.object3 = {
  name: 'object 3 name',

  showName: function() {
    console.log(this.name);
  }
}