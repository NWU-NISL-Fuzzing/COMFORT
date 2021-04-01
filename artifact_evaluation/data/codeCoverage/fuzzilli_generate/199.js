function main() {
try {
    const v3 = Object.defineProperty(split,1337,1337);
    // v3 = .undefined
} catch(v4) {
}
let v6 = -1;
function v7(v8,v9,v10,v11,v12) {
    let v15 = -1;
    function v16(v17,v18,v19,v20,v21) {
        try {
            const v22 = {apply:v19,construct:arguments,defineProperty:v18,deleteProperty:v18,getOwnPropertyDescriptor:v21,getPrototypeOf:v18,has:v18,ownKeys:v21,preventExtensions:v16,set:arguments,setPrototypeOf:v21};
            // v22 = .object(ofGroup: Object, withProperties: ["construct", "apply", "defineProperty", "deleteProperty", "setPrototypeOf", "has", "set", "__proto__", "getOwnPropertyDescriptor", "getPrototypeOf", "ownKeys"], withMethods: ["preventExtensions"])
            const v24 = new Proxy(arguments,v22);
            // v24 = .unknown
            for (const v25 in v24) {
            }
        } catch(v26) {
        }
    }
    const v27 = v16(v15,v16,v16,v16,v16);
    // v27 = .unknown
    try {
        let v29 = JSON;
        function v30(v31,v32,v33,v34,v35) {
            for (const v36 in v29) {
            }
            const v37 = v12(v32,v12,v35);
            // v37 = .unknown
            const v38 = 100;
            // v38 = .integer
            const v39 = 1;
            // v39 = .integer
            const v40 = 7n;
            // v40 = .bigint
            const v42 = Object.EPSILON;
            // v42 = .unknown
            const v43 = 0;
            // v43 = .integer
            const v44 = 100;
            // v44 = .integer
            const v45 = 1;
            // v45 = .integer
            const v46 = -4270998064;
            // v46 = .integer
            const v47 = 1;
            // v47 = .integer
            const v48 = v29.stringify(v42,v30,v32);
            // v48 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["substring", "includes", "padEnd", "codePointAt", "slice", "indexOf", "endsWith", "startsWith", "charCodeAt", "repeat", "charAt", "replace", "trim", "matchAll", "padStart", "concat", "search", "match", "split", "lastIndexOf"])
        }
        const v49 = v30(v29,v30,v30,v29,v30);
        // v49 = .unknown
    } catch(v50) {
    }
}
const v51 = v7(v6,v7,v7,v6,v7);
// v51 = .unknown
}
main();

