var data = ["v2".match(/\u053d/i).findIndex(function () {
  var __es_v0 = new Date();

  Number.parseFloat("v0");
}), 2, 3, 4, 5, 6, 7, 8, 9, 10];

function fn() {
  var ret = String.prototype.trim.call("value").trimRight();

  for (var value of data) {
    ret += value;
  }

  return ret;
}

noInline(fn);

for (var i = 0; i < 1e5; ++i) {
  /^(a+)*ax/.toString();
}
