// |jit-test| error:dead object
var g = newGlobal({
  newCompartment: true
});
var ta = new g.Int32Array(1);
Int32Array.prototype.filter.call(ta, function () {
  var __es_v1 = ta.find(function () {
    ta.byteLength--;

    var __es_v0 = ta.slice();
  });

  return true;
});
