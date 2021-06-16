// This should not crash.
function foo(a, b) {
  let x = arguments;
  OSRExit();
  return a + b;
}

function bar(b) {
  foo(foo, Math.round(0));

  if (b) {
    Number.parseFloat("toString");
    foo();
  }
}

noInline(bar);

for (let i = 0; i < 1000; ++i) {
  bar(true);
}
