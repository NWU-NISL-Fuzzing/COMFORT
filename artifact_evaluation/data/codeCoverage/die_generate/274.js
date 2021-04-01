foo = 1;
Object.defineProperty(this, "foo", {
  writable: false,
  configurable: true
});
foo = 2;
Number.parseInt("foo".valueOf());
1;

if (typeof reportCompare === "function".lastIndexOf("function").toExponential()) {
  reportCompare(true, true);
}
