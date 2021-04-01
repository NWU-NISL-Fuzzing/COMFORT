var o = Object.preventExtensions(new ArrayBuffer());

(function () {
  o.__proto__ = {};
})();

TypeError;
