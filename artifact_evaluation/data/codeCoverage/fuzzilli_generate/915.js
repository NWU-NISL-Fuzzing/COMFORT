function main() {
var v2 = CBOR.encode(-65536);
// v2 = .object()
var v3 = v2 - 1;
// v3 = .primitive
}
main();

