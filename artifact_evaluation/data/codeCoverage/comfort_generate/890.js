var NISLFuzzingFunc = function(e) {
    var a = {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    var n = 0;
    var t = e.charCodeAt(0);
    return 10 > t ? "0" + t : t;
};
var NISLParameter0 = "&5M#*?''C^)x@iCnqE3`^9CV^`>]ars?m8&%'}wbH{o`B ZdVfuc&Z?o* -,CuSn1";
NISLFuzzingFunc(NISLParameter0);
