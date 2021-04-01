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
v3 = f2('\0asm\r\0\0\0\x01\'\b`\x02\x7F\x7F\0`\x02\x7F~\0`\x01\x7F\x01\x7F`\x01\x7F\x01~`\x01~\x01~`\x01}\x01}`\x01|\x01|`\0\0\x0387\0\0\x01\x02\x02\x03\x02\x02\x02\x04\x04\x04\x04\x04\x05\x06\x02\x02\x04\x04\x04\x05\x06\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x05\x03\x01\0\x01\x07\xD7\x041\fi32_load16_s\0\x06\fi32_load16_u\0\x07\bi32_load\0\b\fi64_load16_s\0\t\fi64_load16_u\0\n\fi64_load32_s\0\x0B\fi64_load32_u\0\f\bi64_load\0\r\bf32_load\0\x0E\bf64_load\0\x0F\x0Bi32_store16\0\x10\ti32_store\0\x11\x0Bi64_store16\0\x12\x0Bi64_store32\0\x13\ti64_store\0\x14\tf32_store\0\x15\tf64_store\0\x16\bassert_0\0\x17\bassert_1\0\x18\bassert_2\0\x19\bassert_3\0\x1A\bassert_4\0\x1B\bassert_5\0\x1C\bassert_6\0\x1D\bassert_7\0\x1E\bassert_8\0\x1F\bassert_9\0 \tassert_10\0!\tassert_11\0"\tassert_12\0#\tassert_13\0$\tassert_14\0%\tassert_15\0&\tassert_16\0\'\tassert_17\0(\tassert_18\0)\tassert_19\0*\tassert_20\0+\tassert_21\0,\tassert_22\0-\tassert_23\0.\tassert_24\0/\tassert_25\x000\tassert_26\x001\tassert_27\x002\tassert_28\x003\tassert_29\x004\tassert_30\x005\tassert_31\x006\nÒ\b7\x16\0 \0 \x01:\0\0 \0A\x01j \x01A\bv:\0\0\x0B\x14\0 \0 \x01\x10\0 \0A\x02j \x01A\x10v\x10\0\x0B\x16\0 \0 \x01\xA7\x10\x01 \0A\x04j \x01B \x88\xA7\x10\x01\x0B\x13\0 \0-\0\0 \0A\x01j-\0\0A\btr\x0B\x11\0 \0\x10\x03 \0A\x02j\x10\x03A\x10tr\x0B\x13\0 \0\x10\x04\xAD \0A\x04j\x10\x04\xADB \x86\x84\x0B\r\0A\0 \0\x10\0A\0.\x01\0\x0B\r\0A\0 \0\x10\0A\0/\x01\0\x0B\r\0A\0 \0\x10\x01A\0(\x02\0\x0B\x0E\0A\0 \0\xA7\x10\0A\x002\x01\0\x0B\x0E\0A\0 \0\xA7\x10\0A\x003\x01\0\x0B\x0E\0A\0 \0\xA7\x10\x01A\x004\x02\0\x0B\x0E\0A\0 \0\xA7\x10\x01A\x005\x02\0\x0B\r\0A\0 \0\x10\x02A\0)\x03\0\x0B\x0E\0A\0 \0\xBC\x10\x01A\0*\x02\0\x0B\x0E\0A\0 \0\xBD\x10\x02A\0+\x03\0\x0B\r\0A\0 \0;\x01\0A\0\x10\x03\x0B\r\0A\0 \x006\x02\0A\0\x10\x04\x0B\x0E\0A\0 \0=\x01\0A\0\x10\x03\xAD\x0B\x0E\0A\0 \0>\x02\0A\0\x10\x04\xAD\x0B\r\0A\0 \x007\x03\0A\0\x10\x05\x0B\x0E\0A\0 \x008\x02\0A\0\x10\x04\xBE\x0B\x0E\0A\0 \x009\x03\0A\0\x10\x05\xBF\x0B\x11\0\x02@B\x7F\x10\tB\x7FQE\r\0\x0F\x0B\0\x0B\x13\0\x02@Bî^\x10\tBî^QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B*\x10\tB*QE\r\0\x0F\x0B\0\x0B\x15\0\x02@B\x90ä\0\x10\tB\x90ä\0QE\r\0\x0F\x0B\0\x0B\x13\0\x02@B\x7F\x10\nBÿÿ\x03QE\r\0\x0F\x0B\0\x0B\x14\0\x02@Bî^\x10\nBîÞ\x03QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B*\x10\nB*QE\r\0\x0F\x0B\0\x0B\x15\0\x02@Bþ\x95\x03\x10\nBþ\x95\x03QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x7F\x10\x0BB\x7FQE\r\0\x0F\x0B\0\x0B\x17\0\x02@BÎÐâk\x10\x0BBÎÐâkQE\r\0\x0F\x0B\0\x0B\x17\0\x02@B\xB2\xAF\x9D\x14\x10\x0BB\xB2\xAF\x9D\x14QE\r\0\x0F\x0B\0\x0B\x19\0\x02@Bø\xACÑ\x91\x01\x10\x0BBø\xACÑ\x91\x01QE\r\0\x0F\x0B\0\x0B\x15\0\x02@B\x7F\x10\fBÿÿÿÿ\x0FQE\r\0\x0F\x0B\0\x0B\x18\0\x02@BÎÐâk\x10\fBÎÐâë\x0FQE\r\0\x0F\x0B\0\x0B\x17\0\x02@B\xB2\xAF\x9D\x14\x10\fB\xB2\xAF\x9D\x14QE\r\0\x0F\x0B\0\x0B\x19\0\x02@Bê\xBB\xB4Ý\n\x10\fBê\xBB\xB4Ý\nQE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x7F\x10\rB\x7FQE\r\0\x0F\x0B\0\x0B\x17\0\x02@BÎÐâk\x10\rBÎÐâkQE\r\0\x0F\x0B\0\x0B\x19\0\x02@Bê\xBB\xB4Ý\n\x10\rBê\xBB\xB4Ý\nQE\r\0\x0F\x0B\0\x0B#\0\x02@Bê\xBB\xB4õíßòÖ\xAB\x7F\x10\rBê\xBB\xB4õíßòÖ\xAB\x7FQE\r\0\x0F\x0B\0\x0B\x13\0\x02@B\x7F\x10\x12Bÿÿ\x03QE\r\0\x0F\x0B\0\x0B\x14\0\x02@Bî^\x10\x12BîÞ\x03QE\r\0\x0F\x0B\0\x0B\x11\0\x02@B*\x10\x12B*QE\r\0\x0F\x0B\0\x0B\x15\0\x02@Bþ\x95\x03\x10\x12Bþ\x95\x03QE\r\0\x0F\x0B\0\x0B\x15\0\x02@B\x7F\x10\x13Bÿÿÿÿ\x0FQE\r\0\x0F\x0B\0\x0B\x16\0\x02@Bî^\x10\x13BîÞÿÿ\x0FQE\r\0\x0F\x0B\0\x0B\x17\0\x02@B\xB2\xAF\x9D\x14\x10\x13B\xB2\xAF\x9D\x14QE\r\0\x0F\x0B\0\x0B\x19\0\x02@Bþ\x95\xB7õ\r\x10\x13Bþ\x95\xB7õ\rQE\r\0\x0F\x0B\0\x0B\x11\0\x02@B\x7F\x10\x14B\x7FQE\r\0\x0F\x0B\0\x0B\x17\0\x02@BÎÐâk\x10\x14BÎÐâkQE\r\0\x0F\x0B\0\x0B\x19\0\x02@Bê\xBB\xB4Ý\n\x10\x14Bê\xBB\xB4Ý\nQE\r\0\x0F\x0B\0\x0B#\0\x02@Bê\xBB\xB4õíßòÖ\xAB\x7F\x10\x14Bê\xBB\xB4õíßòÖ\xAB\x7FQE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['i32_load16_s'](-1), -1);
f9(() => v3.exports['i32_load16_s'](-4242), -4242);
f9(() => v3.exports['i32_load16_s'](42), 42);
f9(() => v3.exports['i32_load16_s'](12816), 12816);
f9(() => v3.exports['i32_load16_u'](-1), 65535);
f9(() => v3.exports['i32_load16_u'](-4242), 61294);
f9(() => v3.exports['i32_load16_u'](42), 42);
f9(() => v3.exports['i32_load16_u'](51966), 51966);
f9(() => v3.exports['i32_load'](-1), -1);
f9(() => v3.exports['i32_load'](-42424242), -42424242);
f9(() => v3.exports['i32_load'](42424242), 42424242);
f9(() => v3.exports['i32_load'](-1414717974), -1414717974);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
f9(() => push.exports['assert_3']());
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
f9(() => v3.exports['assert_17']());
f9(() => v3.exports['assert_18']());
f9(() => v3.exports['assert_19']());
f9(() => v3.exports['f32_load'](v9(-1)), v9(-1));
f9(() => v3.exports['f32_load'](v9(0.0123399998993)), v9(0.0123399998993));
f9(() => v3.exports['f32_load'](v9(4242.42431641)), v9(4242.42431641));
f9(() => v3.exports['f32_load'](v9(3.40282346639e+38)), v9(3.40282346639e+38));
f9(() => v3.exports['f64_load'](-1), -1);
f9(() => v3.exports['f64_load'](1234.56789), 1234.56789);
f9(() => v3.exports['f64_load'](424242.424242), 424242.424242);
f9(() => v3.exports['f64_load'](1.7976931348623157e+308), 1.7976931348623157e+308);
f9(() => v3.exports['i32_store16'](-1), 65535);
f9(() => v3.exports['i32_store16'](-4242), 61294);
f9(() => v3.exports['i32_store16'](42), 42);
f9(() => v3.exports['i32_store16'](51966), 51966);
f9(() => v3.exports['i32_store'](-1), -1);
f9(() => v3.exports['i32_store'](-4242), -4242);
f9(() => v3.exports['i32_store'](42424242), 42424242);
f9(() => v3.exports['i32_store'](-559035650), -559035650);
f9(() => v3.exports['assert_20']());
f9(() => v3.exports['assert_21']());
f9(() => v3.exports['assert_22']());
f9(() => v3.exports['assert_23']());
f9(() => v3.exports['assert_24']());
f9(() => v3.exports['assert_25']());
f9(() => v3.exports['assert_26']());
f9(() => v3.exports['assert_27']());
f9(() => v3.exports['assert_28']());
f9(() => v3.exports['assert_29']());
f9(() => v3.exports['assert_30']());
f9(() => v3.exports['assert_31']());
f9(() => v3.exports['f32_store'](v9(-1)), v9(-1));
f9(() => v3.exports['f32_store'](v9(0.0123399998993)), v9(0.0123399998993));
f9(() => v3.exports['f32_store'](v9(4242.42431641)), v9(4242.42431641));
f9(() => v3.exports['f32_store'](v9(3.40282346639e+38)), v9(3.40282346639e+38));
f9(() => v3.exports['f64_store'](-1), -1);
f9(() => v3.exports['f64_store'](1234.56789), 1234.56789);
f9(() => v3.exports['f64_store'](424242.424242), 424242.424242);
f9(() => v3.exports['f64_store'](1.7976931348623157e+308), 1.7976931348623157e+308);
