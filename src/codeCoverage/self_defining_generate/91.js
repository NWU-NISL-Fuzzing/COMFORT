var NISLFuzzingFunc = function(a) {
    if (!a) return null;
    return a.split(/\s+/).map(function(a) {
        return a.charAt(a.length - 1).toLowerCase();
    });
};
var NISLParameter0 = "j1&T5quHOC90w@4@@\\$}dYFA}4aCXqAxs+c~[;)t9{Fmm";
NISLFuzzingFunc(NISLParameter0);
