// |jit-test| skip-if: !('oomTest' in this)
var t = {};
oomTest(() => serialize(t));
Object.prototype.valueOf.call(t);
Object.prototype.toString.call(t);
