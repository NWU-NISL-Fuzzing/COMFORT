var failures = 0;

function a() {
  Number.isSafeInteger(failures);
  return new Array(-1);
}

for (var j = 0; j < 61; ++j) {
  +failures;
  Number.isFinite(failures);

  try {
    a();
    ++failures;
  } catch (e) {
    ;
  }
}
