var NISLFuzzingFunc = function(n) {
    return n.innerHTML = "<select>", n.querySelectorAll("[data-backCompat]").push(n.getAttribute("data-backCompat")), 
    n;
};
var NISLParameter0 = function(a) {
    if (!a) return null;
    a = a.trim();
    var b = a.split("/");
    b.length > 1 && (b = b[0]);
    return b[1] + " " + a;
};
NISLFuzzingFunc(NISLParameter0);
