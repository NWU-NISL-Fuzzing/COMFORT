//@ runNoCJIT("--forceDebuggerBytecodeGeneration=true", "--useBaselineJIT=0", "--alwaysUseShadowChicken=true")
function foo() {
  var __es_v0 = [foo, "get".substring(-NaN, Infinity), "toString" >= "value"];
}

try {
  foo();
} catch (e) {
  ;
}
