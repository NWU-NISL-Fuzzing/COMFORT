function Foo(a, b) {
  b = {};
  this.b = b;
}

;

var __es_v0 = String.prototype.codePointAt.call("writable" + "valueOf", 0);

var a = [];

for (var i = 0; i < 50; i++) {
  a.push(new Foo(i, i + 1));
}

i = 0;
a[i].c = i;
