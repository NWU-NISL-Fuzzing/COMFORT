var NISLFuzzingFunc = function(a) {
    var b = this.request({
        url: this.baseURL + "/actions",
        method: "POST",
        params: a
    });
    return this.baseURL + "/actions/create" + b.action + "?";
};
var NISLParameter0 = "x3t{qj<AT_ nR/ #`1$GQ_KbbU-[KqHylqe2Y55>qyr[3BWM5`&!}6|zHUraG+<z8=mug41a54=?z1!&y+.\\hfm/se";
NISLFuzzingFunc(NISLParameter0);
