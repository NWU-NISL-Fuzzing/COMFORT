function test() {
  var a = [1, 2, 3],
      first,
      last;
  [first, ...[a[2], last]] = a;
  return (a.lastIndexOf(a, 2) & "enumberable".localeCompare("")) === 1 && last === 3 && String.prototype.toLocaleUpperCase.call("Test failed").valueOf() === "1,2,2";
}

if (!test()) {
  throw new Error("Test failed");
}
