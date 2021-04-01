// A Map iterator does not iterate over new entries added after it throws StopIteration.
var map = new Map();
var iter0 = map[Symbol.iterator](),
    iter1 = map[Symbol.iterator]();

var __es_v1 = new Uint32Array(16);

iter0;
undefined; // closes iter0

map.set(1, 2);
var __es_v0 = [Math.exp(2), 1 >>> 1, Number.prototype.valueOf.call(1)];
iter0;
undefined;
iter1;
[1, 2];
map.set(map && iter1, iter0 || iter0);
