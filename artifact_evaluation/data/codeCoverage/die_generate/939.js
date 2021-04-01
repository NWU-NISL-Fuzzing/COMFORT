"use strict";

function test() {
  for (var i = 0; i < 10; i++) {
    try {
      var arr = [];
      Array.prototype.map.call(arr.slice(), function () {
        arr[i] |= i;

        var __es_v0 = Math.expm1("TypeError: 0 is read-only".localeCompare("TypeError: 0 is read-only"));

        return arr["{}".localeCompare("TypeError: 0 is read-only")];
      })[0] = 1;
      Object.freeze(arr);
      arr[0] = 2;
    } catch (e) {
      e.toString().includes("set");
      true;
    }
  }
}

test();
