var NISLFuzzingFunc = function(f, g) {
    var a = f.concat();
    if (!g) {
        return a;
    }
    a = a.concat();
    var h = a.reduce(function(a, b) {
        return a + b;
    }, 0);
    return h;
};
var NISLParameter0 = ["?7!'C1]N.TFirTTov*@UV&=X*GN*td8}t4$4+Z{p)ee0R%X(`<QPE(i5}'m~%M*GuC5kq 226}:Fx:Kbe<\\[J%pJU(R|lctiQ|M'3_NH9|=eF2b94r{]Y", "z.ST.n&aN`.[6f:'ze&HH<$!<Rw&w9Ln?\",=IjF0o1Ya{2t3@r\"/xy.E/ PNycK>zd.w/g;O8nc7>dpYh)Q%2Q[V<we\"\"OmGwv", "qB", "7* )Du86sf>Gh=,m\"{)(otjTh:4(7+'8gK~U5;8m\"rn|qAiY~)v7V@48&4MXs!i/x$8>KVvA,Q`4?D+ZAq`xMN3gU>GsA?uDv-)b\\", "SLA INR36})\\,~~y*)}VeazS`2+VF,cm?HwRd^=e@", "PPs2.{Cc#3a<!A;y08$iH.seo5j^qPKpv^k8 DY98sX~:tksO'SU", "cPf /+$ee7uuw0WtEV;a-6j~QTd5.nVP\\i^lC,;F4};a5U*~D6", "`3H1[{p5co,HV;A)+v:65Ap8sMD[3T|Ie263,5vOAO2G i`{qP<[$2csPN0V,gfRs d9pO;OIDp]+#FZR\\dxD?PI[h7'", "'sIG.5^|1SPv,X(L/gke-?K8{I?4({'E{%mVc.X_h@$RW>rr<(rs`V\\=V/ L' GI_Yw`Ba3[*B{H1L", "\"}fT&aX*LIR:UM\\?!_2.}fu.;gOS0{0{FV-SE}}dHIZxlXF72h k*:ggH\\m)6(C]V~355Q>H,!$h,BA/2a7@4", "t\"q4qjh", "636[_`M#L7JQ, Jj]y6{`%$C!:(5*|rW.b<g((iKsT", "'.wAI`k7Dn5zf}F.j,*+S[\"Y%+q@SQGt!31drt|QrO!.9F|,5>,x;", "`rVD'[7 K\\|Z7dT^L_ QNF5QvKECL'&/N-RKJGMCEL*K+\\ xNGp`"];
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
