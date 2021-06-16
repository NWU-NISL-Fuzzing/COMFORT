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
v3 = f2('\0asm\r\0\0\0\x01\x0F\x03`\0\x01\x7F`\x02\x7F\x7F\0`\x01\x7F\x01\x7F\x03\x05\x04\0\x01\x02\x02\x05\x03\x01\0\x01\x07\x1E\x03\x05store\0\x01\x04load\0\x02\x0Bgrow_memory\0\x03\n*\x04\t\0?\0A\x80\x80\x04l\x0B\f\0\x10\0 \0j \x016\x02\0\x0B\n\0\x10\0 \0j(\x02\0\x0B\x06\0 \0@\0\x0B');
f9(() => v3.exports['store'](-4, 42));
f9(() => v3.exports['load'](-4), 42);
f8(() => v3.exports['store'](-3, 13));
f8(() => v3.exports['load'](-3));
f8(() => v3.exports['store'](-2, 13));
f8(() => v3.exports['load'](-2));
f8(() => v3.exports['store'](-1, 13));
f8(() => v3.exports['load'](-1));
f8(() => v3.exports['store'](0, 13));
f8(() => v3.exports['load'](0));
f8(() => v3.exports['store'](-2147483648, 13));
value(() => v3.exports['load'](-2147483648));
f9(() => v3.exports['grow_memory'](65537), -1);
