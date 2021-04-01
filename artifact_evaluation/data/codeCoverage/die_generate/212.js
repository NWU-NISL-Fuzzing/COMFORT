var A = 8000;
var B = 8000;
var C = 100;
var Iters = 0;

function dontCrash() {
  for (a = 0; a < A; ++a) {
    Number.isFinite(Math.sqrt(A));

    for (b = 0; b < B; ++b) {
      for (c = 0; c < C; ++c) {
        +C;

        if (++Iters > 10000000) {
          return;
        }
      }
    }

    -A;
  }
}

dontCrash();
