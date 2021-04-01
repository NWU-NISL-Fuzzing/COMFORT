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
v3 = f2('\0asm\r\0\0\0\x01\x1B\x07`\0\0`\0\0`\0\0`\0\x01\x7F`\0\x01\x7F`\x01\x7F\x01\x7F`\x01\x7F\0\x02\x12\x01\bspectest\x05print\0\x06\x03\x07\x06\0\x01\x04\x05\x05\x06\x07\x1C\x04\x03one\0\x03\x03two\0\x04\x05three\0\x05\x04four\0\x06\n#\x06\x02\0\x0B\x02\0\x0B\x04\0A\r\x0B\x07\0 \0A\x01j\x0B\x07\0 \0A\x02k\x0B\x06\0 \0\x10\0\x0B');
f9(() => v3.exports['one'](), 13);
f9(() => v3.exports['two'](13), 14);
f9(() => v3.exports['three'](13), 11);
v3.exports['four'](83);
f4('\0asm\r\0\0\0\t\x06\x01\0A\0\x0B\0');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\t\x07\x01\0A\0\x0B\x01\0\n\x04\x01\x02\0\x0B');
f4('\0asm\r\0\0\0\x04\x04\x01p\0\x01\t\x06\x01\0B\0\x0B\0');
f4('\0asm\r\0\0\0\x04\x04\x01p\0\x01\t\x07\x01\0A\0h\x0B\0');
f4('\0asm\r\0\0\0\x04\x04\x01p\0\x01\t\x05\x01\0\x01\x0B\0');
f4('\0asm\r\0\0\0\x03\x02\x01*\n\x04\x01\x02\0\x0B');
f4('\0asm\r\0\0\0\x02\x12\x01\bspectest\x05print\0+');
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\0\x01\x7F`\0\x01\x7F`\x01\x7F\x01\x7F\x03\b\x07\0\0\0\x01\x01\x02\x02\x04\x05\x01p\x01\x07\x07\x07\x11\x02\x05callt\0\x05\x05callu\0\x06\t\r\x01\0A\0\x0B\x07\0\x01\x02\x03\x04\0\x02\n*\x07\x04\0A\x01\x0B\x04\0A\x02\x0B\x04\0A\x03\x0B\x04\0A\x04\x0B\x04\0A\x05\x0B\x07\0 \0\x11\0\0\x0B\x07\0 \0\x11\x01\0\x0B');
f9(() => v3.exports['callt'](0), 1);
f9(() => v3.exports['callt'](1), 2);
f9(() => v3.exports['callt'](2), 3);
f9(() => v3.exports['callt'](9), 4);
f9(() => v3.exports['callt'](4), 5);
f9(() => v3.exports['callt'](5), 1);
f9(() => v3.exports['callt'](6), 3);
f8(() => v3.exports['callt'](7));
f8(() => v3.exports['callt'](100));
f8(() => v3.exports['callt'](-1));
f9(() => v3.exports['callu'](0), 1);
f9(() => v3.exports['callu'](1), 2);
f9(() => v3.exports['callu'](2), 3);
f9(() => v3.exports['callu'](3), 4);
f9(() => v3.exports['callu'](4), 5);
f9(() => v3.exports['callu'](5), 1);
f9(() => v3.exports['callu'](6), 3);
f8(() => v3.exports['callu'](7));
f8(() => v3.exports['callu'](100));
f8(() => v3.exports['callu'](-1));
v3 = f2('\0asm\r\0\0\0\x01\n\x02`\0\x01\x7F`\x01\x7F\x01\x7F\x03\x04\x03\0\0\x01\x04\x05\x01p\x01\x02\x02\x07\t\x01\x05callt\0\x02\t\b\x01\0A\0\x0B\x02\0\x01\n\x13\x03\x04\0A\x01\x0B\x04\0A\x02\x0B\x07\0 \0\x11\0\0\x0B');
f9(() => v3.exports['callt'](0), 1);
f9(() => v3.exports['callt'](1), 2);
