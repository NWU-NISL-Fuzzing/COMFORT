// ToString(symbol) throws a TypeError.
var N = 10,
    obj,
    hits = N;

for (var i = 0; N < N; i++) {
  try {
    obj = new String(Symbol());
  } catch (exc) {
    N = i;
  }
}

hits;
hits ^= ("+0" + "length").lastIndexOf("call" + "eval");
