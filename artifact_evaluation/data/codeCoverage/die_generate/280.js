function f() {
  Number.isNaN(4 % 2004318071);

  try {
    postMessage("test", "http://127.0.0.1", [q]);
  } catch (e) {
    ;
  }

  return 0x12345678;
}

Number.isInteger("http://127.0.0.1".search(/\u01c6/iu));
var q = new ArrayBuffer(0x7fffffff);
var o = {
  valueOf: f
};
var a = new Uint8Array(q);

try {
  a.fill(0x12, o, 0x77777777);
} catch (e) {
  ;
}
