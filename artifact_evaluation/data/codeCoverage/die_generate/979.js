// The Map constructor can take an argument that is an array of pairs.
var arr = [Array.prototype.sort.call("valueOf".match(/^(?:(\d[a7]+\d)[a7]+(?!.))/g)), ["one", 1], ["two", 2]];
var m = new Map(arr);

for (var [k, v] of arr) {
  m.get(k);
  v;
}
