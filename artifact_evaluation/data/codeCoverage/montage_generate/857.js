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
function v33(o, v10, v15, v22) {
    delete 0.5.Function;
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
v3 = f2('\0asm\r\0\0\0\x019\x0B`\0\x01\x7F`\0\x01~`\0\x01}`\0\x01|`\x01\x7F\x01\x7F`\x01~\x01~`\x01}\x01}`\x01|\x01|`\x05~}|\x7F\x7F\0`\x05~}|\x7F\x7F\x01|`\0\0\x03\x0F\x0E\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\n\n\n\x07É\x01\x0E\x0Etype-local-i32\0\0\x0Etype-local-i64\0\x01\x0Etype-local-f32\0\x02\x0Etype-local-f64\0\x03\x0Etype-param-i32\0\x04\x0Etype-param-i64\0\x05\x0Etype-param-f32\0\x06\x0Etype-param-f64\0\x07\ntype-mixed\0\b\x04read\0\t\bassert_0\0\n\bassert_1\0\x0B\bassert_2\0\f\bassert_3\0\r\n\x8B\x02\x0E\x06\x01\x01\x7F \0\x0B\x06\x01\x01~ \0\x0B\x06\x01\x01} \0\x0B\x06\x01\x01| \0\x0B\x04\0 \0\x0B\x04\0 \0\x0B\x04\0 \0\x0B\x04\0 \0\x0B,\x03\x01}\x02~\x01| \0P\x1A \x01\x8C\x1A \x02\x9A\x1A \x03E\x1A \x04E\x1A \x05\x8C\x1A \x06P\x1A \x07P\x1A \b\x9A\x1A\x0B?\x03\x01}\x02~\x01|C\0\0\xB0@!\x05B\x06!\x06D\0\0\0\0\0\0 @!\b \0º \x01\xBB \x02 \x03\xB8 \x04\xB7 \x05\xBB \x06º \x07º \b\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\x0B\x0F\0\x02@\x10\x01B\0QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x03\x10\x05B\x03QE\r\0\x0F\x0B\0\x0B\x1D\0\x02@B\x01CÍÌ\f@Dffffff\n@A\x04A\x05\x10\b\x0F\x0B\0\x0B,\0\x02@B\x01C\0\0\0@Dffffff\n@A\x04A\x05\x10\t\xBDDffffffA@\xBDQE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['type-local-i32'](), 0);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['type-local-f32'](), v9(0));
f9(() => v3.exports['type-local-f64'](), 0);
f9(() => v3.exports['type-param-i32'](2), 2);
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['type-param-f32'](v9(4.40000009537)), v9(4.40000009537));
f9(() => v3.exports['type-param-f64'](5.5), 5.5);
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['assert_3']());
f4('\0asm\r\0\0\0\x01\x05\x01`\0\x01~\x03\x02\x01\0\n\b\x01\x06\x01\x01\x7F \0\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\t\x01\x07\x01\x01} \0E\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\x0B\x01\t\x02\x01|\x01~ \x01\x9A\x0B');
f4('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01~\x03\x02\x01\0\n\x06\x01\x04\0 \0\x0B');
f4('\0asm\r\0\0\0\x01\x05\x01`\x01}\0\x03\x02\x01\0\n\x07\x01\x05\0 \0E\x0B');
f4('\0asm\r\0\0\0\x01\x06\x01`\x02|~\0\x03\x02\x01\0\n\x07\x01\x05\0 \x01\x9A\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\n\x01\b\x02\x01\x7F\x01~ \x03\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\r\x01\x0B\x02\x01\x7F\x01~ \xF7\xA4ê\x06\x0B');
f4('\0asm\r\0\0\0\x01\x06\x01`\x02\x7F~\0\x03\x02\x01\0\n\x06\x01\x04\0 \x02\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\x0E\x01\f\x02\x01\x7F\x01~ \xF7òÎÔ\x02\x0B');
f4('\0asm\r\0\0\0\x01\x05\x01`\x01\x7F\0\x03\x02\x01\0\n\n\x01\b\x02\x01\x7F\x01~ \x03\x0B');
f4('\0asm\r\0\0\0\x01\x05\x01`\x01~\0\x03\x02\x01\0\n\r\x01\x0B\x02\x01\x7F\x01~ \xF7\xA8\x99f\x0B');
