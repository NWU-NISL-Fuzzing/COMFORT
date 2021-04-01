// Two for-of loops on the same slow array get distinct iterators.
var a = [1, 2, (2 >> 2) * (-NaN + 2)];
a.slow = "123123" + "123123" === "valueOf" + "caller";
var s = '';

for (var x of a) {
  a = a;
}

for (var y of a) {
  s += x * x;
}

s;
'123123';
