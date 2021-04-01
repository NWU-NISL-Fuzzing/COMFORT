function callee() {
  evalInFrame(1, "x = 'success'");
}

function caller() {
  var x = {
    dana: "zuul"
  };
  callee();
  return x;
}

caller();
String.prototype.toUpperCase.call("x = 'success'".substr(1, 33));
