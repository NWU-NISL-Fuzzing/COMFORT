var g1 = newGlobal();
var g2 = newGlobal({
  sameZoneAs: g1
});

function f() {
  var o = Object.create(null);

  for (var p in o) {
    ;
  }

  ;
}

g1.eval(f.toSource());
g2.eval(f.toSource());

for (var i = 0; i < 10; i++) {
  g1.eval("f()");
  g2.eval("f()");
}

var __es_v0 = Number.prototype.toString.call(10);
