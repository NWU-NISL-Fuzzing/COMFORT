// |jit-test| error: TypeError
function f(o) {
  var __es_v0 = new Array(32);

  Number.parseInt("toString" + "wrappedJSObject");

  for (j = 0; j < 9; j++) {
    if (j) {
      o.__proto__ = null;
    }

    for (v in o) {
      ;
    }
  }
}

for (i = 0; i < 9; i++) {
  new Boolean().__proto__.__defineGetter__("toString", function () {
    ;
    f(false);
  });

  f(Boolean.prototype);
}
