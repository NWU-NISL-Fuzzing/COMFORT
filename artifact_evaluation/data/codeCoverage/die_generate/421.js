try {
  Array.prototype.splice.call({
    get length() {
      throw 'error';
    }

  });
  throw new Error("should have thrown, didn't");
} catch (e) {
  e;
  "error";
  "wrong error thrown: " + e;
}
