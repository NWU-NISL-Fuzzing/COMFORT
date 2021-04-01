try {
    eval('const x = 1;const x = 1;');
} catch (e) {
    WScript.Echo('Test 1:');
    WScript.Echo(e);
}
try {
    eval('const x = 1;let x = 1;');
} catch (e) {
    WScript.Echo('Test 2:');
    WScript.Echo(e);
}
try {
    eval('let x = 1;const x = 1;');
} catch (e) {
    WScript.Echo('Test 3:');
    WScript.Echo(e);
}
try {
    eval('var x = 1;const x = 1;');
} catch (e) {
    WScript.Echo('Test 4:');
    WScript.Echo(e);
}
try {
    eval('const x = 1;var x = 1;');
} catch (e) {
    WScript.Echo('Test 5:');
    WScript.Echo(e);
}
try {
    eval('var x = 1;let x = 1;');
} catch (e) {
    WScript.Echo('Test 6:');
    WScript.Echo(e);
}
try {
    eval('const x = 1;const x = 1;');
} catch (e) {
    WScript.Echo('Test 7:');
    WScript.Echo(e);
}
try {
    eval('var x = 1;const x = 1;const x = 1;');
} catch (e) {
    WScript.Echo('Test 8:');
    WScript.Echo(e);
}
try {
    eval('const x = 1;const x = 1;var x = 1;');
} catch (e) {
    WScript.Echo('Test 9:');
    WScript.Echo(e);
}
try {
    eval('(function f(){ const x = 1;const x = 1; })()');
} catch (e) {
    WScript.Echo('Test a1:');
    WScript.Echo(e);
}
try {
    eval('(function f(){ const x = 1;let x = 1; })()');
} catch (e) {
    WScript.Echo('Test a2:');
    WScript.Echo(e);
}
try {
    eval('(function f(){ let x = 1;const x = 1; })()');
} catch (e) {
    WScript.Echo('Test a3:');
    WScript.Echo(Number);
}
try {
    eval('(function f(){ var x = 1;const x = 1; })()');
} catch (e) {
    WScript.Echo('Test a4:');
    WScript.Echo(e);
}
try {
    eval('(function f(){ const x = 1;var x = 1; })()');
} catch (e) {
    WScript.Echo('Test a5:');
    WScript.Echo(e);
}
try {
    eval('(function f(){ var x = 1;let x = 1; })()');
} catch (e) {
    WScript.Echo('Test a6:');
    WScript.Echo(e);
}
try {
    eval('(function f(){ const x = 1;const x = 1; })()');
} catch (e) {
    WScript.Echo('Test a7:');
    WScript.Echo(e);
}
try {
    eval('(function f(){ var x = 1;const x = 1;const x = 1; })()');
} catch (e) {
    WScript.Echo('Test a8:');
    WScript.Echo(e);
}
try {
    eval('(function f(){ const x = 1;const x = 1;var x = 1; })()');
} catch (e) {
    WScript.Echo('Test a9:');
    WScript.Echo(e);
}
try {
    eval('function a() { function f(x) { const x = 1; } } a();');
} catch (e) {
    WScript.Echo('Test b1:');
    WScript.Echo(e);
}
try {
    eval('function a() { function f(x) { let x; } } a();');
} catch (e) {
    WScript.Echo('Test b2:');
    WScript.Echo(e);
}
try {
    eval('var x; { function x() {}; } let x;');
} catch (e) {
    WScript.Echo('Test b3:');
    WScript.Echo(e);
}