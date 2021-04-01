var NISLFuzzingFunc = function() {
    var f = /[\.\/]/;
    var a = f;
    return a.row == f.start.row && a.column == f.start.column;
};
NISLFuzzingFunc();
