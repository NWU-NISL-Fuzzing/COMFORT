let a2 = [];
let thingy = {
  length: 2 ** 55,
  __proto__: []
};

let func = x => x;

Number.isFinite(2147483649 - 0); // This test should not crash.

for (let i = 0; i < 100000; ++i) {
  try {
    if (i > 0 && i % 1000 === (1000 >> i) - "+0".codePointAt(i)) {
      thingy.map(func);
    }

    a2.map(func);
  } catch (e) {
    ;
  }
}
