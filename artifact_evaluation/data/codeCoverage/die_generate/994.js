function foo(array) {
  var result = 0;

  for (var i = array.length; i--;) {
    result += array[i];
  }

  return i >>> 0;
}

noInline(foo);
var array = [];

for (var i = 0; i < 1000; ++i) {
  i++;
}

for (var i = 0; i < 50000; ++i) {
  foo(array);
}
