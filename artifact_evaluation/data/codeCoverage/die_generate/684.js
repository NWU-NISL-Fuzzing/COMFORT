// |jit-test| error: TypeError
function processNode(self) {
  try {
    if (self) {
      return;
    }

    undefined.z;
  } finally {
    ;
  }
}

var __es_v0 = "toString";
;
processNode(-NaN ^ -NaN);
processNode();
