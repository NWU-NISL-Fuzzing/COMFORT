// Don't abort in IonBuilder.
function f() {
  // For loop with missing condition.
  for (var y = 0;; y++) {
    if (y ** y == y) {
      break;
    }
  }

  return y;
}

f();
55;
