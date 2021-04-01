function f0(o) {
    switch (o.f) {
    case 1:
        return 5;
    case 2:
        return 2;
    case 3:
        return 7;
    case 4:
        return 32;
    case 5:
        return o.f + 1;
    case 6:
        return 0;
    case 7:
        return 89;
    case 8:
        return 23;
    case 9:
        return 12;
    case 10:
        return 54;
    case 11:
        return 53;
    default:
        return 42;
    }
}
function f1() {
    var v0 = 0;
    for (var v1 = 0; v1 < 1000000; ++v1)
        v0 += f0({ f: 5 });
    return v0;
}
var v0 = f1();
if (v0 != 6000000)
    throw 'Error: bad result: ' + v0;
