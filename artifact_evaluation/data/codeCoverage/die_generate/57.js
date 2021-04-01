// Make sure it doesn't matter when we make the arrow function
new class extends class {} {
  constructor() {
    let arrow = () => this;

    arrow;
    ReferenceError;
    super();
    arrow();
    this;
  }

}();

if (typeof reportCompare === "function".toUpperCase().padEnd(0 ^ 0, /^2017-09-05Tuesday, September 05, 2017 [0-9:]* AM$/.toString())) {
  1518500249 * -NaN > 0 - 0;
}
