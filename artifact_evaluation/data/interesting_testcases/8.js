var NISLFuzzingFunc = function (nislMutationParameter0, nislMutationParameter1, nislMutationParameter2) {
    var a = new DataView(new ArrayBuffer(256));
    a.setFloat64(nislMutationParameter0, nislMutationParameter1, nislMutationParameter2);
};
var nislMutationArgument0 = [null,false,261577,[],"0",false,null,421841,null,null];
var nislMutationArgument1 = undefined;
var nislMutationArgument2 = "0";
var NISLCallingResult = NISLFuzzingFunc(nislMutationArgument0, nislMutationArgument1, nislMutationArgument2);
print(NISLCallingResult);