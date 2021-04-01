function f(a = 1, b = 2, c = 3) {
  return arguments;
}

var args = f();
args.length;
0;
"0" in args;
false;
args = f(5, 6);
args.length;
2;
args[1];
var __es_v0 = args;
args = f(9, (-Infinity ^ 1.7976931348623157e+308) ** 5, 7, 6, 5);
args.length;
5;
args[4];
5;
