function main() {
const v3 = "boolean" / -4294967295;
// v3 = .integer | .float | .bigint
const v4 = "boolean"["boolean"];
// v4 = .unknown
const v5 = "boolean"[v4];
// v5 = .unknown
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v9 = new Set(v8);
// v9 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["forEach", "add", "keys", "entries", "clear", "delete", "values", "has"])
const v11 = {call:Number,defineProperty:v5,has:Number};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty"], withMethods: ["has", "call"])
const v13 = new Proxy(Number,v11);
// v13 = .unknown
const v14 = [13.37];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
try {
    const v17 = gc << 4096n;
    // v17 = .integer | .bigint
} catch(v18) {
}
const v20 = [1337,1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v21 = [v20];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v22 = {e:-4294967295};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v23 = {a:v14,b:Number,c:-4294967295,constructor:v20,length:Number,toString:v21};
// v23 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "toString", "constructor"], withMethods: ["b", "length"])
let v24 = 1337;
const v29 = new Int32Array(4374);
// v29 = .object(ofGroup: Int32Array, withProperties: ["byteLength", "byteOffset", "__proto__", "length", "buffer", "constructor"], withMethods: ["every", "values", "forEach", "slice", "find", "indexOf", "entries", "map", "set", "some", "fill", "subarray", "reduceRight", "join", "lastIndexOf", "reduce", "includes", "copyWithin", "findIndex", "reverse", "keys", "sort", "filter"])
const v30 = v29.buffer;
// v30 = .object()
function v31(v32,v33) {
    const v36 = [1337,"S9JI0qjC29"];
    // v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    v24 = v11;
    const v37 = v36.length;
    // v37 = .integer
    const v39 = new Uint16Array(v36);
    // v39 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "__proto__", "byteLength", "length", "constructor"], withMethods: ["forEach", "fill", "filter", "some", "slice", "reduceRight", "map", "lastIndexOf", "findIndex", "copyWithin", "keys", "find", "indexOf", "every", "set", "sort", "includes", "entries", "reverse", "subarray", "reduce", "join", "values"])
    v39[10] = v37;
    return Uint16Array;
}
const v41 = Promise;
// v41 = .object(ofGroup: PromiseConstructor, withProperties: ["prototype"], withMethods: ["race", "allSettled", "reject", "all", "resolve"]) + .constructor([.function()] => .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"]))
const v42 = Function;
// v42 = .constructor([.string] => .object(ofGroup: Function, withProperties: ["constructor", "arguments", "__proto__", "name", "caller", "prototype", "length"], withMethods: ["call", "bind", "apply"]) + .function([.anything...] => .unknown) + .constructor([.anything...] => .unknown))
for (let v44 = 1; v44 < 1337; v44 = v44 + 1) {
    const v45 = v31(0,v44);
    // v45 = .unknown
}
}
main();

