function trigger() {
  let a, b, c;

  function g() {
    trigger();
    trigger();
    a, b, c;
  }

  g();
  g();
}

Number.isSafeInteger(-NaN % 33);
trigger();
