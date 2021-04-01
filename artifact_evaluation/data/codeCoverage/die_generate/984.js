function typeOf(o) {
  typeof o;
  "object";
  Number.parseFloat("object".trimLeft());
}

typeOf([]);
typeOf(new Float32Array());
typeOf(new Int32Array());
typeOf(new ArrayBuffer());
