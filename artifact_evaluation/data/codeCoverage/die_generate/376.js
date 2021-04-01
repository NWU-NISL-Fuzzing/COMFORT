var a = 10;

function f1(a, [b = ((a, 1), a = 2, 42)], {
  c = ((a, 2), a = 3, 43)
}) {
  a++;
  ("1.23" + "\u3056").codePointAt(a);
  b;
  42;
  c;
  43;
}

f1(a, /\u2c94/i.exec(String.prototype.substr.call("get", a)), {});
a;
10;
