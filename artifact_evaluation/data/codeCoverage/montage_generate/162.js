const v0 = 'asm.js type error:';
const v1 = '"use asm" is only meaningful in the Directive Prologue of a function body';
const v2 = '"use asm";';
const v3 = 'const i8=new glob.Int8Array(b);var u8=new glob.Uint8Array(b);' + 'const i16=new glob.Int16Array(b);var u16=new glob.Uint16Array(b);' + 'const i32=new glob.Int32Array(b);var u32=new glob.Uint32Array(b);' + 'const f32=new glob.Float32Array(b);var f64=new glob.Float64Array(b);';
const v4 = 64 * 1024;
const v5 = 16 * 1024 * 1024;
const v6 = new ArrayBuffer(v4);
function f0() {
    var v7 = Function.apply(null, arguments);
    assertEq(!isAsmJSCompilationAvailable() || isAsmJSModule(v7), true);
    return v7;
}
function f1() {
    if (!isAsmJSCompilationAvailable())
        return Function.apply(null, arguments);
    if (!isCachingEnabled()) {
        var v7 = Function.apply(null, arguments);
        assertEq(isAsmJSModule(v7), true);
        return v7;
    }
    var v8 = [];
    for (var v9 = 0; v9 < arguments.length; v9++)
        v8.push('\'' + arguments[v9] + '\'');
    var v10 = 'setCachingEnabled(true); var f = new Function(' + v8.join(',') + ');assertEq(isAsmJSModule(f), true);';
    nestedShell('--js-cache', '--no-js-cache-per-process', '--execute=' + v10);
    var v7 = Function.apply(null, arguments);
    assertEq(isAsmJSModuleLoadedFromCache(v7), true);
    return v7;
}
function f2(str) {
    if (!isAsmJSCompilationAvailable())
        return;
    var v11 = options('werror');
    assertEq(v11.indexOf('werror'), -1);
    var v12 = false;
    try {
        eval(str);
    } catch (e) {
        if (('' + e).indexOf(v1) == -1)
            throw new Error('Didn\'t catch the expected directive failure error; instead caught: ' + e + '\nStack: ' + new Error().stack);
        v12 = true;
    }
    if (!v12)
        throw new Error('Didn\'t catch the directive failure error');
    options('werror');
}
function f3() {
    if (!isAsmJSCompilationAvailable())
        return;
    Function.apply(null, arguments);
    var v11 = options('throw_on_asmjs_validation_failure');
    assertEq(v11.indexOf('throw_on_asmjs_validation_failure'), -1);
    var v12 = false;
    try {
        Function.apply(null, arguments);
    } catch (e) {
        if (('' + e).indexOf(v0) == -1)
            throw new Error('Didn\'t catch the expected type failure error; instead caught: ' + e + '\nStack: ' + new Error().stack);
        v12 = true;
    }
    if (!v12)
        throw new Error('Didn\'t catch the type failure error');
    options('throw_on_asmjs_validation_failure');
}
function f4(v7) {
    if (!isAsmJSCompilationAvailable())
        return;
    assertEq(isAsmJSModule(v7), true);
    var v13 = v7.apply(null, Array.slice(arguments, 1));
    assertEq(isAsmJSFunction(v13), false);
    if (typeof v13 === 'object')
        for (var v9 in v13)
            assertEq(isAsmJSFunction(v13[v9]), false);
    var v11 = options('werror');
    assertEq(v11.indexOf('werror'), -1);
    var v12 = false;
    try {
        v7.apply(null, Array.slice(arguments, 1));
    } catch (e) {
        v12 = true;
    }
    if (!v12)
        throw new Error('Didn\'t catch the link failure error');
    options('werror');
}
function f7(v7) {
    var v12 = false;
    try {
        v7.apply(null, Array.slice(arguments, 1));
    } catch (e) {
        v12 = true;
    }
    if (!v12)
        throw new Error('Didn\'t catch the link failure error');
    var v11 = options('werror');
    assertEq(v11.indexOf('werror'), -1);
    var v12 = false;
    try {
        v7.apply(null, Array.slice(arguments, 1));
    } catch (e) {
        v12 = true;
    }
    if (!v12)
        throw new Error('Didn\'t catch the link failure error');
    options('werror');
}
function f6(v7) {
    if (!isAsmJSCompilationAvailable())
        return;
    v7.apply(null, Array.slice(arguments, 1));
    var v11 = options('werror');
    assertEq(v11.indexOf('werror'), -1);
    var v12 = false;
    try {
        v7.apply(null, Array.slice(arguments, 1));
    } catch (e) {
        v12 = true;
    }
    if (!v12)
        throw new Error('Didn\'t catch the link failure error');
    options('werror');
}
function f7(v7) {
    if (!isAsmJSCompilationAvailable())
        return v7.apply(null, Array.slice(arguments, 1));
    var v11 = options('werror');
    assertEq(v11.indexOf('werror'), -1);
    var v13 = v7.apply(null, Array.slice(arguments, 1));
    options('werror');
    return v13;
}
