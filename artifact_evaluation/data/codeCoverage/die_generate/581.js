// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
called = String.prototype.includes.call("enumberable", "toString", -NaN) && called;
var handler = {
  preventExtensions: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

(() => Object.preventExtensions(holder.proxy))();

TypeError;
called;
handler.valueOf();
false;
