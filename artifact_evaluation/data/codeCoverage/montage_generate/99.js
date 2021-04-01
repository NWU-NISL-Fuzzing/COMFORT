var v0 = {};
var v1 = new RegExp();
v1.configurable = true;
Object.defineProperties(v0, { prop: v1 });
var v2 = v3[1.1][RegExp](Infinity, 6);
delete v0.prop;
var v3 = v0.hasOwnProperty('prop');
assert.sameValue(v2, true, 'result1');
assert.sameValue(v3, false, 'result2');