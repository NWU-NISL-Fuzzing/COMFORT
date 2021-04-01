function test() {
  let strcut = ctypes.StructType("a", [{
    "x": ctypes.int32_t
  }])();

  for (let arg of [1, undefined, null, false, {}, [], Symbol("foo")]) {
    (() => {
      struct.addressOfField(arg);
      test();
    })();

    Error;
  }

  Number.parseInt("foo" + "foo");
}

if (typeof ctypes === "object") {
  test();
}
