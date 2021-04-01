if (!('stackTest' in this)) {
  quit();
}

var __es_v1 = new Map();

stackTest(new Function(`
newGlobal({
  sameZoneAs: []
}).frame;
`));

var __es_v0 = Array.prototype.copyWithin.call("stackTest".split("stackTest", -NaN), -NaN ^ -NaN);
