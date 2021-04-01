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
        y: 2
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
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\b\x01\x01\n\x04\x01\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x03\x02\x01\0\b\x01\0\n\x07\x01\x05\0A\0\x0F\x0B');
f4('\0asm\r\0\0\0\x01\x05\x01`\x01\x7F\0\x03\x02\x01\0\b\x01\0\n\x04\x01\x02\0\x0B');
v3 = f2('\0asm\r\0\0\0\x01\b\x02`\0\0`\0\x01\x7F\x03\x04\x03\0\x01\0\x05\x04\x01\x01\x01\x01\x07\r\x02\x03inc\0\0\x03get\0\x01\b\x01\x02\n#\x03\x0F\0A\0A\0-\0\0A\x01j:\0\0\x0B\b\0A\0-\0\0\x0F\x0B\b\0\x10\0\x10\0\x10\0\x0B\x0B\x07\x01\0A\0\x0B\x01A');
f9(() => v3.exports['get'](), 68);
v3.exports['inc']();
f9(() => v3.exports['get'](), 69);
v3.exports['inc']();
f9(() => v3.exports['get'](), 70);
v3 = f2('\0asm\r\0\0\0\x01\b\x02`\0\0`\0\x01\x7F\x03\x04\x03\0\x01\0\x05\x04\x01\x01\x01\x01\x07\r\x02\x03inc\0\0\x03get\0\x01\b\x01\x02\n#\x03\x0F\0A\0A\0-\0\0A\x01j:\0\0\x0B\b\0A\0-\0\0\x0F\x0B\b\0\x10\0\x10\0\x10\0\x0B\x0B\x07\x01\0A\0\x0B\x01A');
f9(() => v3.exports['get'](), 68);
v3.exports['inc']();
f9(() => v3.exports['get'](), 69);
v3.exports['inc']();
f9(() => v3.exports['get'](), 70);
v3 = f2('\0asm\r\0\0\0\x01\b\x02`\x01\x7F\0`\0\0\x02\x12\x01\bspectest\x05print\0\0\x03\x02\x01\x01\b\x01\x01\n\b\x01\x06\0A\x01\x10\0\x0B');
v3 = f2('\0asm\r\0\0\0\x01\b\x02`\x01\x7F\0`\0\0\x02\x12\x01\bspectest\x05print\0\0\x03\x02\x01\x01\b\x01\x01\n\b\x01\x06\0A\x02\x10\0\x0B');
v3 = f2('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x12\x01\bspectest\x05print\0\0\b\x01\0');
f7('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\b\x01\0\n\x05\x01\x03\0\0\x0B');
