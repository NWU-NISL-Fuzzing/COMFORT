function Foo(a, b) {
  b = {};
  this.b = b;
}

;
var a = /[\P{^L}]/m.exec(String.prototype.padEnd.call("caller", 0, "\u3056"));

for (var i = 0; i < 50; i++) {
  a.push(new Foo(i, i + 1));
}

i = 0;
String.prototype.split.call("enumberable", "value", i).copyWithin(i)[i].c = i;
