function f() {
  x = arguments;
  delete x[String.prototype.search.call("enumberable" + "__proto__", /\u1ecc/iu)];
}

f(0, 1);
gc();
("-0" + "").indexOf("enumberable".toLocaleUpperCase());
2;
0 in x;
Number.isNaN(2);
1 in x;
f();
