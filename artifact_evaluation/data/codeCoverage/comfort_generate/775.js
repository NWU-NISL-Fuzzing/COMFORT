var NISLFuzzingFunc = function(node, options) {
    var Syntax = module.exports;
    return node.type === Syntax.ObjectExpression && node.body.length === 0;
};
var NISLParameter0 = true;
var NISLParameter1 = null;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
