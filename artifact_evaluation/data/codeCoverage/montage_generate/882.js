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
v3 = f2('\0asm\r\0\0\0\x01K\x0F`\0\x01\x7F`\0\x01~`\0\x01}`\0\x01|`\x01\x7F\x01\x7F`\x01~\x01~`\x01}\x01}`\x01|\x01|`\x02}\x7F\x01\x7F`\x02\x7F~\x01~`\x02|}\x01}`\x02~|\x01|`\x02~~\x01~`\x01~\x01\x7F`\0\0\x0398\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\0\x01\x02\x03\0\x01\x02\x03\0\x01\x02\x03\x05\f\x05\r\r\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x0E\x07\x8D\x04+\btype-i32\0\f\btype-i64\0\r\btype-f32\0\x0E\btype-f64\0\x0F\x0Etype-first-i32\0\x10\x0Etype-first-i64\0\x11\x0Etype-first-f32\0\x12\x0Etype-first-f64\0\x13\x0Ftype-second-i32\0\x14\x0Ftype-second-i64\0\x15\x0Ftype-second-f32\0\x16\x0Ftype-second-f64\0\x17\x03fac\0\x18\x07fac-acc\0\x19\x03fib\0\x1A\x04even\0\x1B\x03odd\0\x1C\x07runaway\0\x1D\x0Emutual-runaway\0\x1E\bassert_0\0 \bassert_1\0!\bassert_2\0"\bassert_3\0#\bassert_4\0$\bassert_5\0%\bassert_6\0&\bassert_7\0\'\bassert_8\0(\bassert_9\0)\tassert_10\0*\tassert_11\0+\tassert_12\0,\tassert_13\0-\tassert_14\0.\tassert_15\0/\tassert_16\x000\tassert_17\x001\tassert_18\x002\tassert_19\x003\tassert_20\x004\tassert_21\x005\tassert_22\x006\tassert_23\x007\n\x92\x068\x05\0A\xB2\x02\x0B\x05\0Bä\x02\x0B\x07\0C\0 sE\x0B\x0B\0D\0\0\0\0\0È\xAE@\x0B\x04\0 \0\x0B\x04\0 \0\x0B\x04\0 \0\x0B\x04\0 \0\x0B\x04\0 \x01\x0B\x04\0 \x01\x0B\x04\0 \x01\x0B\x04\0 \x01\x0B\x04\0\x10\0\x0B\x04\0\x10\x01\x0B\x04\0\x10\x02\x0B\x04\0\x10\x03\x0B\x06\0A \x10\x04\x0B\x07\0BÀ\0\x10\x05\x0B\t\0CÃõ\xA8?\x10\x06\x0B\r\0D=\n\xD7\xA3p=ú?\x10\x07\x0B\x0B\0Cff\0BA \x10\b\x0B\t\0A BÀ\0\x10\t\x0B\x12\0D\0\0\0\0\0\0P@C\0\0\0B\x10\n\x0B\x10\0BÀ\0Dfffff\x06P@\x10\x0B\x0B\x15\0 \0P\x04~B\x01\x05 \0 \0B\x01}\x10\x18~\x0B\x0B\x17\0 \0P\x04~ \x01\x05 \0B\x01} \0 \x01~\x10\x19\x0B\x0B\x1C\0 \0B\x01X\x04~B\x01\x05 \0B\x02}\x10\x1A \0B\x01}\x10\x1A|\x0B\x0B\x12\0 \0P\x04\x7FA,\x05 \0B\x01}\x10\x1C\x0B\x0B\x13\0 \0P\x04\x7FAã\0\x05 \0B\x01}\x10\x1B\x0B\x0B\x04\0\x10\x1D\x0B\x04\0\x10\x1F\x0B\x04\0\x10\x1E\x0B\x10\0\x02@\x10\rBä\x02QE\r\0\x0F\x0B\0\x0B\x10\0\x02@\x10\x11BÀ\0QE\r\0\x0F\x0B\0\x0B\x10\0\x02@\x10\x15BÀ\0QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\0\x10\x18B\x01QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x01\x10\x18B\x01QE\r\0\x0F\x0B\0\x0B\x12\0\x02@B\x05\x10\x18Bø\0QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x19\x10\x18B\x80\x80\x80Þ\x87\x92ìÏá\0QE\r\0\x0F\x0B\0\x0B\x13\0\x02@B\0B\x01\x10\x19B\x01QE\r\0\x0F\x0B\0\x0B\x13\0\x02@B\x01B\x01\x10\x19B\x01QE\r\0\x0F\x0B\0\x0B\x14\0\x02@B\x05B\x01\x10\x19Bø\0QE\r\0\x0F\x0B\0\x0B\x1C\0\x02@B\x19B\x01\x10\x19B\x80\x80\x80Þ\x87\x92ìÏá\0QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\0\x10\x1AB\x01QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x01\x10\x1AB\x01QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x02\x10\x1AB\x02QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x05\x10\x1AB\bQE\r\0\x0F\x0B\0\x0B\x13\0\x02@B\x14\x10\x1ABÂÕ\0QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\0\x10\x1BA,FE\r\0\x0F\x0B\0\x0B\x12\0\x02@B\x01\x10\x1BAã\0FE\r\0\x0F\x0B\0\x0B\x12\0\x02@Bä\0\x10\x1BA,FE\r\0\x0F\x0B\0\x0B\x13\0\x02@BÍ\0\x10\x1BAã\0FE\r\0\x0F\x0B\0\x0B\x12\0\x02@B\0\x10\x1CAã\0FE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x01\x10\x1CA,FE\r\0\x0F\x0B\0\x0B\x13\0\x02@BÈ\x01\x10\x1CAã\0FE\r\0\x0F\x0B\0\x0B\x12\0\x02@BÍ\0\x10\x1CA,FE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['type-i32'](), 306);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['type-f32'](), v9(3890));
f9(() => v3.exports['type-f64'](), 3940);
f9(() => v3.exports['type-first-i32'](), 32);
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['type-first-f32'](), v9(1.32000005245));
f9(() => v3.exports['type-first-f64'](), 1.64);
f9(() => v3.exports['type-second-i32'](), 32);
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['type-second-f32'](), v9(32));
f9(() => v3.exports['type-second-f64'](), 64.1);
f9(() => v3.exports['assert_3']());
f9(() => v3.exports['assert_4']());
f9(() => v3.exports['assert_5']());
f9(() => v3.exports['assert_6']());
f9(() => v3.exports['assert_7']());
f9(() => v3.exports['assert_8']());
f9(() => v3.exports['assert_9']());
f9(() => v3.exports['assert_10']());
f9(() => v3.exports['assert_11']());
f9(() => v3.exports['assert_12']());
f9(() => v3.exports['assert_13']());
f9(() => v3.exports['assert_14']());
f9(() => v3.exports['assert_15']());
f9(() => v3.exports['assert_16']());
f9(() => this.y['assert_17']());
f9(() => v3.exports['assert_18']());
f9(() => v3.exports['assert_19']());
f9(() => v3.exports['assert_20']());
f9(() => v3.exports['assert_21']());
f9(() => v3.exports['assert_22']());
f9(() => v3.exports['assert_23']());
f8(() => v3.exports['runaway']());
f8(() => v3.exports['mutual-runaway']());
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x03\x02\0\0\n\n\x02\x05\0\x10\x01E\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\b\x02`\0\0`\0\x01~\x03\x03\x02\0\x01\n\f\x02\x05\0\x10\x01E\x0B\x04\0B\x01\x0B');
f4('\0asm\r\0\0\0\x01\b\x02`\0\0`\x01\x7F\0\x03\x03\x02\0\x01\n\t\x02\x04\0\x10\x01\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\t\x02`\0\0`\x02|\x7F\0\x03\x03\x02\0\x01\n\t\x02\x04\0\x10\x01\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x03\x02\0\0\n\x0B\x02\x06\0A\x01\x10\x01\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x03\x02\0\0\n\x14\x02\x0F\0D\0\0\0\0\0\0\0@A\x01\x10\x01\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\t\x02`\0\0`\x02\x7F\x7F\0\x03\x03\x02\0\x01\n\f\x02\x07\0\x01A\x01\x10\x01\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\t\x02`\0\0`\x02\x7F\x7F\0\x03\x03\x02\0\x01\n\f\x02\x07\0A\x01\x01\x10\x01\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\t\x02`\0\0`\x02\x7F|\0\x03\x03\x02\0\x01\n\x14\x02\x0F\0D\0\0\0\0\0\0ð?A\x01\x10\x01\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\t\x02`\0\0`\x02|\x7F\0\x03\x03\x02\0\x01\n\x14\x02\x0F\0A\x01D\0\0\0\0\0\0ð?\x10\x01\x0B\x02\0\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\x06\x01\x04\0\x10\x01\x0B');
f4('\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\n\n\x01\b\0\x10\x94\x98Ûâ\x03\x0B');
