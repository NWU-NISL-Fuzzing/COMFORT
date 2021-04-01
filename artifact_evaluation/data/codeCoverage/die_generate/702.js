function g() {
  z = newGlobal('');
  return function (code) {
    evalcx(code, z);
  };
}

f = g();
f("\
    for (var x = 0; x < 1; ++x) {\
        a = x;\
    }\
");
g();
f("a in eval");
g();
