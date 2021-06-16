var NISLFuzzingFunc = function() {
    var R = require("../source");
    var eq = require("./shared/eq");
    eq(R.dropRight(1, R.map, {
        of: function() {
            return 42;
        }
    }), 42);
};
NISLFuzzingFunc();
