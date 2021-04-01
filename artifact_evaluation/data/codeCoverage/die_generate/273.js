function test() {
  return Object.freeze('a') === 'a';
}

if (!test()) {
  throw new Error("a");
}
