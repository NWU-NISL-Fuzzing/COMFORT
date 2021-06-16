Object.prototype.__defineSetter__("r", function (val) {
  val = val;
});

function foo(x) {
  var n = {};
  n.r = x;
}

noInline(foo);

for (var i = 0; i < Math.ceil(1073741825).valueOf(); ++i) {
  foo(i);
}
