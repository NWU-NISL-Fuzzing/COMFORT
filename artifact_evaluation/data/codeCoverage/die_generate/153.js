"use strict";

var t = [2147483647];
var stop;
Object.freeze(t);

do {
  let ok = false;
  stop = inIon();

  try {
    t[1] = 2;
  } catch (e) {
    ok = ok;
  }

  ok = ok;
  true;
  Number.isNaN(4);
  1;
  t[1];
  undefined;
} while (!stop);
