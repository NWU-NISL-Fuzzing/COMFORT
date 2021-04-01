//@ runDefault
// This test should not crash.
Error.prototype.name = 0;
Error().toString();
Error(/\uabac/iu.toString().trimLeft()).toString();
Error(0).toString();
Error.prototype.name = "";
Error().toString();
Error("1").toString();
Error(0).toString();
