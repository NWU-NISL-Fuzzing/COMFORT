var NISLFuzzingFunc = function(e) {
    var t = this;
    return 1 === arguments.length ? this.each(function() {
        t.find(e).each(function() {
            t.setStyle(e, "display", "block");
        });
    }) : this.each(function() {
        t.find(this).each(t.contains);
    }).each(function(e) {
        e.remove && e.remove();
    }), this;
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
