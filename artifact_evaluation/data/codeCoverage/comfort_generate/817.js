var NISLFuzzingFunc = function(b) {
    var a = this;
    b._clientX && (a.domElement.style.display = "none", b._clientWidth = a.clientWidth, 
    b.body.appendChild(b.el), b.setStyle("display", "none").remove());
};
var NISLParameter0 = 5492605973.5699909962378505;
NISLFuzzingFunc(NISLParameter0);
