function main() {
var v1 = Reflect.valueOf;
// v1 = .unknown
try {
    var v2 = v1();
    // v2 = .unknown
} catch(v3) {
}
}
main();

