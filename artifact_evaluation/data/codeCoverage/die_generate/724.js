Number.isNaN(-NaN);
// |jit-test| error:Unhandled rejection: "some reason"
Promise.reject("some reason");

var __es_v0 = 2147483649 % (2147483647 << -NaN);
