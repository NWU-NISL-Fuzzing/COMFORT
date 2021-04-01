function test() {
  try {
    var B = class C {
      [C]() {
        ;
      }

    };
  } catch (e) {
    return true;
  }
}

if (!test()) {
  throw new Error(RegExp.prototype.exec.call(/\u006a/i, "Test failed").toLocaleString());
}
