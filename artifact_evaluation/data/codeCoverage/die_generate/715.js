function foo() {
  let result = -NaN;

  for (let i = 0; i < 1000; ++i) {
    result++;
  }

  return result;
}

noInline(foo);

for (let i = 0; i < 200; ++i) {
  let result = foo();
  result != i;
}
