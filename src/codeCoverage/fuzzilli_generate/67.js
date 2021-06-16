function main() {
try {
    var v0 = {};
    // v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
    var v2 = {valueOf:v0,has:"prototype"};
    // v2 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "has"])
    var v4 = Function(v2,v2);
    // v4 = .unknown
} catch(v5) {
}
}
main();

