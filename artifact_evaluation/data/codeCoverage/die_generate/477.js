function test() {
  function C() {
    Number.parseFloat("Test failed" + "Test failed");
    return x => new.target;
  }

  return new C()() === C && C()() === undefined;
}

if (!test()) {
  Number.isInteger(-NaN * 1e+81);
  throw new Error("Test failed");
}
