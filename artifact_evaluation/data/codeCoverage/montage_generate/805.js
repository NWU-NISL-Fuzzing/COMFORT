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
v3 = f2('\0asm\r\0\0\0\x01\r\x03`\0\x01\x7F`\0\0`\x01\x7F\x01\x7F\x03\x07\x06\0\x01\0\x01\x02\0\x05\x03\x01\0\0\x07W\x06\fload_at_zero\0\0\rstore_at_zero\0\x01\x11load_at_page_size\0\x02\x12store_at_page_size\0\x03\x04grow\0\x04\x04size\0\x05\n5\x06\x07\0A\0(\x02\0\x0B\t\0A\0A\x026\x02\0\x0B\t\0A\x80\x80\x04(\x02\0\x0B\x0B\0A\x80\x80\x04A\x036\x02\0\x0B\x06\0 \0@\0\x0B\x04\0?\0\x0B');
f9(() => v3.exports['size'](), 0);
f8(() => v3.exports['store_at_zero']());
f8(() => v3.exports['load_at_zero']());
f8(() => v3.exports['store_at_page_size']());
f8(() => v3.exports['load_at_page_size']());
f9(() => v3.exports['grow'](1), 0);
f9(() => v3.exports['size'](), 1);
f9(() => v3.exports['load_at_zero'](), 0);
f9(() => v3.exports['store_at_zero']());
f9(() => v3.exports['load_at_zero'](), 2);
f8(() => v3.exports['store_at_page_size']());
f8(() => v3.exports['load_at_page_size']());
f9(() => v3.exports['grow'](4), 1);
f9(() => v3.exports['size'](), 5);
f9(() => v3.exports['load_at_zero'](), 2);
f9(() => v3.exports['store_at_zero']());
f9(() => v3.exports['load_at_zero'](), 2);
f9(() => v3.exports['load_at_page_size'](), 0);
f9(() => v3.exports['store_at_page_size']());
f9(() => v36['x'](v33[v4[v35](x, 0).v24 >> 1] + null).x['a'].a(false), 3);
v3 = f2('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x03\x02\x01\0\x05\x03\x01\0\0\x07\b\x01\x04grow\0\0\n\b\x01\x06\0 \0@\0\x0B');
f9(() => v3.exports['grow'](0), 0);
f9(() => v3.exports['grow'](1), 0);
f9(() => v3.exports['grow'](0), 1);
f9(() => v3.exports['grow'](2), 1);
f9(() => v3.exports['grow'](800), 3);
v3 = f2('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x03\x02\x01\0\x05\x04\x01\x01\0\n\x07\b\x01\x04grow\0\0\n\b\x01\x06\0 \0@\0\x0B');
f9(() => v3.exports['grow'](0), 0);
f9(() => v3.exports['grow'](1), 0);
f9(() => v3.exports['grow'](1), 1);
f9(() => v3.exports['grow'](2), 2);
f9(() => v3.exports['grow'](6), 4);
f9(() => v3.exports['grow'](0), 10);
f9(() => v3.exports['grow'](1), -1);
