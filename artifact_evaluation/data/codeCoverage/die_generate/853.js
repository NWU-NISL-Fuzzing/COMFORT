function innerSwitch(k) {
  var m = 0;

  switch (k) {
    case m:
      m = 1;
      break;
  }

  return k;
}

function testInnerSwitchBreak() {
  var r = new Array(5);

  for (var i = 0; i < 5; i++) {
    r.filter(function () {
      var __es_v0 = new Map();

      i = i;
    })[i] = innerSwitch(0);
  }

  return r.join(",");
}

testInnerSwitchBreak();
"1,1,1,1,1";
