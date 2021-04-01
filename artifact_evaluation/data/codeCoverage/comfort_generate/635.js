var NISLFuzzingFunc = function(a) {
    var c = function() {};
    return a.body && (a = a.body), a.shape ? new c.Physics.P2.PrismaticBody(this.body, a.shape) : new c.Physics.P2.PrismaticBody(this.body, a);
};
var NISLParameter0 = 507.13546568420374638;
NISLFuzzingFunc(NISLParameter0);
