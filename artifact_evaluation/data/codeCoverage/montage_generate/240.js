'use strict';
let v0 = true;
let v1 = {
    print: print || ((...xs) => console.log(...xs)),
    global: 666,
    table: new WebAssembly.Table({
        initial: 10,
        maximum: 20,
        element: 'anyfunc'
    }),
    memory: new WebAssembly.Memory({
        initial: 1,
        maximum: 2
    })
};
let v2 = { spectest };
let v3;
function f0(name, f2) {
    v2[name] = f2.exports;
}
function f1(bytes) {
    let v4 = new ArrayBuffer(bytes.length);
    let v5 = new Uint8Array(v4);
    for (let v6 = 0; v6 < bytes.length; ++v6) {
        v5[v6] = bytes.charCodeAt(v6);
    }
    return new WebAssembly.Module(v4);
}
function f2(bytes, imports = v2) {
    return new WebAssembly.Instance(f1(bytes), imports);
}
function f3(bytes) {
    try {
        f1(bytes);
    } catch (e) {
        if (e instanceof WebAssembly.CompileError)
            return;
    }
    throw new Error('Wasm decoding failure expected');
}
function f4(bytes) {
    try {
        f1(bytes);
    } catch (e) {
        if (e instanceof WebAssembly.CompileError)
            return;
    }
    throw new Error('Wasm validation failure expected');
}
function f5(bytes) {
    try {
        f1(bytes);
    } catch (e) {
        if (e instanceof WebAssembly.CompileError)
            return;
        throw new Error('Wasm validation failure expected');
    }
    if (v0)
        throw new Error('Wasm validation failure expected');
}
function f6(bytes) {
    let v7 = f1(bytes);
    try {
        new WebAssembly.Instance(v7, v2);
    } catch (e) {
        if (e instanceof TypeError)
            return;
    }
    throw new Error('Wasm linking failure expected');
}
function f7(bytes) {
    let v7 = f1(bytes);
    try {
        new WebAssembly.Instance(v7, v2);
    } catch (e) {
        if (e instanceof WebAssembly.RuntimeError)
            return;
    }
    throw new Error('Wasm trap expected');
}
function f8(action) {
    try {
        action();
    } catch (e) {
        if (e instanceof WebAssembly.RuntimeError)
            return;
    }
    throw new Error('Wasm trap expected');
}
function f9(action, expected) {
    let v8 = action();
    if (!Object.is(v8, expected)) {
        throw new Error('Wasm return value ' + expected + ' expected, got ' + v8);
    }
    ;
}
function f10(action) {
    let v8 = action();
    if (!Number.isNaN(v8)) {
        throw new Error('Wasm return value NaN expected, got ' + v8);
    }
    ;
}
let v9 = Math.fround;
v3 = f2('\0asm\r\0\0\0\x01(\b`\0\0`\0\x01\x7F`\0\x01~`\0\x01}`\0\x01|`\x02\x7F\x7F\x01\x7F`\x03\x7F\x7F\x7F\x01\x7F`\x03\x7F\x7F\x7F\x01\x7F\x03@?\0\0\0\0\0\x01\x02\x03\x04\0\0\0\x01\x01\x01\x01\x01\0\x01\x01\0\x01\x01\x02\x01\x05\x05\x05\x05\x01\x06\x01\x01\x01\x01\x01\x01\x01\x01\x03\x02\x01\x01\x01\x01\x03\x01\x02\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\0\0\0\0\x04\x05\x01p\x01\x01\x01\x05\x03\x01\0\x01\x07\xB6\b=\btype-i32\0\x01\btype-i64\0\x02\btype-f32\0\x03\btype-f64\0\x04\x0Etype-i32-value\0\x05\x0Etype-i64-value\0\x06\x0Etype-f32-value\0\x07\x0Etype-f64-value\0\b\x0Eas-block-first\0\t\fas-block-mid\0\n\ras-block-last\0\x0B\x0Eas-block-value\0\f\ras-loop-first\0\r\x0Bas-loop-mid\0\x0E\fas-loop-last\0\x0F\x0Bas-br-value\0\x10\ras-br_if-cond\0\x11\x0Eas-br_if-value\0\x12\x13as-br_if-value-cond\0\x13\x11as-br_table-index\0\x14\x11as-br_table-value\0\x15\x17as-br_table-value-index\0\x16\x0Fas-return-value\0\x17\nas-if-cond\0\x18\nas-if-then\0\x19\nas-if-else\0\x1A\x0Fas-select-first\0\x1B\x10as-select-second\0\x1C\x0Eas-select-cond\0\x1D\ras-call-first\0\x1F\x0Bas-call-mid\0 \fas-call-last\0!\x15as-call_indirect-func\0"\x16as-call_indirect-first\0#\x14as-call_indirect-mid\0$\x15as-call_indirect-last\0%\x12as-set_local-value\0&\x0Fas-load-address\0\'\x10as-loadN-address\0(\x10as-store-address\0)\x0Eas-store-value\0*\x11as-storeN-address\0+\x0Fas-storeN-value\0,\x10as-unary-operand\0-\x0Eas-binary-left\0.\x0Fas-binary-right\0/\x0Fas-test-operand\x000\x0Fas-compare-left\x001\x10as-compare-right\x002\x12as-convert-operand\x003\x13as-grow_memory-size\x004\x12nested-block-value\x005\x0Fnested-br-value\x006\x12nested-br_if-value\x007\x17nested-br_if-value-cond\x008\x15nested-br_table-value\x009\x1Bnested-br_table-value-index\0:\bassert_0\0;\bassert_1\0<\bassert_2\0=\bassert_3\0>\t\x07\x01\0A\0\x0B\x01\x1E\nØ\x07?\x02\0\x0B\t\0\x02@\f\0h\x1A\x0B\x0B\t\0\x02@\f\0z\x1A\x0B\x0B\t\0\x02@\f\0\x8C\x1A\x0B\x0B\t\0\x02@\f\0\x9A\x1A\x0B\x0B\n\0\x02\x7FA\x01\f\0h\x0B\x0B\n\0\x02~B\x02\f\0z\x0B\x0B\r\0\x02}C\0\0@@\f\0\x8C\x0B\x0B\x11\0\x02|D\0\0\0\0\0\0\x10@\f\0\x9A\x0B\x0B\t\0\x02@\f\0\x10\0\x0B\x0B\x0B\0\x02@\x10\0\f\0\x10\0\x0B\x0B\n\0\x02@\x01\x10\0\f\0\x0B\x0B\f\0\x02\x7F\x01\x10\0A\x02\f\0\x0B\x0B\x0E\0\x02\x7F\x03\x7FA\x03\f\x01A\x02\x0B\x0B\x0B\x10\0\x02\x7F\x03\x7F\x10\0A\x04\f\x01A\x02\x0B\x0B\x0B\x0F\0\x02\x7F\x03\x7F\x01\x10\0A\x05\f\x01\x0B\x0B\x0B\x0B\0\x02\x7FA\t\f\0\f\0\x0B\x0B\t\0\x02@\f\0\r\0\x0B\x0B\x10\0\x02\x7FA\b\f\0A\x01\r\0\x1AA\x07\x0B\x0B\x10\0\x02\x7FA\x06A\t\f\0\r\0\x1AA\x07\x0B\x0B\f\0\x02@\f\0\x0E\x02\0\0\0\x0B\x0B\x12\0\x02\x7FA\n\f\0A\x01\x0E\x02\0\0\0A\x07\x0B\x0B\x11\0\x02\x7FA\x06A\x0B\f\0\x0E\x01\0\0A\x07\x0B\x0B\n\0\x02~B\x07\f\0\x0F\x0B\x0B\x11\0\x02\x7FA\x02\f\0\x04\x7FA\0\x05A\x01\x0B\x0B\x0B\x11\0\x02\x7F \0\x04\x7FA\x03\f\x01\x05 \x01\x0B\x0B\x0B\x11\0\x02\x7F \0\x04\x7F \x01\x05A\x04\f\x01\x0B\x0B\x0B\x0E\0\x02\x7FA\x05\f\0 \0 \x01\x1B\x0B\x0B\x0E\0\x02\x7F \0A\x06\f\0 \x01\x1B\x0B\x0B\x0E\0\x02\x7FA\0A\x01A\x07\f\0\x1B\x0B\x0B\x04\0A\x7F\x0B\x0F\0\x02\x7FA\f\f\0A\x02A\x03\x10\x1E\x0B\x0B\x0F\0\x02\x7FA\x01A\r\f\0A\x03\x10\x1E\x0B\x0B\x0F\0\x02\x7FA\x01A\x02A\x0E\f\0\x10\x1E\x0B\x0B\x12\0\x02\x7FA\x14\f\0A\x01A\x02A\x03\x11\x07\0\x0B\x0B\x12\0\x02\x7FA\0A\x15\f\0A\x02A\x03\x11\x07\0\x0B\x0B\x12\0\x02\x7FA\0A\x01A\x16\f\0A\x03\x11\x07\0\x0B\x0B\x12\0\x02\x7FA\0A\x01A\x02A\x17\f\0\x11\x07\0\x0B\x0B\x0F\x01\x01}\x02\x7FA\x11\f\0!\0A\x7F\x0B\x0B\x0F\0\x02}C\x9A\x99Ù?\f\0*\x02\0\x0B\x0B\f\0\x02~B\x1E\f\x000\0\0\x0B\x0B\x17\0\x02\x7FA\x1E\f\0D\0\0\0\0\0\0\x1C@9\x03\0A\x7F\x0B\x0B\x10\0\x02\x7FA\x02A\x1F\f\x007\x03\0A\x7F\x0B\x0B\x10\0\x02\x7FA \f\0A\x07:\0\0A\x7F\x0B\x0B\x10\0\x02\x7FA\x02A!\f\0=\x01\0A\x7F\x0B\x0B\r\0\x02}C\x9A\x99Y@\f\0\x8C\x0B\x0B\f\0\x02\x7FA\x03\f\0A\nj\x0B\x0B\f\0\x02~B\nB-\f\0}\x0B\x0B\n\0\x02\x7FA,\f\0E\x0B\x0B\x13\0\x02\x7FA+\f\0D\0\0\0\0\0\0$@e\x0B\x0B\x0F\0\x02\x7FC\0\0 AA*\f\0\\\x0B\x0B\n\0\x02\x7FA)\f\0\xA7\x0B\x0B\x0B\0\x02\x7FA(\f\0@\0\x0B\x0B\x11\0A\x01\x02\x7F\x10\0A\x04A\b\f\0j\x0Bj\x0B\x1A\0A\x01\x02\x7FA\x02\x1A\x02\x7FA\x04\x1AA\b\f\x01\f\0\x0B\x1AA\x10\x0Bj\x0B\x1F\0A\x01\x02\x7FA\x02\x1A\x02\x7FA\x04\x1AA\b\f\x01A\x01\r\0\x1AA \x0B\x1AA\x10\x0Bj\x0B\x16\0A\x01\x02\x7FA\x02\x1AA\x04A\b\f\0\r\0\x1AA\x10\x0Bj\x0B\x1D\0A\x01\x02\x7FA\x02\x1A\x02\x7FA\x04\x1AA\b\f\x01A\x01\x0E\0\0\x0B\x1AA\x10\x0Bj\x0B\x16\0A\x01\x02\x7FA\x02\x1AA\x04A\b\f\0\x0E\0\0A\x10\x0Bj\x0B\x0F\0\x02@\x10\x06B\x02QE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x10\x17B\x07QE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x10(B\x1EQE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x10/B-QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['type-i32']());
f9(() => v3.exports['type-i64']());
f9(() => v3.exports['type-f32']());
f9(() => v3.exports['type-f64']());
f9(() => v3.exports['type-i32-value'](), 1);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['type-f32-value'](), v9(3));
f9(() => v3.exports['type-f64-value'](), 4);
f9(() => v3.exports['as-block-first']());
f9(() => v3.exports['as-block-mid']());
f9(() => v3.exports['as-block-last']());
f9(() => v3.exports['as-block-value'](), 2);
f9(() => v3.exports['as-loop-first'](), 3);
f9(() => v3.exports['as-loop-mid'](), 4);
f9(() => v3.exports['as-loop-last'](), 5);
f9(() => v3.exports['as-br-value'](), 9);
f9(() => v3.exports['as-br_if-cond']());
f9(() => v3.exports['as-br_if-value'](), 8);
f9(() => v3.exports['as-br_if-value-cond'](), 9);
f9(() => v3.exports['as-br_table-index']());
f9(() => v3.exports['as-br_table-value'](), 10);
f9(() => v3.exports['as-br_table-value-index'](), 11);
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['as-if-cond'](), 2);
f9(() => v3.exports['as-if-then'](1, 6), 3);
f9(() => v3.exports['as-if-then'](0, 6), 6);
f9(() => v3.exports['as-if-else'](0, 6), 4);
f9(() => v3.exports['as-if-else'](1, 6), 6);
f9(() => v3.exports['as-select-first'](0, 6), 5);
f9(() => v3.exports['as-select-first'](1, 6), 5);
f9(() => v3.NEGATIVE_INFINITY['as-select-second'](0, 6), 6);
f9(() => v3.exports['as-select-second'](1, 6), 6);
f9(() => v3.exports['as-select-cond'](), 7);
f9(() => v3.exports['as-call-first'](), 12);
f9(() => v3.exports['as-call-mid'](), 13);
f9(() => v3.exports['as-call-last'](), 14);
f9(() => v3.exports['as-call_indirect-func'](), 20);
f9(() => v3.exports['as-call_indirect-first'](), 21);
f9(() => v3.exports['as-call_indirect-mid'](), 22);
f9(() => v3.exports['as-call_indirect-last'](), 23);
f9(() => v3.exports['as-set_local-value'](), 17);
f9(() => v3.exports['as-load-address'](), v9(1.70000004768));
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['as-store-address'](), 30);
f9(() => v3.exports['as-store-value'](), 31);
f9(() => v3.exports['as-storeN-address'](), 32);
f9(() => v3.exports['as-storeN-value'](), 33);
f9(() => v3.exports['as-unary-operand'](), v9(3.40000009537));
f9(() => v3.exports['as-binary-left'](), 3);
f9(() => v3.exports['assert_3']());
f9(() => v3.exports['as-test-operand'](), 44);
f9(() => v3.exports['as-compare-left'](), 43);
f9(() => v3.exports['as-compare-right'](), 42);
f9(() => v3.exports['as-convert-operand'](), 41);
f9(() => v3.exports['as-grow_memory-size'](), 40);
f9(() => v3.exports['nested-block-value'](), 9);
f9(() => v3.exports['nested-br-value'](), 9);
f9(() => v3.exports['nested-br_if-value'](), 9);
f9(() => v3.exports['nested-br_if-value-cond'](), 9);
f9(() => v3.exports['nested-br_table-value'](), 9);
f9(() => v3.exports['nested-br_table-value-index'](), 9);
f4('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x03\x02\x01\0\n\x0B\x01\t\0\x02@\f\0A\x01\x0B\x0B');
f4('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x03\x02\x01\0\n\f\x01\n\0\x02@\x01\f\0A\x01\x0B\x0B');
f4('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x03\x02\x01\0\n\r\x01\x0B\0\x02@B\x01\f\0A\x01\x0B\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\x06\x01\x04\0\f\x01\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\f\x01\n\0\x02@\x02@\f\x05\x0B\x0B\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\n\x01\b\0\f\x81\x80\x80\x80\x01\x0B');
