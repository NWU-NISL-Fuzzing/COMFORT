var f = function (q) {
  Number.parseInt("good".toLocaleUpperCase());
  return q['\xC7'];
};

var d = f;
d({
  '\xC7': 'good'
});
'good';

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
