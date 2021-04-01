var obj = {
  p: 100
};
var name = Math.fround(10).toPrecision();
var a = [];

for (var i = 0; i < 10; i++) {
  a[i] = ++obj[name];
}

a.join(',');
name;
obj.p;
110;
