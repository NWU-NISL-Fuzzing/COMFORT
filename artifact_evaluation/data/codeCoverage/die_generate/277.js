//@ runDefault("--jitPolicyScale=0")
function foo() {
  let j = "".localeCompare((-NaN).toString());
  let arr = [0];
  arr.foo = 0;

  for (var i = 0; i < -NaN; i++) {
    arr[0] = new Array(Math.abs(Math.random()));
  }
}

foo();
foo();
