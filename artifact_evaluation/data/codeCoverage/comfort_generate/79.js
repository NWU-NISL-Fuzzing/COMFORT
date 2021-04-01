var NISLFuzzingFunc = function(e, t) {
    var i = e.className;
    return i.displayName = t, i.className = e.className, i.title = "", i.description = "", 
    i.items = [], i.labels = [], i.styles = {}, i.textAlign = "", i.textBaseline = "", 
    i.fontName = "", i.backgroundColor = "", i.fontSize = 15, i.lineHeight = e.lineHeight, i.moveToX = function(e, t, i) {
        if (e == "markbegin") return;
        var r = i.markup.substring(e + 1);
        if (r == "end") {
            var s = e - 2;
            if (t.length == 0) return;
            i.end.column += t[s - 1].length + 2, t[s - 1].column = i.end.column;
        } else {
            var o = e - 3;
            if (t.length > o) return;
            if (i.end.column == t[0].length) {
                var a = i.end.column - o;
                i.end.column += 2, i.end.offset = a, i.start.column += a, i.start.offset = r;
            } else i.start.column += e, i.start.offset += e, o = i.end.column;
        }
        if (o == t[0].length) return;
        i.end.column += t[0].length, t[0].length == 1 ? i.end.column : t[0].length == 2 ? t[0].charAt(0).toUpperCase() + t[1].toUpperCase() : null;
    }, i.getTextRange = function(e) {
        var t = e.start, n = e.end;
        if (t < n) return;
        var r = n - t;
        if (r != 0) return {
            line: r,
            column: 0
        };
        r > 0 && (t = n + t);
        if (t > n) return {
            line: t,
            column: 0
        };
        return {
            line: null,
            column: null
        };
    };
};
var NISLParameter0 = function(e, t, r) {
    var n = e.defer();
    var o = e.defer();
    o(function() {
        n.$broadcast("$cordovaBeacon:didDetermineDevice", e, t);
    });
};
var NISLParameter1 = [-349378210.6448747306931283, [281, -1, -7, -893, -9599838815], [undefined, null, null, "TS%<a(p~dg)58wTanBEz*  RT!w7sOytZ&M:]7Oqp1L7%Y*yp-ty[MLo#`HdyET[/uCnvgFgBTo0wA&v_@g", "\"X^/[8jO7d/Qi", [null, [true, -4349.3769302997314503, [true, null, [null, null, null], 67900721.8382392413718571], "%", ["0c", "d-fK6^c)J~yW-Ac1|<L-Ey7a{i~uJ`?[UUMEpVe.3'Pg53IdFJ%c?Sd", "A>Vs:`1%\"36WoMUZ0x,f~a=?W^G8,s#zZAC443abYy=6shC5vFYwdNnc~k<\\d4\\A%VilFZoAICA[!O'f3%n9/=~IXHgA`^FpwEHK_K M[<!<#*)b2y;", "Z,,mdVTC<L0\\By|TYdZ?&8:#k[tybt\\5n<g,[pHJ+=2MKd4\"&f33RmgLh%/J#4.!Yy_E?t^*5%Y$%6krF"], [false, false, true, false, false], [false], null, [null, "&DG4ZCMVa}T(&tcKS3<*'MDwfv3QH$&/[d*OtmoR%BIQMBm$D`Xk<pTIsH-/", null, undefined, 96], "G"], -3912744.7714314840723087, [-85086775, 4, -42023], null, null, false, true, [true, -4264037.8781073264893807, "j<@IFo(++s!7|Ctz=s5b IA/3/U[G)yOdLhYEh{pSy73R2Sg4)Dm\"M.G1", false, [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]]], [null, 1536.9067058482564653, false, [false, false, true, true, true, false, false, true, true, true, false, false, true, false, true, false], [-7116604863.11060271077804618, 2631233728.5425630577688869, ["qZ^ET3^h12N&:G", "J63G$"], -1, ">G@xh1<P_wWfU}=g`vx&d!o,f^'S4zO0pgb8wLt;!<0\\k0[EG", ["@0&c5'1F/Nnt.Jg|grbkK<n*\"", "Bx;SdH/UCAIddRic!aK.u\"qUE2b4idGB73M{Ra]", "?K!WA;>CCMY\"GecsYuaV2grVfc.Y9GTG8wU+t"], 8839, -63299183.036259129914832045, [false, null, "F)OgJ1+ZM:!}6.1m02{yOB~Dpag<v[K<FsS'7b7h|Vg>u ? F7w1Jk]@ExyC8UZylM66pF7MwPVP_xgWj8%R2DGae`XHQ#v@`wj]P;a8gZ`2ZyJDA=4ZJR@+L:zCA\\x", true, null, true, false, undefined, ["4XKRhd4", "SqbyW* f]:Gd#vp+^3&+@#=<~:>}`Sr+S]=kC=pJqZnRzM*l+WdHRSXG+ S8k6\\N,AnMG'IX@ c*N? 8Kr3}do@f?XlT;:K4Bis9kk+\\.-j#Hnj", "2u1a1A@f]y,8Ecer:T](R._/C['M}a US,b>y&L26:R\"<Pzv=oz'igz.v /9a*U*Zn7eF{5oFb[I,pm,iU^1H[vVhX^Xo/.E/ckb/", "F_?gb)*6:d]8VrFP3jS@v}bM\\]_/WK0Sm{.+", "IqRh]- d>KSTn<}c~x?PG,gzncBuZ#[?_CP],.J[`Wf8\\1la~98Ca+vCr!,{I=LG~]#r90+nTRhsJC,FEF70V9gbuBE6~zS3|oK\"3]geK__lZIsWktKo{{9>N|cuy@", "S5qdfGG'Kc%0)eTDcZ\\G8D9#y?y*5t", "@I+F$7`#C'5J)]{MY|f ^\\\"}fL?9x", "7G{h?2[Hx:V ,eR'4mS%e3'm;>\"Xk`>Cu f'`oGk<vT%\\FO*~`52U\"CWiFVgq", "ZV#;7H*rZrjG", "'l`\"bk<9,RMVELHYrBOON{zxt%vH", "cSmGZ(rROJwO", ":]$fj9@(/=v{xhA/T|3aQ0Vk*_gw9&ye:7+/gmx}`y`z[PiB0q#o&dVAAUqHBeQ>WT 03vY*AZ;QvUm+$dg`dWBi6[S8UnYn;*[t.7}SvZCm7,7I5%>`q,.#ip", "_9b@q~L;RJ/AQZb\\T^) `n:Vr2Dc\\#urOpgcUt(oB;})Hh1D-hY77_,(/vZ(j0t%c_MHj#El)kU=ep/rWmf8^", "F)&iLG\"Sm7MDa{_K8AGF+P[.wXB(np/1QG|?)'mj#@:yT:a+az4"], 68079059.40132030643616434], 4710228.3601190977744849]], undefined, undefined], null];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
