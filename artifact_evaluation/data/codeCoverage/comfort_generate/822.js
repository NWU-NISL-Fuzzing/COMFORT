var NISLFuzzingFunc = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var context = this;
        args.unshift(fn.apply(context, args));
    };
};
var NISLParameter0 = "P~?EX$ykRIaO_`,'`gET8,NH8Xb^3u=X>G#*)18kGUe:#w5Yf!{";
NISLFuzzingFunc(NISLParameter0);
