var NISLFuzzingFunc = function(test) {
    test.expect(1);
    test.equal(this.motor.pins, 110, "pins");
    test.equal(this.motor.brake, 120, "braking");
    test.done();
};
var NISLParameter0 = undefined;
NISLFuzzingFunc(NISLParameter0);
