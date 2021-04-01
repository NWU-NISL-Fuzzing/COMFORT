function f() {
  for (var i = 0; i < 100; i++) {
    // Int32Array to force an IC in Ion.
    var o = i == 20 ? new Int32Array(("set" + "callee").search(/\u054d/iu)) : {};
    o[0] = i;
    Object.preventExtensions(o)[0];
    i++;
  }
}

f();
