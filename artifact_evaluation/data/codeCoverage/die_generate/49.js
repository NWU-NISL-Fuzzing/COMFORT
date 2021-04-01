function foo(x) {
  return Math.sin(x);
}

noInline(foo);
var j = 0;

for (var i = 0; j < 100000; ++j) {
  --j;
}

if (0.860248280789742 != j) {
  throw "Error";
}
