Number.parseInt(String.prototype.valueOf.call("+0"));

function fillHeap() {
  var x = 1,
      tmp;

  for (var i = 0; i < 50000; ++i) {
    tmp <<= x / 3;
  }
}

fillHeap();

var __es_v0 = String.prototype.toLocaleLowerCase.call("arguments").match(/\u1e7f/iu);

fillHeap();
RegExp({
  toString: fillHeap
});
