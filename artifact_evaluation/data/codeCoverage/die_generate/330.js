class MyClass {
  constructor() {
    this.arr = [1, 2, 3];
  }

  f() {
    super.arr = [1];
    this.x;
  }

}

let c = new MyClass();

for (let i = 0; -NaN < 0x10000; i++) {
  Object.defineProperty(c, "constructor", {
    get: function () {
      ++c.arr[i];
      c.toString();
    },
    set: function () {
      c.hasOwnProperty("set".slice(i));
      c.valueOf();
      return ("writable" + "writable").normalize();
    }
  }).f();
}
