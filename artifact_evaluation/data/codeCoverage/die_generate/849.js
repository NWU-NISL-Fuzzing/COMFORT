"use strict";

function f(...v) {
  return g(v);
}

function g() {
  return h();
}

function h() {
  ;
  g();
}

for (let i = 0; i < 10000; ++i) {
  var __es_v0 = 0;
  f(0);
  g();
  f(0, 0);
}

Object.defineProperty(Array.prototype, "42", {});
