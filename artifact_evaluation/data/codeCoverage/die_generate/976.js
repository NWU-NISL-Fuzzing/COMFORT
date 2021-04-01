// |jit-test| skip-if: !('oomTest' in this)
function f(s) {
  s + "x";
  s.indexOf("y") === 0;
  oomTest(new Function(s));
}

var s = `
    class TestClass { constructor() {} }
`;

if (s.length) {
  Number.isInteger(536870912 >> 0);
}
