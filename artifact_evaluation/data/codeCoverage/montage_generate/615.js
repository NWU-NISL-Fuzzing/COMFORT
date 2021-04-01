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
v3 = f2('\0asm\r\0\0\0\x01\x10\x03`\x02\x7F\x7F\x01\x7F`\x02~~\x01\x7F`\0\0\x03\x07\x06\0\0\x01\x01\x02\x02\x07\x83\x01\x06\x18i32.no_fold_cmp_s_offset\0\0\x18i32.no_fold_cmp_u_offset\0\x01\x18i64.no_fold_cmp_s_offset\0\x02\x18i64.no_fold_cmp_u_offset\0\x03\bassert_0\0\x04\bassert_1\0\x05\nj\x06\r\0 \0A\x01j \x01A\x01jH\x0B\r\0 \0A\x01j \x01A\x01jI\x0B\r\0 \0B\x01| \x01B\x01|S\x0B\r\0 \0B\x01| \x01B\x01|T\x0B\x1C\0\x02@Bÿÿÿÿÿÿÿÿÿ\0B\0\x10\x02A\x01FE\r\0\x0F\x0B\0\x0B\x13\0\x02@B\x7FB\0\x10\x03A\x01FE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.no_fold_cmp_s_offset'](2147483647, 0), 1);
f9(() => v3.exports['i32.no_fold_cmp_u_offset'](-1, 0), 1);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
v3 = f2('\0asm\r\0\0\0\x01\t\x02`\x01~\x01~`\0\0\x03\x04\x03\0\x01\x01\x073\x03\x19i64.no_fold_wrap_extend_s\0\0\bassert_0\0\x01\bassert_1\0\x02\nC\x03\x06\0 \0\xA7\xAC\x0B\x1C\0\x02@BðÀÁ\x82\x84\x86\x88\b\x10\0BðÀÁ\x82\x04QE\r\0\x0F\x0B\0\x0B\x1D\0\x02@B\xA0á\x83\x87\x8D\x98\xACÐ\0\x10\0B\xA0á\x83\x87}QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
v3 = f2('\0asm\r\0\0\0\x01\t\x02`\x01~\x01~`\0\0\x03\x03\x02\0\x01\x07(\x02\x19i64.no_fold_wrap_extend_u\0\0\bassert_0\0\x01\n%\x02\x06\0 \0\xA7\xAD\x0B\x1C\0\x02@BðÀÁ\x82\x84\x86\x88\b\x10\0BðÀÁ\x82\x04QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['assert_0']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\x07\x06\0\0\x01\x01\x02\x02\x07w\x06\x15i32.no_fold_shl_shr_s\0\0\x15i32.no_fold_shl_shr_u\0\x01\x15i64.no_fold_shl_shr_s\0\x02\x15i64.no_fold_shl_shr_u\0\x03\bassert_0\0\x04\bassert_1\0\x05\nc\x06\n\0 \0A\x01tA\x01u\x0B\n\0 \0A\x01tA\x01v\x0B\n\0 \0B\x01\x86B\x01\x87\x0B\n\0 \0B\x01\x86B\x01\x88\x0B\x1A\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7F\x10\x02B\0QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7F\x10\x03B\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.no_fold_shl_shr_s'](-2147483648), 0);
f9(() => v3.exports['i32.no_fold_shl_shr_u'](-2147483648), 0);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\x07\x06\0\0\x01\x01\x02\x02\x07w\x06\x15i32.no_fold_shr_s_shl\0\0\x15i32.no_fold_shr_u_shl\0\x01\x15i64.no_fold_shr_s_shl\0\x02\x15i64.no_fold_shr_u_shl\0\x03\bassert_0\0\x04\bassert_1\0\x05\nQ\x06\n\0 \0A\x01uA\x01t\x0B\n\0 \0A\x01vA\x01t\x0B\n\0 \0B\x01\x87B\x01\x86\x0B\n\0 \0B\x01\x88B\x01\x86\x0B\x11\0\x02@B\x01\x10\x02B\0QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x01\x10\x03B\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.no_fold_shr_s_shl'](1), 0);
f9(() => v3.exports['i32.no_fold_shr_u_shl'](1), 0);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\x07\x06\0\0\x01\x01\x02\x02\x07w\x06\x15i32.no_fold_div_s_mul\0\0\x15i32.no_fold_div_u_mul\0\x01\x15i64.no_fold_div_s_mul\0\x02\x15i64.no_fold_div_u_mul\0\x03\bassert_0\0\x04\bassert_1\0\x05\nQ\x06\n\0 \0A\x06mA\x06l\x0B\n\0 \0A\x06nA\x06l\x0B\n\0 \0B\x06\x7FB\x06~\x0B\n\0 \0B\x06\x80B\x06~\x0B\x11\0\x02@B\x01\x10\x02B\0QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x01\x10\x03B\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.no_fold_div_s_mul'](1), 0);
f9(() => v3.exports['i32.no_fold_div_u_mul'](1), 0);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\x07\x06\0\0\x01\x01\x02\x02\x07w\x06\x15i32.no_fold_mul_div_s\0\0\x15i32.no_fold_mul_div_u\0\x01\x15i64.no_fold_mul_div_s\0\x02\x15i64.no_fold_mul_div_u\0\x03\bassert_0\0\x04\bassert_1\0\x05\nc\x06\n\0 \0A\x06lA\x06m\x0B\n\0 \0A\x06lA\x06n\x0B\n\0 \0B\x06~B\x06\x7F\x0B\n\0 \0B\x06~B\x06\x80\x0B\x1A\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7F\x10\x02B\0QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7F\x10\x03B\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.no_fold_mul_div_s'](-2147483648), 0);
f9(() => v3.exports['i32.no_fold_mul_div_u'](-2147483648), 0);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\x04\x03\0\x01\x02\x078\x03\x13i32.no_fold_div_s_2\0\0\x13i64.no_fold_div_s_2\0\x01\bassert_0\0\x02\n#\x03\x07\0 \0A\x02m\x0B\x07\0 \0B\x02\x7F\x0B\x11\0\x02@Bu\x10\x01B{QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.no_fold_div_s_2'](-11), -5);
f9(() => v3.exports['assert_0']());
f2 = (Symbol(14) === 'string') - Infinity * value;
f9(() => v3.exports['i32.no_fold_rem_s_2'](-11), -1);
f9(() => v3.exports['assert_0']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\x07\x06\0\0\x01\x01\x02\x02\x07O\x06\x0Bi32.div_s_3\0\0\x0Bi32.div_u_3\0\x01\x0Bi64.div_s_3\0\x02\x0Bi64.div_u_3\0\x03\bassert_0\0\x04\bassert_1\0\x05\n5\x06\x07\0 \0A\0m\x0B\x07\0 \0A\0n\x0B\x07\0 \0B\0\x7F\x0B\x07\0 \0B\0\x80\x0B\t\0BÇ\0\x10\x02\f\0\x0B\t\0BÇ\0\x10\x03\f\0\x0B');
f8(() => v3.exports['i32.div_s_3'](71));
f8(() => v3.exports['i32.div_u_3'](71));
f8(() => v3.exports['assert_0']());
f8(() => v3.exports['assert_1']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\t\b\0\0\x01\x01\x02\x02\x02\x02\x07e\b\x0Bi32.div_s_3\0\0\x0Bi32.div_u_3\0\x01\x0Bi64.div_s_3\0\x02\x0Bi64.div_u_3\0\x03\bassert_0\0\x04\bassert_1\0\x05\bassert_2\0\x06\bassert_3\0\x07\n\x8C\x01\b\x07\0 \0A\x03m\x0B\x07\0 \0A\x03n\x0B\x07\0 \0B\x03\x7F\x0B\x07\0 \0B\x03\x80\x0B\x12\0\x02@BÇ\0\x10\x02B\x17QE\r\0\x0F\x0B\0\x0B!\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x800\x10\x02B\x80\x80\x80\x80\x80\x80\x80\x80\x10QE\r\0\x0F\x0B\0\x0B\x12\0\x02@BÇ\0\x10\x03B\x17QE\r\0\x0F\x0B\0\x0B"\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80@\x10\x03B\x80\x80\x80\x80\x80\x80\x80\x80À\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.div_s_3'](71), 23);
f9(() => v3.exports['i32.div_s_3'](1610612736), 536870912);
f9(() => v3.exports['i32.div_u_3'](71), 23);
f9(() => v3.exports['i32.div_u_3'](-1073741824), 1073741824);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['assert_3']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\t\b\0\0\x01\x01\x02\x02\x02\x02\x07e\b\x0Bi32.div_s_5\0\0\x0Bi32.div_u_5\0\x01\x0Bi64.div_s_5\0\x02\x0Bi64.div_u_5\0\x03\bassert_0\0\x04\bassert_1\0\x05\bassert_2\0\x06\bassert_3\0\x07\n\x8D\x01\b\x07\0 \0A\x05m\x0B\x07\0 \0A\x05n\x0B\x07\0 \0B\x05\x7F\x0B\x07\0 \0B\x05\x80\x0B\x12\0\x02@BÇ\0\x10\x02B\x0EQE\r\0\x0F\x0B\0\x0B"\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80Ð\0\x10\x02B\x80\x80\x80\x80\x80\x80\x80\x80\x10QE\r\0\x0F\x0B\0\x0B\x12\0\x02@BÇ\0\x10\x03B\x0EQE\r\0\x0F\x0B\0\x0B"\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80\xA0\x7F\x10\x03B\x80\x80\x80\x80\x80\x80\x80\x80 QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.div_s_5'](71), 14);
f9(() => v3.exports['i32.div_s_5'](1342177280), 268435456);
f9(() => v3.exports['i32.div_u_5'](71), 14);
f9(() => v3.exports['i32.div_u_5'](-1610612736), 536870912);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['assert_3']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\t\b\0\0\x01\x01\x02\x02\x02\x02\x07e\b\x0Bi32.div_s_7\0\0\x0Bi32.div_u_7\0\x01\x0Bi64.div_s_7\0\x02\x0Bi64.div_u_7\0\x03\bassert_0\0\x04\bassert_1\0\x05\bassert_2\0\x06\bassert_3\0\x07\n\x8C\x01\b\x07\0 \0A\x07m\x0B\x07\0 \0A\x07n\x0B\x07\0 \0B\x07\x7F\x0B\x07\0 \0B\x07\x80\x0B\x12\0\x02@BÇ\0\x10\x02B\nQE\r\0\x0F\x0B\0\x0B"\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80ð\0\x10\x02B\x80\x80\x80\x80\x80\x80\x80\x80\x10QE\r\0\x0F\x0B\0\x0B\x12\0\x02@BÇ\0\x10\x03B\nQE\r\0\x0F\x0B\0\x0B!\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80`\x10\x03B\x80\x80\x80\x80\x80\x80\x80\x80 QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.div_s_7'](71), 10);
f9(() => v3.exports['i32.div_s_7'](1879048192), 268435456);
f9(() => v3.exports['i32.div_u_7'](71), 10);
f9(() => v3.exports['i32.div_u_7'](-536870912), 536870912);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['assert_3']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\t\b\0\0\x01\x01\x02\x02\x02\x02\x07e\b\x0Bi32.rem_s_3\0\0\x0Bi32.rem_u_3\0\x01\x0Bi64.rem_s_3\0\x02\x0Bi64.rem_u_3\0\x03\bassert_0\0\x04\bassert_1\0\x05\bassert_2\0\x06\bassert_3\0\x07\n{\b\x07\0 \0A\x03o\x0B\x07\0 \0A\x03p\x0B\x07\0 \0B\x03\x81\x0B\x07\0 \0B\x03\x82\x0B\x12\0\x02@BÇ\0\x10\x02B\x02QE\r\0\x0F\x0B\0\x0B\x19\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x800\x10\x02B\0QE\r\0\x0F\x0B\0\x0B\x12\0\x02@BÇ\0\x10\x03B\x02QE\r\0\x0F\x0B\0\x0B\x19\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80@\x10\x03B\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.rem_s_3'](71), 2);
f9(() => v3.exports['i32.rem_s_3'](1610612736), 0);
f9(() => v3.exports['i32.rem_u_3'](71), 2);
f9(() => v3.exports['i32.rem_u_3'](-1073741824), 0);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['assert_3']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\t\b\0\0\x01\x01\x02\x02\x02\x02\x07e\b\x0Bi32.rem_s_5\0\0\x0Bi32.rem_u_5\0\x01\x0Bi64.rem_s_5\0\x02\x0Bi64.rem_u_5\0\x03\bassert_0\0\x04\bassert_1\0\x05\bassert_2\0\x06\bassert_3\0\x07\n}\b\x07\0 \0A\x05o\x0B\x07\0 \0A\x05p\x0B\x07\0 \0B\x05\x81\x0B\x07\0 \0B\x05\x82\x0B\x12\0\x02@BÇ\0\x10\x02B\x01QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80Ð\0\x10\x02B\0QE\r\0\x0F\x0B\0\x0B\x12\0\x02@BÇ\0\x10\x03B\x01QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80\xA0\x7F\x10\x03B\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.rem_s_5'](71), 1);
f9(() => v3.exports['i32.rem_s_5'](1342177280), 0);
f9(() => v3.exports['i32.rem_u_5'](71), 1);
f9(() => v3.exports['i32.rem_u_5'](-1610612736), 0);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['assert_3']());
v3 = f2('\0asm\r\0\0\0\x01\x0E\x03`\x01\x7F\x01\x7F`\x01~\x01~`\0\0\x03\t\b\0\0\x01\x01\x02\x02\x02\x02\x07e\b\x0Bi32.rem_s_7\0\0\x0Bi32.rem_u_7\0\x01\x0Bi64.rem_s_7\0\x02\x0Bi64.rem_u_7\0\x03\bassert_0\0\x04\bassert_1\0\x05\bassert_2\0\x06\bassert_3\0\x07\n|\b\x07\0 \0A\x07o\x0B\x07\0 \0A\x07p\x0B\x07\0 \0B\x07\x81\x0B\x07\0 \0B\x07\x82\x0B\x12\0\x02@BÇ\0\x10\x02B\x01QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80ð\0\x10\x02B\0QE\r\0\x0F\x0B\0\x0B\x12\0\x02@BÇ\0\x10\x03B\x01QE\r\0\x0F\x0B\0\x0B\x19\0\x02@B\x80\x80\x80\x80\x80\x80\x80\x80`\x10\x03B\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32.rem_s_7'](71), 1);
f9(() => v3.exports['i32.rem_s_7'](1879048192), 0);
f9(() => v3.exports['i32.rem_u_7'](71), 1);
f9(() => v3.exports['i32.rem_u_7'](-536870912), 0);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['assert_3']());
