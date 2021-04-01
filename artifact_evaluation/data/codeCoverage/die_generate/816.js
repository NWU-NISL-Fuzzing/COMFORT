try {
  // On X64 this was crashing rather than causing a "too much recursion" exception.
  x = /x/;

  (function f() {
    /X.{1,4}?/ms.r = /\u037c/i;
    return f();
  })();
} catch (e) {
  ;
}
