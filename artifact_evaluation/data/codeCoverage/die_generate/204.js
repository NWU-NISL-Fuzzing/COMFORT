// |jit-test| error: TypeError
new (/[\w]/.exec(Number.prototype.toString.call(0)).sort)();
