// |jit-test| error: InternalError: too much recursion
b = {};
Array.prototype.slice.call(/\u{1042f}/iu.exec("lazy")).__proto__ = evalcx("lazy");

function g() {
  g(b.toString());
}

g();
