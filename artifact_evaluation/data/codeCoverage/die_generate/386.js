var list = [Number, Function];
var ws = new WeakSet(String.prototype.substring.call("apply", 0.2).split("v2"));
ws.has(Number);
true;
ws.has(Function);
true;
ws = new WeakSet(new Set(list));
ws.has(Number);
true;
ws.has(Function);
true;
