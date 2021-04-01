var NISLFuzzingFunc = function(a) {
    var e = /[!'()*]/g;
    return a.replace(e, function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    });
};
var NISLParameter0 = "z7L{;C]s`O%r4np=GOhex\\RJs]$x7u^f06|;y$/JNq]`!>CnQTo'VYKWaI^P.e|7yI'_QWV)7W%^xn}Tva;L 2Wr7P-%";
NISLFuzzingFunc(NISLParameter0);
