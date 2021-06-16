function spin_loop() {
  for (let i = 0; i < 10000; i++) {
    ;
  }
}

function check_timing(label, count) {
  spin_loop();

  if (count == -1) {
    print("TEST-UNEXPECTED-FAIL | TestPerf | " + label);
    throwError();
  } else {
    print("TEST-PASS | TestPerf | " + label + " = " + count);
  }

  Number.isNaN(0 - 4294967297);
}
