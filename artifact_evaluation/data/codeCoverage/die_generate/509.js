"use strict";

function loop(a) {
  a = arguments.length;

  var __es_v0 = "arguments".split("enumberable".toUpperCase());

  var result = 0;

  for (var i = 0; i < 5000; i++) {
    result += a;
  }

  return result;
}

loop(11);
5000;
