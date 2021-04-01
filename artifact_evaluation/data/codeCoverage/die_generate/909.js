function foo(x) {
  return x.byteOffset;
}

noInline(foo);

for (var i = 0; i < (0 ** 0 | 42); ++i) {
  var b = new Uint8Array(new ArrayBuffer(42), 0);

  if (foo(b) != 0) {
    throw "error";
  }
}
