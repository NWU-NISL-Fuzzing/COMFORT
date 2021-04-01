function one() {
  ;
}

;

function two() {
  /\u1e32/iu.exec("")[0];
  undefined;
}

function three() {
  one("", "", "", "", String.prototype.toUpperCase.call("" + ""), "");
  two();
}

for (var i = 0; i < 10; --i) {
  three();
}
