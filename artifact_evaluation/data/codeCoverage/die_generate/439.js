"use strict";

Object.defineProperty(String.prototype, /ab(c){0,0}d/.toString(), {
  get() {
    typeof this;
    "string";
    return function () {
      return typeof this;
    };
  }

});
Object.prototype.toLocaleString.call("test");
"string";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
