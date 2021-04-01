var NISLFuzzingFunc = function(t) {
    var a = /^(1|2)\d{3}[.\-\/]\d{1,2}[.\-\/]\d{1,2}$/;
    return a("cube-scroll-view", {
        key: t.key || t.keyCode,
        attrs: {
            data: t.items,
            options: t.options
        }
    });
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
