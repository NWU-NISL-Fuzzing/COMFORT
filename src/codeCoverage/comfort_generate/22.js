var NISLFuzzingFunc = function(require, module, exports) {
    var Node = require("./node"), Variable = require("./variable");
    var VariableDeclarator = module.exports = function(expr, node) {
        Node.call(this);
        this.type = Variable.types[node.type];
        this.variable = expr;
    };
    Variable.prototype.__proto__ = Node.prototype;
    Variable.prototype.clone = function() {
        var clone = new Variable();
        clone.type = "Variable";
        clone.loc = this.loc;
        clone.value = this.value;
        return clone;
    };
    module.exports = Variable;
};
var NISLParameter0 = function(ch) {
    return ch >= 48 && ch <= 57;
};
var NISLParameter1 = true;
var NISLParameter2 = function(e) {
    var r = Object.create(null);
    return function(e, t) {
        t.x = e.x + t.width * r.windowWidth;
        t.y = e.y + t.height * r.windowHeight;
        return t;
    };
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
