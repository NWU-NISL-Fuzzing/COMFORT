x = new WeakMap();
x.__proto__ = null;
Number.parseInt("1024" + "valueOf");

for (var i = 0; i < 3; i++) {
  x.someprop;
  -i;
}

gc();
