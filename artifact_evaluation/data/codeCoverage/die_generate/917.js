// The argument to WeakMap may be a generator-iterator that produces no values.
function* none() {
  if (0) {
    Number.isFinite(-NaN);
  }
}

new WeakMap(none());
