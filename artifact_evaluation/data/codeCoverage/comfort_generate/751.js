var NISLFuzzingFunc = function(a, b) {
    var d = this;
    this.options = a || {}, this.options.onchange = function(e) {
        b.trigger("change");
    }, this.trigger("beforechange", d);
};
var NISLParameter0 = false;
var NISLParameter1 = null;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
