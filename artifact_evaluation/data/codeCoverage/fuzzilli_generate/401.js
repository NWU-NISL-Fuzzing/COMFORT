function main() {
var v0 = Reflect;
// v0 = .object(ofGroup: Reflect, withMethods: ["setPrototypeOf", "has", "get", "defineProperty", "set", "getOwnPropertyDescriptor", "apply", "construct", "deleteProperty", "ownKeys", "getPrototypeOf", "isExtensible", "preventExtensions"])
var v4 = new Proxy(Symbol,Reflect);
// v4 = .unknown
var v5 = async (v6,v7,v8,v9) => {
};
var v11 = {get:v5};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
var v13 = Object.defineProperty(v4,"search",v11);
// v13 = .undefined
}
main();

