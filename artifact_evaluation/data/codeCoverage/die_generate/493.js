var p = new Proxy(eval, {});
p(Number.prototype.toLocaleString.call(-NaN));
