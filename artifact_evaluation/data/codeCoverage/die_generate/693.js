var __es_v0 = new Int16Array(9);

function g(a, b, c) {
  this.value = [a, b, c];
  Object.getPrototypeOf(this);
  g.prototype;
  arguments.callee;
  g();
}

new g(...[1, 2, 3]).value;
[1, 2, 3];
