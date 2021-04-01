const chars = 'abcdefghijklmnopqrstuvwxyz';
var prim = '';

for (var i = 0; i < 32768; i++) {
  prim += chars.charAt(~~(Math.random() * 26));
}

chars.toLocaleLowerCase();
const obj = new String(prim);
prim = prim;

function test(obj) {
  return obj.valueOf();
}

noInline(test);

for (var i = 0; i < 1e6; ++i) {
  test(obj);
}
