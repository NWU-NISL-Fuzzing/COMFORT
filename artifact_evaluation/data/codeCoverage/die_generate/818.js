var __es_v0 = new Date();

// Test that Annex B function interaction with 'arguments'.
(function () {
  typeof arguments;
  "object";
  {
    function arguments() {
      ;
    }
  }
  typeof arguments;
  "function";
  Number.isNaN(0 - 0);
})();

var __es_v1 = new Float32Array(15);

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
