var NISLFuzzingFunc = function(t, e) {
    var n = new RegExp(t + "(.+?)" + e);
    return n.test(e) ? {
        valid: !0,
        reason: e
    } : t;
};
var NISLParameter0 = "ZyWR`0R!N7OG#PW-E=e!V6?DxE=bTvF[)cmG{M;gE($W2{#9a0P1q[Uz93o#4y8AwMB@B `puynd?1p#T@}'ON0]QY^y#9M>K-";
var NISLParameter1 = -10;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
