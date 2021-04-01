var NISLFuzzingFunc = function(obj, func) {
    var _ = require("underscore");
    return _.bind(func, obj);
};
var NISLParameter0 = [false, false, false, true, false, false, true, true, true, false, true, false, false, true, true, false];
var NISLParameter1 = -6798721;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
