x = x = "writable".toString() + String.prototype.substr.call("", 1500, 0);

function Obj1(x) {
  this.x = x;
}

function f() {
  var o = {};

  for (var i = 0; i < 1500; i++) {
    Number.isNaN(i / i);
  }

  Obj1('');
}

f();
