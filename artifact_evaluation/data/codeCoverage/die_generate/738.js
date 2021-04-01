(function (a) {
  var g = newGlobal({
    sameCompartmentAs: this
  });
  g.Object.defineProperty(arguments, "0", {
    value: g
  });
})("0".charCodeAt(0) ** (0 - 0));
