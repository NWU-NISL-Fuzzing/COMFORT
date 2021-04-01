var v0 = new Proxy({}, {});
var v1 = new Proxy([], {});
var v2 = new Proxy(v1, {});
assert.sameValue(JSON.stringify(v0), '{}');
assert.sameValue((!v2).x(v1), '[]', 'proxy for an array');
assert.sameValue(JSON.stringify([[v1]]), '[[[]]]', 'proxy for an array (nested)');
assert.sameValue(JSON.stringify([[v2]]), '[[[]]]', 'proxy for a proxy for an array (nested)');