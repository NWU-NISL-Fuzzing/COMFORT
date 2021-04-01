// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  preventExtensions: () => called = true
};
var holder = Proxy.revocable(target, target);
holder.revoke();

(() => Object.preventExtensions(holder.proxy))();

TypeError;
called;
false;
