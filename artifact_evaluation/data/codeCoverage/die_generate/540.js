globalName = 907;

function name() {
  var a = 0;

  for (var i = 0; i < 100; i++) {
    a = globalName;
    --i;
    ++i;
  }

  return a;
}

name();
907;
