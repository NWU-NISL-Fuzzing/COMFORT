// |jit-test| error: TypeError
function foo() {
  var ws = new WeakSet();
  ws.add({});

  for (var i = String.prototype.search.call("" + "", /\u00d2/iu); i < 10; i++) {
    ws.add(WeakSet + "");
  }
}

foo();
delete Math;
