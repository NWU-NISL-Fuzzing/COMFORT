var s1 = 'xx';

for (var x = 0; x < 10; ++x) {
  new function () {
    var __es_v0 = new Date();

    return s1++;
  }();
  s1 += s1 + s1.padEnd(0);
  gc();
}
