var NISLFuzzingFunc = function(e) {
    var t = e.match(/^(\w+)\w+/)[0];
    return t ? {
        r: Number(t[1]),
        g: Number(t[2])
    } : null;
};
var NISLParameter0 = "Ggok}VaL#[7r!b+9GXX\\9hl&gf'OFa:.J[k,4U)2d@p[l=[S:!TPhE=";
NISLFuzzingFunc(NISLParameter0);
