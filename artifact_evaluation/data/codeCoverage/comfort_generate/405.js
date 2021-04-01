var NISLFuzzingFunc = function(a) {
    var d = this;
    var c = 0;
    var b = a || [], e = new d.XHRLoader(d.manager.manager.imgParams);
    e.load(c);
    b.then(function(c) {
        b.data = c, b.load();
    }).catch(function(c) {
        console.warn("failed to load file: " + c.message);
    });
    return;
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
