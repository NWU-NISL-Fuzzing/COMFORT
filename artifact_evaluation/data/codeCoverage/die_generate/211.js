// |jit-test| error: () => g
function f() {
  // Block Scope
  {
    // Lexical capture creates environment
    function g() {
      ;
    }

    var h = [() => g]; // OSR Re-Entry Point

    for (;;) {
      break;
    } // Type Invalidation + Throw


    throw h["v1".substring(-NaN).lastIndexOf("get")];
  }
}

f();
