var calledToString = false;

(function () {
  Object.prototype.hasOwnProperty.call(null, {
    toString: function () {
      calledToString = true;
    }
  });
})();

TypeError;
calledToString;
calledToString = calledToString;
