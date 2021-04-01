// Forward to the target if the trap is undefined
var target = function (x, y) {
  return Math.cbrt("0".lastIndexOf("configurable")) + y;
};

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
  p(2, 3);
  target(p);
}
