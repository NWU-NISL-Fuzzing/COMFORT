var NISLFuzzingFunc = function(a) {
    var b = a.length >> 1;
    if (b % 2 !== 0) throw new Error("Invalid hex string");
    for (var c = [], d = 0; d < b; d++) c.push(a[d >>> 2] >>> 24 - (d & 7) & 255);
    return c;
};
var NISLParameter0 = [null, false, -406248601.6779056287449304, [".S{hbNe@aH 1_]vl6f~-Ci&h|", "=&5y:Q*T<mvQ4r$T>G{2~X@z#", "DeZUQ619dn*}~5FA@P@Ttk3ja&Q*pL}JHyh*<,nGgF\\2Kk|J\\3 d", "#s'^hOH\\ebHiMYU-+'izl%C?CX|G0q(N!S^/]p;XRarq/53rq_?LYZ!=sMrR2$}bE6wZV#~>Z-8fRli`s7LYm5Q$J-a .7/izSEW|74a5dlSc]", "X}\"mxu#tnEp\\$DAHtvtuxE2?N/ZHMeJgf'W |\\n,4x {+,+{{Wm[&1[Usq>Dq#cG$5cb", ";K1mY\\(}[6gWvpS\"p'r_@;1R~t@yPHs{R(my3c\"^Z(?'w61Vd.0 ]Sr'Kb-AqN", "tzn(IqKrPv7JUEfdd!@b|V=e5_!]VOZW~NHQ%?7FcGk3&@Jsi?\"wOOMt}@F|x='0I&(I<#m", "-lQJk#Q Klqg^AQ\"_-Ae<>{RIxp]]LYGicH+YE~qq):9kus;\"mw6|*}{;eF", "z<Vu"]];
NISLFuzzingFunc(NISLParameter0);
