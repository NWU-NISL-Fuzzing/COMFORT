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
v3 = f2('\0asm\r\0\0\0\x01&\b`\0\0`\x03\x7F\x7F\x7F\0`\0\x01\x7F`\0\x01|`\0\x01~`\x02\x7F\x7F\x01\x7F`\x03\x7F\x7F\x7F\0`\0\x01}\x0387\0\x01\x02\x02\x03\x03\x02\x02\0\x02\x02\x02\0\x02\x02\x02\x02\0\x02\x02\0\x02\x02\0\x02\x02\x04\x02\x05\x05\x05\x05\x02\0\0\0\0\0\0\0\0\x07\x04\0\0\0\0\x07\x02\x04\x02\x02\x02\x02\x02\x04\x05\x01p\x01\x01\x01\x05\x03\x01\0\x01\x07\x98\x075\btype-i32\0\x02\btype-i64\0\x03\btype-f32\0\x04\btype-f64\0\x05\ras-func-first\0\x06\x0Bas-func-mid\0\x07\fas-func-last\0\b\ras-func-value\0\t\x0Eas-block-first\0\n\fas-block-mid\0\x0B\ras-block-last\0\f\x0Eas-block-value\0\r\x0Eas-block-broke\0\x0E\ras-loop-first\0\x0F\x0Bas-loop-mid\0\x10\fas-loop-last\0\x11\ras-loop-broke\0\x12\x0Bas-br-value\0\x13\ras-br_if-cond\0\x14\x0Eas-br_if-value\0\x15\x13as-br_if-value-cond\0\x16\x11as-br_table-index\0\x17\x11as-br_table-value\0\x18\x17as-br_table-value-index\0\x19\x0Fas-return-value\0\x1A\nas-if-cond\0\x1B\nas-if-then\0\x1C\nas-if-else\0\x1D\x0Fas-select-first\0\x1E\x10as-select-second\0\x1F\x0Eas-select-cond\0 \ras-call-first\0!\x0Bas-call-mid\0"\fas-call-last\0#\x15as-call_indirect-func\0$\x16as-call_indirect-first\0%\x14as-call_indirect-mid\0&\x15as-call_indirect-last\0\'\x12as-set_local-value\0(\x0Fas-load-address\0)\x10as-loadN-address\0*\x10as-store-address\0+\x0Eas-store-value\0,\x11as-storeN-address\0-\x0Fas-storeN-value\0.\x10as-unary-operand\0/\x0Eas-binary-left\x000\x0Fas-binary-right\x001\x0Fas-test-operand\x002\x0Fas-compare-left\x003\x10as-compare-right\x004\x12as-convert-operand\x005\x13as-grow_memory-size\x006\t\x07\x01\0A\0\x0B\x01\x01\nÿ\x037\x02\0\x0B\x02\0\x0B\x03\0\0\x0B\x03\0\0\x0B\x03\0\0\x0B\x03\0\0\x0B\x05\0\0A\x7F\x0B\x07\0\x10\0\0A\x7F\x0B\x05\0\x10\0\0\x0B\x05\0\x10\0\0\x0B\b\0\x02\x7F\0A\x02\x0B\x0B\n\0\x02\x7F\x10\0\0A\x02\x0B\x0B\t\0\x02@\x01\x10\0\0\x0B\x0B\t\0\x02\x7F\x01\x10\0\0\x0B\x0B\f\0\x02\x7F\x10\0A\x01\f\0\0\x0B\x0B\b\0\x03\x7F\0A\x02\x0B\x0B\n\0\x03\x7F\x10\0\0A\x02\x0B\x0B\t\0\x03@\x01\x10\0\0\x0B\x0B\x0F\0\x02\x7F\x03\x7F\x10\0A\x01\f\x01\0\x0B\x0B\x0B\b\0\x02\x7F\0\f\0\x0B\x0B\b\0\x02@\0\r\0\x0B\x0B\r\0\x02\x7F\0A\x01\r\0\x1AA\x07\x0B\x0B\r\0\x02\x7FA\x06\0\r\0\x1AA\x07\x0B\x0B\x0B\0\x02@\0\x0E\x02\0\0\0\x0B\x0B\x0F\0\x02\x7F\0A\x01\x0E\x02\0\0\0A\x07\x0B\x0B\x0E\0\x02\x7FA\x06\0\x0E\x01\0\0A\x07\x0B\x0B\x04\0\0\x0F\x0B\x0B\0\0\x04\x7FA\0\x05A\x01\x0B\x0B\x0B\0 \0\x04\x7F\0\x05 \x01\x0B\x0B\x0B\0 \0\x04\x7F \x01\x05\0\x0B\x0B\b\0\0 \0 \x01\x1B\x0B\b\0 \0\0 \x01\x1B\x0B\b\0A\0A\x01\0\x1B\x0B\t\0\0A\x02A\x03\x10\x01\x0B\t\0A\x01\0A\x03\x10\x01\x0B\t\0A\x01A\x02\0\x10\x01\x0B\f\0\0A\x01A\x02A\x03\x11\x06\0\x0B\f\0A\0\0A\x02A\x03\x11\x06\0\x0B\f\0A\0A\x01\0A\x03\x11\x06\0\x0B\f\0A\0A\x01A\x02\0\x11\x06\0\x0B\x07\x01\x01}\0!\0\x0B\x06\0\0*\x02\0\x0B\x06\0\x000\0\0\x0B\x0F\0\0D\0\0\0\0\0\0\x1C@9\x03\0\x0B\b\0A\x02\x007\x03\0\x0B\b\0\0A\x07:\0\0\x0B\b\0A\x02\0=\x01\0\x0B\x04\0\0\x8C\x0B\x06\0\0A\nj\x0B\x06\0B\n\0}\x0B\x04\0\0E\x0B\r\0\0D\0\0\0\0\0\0$@e\x0B\t\0C\0\0 A\0\\\x0B\x04\0\0\xA7\x0B\x05\0\0@\0\x0B');
f8(() => v3.exports['type-i32']());
f8(() => v3.exports['type-i64']());
f8(() => v3.exports['type-f32']());
f8(() => v3.exports['type-f64']());
f8(() => v3.exports['as-func-first']());
f8(() => v3.exports['as-func-mid']());
f8(() => v3.exports['as-func-last']());
f8(() => v3.exports['as-func-value']());
f8(() => v3.exports['as-block-first']());
f8(() => v3.exports['as-block-mid']());
f8(() => v3.exports['as-block-last']());
f8(() => v3.exports['as-block-value']());
f9(() => v3.exports['as-block-broke'](), 1);
f8(() => v3.exports['as-loop-first']());
f8(() => v3.exports['as-loop-mid']());
f8(() => v3.exports['as-loop-last']());
f9(() => v3.exports['as-loop-broke'](), 1);
f8(() => v3.exports['as-br-value']());
f8(() => v3.exports['as-br_if-cond']());
f8(() => v3.exports['as-br_if-value']());
--v9;
f8(() => v3.exports['as-br_table-index']());
f8(() => v3.exports['as-br_table-value']());
f8(() => v3.exports['as-br_table-value-index']());
f8(() => v3.exports['as-return-value']());
f8(() => v3.exports['as-if-cond']());
f8(() => v3.exports['as-if-then'](1, 6));
f9(() => v3.exports['as-if-then'](0, 6), 6);
f8(() => v3.exports['as-if-else'](0, 6));
f9(() => v3.exports['as-if-else'](1, 6), 6);
f8(() => v3.exports['as-select-first'](0, 6));
f8(() => v3.exports['as-select-first'](1, 6));
f8(() => v3.exports['as-select-second'](0, 6));
f8(() => v3.exports['as-select-second'](1, 6));
f8(() => v3.exports['as-select-cond']());
f8(() => v3.exports['as-call-first']());
f8(() => v3.exports['as-call-mid']());
f8(() => v3.exports['as-call-last']());
f8(() => v3.exports['as-call_indirect-func']());
f8(() => v3.exports['as-call_indirect-first']());
f8(() => v3.exports['as-call_indirect-mid']());
f8(() => v3.exports['as-call_indirect-last']());
f8(() => v3.exports['as-set_local-value']());
f8(() => v3.exports['as-load-address']());
f8(() => v3.exports['as-loadN-address']());
f8(() => v3.exports['as-store-address']());
f8(() => v3.exports['as-store-value']());
f8(() => v3.exports['as-storeN-address']());
f8(() => v3.exports['as-storeN-value']());
f8(() => v3.exports['as-unary-operand']());
f8(() => v3.exports['as-binary-left']());
f8(() => v3.exports['as-binary-right']());
f8(() => v3.exports['as-test-operand']());
f8(() => v3.exports['as-compare-left']());
f8(() => v3.exports['as-compare-right']());
f8(() => v3.exports['as-convert-operand']());
f8(() => v3.exports['as-grow_memory-size']());
