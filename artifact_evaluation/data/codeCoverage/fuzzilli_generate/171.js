function main() {
let v1 = 0;
const v2 = v1 + 1;
// v2 = .primitive
function v3(v4,v5) {
    const v8 = {set:gc};
    // v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v10 = Object.defineProperty(arguments,v2,v8);
    // v10 = .undefined
}
const v11 = v3(v3,v3);
// v11 = .unknown
}
main();

