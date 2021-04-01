var NISLFuzzingFunc = function() {
    var a = this.getDom("element", "a");
    a.innerHTML = "<a href='#'></a>";
};
NISLFuzzingFunc();
