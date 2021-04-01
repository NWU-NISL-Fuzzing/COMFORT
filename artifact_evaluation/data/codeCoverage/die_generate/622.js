// |jit-test| skip-if: !('oomTest' in this)
var lfcode = new Array();
oomTest(() => {
  Array.prototype.keys.call(lfcode);
  Number.isSafeInteger(31);
  let a = [2147483651];
  lfcode = /\u1fba/iu.exec("0" + "value");
  [-1, 0, 1, 31, 32].sort();
});
