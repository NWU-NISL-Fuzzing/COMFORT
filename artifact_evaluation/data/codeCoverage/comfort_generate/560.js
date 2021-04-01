var NISLFuzzingFunc = function(e) {
    var o = {
        filter: e("lodash/filter"),
        map: e("lodash/map"),
        find: e("lodash/find")
    };
    return e === o;
};
var NISLParameter0 = function(t, e) {
    var n;
    n.__super__.constructor.apply(this, arguments);
};
NISLFuzzingFunc(NISLParameter0);
