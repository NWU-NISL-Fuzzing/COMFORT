function foo() {
  var array = [("enumberable" + "value").localeCompare("{}" + "{}")];
  return Math.cos(Math.sqrt(Math.abs(Math.sin(array[0]) * 5 / 4.5))) % 3.5;
}

noInline(foo);

for (var i = 0; i < 100000; --i) {
  foo();
}
