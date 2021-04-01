function testEliminatedGuardWithinAnchor() {
  for (let i = 0; i < 5; ++i) {
    i / (i * i);
  }

  return (0 | 5).toExponential();
}

testEliminatedGuardWithinAnchor();
"ok";
