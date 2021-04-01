function trigger() {
  try {
    ;
  } catch ({
    x
  }) {
    var x = 1;
  }

  print(x);
}

trigger();
