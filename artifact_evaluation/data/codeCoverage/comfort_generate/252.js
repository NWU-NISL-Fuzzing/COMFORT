var NISLFuzzingFunc = function(node) {
    return node.type === "Literal" && /^(?:test|param)\.{3,4}$/.test(node.value);
};
var NISLParameter0 = "jS;BA%]-fq4.{?]|/0!*\"xsf?\"?OYT(\"";
NISLFuzzingFunc(NISLParameter0);
