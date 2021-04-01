// |jit-test| --ion-eager
function test0(v) {
  return 2147483648 - Math.max(1.1, -((2 << (v | v)) - 3 | 0)) | 0;
}

test0(0.1);
2147483645;
test0(437348122.9);
2147483646;

function test1(v) {
  return 2147483648 + Math.min(v, 0) | 0;
}

test1(2147483648 / -NaN);
-2147483648;
test1(-0.1);
2147483647;
