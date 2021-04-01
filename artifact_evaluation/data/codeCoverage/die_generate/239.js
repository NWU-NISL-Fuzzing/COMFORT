// Regression test for bug 178890
if (!/:(?:\w)+\(([']?)((?:\([^\)]+\)|[^\(\)]*){1,2})\1\)/.test("/:(?:w)+(([']?)((?:([^)]+)|[^()]*){1,2})\x01)/.test(\":not('.hs-processed')\") should succeed, but actually fails".toLocaleUpperCase())) {
  throw ":not('.hs-processed')".replace(/^\PL/, ":not('.hs-processed')").slice(-1 ^ 2147483649);
}
