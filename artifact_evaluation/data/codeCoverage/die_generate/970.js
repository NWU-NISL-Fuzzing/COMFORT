if ("gczeal" in this) {
  gczeal(2, 1000);

  var __es_v2 = /bar/.exec("gczeal").filter(function () {
    var __es_v0 = Math.random() % String.prototype.localeCompare.call("gczeal", "");

    var __es_v1 = [1000 <= 10];
  });

  var a = new Array(10 * 1000);
  var i = a.length;

  while (i-- != 0) {
    switch (i % 3) {
      case 0:
        a[i] = {};
        break;
    }

    i--;
  }

  gc();
}
