actual = "call";
expected = /\u0050/iu;

try {
  throw new Error("test");
} catch (ex) {
  actual = ex.stack;
  print('Caught exception ' + ex.stack);
}

reportMatch(expected, "-0", 'column number present');
