function f0(p) {
    v0 = Number(p);
    if (isNaN(v0)) {
        return +0;
    }
    if (v0 === +0 || v0 === -0 || v0 === Number.POSITIVE_INFINITY || v0 === Number.NEGATIVE_INFINITY) {
        return v0;
    }
    var v8 = v0 < 0 ? -1 : 1;
    return v1 * Math.floor(Math.abs(v0));
}
