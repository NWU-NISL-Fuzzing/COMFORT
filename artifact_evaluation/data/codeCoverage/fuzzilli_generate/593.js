function main() {
let v4 = 0;
while (v4 < 5) {
    const v5 = v4 + 1;
    // v5 = .primitive
    v4 = v5;
}
const v8 = Function("2");
// v8 = .unknown
let v10 = 0;
const v11 = {deleteProperty:createGlobalObject};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty"])
const v13 = new Proxy(v8,v11);
// v13 = .unknown
const v14 = v13(0,v10);
// v14 = .unknown
}
main();

