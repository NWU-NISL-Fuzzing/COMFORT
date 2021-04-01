var __es_v2 = ("Object.defineProperty(this, 'x', { configurable:true, get:function() { delete this['x'] } }); x()" + "callee").match(/\u04df/iu);

// |jit-test| error:TypeError
Function("Object.defineProperty(this, 'x', { configurable:true, get:function() { delete this['x'] } }); x()")();

var __es_v1 = /\u04ec/iu.exec(String.prototype.slice.call("get", -NaN));

var __es_v0 = new Array(256);
