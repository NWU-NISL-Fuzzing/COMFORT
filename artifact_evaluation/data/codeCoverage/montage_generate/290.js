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
v3 = f2('\0asm\r\0\0\0\x01\x1E\x07`\0\0`\x01\x7F\0`\x01}\0`\0\x01\x7F`\0\x01}`\x01\x7F\x01\x7F`\x01~\x01~\x03\b\x07\0\x01\x02\x03\x04\x05\x06\x04\x04\x01p\0\n\x05\x03\x01\0\x02\x06\x0E\x02\x7F\0A7\x0B}\0C\0\x000B\x0B\x07\x8E\x01\x0B\x04func\0\0\bfunc-i32\0\x01\bfunc-f32\0\x02\tfunc->i32\0\x03\tfunc->f32\0\x04\rfunc-i32->i32\0\x05\rfunc-i64->i64\0\x06\nglobal-i32\x03\0\nglobal-f32\x03\x01\ftable-10-inf\x01\0\fmemory-2-inf\x02\0\n!\x07\x02\0\x0B\x02\0\x0B\x02\0\x0B\x04\0A\x16\x0B\x07\0C\0\x000A\x0B\x04\0 \0\x0B\x04\0 \0\x0B');
f0('test', v3);
v3 = f2('\0asm\r\0\0\0\x01#\b`\x01\x7F\0`\x01~\0`\x01}\0`\x01|\0`\x02\x7F}\0`\x02||\0`\x01~\x01~`\0\0\x02À\x01\x0B\bspectest\x05print\0\0\bspectest\x05print\0\x01\bspectest\x05print\0\0\bspectest\x05print\0\x01\bspectest\x05print\0\x02\bspectest\x05print\0\x03\bspectest\x05print\0\x04\bspectest\x05print\0\x05\bspectest\x05print\0\0\bspectest\x05print\0\x03\x04test\rfunc-i64->i64\0\x06\x03\x04\x03\0\x01\x07\x04\x05\x01p\x01\x02\x02\x07 \x03\x07print32\0\x0B\x07print64\0\f\bassert_0\0\r\t\b\x01\0A\0\x0B\x02\x02\x05\np\x03,\x01\x01} \0\xB2!\x01 \0\x10\0 \0A\x01jC\0\0(B\x10\x06 \0\x10\x02 \0\x10\b \x01\x10\x04 \0A\0\x11\0\0\x0B5\x01\x01| \0\x10\n\xB9!\x01 \0\x10\x01 \x01D\0\0\0\0\0\0ð?\xA0D\0\0\0\0\0\x80J@\x10\x07 \x01\x10\x05 \x01\x10\t \x01A\x01\x11\x03\0\x0B\x0B\0\x02@B\x18\x10\f\x0F\x0B\0\x0B');
f9(() => v3.exports['print32'](13));
f9(() => v3.exports['assert_0']());
v3 = f2('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\r\x01\x04test\x04func\0\0');
v3 = f2('\0asm\r\0\0\0\x01\x05\x01`\x01\x7F\0\x02\x11\x01\x04test\bfunc-i32\0\0');
v3 = f2('\0asm\r\0\0\0\x01\x05\x01`\x01}\0\x02\x11\x01\x04test\bfunc-f32\0\0');
v3 = f2('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x02\x12\x01\x04test\tfunc->i32\0\0');
v3 = f2('\0asm\r\0\0\0\x01\x05\x01`\0\x01}\x02\x12\x01\x04test\tfunc->f32\0\0');
v3 = f2('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x02\x16\x01\x04test\rfunc-i32->i32\0\0');
v3 = f2('\0asm\r\0\0\0\x01\x06\x01`\x01~\x01~\x02\x16\x01\x04test\rfunc-i64->i64\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x10\x01\x04test\x07unknown\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x14\x01\bspectest\x07unknown\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\x01\x7F\0\x02\r\x01\x04test\x04func\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x02\r\x01\x04test\x04func\0\0');
f6('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x02\r\x01\x04test\x04func\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x11\x01\x04test\bfunc-i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x02\x11\x01\x04test\bfunc-i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\x01}\0\x02\x11\x01\x04test\bfunc-i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\x01~\0\x02\x11\x01\x04test\bfunc-i32\0\0');
f6('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x02\x11\x01\x04test\bfunc-i32\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x12\x01\x04test\tfunc->i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\x01\x7F\0\x02\x12\x01\x04test\tfunc->i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\0\x01}\x02\x12\x01\x04test\tfunc->i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\0\x01~\x02\x12\x01\x04test\tfunc->i32\0\0');
f6('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x02\x12\x01\x04test\tfunc->i32\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x16\x01\x04test\rfunc-i32->i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\x01\x7F\0\x02\x16\x01\x04test\rfunc-i32->i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x02\x16\x01\x04test\rfunc-i32->i32\0\0');
f6('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x02\x13\x01\x04test\nglobal-i32\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x15\x01\x04test\ftable-10-inf\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x15\x01\x04test\fmemory-2-inf\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x13\x01\bspectest\x06global\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x12\x01\bspectest\x05table\0\0');
f6('\0asm\r\0\0\0\x01\x04\x01`\0\0\x02\x13\x01\bspectest\x06memory\0\0');
v3 = f2('\0asm\r\0\0\0\x01\x05\x01`\0\x01\x7F\x02\x86\x01\x07\bspectest\x06global\x03\x7F\0\bspectest\x06global\x03\x7F\0\bspectest\x06global\x03\x7F\0\bspectest\x06global\x03\x7F\0\bspectest\x06global\x03~\0\bspectest\x06global\x03}\0\bspectest\x06global\x03|\0\x03\x05\x04\0\0\0\0\x07!\x04\x05get-0\0\0\x05get-1\0\x01\x05get-x\0\x02\x05get-y\0\x03\n\x15\x04\x04\0#\0\x0B\x04\0#\x01\x0B\x04\0#\x02\x0B\x04\0#\x03\x0B');
f9(() => v3.exports['get-0'](), 666);
f9(() => v3.exports['get-1'](), 666);
v4(() => v3.exports['get-x'](), 666);
f9(() => v3.exports['get-y'](), 666);
v3 = f2('\0asm\r\0\0\0\x02\x14\x01\x04test\nglobal-i32\x03\x7F\0');
v3 = f2('\0asm\r\0\0\0\x02\x14\x01\x04test\nglobal-f32\x03}\0');
f6('\0asm\r\0\0\0\x02\x11\x01\x04test\x07unknown\x03\x7F\0');
f6('\0asm\r\0\0\0\x02\x15\x01\bspectest\x07unknown\x03\x7F\0');
f6('\0asm\r\0\0\0\x02\x0E\x01\x04test\x04func\x03\x7F\0');
f6('\0asm\r\0\0\0\x02\x16\x01\x04test\ftable-10-inf\x03\x7F\0');
f6('\0asm\r\0\0\0\x02\x16\x01\x04test\fmemory-2-inf\x03\x7F\0');
f6('\0asm\r\0\0\0\x02\x13\x01\bspectest\x05print\x03\x7F\0');
f6('\0asm\r\0\0\0\x02\x13\x01\bspectest\x05table\x03\x7F\0');
f6('\0asm\r\0\0\0\x02\x14\x01\bspectest\x06memory\x03\x7F\0');
v3 = f2('\0asm\r\0\0\0\x01\n\x02`\0\x01\x7F`\x01\x7F\x01\x7F\x02\x15\x01\bspectest\x05table\x01p\x01\n\x14\x03\x04\x03\x01\0\0\x07\b\x01\x04call\0\0\t\b\x01\0A\x01\x0B\x02\x01\x02\n\x13\x03\x07\0 \0\x11\0\0\x0B\x04\0A\x0B\x0B\x04\0A\x16\x0B');
f8(() => v3.exports['call'](0));
f9(() => v3.exports['call'](1), 11);
f9(() => v3.exports['call'](2), 22);
f8(() => v3.exports['call'](3));
f8(() => v3.exports['call'](100));
v3 = f2('\0asm\r\0\0\0\x01\n\x02`\0\x01\x7F`\x01\x7F\x01\x7F\x02\x15\x01\bspectest\x05table\x01p\x01\n\x14\x03\x04\x03\x01\0\0\x07\b\x01\x04call\0\0\t\b\x01\0A\x01\x0B\x02\x01\x02\n\x13\x03\x07\0 \0\x11\0\0\x0B\x04\0A\x0B\x0B\x04\0A\x16\x0B');
f8(() => v3.exports['call'](0));
f9(() => v3.exports['call'](1), 11);
f9(() => v3.exports['call'](2), 22);
f8(() => v3.exports['call'](3));
f8(() => v3.exports['call'](100));
f4('\0asm\r\0\0\0\x02\r\x02\0\0\x01p\0\n\0\0\x01p\0\n');
f4('\0asm\r\0\0\0\x02\x07\x01\0\0\x01p\0\n\x04\x04\x01p\0\n');
f4('\0asm\r\0\0\0\x04\x07\x02p\0\np\0\n');
v3 = f2('\0asm\r\0\0\0\x02\x17\x01\x04test\ftable-10-inf\x01p\0\n');
v3 = f2('\0asm\r\0\0\0\x02\x17\x01\x04test\ftable-10-inf\x01p\0\x05');
v3 = f2('\0asm\r\0\0\0\x02\x17\x01\x04test\ftable-10-inf\x01p\0\0');
v3 = f2('\0asm\r\0\0\0\x02\x14\x01\bspectest\x05table\x01p\0\n');
v3 = f2('\0asm\r\0\0\0\x02\x14\x01\bspectest\x05table\x01p\0\x05');
v3 = f2('\0asm\r\0\0\0\x02\x14\x01\bspectest\x05table\x01p\0\0');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x05table\x01p\x01\n\x14');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x05table\x01p\x01\x05\x14');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x05table\x01p\x01\0\x14');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x05table\x01p\x01\n\x19');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x05table\x01p\x01\x05\x19');
f6('\0asm\r\0\0\0\x02\x12\x01\x04test\x07unknown\x01p\0\n');
f6('\0asm\r\0\0\0\x02\x16\x01\bspectest\x07unknown\x01p\0\n');
f6('\0asm\r\0\0\0\x02\x17\x01\x04test\ftable-10-inf\x01p\0\f');
f6('\0asm\r\0\0\0\x02\x18\x01\x04test\ftable-10-inf\x01p\x01\n\x14');
f6('\0asm\r\0\0\0\x02\x14\x01\bspectest\x05table\x01p\0\f');
f6('\0asm\r\0\0\0\x02\x15\x01\bspectest\x05table\x01p\x01\n\x0F');
f6('\0asm\r\0\0\0\x02\x0F\x01\x04test\x04func\x01p\0\n');
f6('\0asm\r\0\0\0\x02\x15\x01\x04test\nglobal-i32\x01p\0\n');
f6('\0asm\r\0\0\0\x02\x17\x01\x04test\fmemory-2-inf\x01p\0\n');
f6('\0asm\r\0\0\0\x02\x14\x01\bspectest\x05print\x01p\0\n');
v3 = f2('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x02\x15\x01\bspectest\x06memory\x02\x01\x01\x02\x03\x02\x01\0\x07\b\x01\x04load\0\0\n\t\x01\x07\0 \0(\x02\0\x0B\x0B\x07\x01\0A\n\x0B\x01\x10');
f9(() => v3.exports['load'](0), 0);
f9(() => v3.exports['load'](10), 16);
f9(() => v3.exports['load'](8), 1048576);
f8(() => v3.exports['load'](1000000));
v3 = f2('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x02\x15\x01\bspectest\x06memory\x02\x01\x01\x02\x03\x02\x01\0\x07\b\x01\x04load\0\0\n\t\x01\x07\0 \0(\x02\0\x0B\x0B\x07\x01\0A\n\x0B\x01\x10');
f9(() => v3.exports['load'](0), 0);
f9(() => v3.exports['load'](10), 16);
f9(() => v3.exports['load'](8), 1048576);
f8(() => v3.exports['load'](1000000));
f4('\0asm\r\0\0\0\x02\x0B\x02\0\0\x02\0\x01\0\0\x02\0\x01');
f4('\0asm\r\0\0\0\x02\x06\x01\0\0\x02\0\x01\x05\x03\x01\0\0');
f4('\0asm\r\0\0\0\x05\x05\x02\0\0\0\0');
v3 = f2('\0asm\r\0\0\0\x02\x16\x01\x04test\fmemory-2-inf\x02\0\x02');
v3 = f2('\0asm\r\0\0\0\x02\x16\x01\x04test\fmemory-2-inf\x02\0\x01');
v3 = f2('\0asm\r\0\0\0\x02\x16\x01\x04test\fmemory-2-inf\x02\0\0');
v3 = f2('\0asm\r\0\0\0\x02\x14\x01\bspectest\x06memory\x02\0\x01');
v3 = f2('\0asm\r\0\0\0\x02\x14\x01\bspectest\x06memory\x02\0\0');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x06memory\x02\x01\x01\x02');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x06memory\x02\x01\0\x02');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x06memory\x02\x01\x01\x03');
v3 = f2('\0asm\r\0\0\0\x02\x15\x01\bspectest\x06memory\x02\x01\0\x03');
f6('\0asm\r\0\0\0\x02\x11\x01\x04test\x07unknown\x02\0\x01');
f6('\0asm\r\0\0\0\x02\x15\x01\bspectest\x07unknown\x02\0\x01');
f6('\0asm\r\0\0\0\x02\x16\x01\x04test\fmemory-2-inf\x02\0\x03');
f6('\0asm\r\0\0\0\x02\x17\x01\x04test\fmemory-2-inf\x02\x01\x02\x03');
f6('\0asm\r\0\0\0\x02\x14\x01\bspectest\x06memory\x02\0\x02');
f6('\0asm\r\0\0\0\x02\x15\x01\bspectest\x06memory\x02\x01\x01\x01');
f6('\0asm\r\0\0\0\x02\x12\x01\x04test\bfunc-i32\x02\0\x01');
f6('\0asm\r\0\0\0\x02\x14\x01\x04test\nglobal-i32\x02\0\x01');
f6('\0asm\r\0\0\0\x02\x16\x01\x04test\ftable-10-inf\x02\0\x01');
f6('\0asm\r\0\0\0\x02\x13\x01\bspectest\x05print\x02\0\x01');
f6('\0asm\r\0\0\0\x02\x14\x01\bspectest\x06global\x02\0\x01');
f6('\0asm\r\0\0\0\x02\x13\x01\bspectest\x05table\x02\0\x01');
f6('\0asm\r\0\0\0\x02\x14\x01\bspectest\x06memory\x02\0\x02');
f6('\0asm\r\0\0\0\x02\x15\x01\bspectest\x06memory\x02\x01\x01\x01');
v3 = f2('\0asm\r\0\0\0\x01\x06\x01`\x01\x7F\x01\x7F\x02\x15\x01\bspectest\x06memory\x02\x01\0\x03\x03\x02\x01\0\x07\b\x01\x04grow\0\0\n\b\x01\x06\0 \0@\0\x0B');
f9(() => v3.exports['grow'](0), 1);
f9(() => v3.exports['grow'](1), 1);
f9(() => v3.exports['grow'](0), 2);
f9(() => v3.exports['grow'](1), -1);
f9(() => v3.exports['grow'](0), 2);
