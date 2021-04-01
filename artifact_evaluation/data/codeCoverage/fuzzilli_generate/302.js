function main() {
var v1 = 1337;
var v4 = 9;
// v4 = .integer
var v5 = 0;
var v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
var v7 = v1 + CBOR.encode;
// v7 = .primitive
}
main();

