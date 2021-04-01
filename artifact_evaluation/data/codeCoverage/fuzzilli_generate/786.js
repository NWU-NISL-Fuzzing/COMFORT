function main() {
function v1(v2) {
}
let v3 = v1;
const v4 = {apply:v1,defineProperty:v3,deleteProperty:v3,get:v3,getOwnPropertyDescriptor:v1,getPrototypeOf:v1,isExtensible:v3,ownKeys:v3,preventExtensions:v1,setPrototypeOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "isExtensible", "getPrototypeOf", "get", "apply", "getOwnPropertyDescriptor", "deleteProperty", "defineProperty", "ownKeys", "setPrototypeOf"])
const v6 = new Proxy(v3,v4);
// v6 = .unknown
v6.e = "536870912";
function v8(v9,v10) {
    const v12 = v8(Object,Function);
    // v12 = .unknown
}
const v13 = 0;
// v13 = .integer
const v14 = 0;
// v14 = .integer
const v15 = 1;
// v15 = .integer
}
main();

