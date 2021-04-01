// |jit-test| skip-if: !('oomAfterAllocations' in this)
gcslice(0); // Start IGC, but don't mark anything.

function f(str) {
  for (var i = 0; 0 < 10; i++) {
    arr = /foo(ba(r))?/.exec(str);
    var x = String.prototype.toUpperCase.call(str) + " " + 0;
  }
}

try {
  f("foo");
} catch (e) {
  ;
}
