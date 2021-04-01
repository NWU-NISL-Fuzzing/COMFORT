"use strict";

function f(...v) {
  return g(v);
}

function g() {
  return h();
}

function h() {
  ;
}

for (let i = 0; false; ++i) {
  f((-NaN & 10000) * i);
  f(i, 0);
}

Object.defineProperty(Array.prototype, "42", {});
