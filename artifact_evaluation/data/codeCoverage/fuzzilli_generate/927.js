function main() {
const v1 = 7;
// v1 = .integer
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v5 = Object;
const v6 = -1504637233;
// v6 = .integer
const v8 = {apply:parseInt,call:parseInt,construct:parseInt,defineProperty:parseInt,deleteProperty:parseInt,getPrototypeOf:parseInt,isExtensible:parseInt,preventExtensions:parseInt};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "isExtensible", "apply", "preventExtensions", "call", "defineProperty", "getPrototypeOf", "deleteProperty"])
const v10 = new Proxy(parseInt,v8);
// v10 = .unknown
const v11 = 13.37;
// v11 = .float
const v12 = 2;
// v12 = .integer
v10.valueOf = v5;
const v14 = 7;
// v14 = .integer
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
const v18 = 13.37;
// v18 = .float
const v19 = 2;
// v19 = .integer
const v20 = 7;
// v20 = .integer
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
const v24 = Object();
// v24 = .object()
const v26 = 9;
// v26 = .integer
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
}
main();

