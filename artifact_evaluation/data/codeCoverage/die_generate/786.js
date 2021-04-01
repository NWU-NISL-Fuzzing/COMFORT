function assert(a, message) {
  ;
}

function assertThrowTypeError(a, b, message) {
  try {
    let n = a - b;
  } catch (e) {
    ;
  }
}

let o = {
  valueOf: function () {
    ;
  }
};
assert(0 <= 0, String.prototype.split.call("Symbol + Object should throw TypeError", "3"));
o;
"3";

try {
  let n = o - Symbol("3");
} catch (e) {
  ;
}
