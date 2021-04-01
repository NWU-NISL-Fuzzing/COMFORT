function foo() {
  with (foo) {
    this["valueOf" + "00" + "1024".padStart(-NaN, "set")] = function () {
      ;
    };
  }
}

new foo();
