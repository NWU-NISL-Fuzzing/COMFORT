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
function f6(bytes) {
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
v3 = f2('\0asm\r\0\0\0\x01\f\x03`\0\x01\x7F`\0\x01~`\0\0\x03[Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x07û\x0BZ\x07f32.nan\0\0\x10f32.positive_nan\0\x01\x10f32.negative_nan\0\x02\rf32.plain_nan\0\x03"f32.informally_known_as_plain_snan\0\x04\x10f32.all_ones_nan\0\x05\ff32.misc_nan\0\x06\x15f32.misc_positive_nan\0\x07\x15f32.misc_negative_nan\0\b\ff32.infinity\0\t\x15f32.positive_infinity\0\n\x15f32.negative_infinity\0\x0B\bf32.zero\0\f\x11f32.positive_zero\0\r\x11f32.negative_zero\0\x0E\bf32.misc\0\x0F\x10f32.min_positive\0\x10\x0Ef32.min_normal\0\x11\x0Ef32.max_finite\0\x12\x11f32.max_subnormal\0\x13\x10f32.trailing_dot\0\x14\ff32_dec.zero\0\x15\x15f32_dec.positive_zero\0\x16\x15f32_dec.negative_zero\0\x17\ff32_dec.misc\0\x18\x14f32_dec.min_positive\0\x19\x12f32_dec.min_normal\0\x1A\x15f32_dec.max_subnormal\0\x1B\x12f32_dec.max_finite\0\x1C\x14f32_dec.trailing_dot\0\x1D\x07f64.nan\0\x1E\x10f64.positive_nan\0\x1F\x10f64.negative_nan\0 \rf64.plain_nan\0!"f64.informally_known_as_plain_snan\0"\x10f64.all_ones_nan\0#\ff64.misc_nan\0$\x15f64.misc_positive_nan\0%\x15f64.misc_negative_nan\0&\ff64.infinity\0\'\x15f64.positive_infinity\0(\x15f64.negative_infinity\0)\bf64.zero\0*\x11f64.positive_zero\0+\x11f64.negative_zero\0,\bf64.misc\0-\x10f64.min_positive\0.\x0Ef64.min_normal\0/\x11f64.max_subnormal\x000\x0Ef64.max_finite\x001\x10f64.trailing_dot\x002\ff64_dec.zero\x003\x15f64_dec.positive_zero\x004\x15f64_dec.negative_zero\x005\ff64_dec.misc\x006\x14f64_dec.min_positive\x007\x12f64_dec.min_normal\x008\x15f64_dec.max_subnormal\x009\x12f64_dec.max_finite\0:\x14f64_dec.trailing_dot\0;\bassert_0\0<\bassert_1\0=\bassert_2\0>\bassert_3\0?\bassert_4\0@\bassert_5\0A\bassert_6\0B\bassert_7\0C\bassert_8\0D\bassert_9\0E\tassert_10\0F\tassert_11\0G\tassert_12\0H\tassert_13\0I\tassert_14\0J\tassert_15\0K\tassert_16\0L\tassert_17\0M\tassert_18\0N\tassert_19\0O\tassert_20\0P\tassert_21\0Q\tassert_22\0R\tassert_23\0S\tassert_24\0T\tassert_25\0U\tassert_26\0V\tassert_27\0W\tassert_28\0X\tassert_29\0Y\n\xB6\nZ\b\0C\0\0À\x7F\xBC\x0B\b\0C\0\0À\x7F\xBC\x0B\b\0C\0\0Àÿ\xBC\x0B\b\0C\0\0À\x7F\xBC\x0B\b\0C\0\0\xA0\x7F\xBC\x0B\b\0Cÿÿÿÿ\xBC\x0B\b\0CE#\x81\x7F\xBC\x0B\b\0CP@\xB0\x7F\xBC\x0B\b\0CÞ\xBCªÿ\xBC\x0B\b\0C\0\0\x80\x7F\xBC\x0B\b\0C\0\0\x80\x7F\xBC\x0B\b\0C\0\0\x80ÿ\xBC\x0B\b\0C\0\0\0\0\xBC\x0B\b\0C\0\0\0\0\xBC\x0B\b\0C\0\0\0\x80\xBC\x0B\b\0CÛ\x0FÉ@\xBC\x0B\b\0C\x01\0\0\0\xBC\x0B\b\0C\0\0\x80\0\xBC\x0B\b\0Cÿÿ\x7F\x7F\xBC\x0B\b\0Cÿÿ\x7F\0\xBC\x0B\b\0C\0\0\x80D\xBC\x0B\b\0C\0\0\0\0\xBC\x0B\b\0C\0\0\0\0\xBC\x0B\b\0C\0\0\0\x80\xBC\x0B\b\0CÛ\x0FÉ@\xBC\x0B\b\0C\x01\0\0\0\xBC\x0B\b\0C\0\0\x80\0\xBC\x0B\b\0Cÿÿ\x7F\0\xBC\x0B\b\0Cÿÿ\x7F\x7F\xBC\x0B\b\0Cù\x02\x15P\xBC\x0B\f\0D\0\0\0\0\0\0ø\x7F\xBD\x0B\f\0D\0\0\0\0\0\0ø\x7F\xBD\x0B\f\0D\0\0\0\0\0\0øÿ\xBD\x0B\f\0D\0\0\0\0\0\0ø\x7F\xBD\x0B\f\0D\0\0\0\0\0\0ô\x7F\xBD\x0B\f\0Dÿÿÿÿÿÿÿÿ\xBD\x0B\f\0D\xBC\x9AxV4\x12ð\x7F\xBD\x0B\f\0D\t\b\x07\x06\x05\x04ó\x7F\xBD\x0B\f\0DE#\x01ïÍ\xABòÿ\xBD\x0B\f\0D\0\0\0\0\0\0ð\x7F\xBD\x0B\f\0D\0\0\0\0\0\0ð\x7F\xBD\x0B\f\0D\0\0\0\0\0\0ðÿ\xBD\x0B\f\0D\0\0\0\0\0\0\0\0\xBD\x0B\f\0D\0\0\0\0\0\0\0\0\xBD\x0B\f\0D\0\0\0\0\0\0\0\x80\xBD\x0B\f\0D\x18-DTû!\x19@\xBD\x0B\f\0D\x01\0\0\0\0\0\0\0\xBD\x0B\f\0D\0\0\0\0\0\0\x10\0\xBD\x0B\f\0Dÿÿÿÿÿÿ\x0F\0\xBD\x0B\f\0Dÿÿÿÿÿÿï\x7F\xBD\x0B\f\0D\0\0\0\0\0\x000F\xBD\x0B\f\0D\0\0\0\0\0\0\0\0\xBD\x0B\f\0D\0\0\0\0\0\0\0\0\xBD\x0B\f\0D\0\0\0\0\0\0\0\x80\xBD\x0B\f\0D\x18-DTû!\x19@\xBD\x0B\f\0D\x01\0\0\0\0\0\0\0\xBD\x0B\f\0D\0\0\0\0\0\0\x10\0\xBD\x0B\f\0Dÿÿÿÿÿÿ\x0F\0\xBD\x0B\f\0Dÿÿÿÿÿÿï\x7F\xBD\x0B\f\0D}Ã\x94%\xADI\xB2T\xBD\x0B\x18\0\x02@\x10\x1EB\x80\x80\x80\x80\x80\x80\x80üÿ\0QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10\x1FB\x80\x80\x80\x80\x80\x80\x80üÿ\0QE\r\0\x0F\x0B\0\x0B\x16\0\x02@\x10 B\x80\x80\x80\x80\x80\x80\x80|QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10!B\x80\x80\x80\x80\x80\x80\x80üÿ\0QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10"B\x80\x80\x80\x80\x80\x80\x80úÿ\0QE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x10#B\x7FQE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10$B\xBCµâ\xB3ÅÆ\x84øÿ\0QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10%B\x89\x90\x9C\xB0Ð\x80Áùÿ\0QE\r\0\x0F\x0B\0\x0B\x16\0\x02@\x10&BÅÆ\x84øÞùªyQE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10\'B\x80\x80\x80\x80\x80\x80\x80øÿ\0QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10(B\x80\x80\x80\x80\x80\x80\x80øÿ\0QE\r\0\x0F\x0B\0\x0B\x16\0\x02@\x10)B\x80\x80\x80\x80\x80\x80\x80xQE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x10*B\0QE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x10+B\0QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10,B\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7FQE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10-B\x98Ú\x90\xA2µ\xBFÈ\x8CÀ\0QE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x10.B\x01QE\r\0\x0F\x0B\0\x0B\x16\0\x02@\x10/B\x80\x80\x80\x80\x80\x80\x80\bQE\r\0\x0F\x0B\0\x0B\x16\0\x02@\x100Bÿÿÿÿÿÿÿ\x07QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x101Bÿÿÿÿÿÿÿ\xF7ÿ\0QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x102B\x80\x80\x80\x80\x80\x80\x80\x98Æ\0QE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x103B\0QE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x104B\0QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x105B\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7FQE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x106B\x98Ú\x90\xA2µ\xBFÈ\x8CÀ\0QE\r\0\x0F\x0B\0\x0B\x0F\0\x02@\x107B\x01QE\r\0\x0F\x0B\0\x0B\x16\0\x02@\x108B\x80\x80\x80\x80\x80\x80\x80\bQE\r\0\x0F\x0B\0\x0B\x16\0\x02@\x109Bÿÿÿÿÿÿÿ\x07QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10:Bÿÿÿÿÿÿÿ\xF7ÿ\0QE\r\0\x0F\x0B\0\x0B\x18\0\x02@\x10;Bý\x86Ó\xACÒµ\x92ÙÔ\0QE\r\0\x0F\x0B\0\x0B');
f9(() => v3.exports['f32.nan'](), 2143289344);
f9(() => v3.exports['f32.positive_nan'](), 2143289344);
f9(() => v3.exports['f32.negative_nan'](), -4194304);
f9(() => v3.exports['f32.plain_nan'](), 2143289344);
f9(() => v3.exports['f32.informally_known_as_plain_snan'](), 2141192192);
f9(() => v3.exports['f32.all_ones_nan'](), -1);
f9(() => v3.exports['f32.misc_nan'](), 2139169605);
f9(() => v3.exports['f32.misc_positive_nan'](), 2142257232);
f9(() => v3.exports['f32.misc_negative_nan'](), -5587746);
f9(() => v3.exports['f32.infinity'](), 2139095040);
f9(() => v3.exports['f32.positive_infinity'](), 2139095040);
f9(() => v3.exports['f32.negative_infinity'](), -8388608);
f9(() => v3.exports['f32.zero'](), 0);
f9(() => v3.exports['f32.positive_zero'](), 0);
f9(() => v3.exports['f32.negative_zero'](), -2147483648);
f9(() => v3.exports['f32.misc'](), 1086918619);
f9(() => v3.exports['f32.min_positive'](), 1);
f9(() => v3.exports['f32.min_normal'](), 8388608);
f9(() => v3.exports['f32.max_subnormal'](), 8388607);
f9(() => v3.exports['f32.max_finite'](), 2139095039);
f9(() => v3.exports['f32.trailing_dot'](), 1149239296);
f9(() => v3.exports['f32_dec.zero'](), 0);
f9(() => v3.exports['f32_dec.positive_zero'](), 0);
f9(() => v3.exports['f32_dec.negative_zero'](), -2147483648);
f9(() => v3.exports['f32_dec.misc'](), 1086918619);
f9(() => v3.exports['f32_dec.min_positive'](), 1);
f9(() => v3.exports['f32_dec.min_normal'](), 8388608);
f9(() => v3.exports['f32_dec.max_subnormal'](), 8388607);
f9(() => v3.exports['f32_dec.max_finite'](), 2139095039);
f9(() => v3.exports['f32_dec.trailing_dot'](), 1343554297);
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
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
f9(() => v3.exports['assert_17']());
f9(() => v3.exports['assert_18']());
f9(() => v3.exports['assert_19']());
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
