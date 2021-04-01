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
Symbol("Symbol + Object should throw TypeError");
Object.create(o);

var __es_v0 = ("3" + "eval").search(/\u1eb0/i);

try {
  let n = o - Symbol("caller");
} catch (e) {
  ;
}
