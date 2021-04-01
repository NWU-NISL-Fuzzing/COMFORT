var g = newGlobal("same-compartment");

try {
  evalcx("'use strict'; (function() { x = 33; })()", g);
  0;
  1;
} catch (e) {
  var __es_v2 = Array.prototype.map.call("variable x".split("set"), function () {
    var __es_v0 = new Set();

    var __es_v1 = 0 * 4 % "variable x".search(/\u0429/i);
  });

  e.toString().includes("variable x");
  true;
}
