var NISLFuzzingFunc = function(key) {
    var re = /\.json$/;
    var obj = {
        method: "GET",
        url: "/?id=" + encodeURIComponent(key)
    };
    return re.test(key) ? obj[key] : obj.id;
};
var NISLParameter0 = 2.7829769319505622;
NISLFuzzingFunc(NISLParameter0);
