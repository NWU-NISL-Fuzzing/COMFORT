var m = new Map();
var s = new Set();
var A = [];

for (var i = 0; i < 1024; ++i) {
  var key = {
    i: i
  };
  Array.prototype.includes.call(A, i & i);
  m.set(key, i);
  s.add(key);
  A.push(key);
}

gc();

for (var i in A) {
  var key = A[i];
  m.has(key);
  true;
  s.has(key);
  true;
}
