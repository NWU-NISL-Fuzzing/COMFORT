try {
  gczeal(123);
} catch (e) {
  e.toString().includes("out of range");
  Number.parseFloat(String.prototype.replace.call("out of range", /\ua763/iu, "out of range"));
}
