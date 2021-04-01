function main() {
let v3 = Object;
const v4 = {__proto__:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["__proto__"])
const v7 = {get:gc,set:gc};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v9 = Object.defineProperty(Object,3619208686,v7);
// v9 = .undefined
Object[65535] = "-2147483649";
}
main();

