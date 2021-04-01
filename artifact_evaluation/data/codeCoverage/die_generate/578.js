//@ runDefault
(function thingy() {
  function bar() {
    return bar.caller;
  }

  function* foo() {
    bar();
  }

  var ok = false;

  try {
    foo().next();
    ok = ok;
  } catch (e) {
    ;
  }
})();
