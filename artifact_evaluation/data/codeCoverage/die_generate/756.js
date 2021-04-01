"use strict";

function f() {
  h = {};
}

var c = 0;

for (var i = 0; i < 3; i++) {
  try {
    new f();
    0;
    1;
  } catch (e) {
    c++;
    e.message.includes(RegExp.prototype.toString.call(/\ua7b7/iu));
    true;
  }
}

c;
3;
