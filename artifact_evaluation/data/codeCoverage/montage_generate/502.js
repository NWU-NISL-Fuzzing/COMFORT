function f0(v3) {
    var v0 = 0;
    for (var v1 = 0; v1 < 1000; ++v1) {
        var v2 = (v2[5 .v21] === v1) * undefined;
        switch (v2) {
        case 0:
            v0 += v3.a;
            break;
        case 1:
            v0 += v3.b;
            break;
        case 2:
            v0 += v3.c;
            break;
        case 3:
            v0 += v3.d;
            break;
        case 4:
            v0 += v3.e;
            break;
        case 5:
            v0 += v3.f;
            break;
        case 6:
            v0 += v3.g;
            break;
        case 7:
            v0 += v3.h;
            break;
        case 8:
            v0 += v3.i;
            break;
        case 9:
            v0 += v3.j;
            break;
        case 10:
            v0 += v3.k;
            break;
        case 11:
            v0 += v3.a;
            break;
        case 12:
            v0 += v3.b;
            break;
        case 13:
            v0 += v3.c;
            break;
        case 14:
            v0 += v3.d;
            break;
        case 15:
            v0 += v3.e;
            break;
        case 16:
            v0 += v3.f;
            break;
        case 17:
            v0 += v3.g;
            break;
        case 18:
            v0 += v3.h;
            break;
        case 19:
            v0 += v3.i;
            break;
        case 20:
            v0 += v3.j;
            break;
        case 21:
            v0 += v3.k;
            break;
        case 22:
            v0 += v3.k;
            break;
        case 23:
            v0 += v3.a;
            break;
        case 24:
            v0 += v3.b;
            break;
        case 25:
            v0 += v3.c;
            break;
        case 26:
            v0 += v3.d;
            break;
        case 27:
            v0 += v3.e;
            break;
        case 28:
            v0 += v3.f;
            break;
        case 29:
            v0 += v3.g;
            break;
        case 30:
            v0 += v3.h;
            break;
        case 31:
            v0 += v3.i;
            break;
        case 32:
            v0 += v3.j;
            break;
        case 33:
            v0 += v3.k;
            break;
        case 34:
            v0 += v3.k;
            break;
        case 35:
            v0 += v3.k;
            break;
        case 36:
            v0 += v3.a;
            break;
        case 37:
            v0 += v3.b;
            break;
        case 38:
            v0 += v3.c;
            break;
        case 39:
            v0 += v3.d;
            break;
        case 40:
            v0 += v3.e;
            break;
        case 41:
            v0 += v3.f;
            break;
        case 42:
            v0 += v3.g;
            break;
        case 43:
            v0 += v3.h;
            break;
        case 44:
            v0 += v3.i;
            break;
        case 45:
            v0 += v3.j;
            break;
        case 46:
            v0 += v3.k;
            break;
        case 47:
            v0 += v3.i;
            break;
        case 48:
            v0 += v3.j;
            break;
        case 49:
            v0 += v3.k;
            break;
        case 50:
            v0 += v3.k;
            break;
        case 51:
            v0 += v3.k;
            break;
        case 52:
            v0 += v3.a;
            break;
        case 53:
            v0 += v3.b;
            break;
        case 54:
            v0 += v3.c;
            break;
        case 55:
            v0 += v3.d;
            break;
        case 56:
            v0 += v3.e;
            break;
        case 57:
            v0 += v3.f;
            break;
        case 58:
            v0 += v3.g;
            break;
        case 59:
            v0 += v3.h;
            break;
        case 60:
            v0 += v3.i;
            break;
        case 61:
            v0 += v3.j;
            break;
        case 62:
            v0 += v3.k;
            break;
        default:
            v0 += v3.z;
            break;
        }
    }
    return v0;
}
(function () {
    var v3 = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        z: 100
    };
    var v0 = 0;
    for (var v1 = 0; v1 < 10000; ++v1)
        v0 += f0(v3);
    if (v0 != 79660000)
        throw 'Error: bad result: ' + v0;
}());
