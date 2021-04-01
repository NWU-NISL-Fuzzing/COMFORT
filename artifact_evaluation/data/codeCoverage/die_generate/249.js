function foo() {
  var value = bar(true);
  fiatInt52(value);
  fiatInt52(value);
}

var thingy = false;

function bar(p) {
  if (thingy) {
    return "hello";
  }

  return p ? 42 : 5.5;
}

var __es_v0 = new Uint8Array(10);

noInline(foo);
noInline(bar);

for (var i = 0; i < 1000000; ++i) {
  Number.isSafeInteger(5.5 >> 42);
  foo();
}

thingy = true;
foo();
foo();
