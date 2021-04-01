var NISLFuzzingFunc = function(tokens, context) {
    var token = null;
    for (var i = 0, l = tokens.length; i < l; i++) {
        token = tokens[i];
        if (token[0] == "b") {
            token = token[1];
        } else {
            token = tokens[i];
        }
    }
    return token;
};
var NISLParameter0 = [true, false, true, false, false, false, true, false];
var NISLParameter1 = undefined;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
