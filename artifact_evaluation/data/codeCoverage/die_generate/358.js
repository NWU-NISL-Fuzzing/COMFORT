function unreachable() {
  throw new Error("NG");
}

function* gen() {
  unreachable();
}

var g = gen();
var error = new Error("OK");
var thrown = null;

try {
  g.throw(error);
} catch (e) {
  error = e;
}

if (thrown !== error) {
  unreachable();
}
