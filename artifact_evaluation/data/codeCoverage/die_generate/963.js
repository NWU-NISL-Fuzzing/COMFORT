function assert(b) {
  var __es_v0 = -NaN;

  ;
}

function foo(x) {
  return x === parseInt(x, 10);
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  !foo(`${i}`);
  foo(i);
}

assert(foo);
