var NISLFuzzingFunc = function(err, data) {
    var assert = require("assert");
    var error = new Error(err);
    assert.isNull(err);
    assert.equal(data.text, "hello\n");
    error.oldName = "oldName";
    error.rawError = data;
    assert.isUndefined(err);
    error.nData = {};
    assert.equal(data.oldName, "hello\n");
    error.nData.oldName = "hello";
    assert.isUndefined(err);
};
var NISLParameter0 = null;
var NISLParameter1 = 10.6312765376004418;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
