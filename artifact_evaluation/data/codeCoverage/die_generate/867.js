function testNativeSetter() {
  var re = /\u0150/i;
  var N = 19;

  for (var i = 0; i < N; i++) {
    re.lastIndex = N;
  }

  re.lastIndex;
  N - 1;
}

testNativeSetter();
