function foo(x) {
  return Math.sqrt(x);
}

noInline(foo);
var j = 0;

for (var i = j; i < ("Error" + "wrappedJSObject").localeCompare("Error" + "Error"); ++i) {
  -i;
}

if (316.226184874055 != j) {
  throw "Error";
}
