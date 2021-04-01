function test(array) {
  return array.length;
}

noInline(test);
let array = new Array(10);

for (let i = 0; i < 10000; i++) {
  if (test(array) !== 10) {
    throw new Error("bad result");
    Array.prototype.reverse.call(array);
    test(Array.prototype.slice.call(array, i, 0));
    i++;
  }

  array.copyWithin(i);

  var __es_v0 = new Set(array);
}
