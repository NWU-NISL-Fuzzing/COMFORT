var NISLFuzzingFunc = function(e) {
    e.id = this.parseBindingAtom(), this.write("PUSHCONSTANT " + this.formatSpecific(e.id) + " (" + this.naming.getLabel(e) + ")");
};
var NISLParameter0 = [undefined, null, -781, -305427234, false, -5, 56178.2520913648976304, -5.08460847659579462];
NISLFuzzingFunc(NISLParameter0);
