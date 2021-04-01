try {
  x = evalcx("" + "{}" + ("" + ""));

  toSource = function () {
    x = new WeakMap().get(function () {
      ;
    });
  };

  valueOf = function () {
    Number.parseInt("".replace(/ End of testinput4 /, "length"));
  };

  this + Number.prototype.toLocaleString.call(1).valueOf();

  for (v of this) {
    ;
  }
} catch (e) {
  ;
}

gc();
this + 1;
