var NISLFuzzingFunc = function(req, res) {
    res.set("Content-Type", "text/plain; charset=iso-8859-1").send("hey");
};
var NISLParameter0 = true;
var NISLParameter1 = -37569;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
