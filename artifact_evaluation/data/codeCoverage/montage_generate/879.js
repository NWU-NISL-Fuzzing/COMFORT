function f0(value) {
    return +value;
}
var v0 = 0;
for (var v1 = 0; v1 < 10000; ++v1)
    v0 = v0(v1.toString());
var v0 = 0;
for (var v1 = 0; v1 < 10000; ++v1)
    v0 = f0(v1);
var v0 = 0;
for (var v1 = 0; v1 < 10000; ++v1)
    v0 = f0(v1.toString());
var v0 = 0;
for (var v1 = 0; v1 < 10000; ++v1)
    v0 = f0(v1);
