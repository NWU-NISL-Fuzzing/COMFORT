function main() {
with ("function") {
    const v3 = split;
    // v3 = .unknown
}
const v6 = {b:4677756};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v7 = {b:v6};
// v7 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v9 = [13.37,v7,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v13 = [1337,v9,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v14 = ["search",v13,"search",v13,1337,v13,-1476136709];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
for (let v18 = -1024; v18 < 1337; v18 = v18 + 1) {
    function v19(v20,v21) {
        const v22 = v18 in v14;
        // v22 = .boolean
    }
    const v24 = new Promise(v19);
    // v24 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
const v25 = [13.37,13.37];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v27 = [1337,1337,1337];
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v28 = [4294967297,v25,v27,Function,Function];
// v28 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v29 = {a:v28,c:13.37,length:1337,toString:1337,valueOf:Function};
// v29 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "a", "length", "c", "__proto__"])
const v30 = {__proto__:v27,a:v29,b:v27,c:Function,constructor:4294967297,d:v29,valueOf:v25};
// v30 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "b", "valueOf", "d", "c"])
let v31 = 4294967297;
const v36 = [13.37];
// v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v38 = [1337,1337,1337,1337,1337];
// v38 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v39 = [isNaN,1337,isNaN,isNaN,v38,v36,13.37,"replace"];
// v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v40 = {b:"replace",length:v36,valueOf:"replace"};
// v40 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
const v41 = v39 && isNaN;
// v41 = .boolean
const v42 = isNaN;
// v42 = .function([.anything] => .boolean)
const v43 = v40[6];
// v43 = .unknown
const v46 = new Uint32Array(0);
// v46 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "__proto__", "length"], withMethods: ["keys", "lastIndexOf", "some", "includes", "reduceRight", "find", "fill", "map", "reverse", "values", "entries", "forEach", "reduce", "filter", "join", "copyWithin", "sort", "subarray", "set", "slice", "every", "indexOf", "findIndex"])
const v47 = {a:127,b:"replace",c:v38,e:v40,length:127,toString:13.37,valueOf:v40};
// v47 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__", "a", "e", "b", "length", "toString"])
let v48 = isNaN;
const v49 = -1024;
// v49 = .integer
const v50 = 1337;
// v50 = .integer
const v52 = [];
// v52 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
function v53(v54,v55) {
    function v57(v58,v59) {
    }
    const v64 = [13.37,13.37,Int16Array,13.37];
    // v64 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    function v65(v66,v67) {
        const v69 = "512".padStart("512",v65);
        // v69 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
    }
    for (let v70 = 1; v70 <= 100; v70 = v70 + 1) {
        const v71 = v57(-2677088782,v70);
        // v71 = .unknown
    }
    const v72 = v54.toLocaleString();
    // v72 = .unknown
    const v74 = Infinity.toLocaleString();
    // v74 = .unknown
    const v76 = [v74];
    // v76 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    JSON[v76] = v76;
    const v79 = [v52];
    // v79 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v80 = {constructor:2.220446049250313e-16,d:"ZmRsGzLg8m",toString:v79};
    // v80 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "d", "constructor"])
    const v85 = [v72,-2510862370,v80,JSON,v54];
    // v85 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v86 = JSON.stringify(v85,-1,13.37);
    // v86 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
    return v86;
}
const v87 = v53(v53,v53);
// v87 = .unknown
const v88 = RegExp(v87);
// v88 = .object(ofGroup: RegExp, withProperties: ["ignoreCase", "global", "dotAll", "__proto__", "unicode", "source", "multiline", "flags", "sticky"], withMethods: ["test", "compile", "exec"]) + .regexp
const v89 = 1;
// v89 = .integer
function v90(v91,v92) {
    let v95 = 13.37;
    function v96(v97,v98) {
        function v99(v100,v101) {
            const v103 = (13.37).toLocaleString();
            // v103 = .unknown
            const v105 = [268435456];
            // v105 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
            const v106 = v105.toLocaleString();
            // v106 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
            let v107 = v103;
            const v108 = v106.indexOf(v107);
            // v108 = .integer
            return v101;
        }
        const v109 = v99(v99,v95);
        // v109 = .unknown
        let v114 = 0;
        const v115 = v114 + 1;
        // v115 = .primitive
        const v116 = 1;
        // v116 = .integer
        const v117 = 0;
        // v117 = .integer
        const v118 = 100;
        // v118 = .integer
        function v119(v120) {
            const v125 = new Uint32Array(46077);
            // v125 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "__proto__", "length"], withMethods: ["keys", "lastIndexOf", "some", "includes", "reduceRight", "find", "fill", "map", "reverse", "values", "entries", "forEach", "reduce", "filter", "join", "copyWithin", "sort", "subarray", "set", "slice", "every", "indexOf", "findIndex"])
            const v126 = new Uint32Array(0);
            // v126 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "__proto__", "length"], withMethods: ["keys", "lastIndexOf", "some", "includes", "reduceRight", "find", "fill", "map", "reverse", "values", "entries", "forEach", "reduce", "filter", "join", "copyWithin", "sort", "subarray", "set", "slice", "every", "indexOf", "findIndex"])
            "0".length = v91;
            function v127(v128,v129) {
                v120[5] = 0;
                v125[6] = v126;
                v126.toString = v128;
                return "0";
            }
            for (let v131 = v126; v131 < 100; v131 = v131 + "2147483648") {
                const v132 = v127(v127,v127);
                // v132 = .unknown
                const v133 = v126[v132];
                // v133 = .unknown
            }
            return v125;
        }
        const v134 = 1;
        // v134 = .integer
        const v136 = [13.37];
        // v136 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v138 = [1337,13.37,"0",1024];
        // v138 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v140 = [3539299422,3539299422,3539299422,3539299422];
        // v140 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v142 = v98(v88);
        // v142 = .unknown
        const v143 = new Float32Array(v140);
        // v143 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "constructor", "buffer", "byteLength", "length", "byteOffset"], withMethods: ["sort", "fill", "lastIndexOf", "findIndex", "entries", "copyWithin", "reverse", "forEach", "filter", "includes", "map", "set", "keys", "every", "subarray", "reduceRight", "join", "some", "values", "find", "reduce", "indexOf", "slice"])
        function v144(v145,v146) {
            function v147(v148,v149) {
                const v150 = 0;
                // v150 = .integer
                const v151 = 100;
                // v151 = .integer
                const v153 = 0;
                // v153 = .integer
                const v154 = 100;
                // v154 = .integer
                const v156 = !1337;
                // v156 = .boolean
                const v157 = {call:v149,construct:v145,defineProperty:v99,deleteProperty:v48,get:v149,getOwnPropertyDescriptor:v148,getPrototypeOf:v148,has:isNaN,isExtensible:v48,ownKeys:v96,preventExtensions:RegExp,set:v145,setPrototypeOf:v148};
                // v157 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "get", "call", "setPrototypeOf", "has", "getPrototypeOf", "isExtensible", "deleteProperty", "set", "construct", "getOwnPropertyDescriptor", "ownKeys", "defineProperty"])
                const v159 = new Proxy(-1024,v157);
                // v159 = .unknown
                const v160 = v143[1];
                // v160 = .unknown
                const v161 = 1;
                // v161 = .integer
                const v162 = new Float32Array(v136);
                // v162 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "constructor", "buffer", "byteLength", "length", "byteOffset"], withMethods: ["sort", "fill", "lastIndexOf", "findIndex", "entries", "copyWithin", "reverse", "forEach", "filter", "includes", "map", "set", "keys", "every", "subarray", "reduceRight", "join", "some", "values", "find", "reduce", "indexOf", "slice"])
                const v164 = [v147,-1024];
                // v164 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
                const v165 = v162.includes;
                // v165 = .unknown
                const v166 = Reflect.apply(v165,v160,v164);
                // v166 = .unknown
                return v145;
            }
            const v168 = new Promise(v147);
            // v168 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
            return v36;
        }
        const v169 = v144(v144,v144);
        // v169 = .unknown
        return 13.37;
    }
    const v170 = v96(v96,Function);
    // v170 = .unknown
    return Function;
}
const v172 = new Promise(v90);
// v172 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
const v173 = -1024;
// v173 = .integer
const v174 = 1337;
// v174 = .integer
const v175 = 1;
// v175 = .integer
}
main();

