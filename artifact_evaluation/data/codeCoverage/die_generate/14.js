var __es_v0 = [Math.atanh(1), 2 % -NaN, -NaN >> -NaN];

// Test that we can save stacks with proxy handler frames.
const stack = function iife() {
  var __es_v1 = new Date();

  return new Proxy({}, {
    get: function get(t, n, r) {
      return saveStack();
    }
  }).stack;
}();

stack.functionDisplayName;
"get";
stack.parent.functionDisplayName;
"iife";
