function main() {
var v2 = Symbol.iterator;
// v2 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
var v3 = "-9007199254740992"[v2];
// v3 = .unknown
var v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
var v6 = 2;
// v6 = .integer
var v7 = 0;
var v8 = v4 + 1;
// v8 = .primitive
v7 = v8;
}
main();

