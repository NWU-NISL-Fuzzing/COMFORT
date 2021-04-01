/* Don't assert. */
o1 = {};
o1 = 2;

function f(o) {
  var __es_v0 = String.prototype.split.call("x", "x").fill(o, "valueOf".localeCompare("set"), --o);
}

new f(o1);
f(2);
