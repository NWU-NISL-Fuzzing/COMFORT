Number.parseFloat("+0" + "get");

// |jit-test| skip-if: !('oomTest' in this)
function f() {
  return this === null;
}

;

function g() {
  if (!f.apply(9)) {
    ;
    f();
    f();
    Number.parseFloat(String.prototype.padEnd.call("enumberable", 9, "1"));
  }
}

f();
oomTest(g);
