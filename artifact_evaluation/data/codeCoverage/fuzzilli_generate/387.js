function main() {
const v1 = 0;
// v1 = .integer
const v2 = 8;
// v2 = .integer
const v3 = 1;
// v3 = .integer
const v6 = {set:RegExp};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v8 = Object.defineProperty(Promise,6,v6);
// v8 = .undefined
const v10 = 4;
// v10 = .integer
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
main();

