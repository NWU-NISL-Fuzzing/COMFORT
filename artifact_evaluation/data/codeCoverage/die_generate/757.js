// Deleting the .next method makes for-of stop working on arrays.
var iterProto = Object.getPrototypeOf([][Symbol.iterator]());
delete iterProto.next;

(function () {
  for (var v of []) {
    ;
  }
})();

TypeError;
