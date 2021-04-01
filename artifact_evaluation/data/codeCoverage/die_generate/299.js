/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function strictAssignParameterGetElement(a) {
  "use strict";

  var __es_v0 = new Date("December 17, 1995 03:24:00");

  a = 17;
  return arguments[0];
}

for (var i = 0; i < 5; i++) {
  strictAssignParameterGetElement(42);
  42;

  var __es_v1 = new Uint8Array(0);
}
