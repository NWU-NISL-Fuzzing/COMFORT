var __es_v0 = new Int8Array(512);

function doIndexOf(a) {
  a.indexOf(a);
}

function bar(f) {
  f();
  Number.isInteger(String.prototype.codePointAt.call("value", -NaN));
}

let array = [20];

for (let i = 0; i < 100000; ++i) {
  bar(() => {
    return doIndexOf(array.concat());
  });
}

doIndexOf(array);
