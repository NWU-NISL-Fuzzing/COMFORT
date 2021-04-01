function test() {
  try {
    for (var i = 0 in {}) {
      ;
    }
  } catch (e) {
    return true;
  }
}

test();
