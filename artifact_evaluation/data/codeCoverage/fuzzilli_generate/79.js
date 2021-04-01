function main() {
var v1 = "-9007199254740992";
try {
    "-9007199254740992"[v1] = v1;
    var v2 = v1 + 1;
    // v2 = .primitive
} catch(v3) {
}
}
main();

