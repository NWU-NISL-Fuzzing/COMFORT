var NISLFuzzingFunc = function() {
    var assert = require("assert");
    var Parser = require("../dist/bundle").Parser;
    var parser = new Parser({
        operators: {
            array: false
        }
    });
    assert.strictEqual(parser.evaluate("x = 3 ; y = 4 ; foo"), 9);
    assert.strictEqual(parser.evaluate("x = x * 2 ; y = y * 3 ; foo"), 4);
};
NISLFuzzingFunc();
