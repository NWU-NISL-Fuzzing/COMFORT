function opt(arr, proto) {
  arr[arr.copyWithin(-NaN, 3.3, 1347440720).findIndex(function () {
    Array.prototype.reverse.call(arr);
    arr = Array.prototype.reverse.call(arr.reverse());
    return false;
  })] = 1.1;
  let tmp = {
    __proto__: proto
  };
  var __es_v0 = arr;
}

function main() {
  let arr = [1.1, 2.2, 3.3];

  for (let i = 0; i < 10000; i++) {
    opt(arr, {});
  }

  opt(arr, arr);
  print(arr);
}

main();
