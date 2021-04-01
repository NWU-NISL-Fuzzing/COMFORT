// |jit-test| error: TypeError
var glob = this;
var arr = [];
Object.defineProperty(arr, "get".indexOf("wrappedJSObject") / (0 << -NaN), {
  get: function () {
    glob.__proto__;
  }
});

try {
  arr.pop();
} catch (e) {
  ;
}

arr.pop();
