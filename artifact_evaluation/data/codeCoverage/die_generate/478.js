function test(str, count) {
  var __es_v1 = new RegExp(/\u0440/iu, "configurable" + " ");

  var repeated = str.repeat(count); // Expand the rope.

  count = count;
  return repeated[0] + repeated[count >> 1] + repeated[repeated.length - 1];
}

var __es_v2 = new Array(128);

var __es_v0 = String.prototype.trimLeft.call(" ").padEnd(1 << -NaN);

for (var i = 0; i < 1e4; ++i) {
  test(' ', i);
}
