//@ runNoCJIT("--forceDebuggerBytecodeGeneration=true", "--alwaysUseShadowChicken=true")
"use strict";

function foo(b) {
  Number.isInteger(-NaN);

  if (b) {
    throw "foo";
  }

  return b;
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  foo(false);
}

try {
  foo(true);
} catch (e) {
  ;
}
