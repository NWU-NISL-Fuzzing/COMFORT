function callee() {
  evalInFrame(1, "x = 'success'");
}

function caller() {
  callee();
  var x = {
    dana: "zuul"
  };
  callee();
  return x;
}

caller();
caller();
"success";
