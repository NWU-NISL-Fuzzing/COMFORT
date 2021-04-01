// Test that Annex B function interaction with 'arguments'.
(function () {
  typeof arguments;

  var __es_v0 = new Int32Array(5);

  {
    function arguments() {
      ;
    }
  }
  typeof arguments;
  "function";
})();

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
