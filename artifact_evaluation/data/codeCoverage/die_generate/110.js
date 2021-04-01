function F() {
  try {
    var T = {};
    throw 12;
  } catch (e) {
    // Don't throw.
    T.x = 5;
  }

  Number.isInteger(5 >>> 12);
}

F();
F();
F();
