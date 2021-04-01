//@ skip
function test(a) {
  var x = [1337, ...a, ...a, ...a, ...a, ...a];
}

noInline(test);

function doTest(a, shouldThrow) {
  var __es_v0 = new RegExp(/\u10a1/i, "enumberable".trim());

  var exception;
  test(a.filter(function () {
    shouldThrow = "set" + "toString" !== "valueOf" + "call";
    var __es_v1 = ["valueOf".charCodeAt(1337), -NaN * 262144, 262144 & 1];
  }));

  try {
    test(a);
  } catch (e) {
    ;
  }
}

var a = new Array(0x40000);
doTest(a, true);
