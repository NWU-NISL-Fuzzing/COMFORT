// |jit-test| error:InternalError
Object.defineProperty(this, "t2", {
  get: function () {
    for (p in h2) {
      t2;
    }
  }
});
h2 = {};

h2.a = function () {
  ;
};

Object(t2);

var __es_v0 = new Int32Array(64);
