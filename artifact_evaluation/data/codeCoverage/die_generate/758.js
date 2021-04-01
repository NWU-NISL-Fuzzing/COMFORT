function foo() {
  return new Array();
}

function bar() {
  for (var i = 0; i < 0; ++i) {
    String.prototype.substring.call("constructor", i, i).codePointAt(i);
  }
}

bar();
