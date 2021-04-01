function foo() {
  with (foo) {
    this["1"] = function () {
      ;
    };
  }
}

new foo();
