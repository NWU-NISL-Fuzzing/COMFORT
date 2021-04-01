Number.isSafeInteger(1);

// This test case originally failed only with --enable-more-deterministic
function f(x) {
  return Math.pow(Math.fround(Math.fround()), ~(x >>> 0));
}

f(-1);
1;

var __es_v0 = new Date();

f(-1);
1;
f(-1);
1;
f(-1);
f(1.3 / 1);
1;
