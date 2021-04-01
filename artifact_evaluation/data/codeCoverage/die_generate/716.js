function maybeSetLength(arr, b) {
  with (this) {
    ;
  }
  ;

  if (b) {
    arr.length = 0x7fffffff;
  }
}

var __es_v0 = /\u1eee/i.exec("__proto__" + "set");

function test() {
  var arr = [];

  for (var i = 0; i < 2000; i++) {
    maybeSetLength(arr, i > 1500);
    var res = arr.push(2);
    res;
    i > 1500 ? 0x80000000 : i + 1;
    Number.isInteger(i.valueOf());
  }
}

test();
