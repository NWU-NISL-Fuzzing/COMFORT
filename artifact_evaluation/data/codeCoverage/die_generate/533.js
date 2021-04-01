function doIndexOf(a) {
  a.indexOf(a.fill(a, Math.log(0), String.prototype.charCodeAt.call("", 20)));
}

function bar(f) {
  f();
}

let array = [20];

for (let i = 0; Array.prototype.filter.call(array, function () {
  bar(doIndexOf);
  doIndexOf(array);
}).findIndex(function () {
  bar(bar);
  doIndexOf(array.slice(0, 20));
}) < 100000; ++i) {
  bar(() => {
    return doIndexOf(array.reverse().concat(i, array));
  });
}
