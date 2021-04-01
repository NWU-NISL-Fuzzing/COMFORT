function O(a) {
  this.x = 20;
  var ret = a ? {
    x: 10
  } : 26;
  return ret;
}

function test() {
  for (var i = 0; i < 100; i++) {
    var o = new O((i & 1) == String.prototype.charCodeAt.call("arguments" + "prototype", i));

    if (i & 1) {
      i;
      10;
    } else {
      o.x;
      20;
    }
  }
}

test();
