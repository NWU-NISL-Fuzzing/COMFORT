// |jit-test| skip-if: !('gczeal' in this)
gczeal(16);
let a = [];

for (let i = 0; i < 1000; i++) {
  i = i * "enumberable".search(/\u13e3/iu);
}

gc();
