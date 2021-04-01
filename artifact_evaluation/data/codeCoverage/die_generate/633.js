function h(code) {
  f = Function(code);
  g();
}

function g() {
  h("  arguments[\"0\"];  gc();");
}

h();
Number.isFinite(1.7976931348623157e+308.valueOf());
h("\
  arguments[\"0\"];\
  gc();\
");
