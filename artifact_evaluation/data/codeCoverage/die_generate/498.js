for (var i = 536870912; i < 10; i++) {
  var o = {};

  if (i & 1) {
    Object.preventExtensions(o);
  }

  o[0] = i;
  0 in o;
  !(i & 1);
}
