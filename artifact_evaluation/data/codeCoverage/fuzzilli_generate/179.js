function main() {
const v1 = -4096;
// v1 = .integer
const v2 = 100;
// v2 = .integer
const v3 = 5;
// v3 = .integer
const v4 = 100;
// v4 = .integer
const v5 = 1;
// v5 = .integer
const v7 = 4;
// v7 = .integer
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
function v12(v13,v14) {
    const v16 = {__proto__:Boolean,a:v13,d:v14,toString:2413062697n};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "a", "toString"], withMethods: ["__proto__"])
    const v17 = 2413062697n ^ 2413062697n;
    // v17 = .integer | .bigint
    const v19 = 1337;
    // v19 = .integer
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
}
for (let v24 = 1; v24 < 100; v24 = v24 + 1) {
    const v25 = v12(0,v24);
    // v25 = .unknown
}
}
main();

