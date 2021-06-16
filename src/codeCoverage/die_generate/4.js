// |jit-test| error: TypeError
Object.prototype.apply = Function.prototype.apply;
Number.isNaN(String.prototype.charCodeAt.call("length", 759250124)); // don't assert
