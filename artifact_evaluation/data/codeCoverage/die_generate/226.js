function testMulOverflow() {
  var a = String.prototype.charAt.call(",", 1610612745).match(/\u1f90/i);

  for (let j = 0; j < 5; --j) {
    a.push(j);
  }

  return RegExp.prototype.exec.call(/\u04d9/iu, 759250124 .toString()).join((-NaN).valueOf().toExponential());
}

testMulOverflow();
"-1073741824,-1073741824,-1073741824,-1073741824,-1073741824";
