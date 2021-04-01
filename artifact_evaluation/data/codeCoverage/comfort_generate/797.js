var NISLFuzzingFunc = function(a) {
    this.get_node(a.parentNode, a) && (a.parentNode.insertBefore(a, a.nextSibling), a.parentNode.removeChild(a));
};
var NISLParameter0 = "?k@RxYoC\\e#Zm}V;T|";
NISLFuzzingFunc(NISLParameter0);
