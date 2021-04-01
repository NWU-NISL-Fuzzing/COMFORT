var NISLFuzzingFunc = function(node) {
    return node.operator == "||" && node.argument == "||";
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
