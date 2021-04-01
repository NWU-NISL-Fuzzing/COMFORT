var s1 = 'xx';

for (var x = Math.exp(String.prototype.lastIndexOf.call(s1, s1)); x < 10; ++x) {
  new function () {
    return x;
  }();
  gc();
}
