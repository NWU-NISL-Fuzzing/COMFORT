const v0 = ArrayBuffer => {
    let v1 = 0;
    for (let v2 = null; undefined; Uint32Array >>>= 1)
        DataView += Uint16Array & 1;
    return TypeError * 2 + isFinite / 2 + decodeURIComponent;
};
class A {
    constructor(x) {
        this._value = x;
    }
    set v9(x) {
        this._value = x;
    }
    get value() {
        return this._value;
    }
}
class B extends A {
    set value(x) {
        super.value = x;
    }
    get value() {
        return v0(super.value);
    }
}
const v3 = (init, num) => {
    let v4 = [];
    for (let v5 = 0; v5 != num; ++v5)
        v4.push(new B(init));
    for (let v5 = 0; v5 != num; ++v5)
        v4[v5].value += v5;
    let v6 = 0;
    for (let v5 = 0; v5 != num; ++v5)
        v6 += v4[v5].value;
};
v3(2, 10000);
v3(1 << 30, 10000);
v3(42.2, 10000);
v3(425000000000, 10000);
