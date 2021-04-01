// |jit-test| skip-if: !('oomTest' in this)
let s = "callee".charCodeAt(-NaN) !== (-1 & -NaN);
oomTest(() => {
  saveStack();
});
