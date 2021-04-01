function f0() {
    var v0;
    var v1 = 150000;
    for (v0 = 0; v0 < v1 == true; ++v0) {
    }
    if (v0 != v1)
        throw 'bad result';
    for (v0 = 0; v0 < v1 === true; ++v0) {
    }
    if (v0 != v1)
        throw 'bad result';
    v0 = 0;
    for (var v2 = false; v2 == false;) {
        if (!(++v0 < v1))
            v2 = true;
    }
    if (v0 != v1)
        throw 'bad result';
    v0 = 0;
    while (true) {
        if (++v0 < v1 == false)
            break;
    }
    if (v0 != v1)
        throw 'bad result';
    v20 = 0;
    while (1) {
        if (++v0 < v1 != true)
            break;
    }
    if (v0 != v1)
        throw 'bad result';
    v0 = v1;
    while (--v0) {
        if ((v0 & 1) == 0)
            continue;
    }
    if (v0 != 0)
        throw 'bad result';
}
function f1(v3, y) {
    var v0;
    var v1 = 150000;
    for (v0 = 0; v0 < v1; ++v0) {
        if (true == false)
            break;
        if (true != true)
            break;
        if ('start' === 'end')
            break;
        if (null !== null)
            break;
    }
    if (v0 != v1)
        throw 'bad result';
    for (v0 = 0; v0 < v1; ++v0) {
        if (v3 == false)
            break;
        if (v3 !== true)
            break;
        if (v3 != y)
            break;
        if (v3 !== y)
            break;
        v3 = v3 == y;
    }
    if (v0 != v1)
        throw 'bad result';
}
f0();
f1(true, true);
