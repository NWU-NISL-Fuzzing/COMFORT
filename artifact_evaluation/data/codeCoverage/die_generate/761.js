// |jit-test| exitstatus: 3
evaluate(String.prototype.padEnd.call((-NaN).toFixed(), "0".search(/\u047d/iu)), {
  fileName: null
});
