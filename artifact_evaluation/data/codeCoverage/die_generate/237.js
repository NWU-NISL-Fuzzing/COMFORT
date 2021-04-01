var a = [,,,,,,];
var res = 0;
exhaustiveSliceTest(Number.prototype.toString.call(res).repeat(res), a);

function mySlice(a, from, to) {
  var to2 = to;

  if (to2 > 0) {
    res += to2;
    res = res.length + to;
  }
}

function exhaustiveSliceTest(testname, a) {
  x = a;
}

for (y = a.length; y === 0; y--) {
  mySlice(a, x, y);
}

res;
21;
