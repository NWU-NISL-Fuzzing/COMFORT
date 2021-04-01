var v0 = (function (v1){
var v2 = "[a-zA-Z]", v3 = "[0-9]", v4 = (((("(") + (v2)) + ("|")) + (v3)) + (")"), v5 = "(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)", v6 = "(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)", v7 = (((("(") + (v6)) + ("|")) + (v5)) + (")"), v8 = "(x(-[a-z0-9]{1,8})+)", v9 = (("(") + (v3)) + ("|[A-WY-Za-wy-z])"), v10 = (((("(") + (v9)) + ("(-")) + (v4)) + ("{2,8})+)"), v11 = ((((("(") + (v4)) + ("{5,8}|(")) + (v3)) + (v4)) + ("{3}))"), v12 = (((("(") + (v2)) + ("{2}|")) + (v3)) + ("{3})"), v13 = (("(") + (v2)) + ("{4})"), v14 = (((("(") + (v2)) + ("{3}(-")) + (v2)) + ("{3}){0,2})"), v15 = (((((((("(") + (v2)) + ("{2,3}(-")) + (v14)) + (")?|")) + (v2)) + ("{4}|")) + (v2)) + ("{5,8})"), v16 = (((((((((((v15) + ("(-")) + (v13)) + (")?(-")) + (v12)) + (")?(-")) + (v11)) + (")*(-")) + (v10)) + (")*(-")) + (v8)) + (")?"), v17 = (((((("^(") + (v16)) + ("|")) + (v8)) + ("|")) + (v7)) + (")$"), v18 = new RegExp(v17, "i");
var v20 = (((("-") + (v9)) + ("-(.*-)?\\1(?!")) + (v4)) + (")"), v21 = new RegExp(v20, "i"), v22 = (((((((("(") + (v4)) + ("{2,8}-)+")) + (v11)) + ("-(")) + (v4)) + ("{2,8}-)*\\3(?!")) + (v4)) + (")"), v23 = new RegExp(v22, "i");
function v24(v1){
if(! v18.test(v1)){
return false;
}
(v1) = v1.split(/-x-/)[0];
return (! v21.test(v1)) && (! v23.test(v1));
}
var v25 = ({"art-lojban" : "jbo", "cel-gaulish" : "cel-gaulish", "en-gb-oed" : "en-GB-oed", "i-ami" : "ami", "i-bnn" : "bnn", "i-default" : "i-default", "i-enochian" : "i-enochian", "i-hak" : "hak", "i-klingon" : "tlh", "i-lux" : "lb", "i-mingo" : "i-mingo", "i-navajo" : "nv", "i-pwn" : "pwn", "i-tao" : "tao", "i-tay" : "tay", "i-tsu" : "tsu", "no-bok" : "nb", "no-nyn" : "nn", "sgn-be-fr" : "sfb", "sgn-be-nl" : "vgt", "sgn-ch-de" : "sgg", "zh-guoyu" : "cmn", "zh-hakka" : "hak", "zh-min" : "zh-min", "zh-min-nan" : "nan", "zh-xiang" : "hsn", "sgn-br" : "bzs", "sgn-co" : "csn", "sgn-de" : "gsg", "sgn-dk" : "dsl", "sgn-es" : "ssp", "sgn-fr" : "fsl", "sgn-gb" : "bfi", "sgn-gr" : "gss", "sgn-ie" : "isg", "sgn-it" : "ise", "sgn-jp" : "jsl", "sgn-mx" : "mfs", "sgn-ni" : "ncs", "sgn-nl" : "dse", "sgn-no" : "nsl", "sgn-pt" : "psr", "sgn-se" : "swl", "sgn-us" : "ase", "sgn-za" : "sfs", "zh-cmn" : "cmn", "zh-cmn-hans" : "cmn-Hans", "zh-cmn-hant" : "cmn-Hant", "zh-gan" : "gan", "zh-wuu" : "wuu", "zh-yue" : "yue", "ja-latn-hepburn-heploc" : "ja-Latn-alalc97"});
var v26 = ({"in" : "id", "iw" : "he", "ji" : "yi", "jw" : "jv", "mo" : "ro", "ayx" : "nun", "cjr" : "mom", "cmk" : "xch", "drh" : "khk", "drw" : "prs", "gav" : "dev", "mst" : "mry", "myt" : "mry", "tie" : "ras", "tkk" : "twm", "tnf" : "prs", "BU" : "MM", "DD" : "DE", "FX" : "FR", "TP" : "TL", "YD" : "YE", "ZR" : "CD"});
var v27 = ({"aao" : [], "abh" : [], "abv" : [], "acm" : [], "acq" : [], "acw" : [], "acx" : [], "acy" : [], "adf" : [], "ads" : [], "aeb" : [], "aec" : [], "aed" : [], "aen" : [], "afb" : [], "afg" : [], "ajp" : [], "apc" : [], "apd" : [], "arb" : [], "arq" : [], "ars" : [], "ary" : [], "arz" : [], "ase" : [], "asf" : [], "asp" : [], "asq" : [], "asw" : [], "auz" : [], "avl" : [], "ayh" : [], "ayl" : [], "ayn" : [], "ayp" : [], "bbz" : [], "bfi" : [], "bfk" : [], "bjn" : [], "bog" : [], "bqn" : [], "bqy" : [], "btj" : [], "bve" : [], "bvl" : [], "bvu" : [], "bzs" : [], "cdo" : [], "cds" : [], "cjy" : [], "cmn" : [], "coa" : [], "cpx" : [], "csc" : [], "csd" : [], "cse" : [], "csf" : [], "csg" : [], "csl" : [], "csn" : [], "csq" : [], "csr" : [], "czh" : [], "czo" : [], "doq" : [], "dse" : [], "dsl" : [], "dup" : [], "ecs" : [], "esl" : [], "esn" : [], "eso" : [], "eth" : [], "fcs" : [], "fse" : [], "fsl" : [], "fss" : [], "gan" : [], "gom" : [], "gse" : [], "gsg" : [], "gsm" : [], "gss" : [], "gus" : [], "hab" : [], "haf" : [], "hak" : [], "hds" : [], "hji" : [], "hks" : [], "hos" : [], "hps" : [], "hsh" : [], "hsl" : [], "hsn" : [], "icl" : [], "ils" : [], "inl" : [], "ins" : [], "ise" : [], "isg" : [], "isr" : [], "jak" : [], "jax" : [], "jcs" : [], "jhs" : [], "jls" : [], "jos" : [], "jsl" : [], "jus" : [], "kgi" : [], "knn" : [], "kvb" : [], "kvk" : [], "kvr" : [], "kxd" : [], "lbs" : [], "lce" : [], "lcf" : [], "liw" : [], "lls" : [], "lsg" : [], "lsl" : [], "lso" : [], "lsp" : [], "lst" : [], "lsy" : [], "ltg" : [], "lvs" : [], "lzh" : [], "max" : [], "mdl" : [], "meo" : [], "mfa" : [], "mfb" : [], "mfs" : [], "min" : [], "mnp" : [], "mqg" : [], "mre" : [], "msd" : [], "msi" : [], "msr" : [], "mui" : [], "mzc" : [], "mzg" : [], "mzy" : [], "nan" : [], "nbs" : [], "ncs" : [], "nsi" : [], "nsl" : [], "nsp" : [], "nsr" : [], "nzs" : [], "okl" : [], "orn" : [], "ors" : [], "pel" : [], "pga" : [], "pks" : [], "prl" : [], "prz" : [], "psc" : [], "psd" : [], "pse" : [], "psg" : [], "psl" : [], "pso" : [], "psp" : [], "psr" : [], "pys" : [], "rms" : [], "rsi" : [], "rsl" : [], "sdl" : [], "sfb" : [], "sfs" : [], "sgg" : [], "sgx" : [], "shu" : [], "slf" : [], "sls" : [], "sqs" : [], "ssh" : [], "ssp" : [], "ssr" : [], "svk" : [], "swc" : [], "swh" : [], "swl" : [], "syy" : [], "tmw" : [], "tse" : [], "tsm" : [], "tsq" : [], "tss" : [], "tsy" : [], "tza" : [], "ugn" : [], "ugy" : [], "ukl" : [], "uks" : [], "urk" : [], "uzn" : [], "uzs" : [], "vgt" : [], "vkk" : [], "vkt" : [], "vsi" : [], "vsl" : [], "vsv" : [], "wuu" : [], "xki" : [], "xml" : [], "xmm" : [], "xms" : [], "yds" : [], "ysl" : [], "yue" : [], "zib" : [], "zlm" : [], "zmi" : [], "zsl" : [], "zsm" : []});
function v28(v1){
(v1) = v1.toLowerCase();
if(v25.hasOwnProperty(v1)){
return v25[v1];
}
var v29 = v1.split("-");
var v30 = 0;
while((v30) < (v29.length)){
var v31 = v29[v30];
if(((v31.length) === (1)) && (((v30) > (0)) || ((v31) === ("x")))){
break ;
}else {
if(((v30) !== (0)) && ((v31.length) === (2))){
(v31) = v31.toUpperCase();
}else {
if((v31.length) === (4)){
(v31) = (v31[0].toUpperCase()) + (v31.substring(1).toLowerCase());
}
}
}
if(v26.hasOwnProperty(v31)){
(v31) = v26[v31];
}else {
if(v27.hasOwnProperty(v31)){
(v31) = v27[v31][0];
if(((v30) === (1)) && ((v27[v31][1]) === (v29[0]))){
v29.shift();
v30--;
}
}
}
(v29[v30]) = v31;
v30++;
}
var v32 = v29.slice(0, v30).join("-");
var v33 = [];
while(((v30) < (v29.length)) && ((v29[v30]) !== ("x"))){
var v34 = v30;
v30++;
while(((v30) < (v29.length)) && ((v29[v30].length) > (1))){
v30++;
}
var v10 = v29.slice(v34, v30).join("-");
v33.push(v10);
}
v33.sort();
var v35;
if((v30) < (v29.length)){
(v35) = v29.slice(v30).join("-");
}
var v36 = v32;
if((v33.length) > (0)){
(v36) += ("-") + (v33.join("-"));
}
if((v35) !== (undefined)){
if((v36.length) > (0)){
(v36) += ("-") + (v35);
}else {
(v36) = v35;
}
}
return v36;
}
return (((typeof v1) === ("string")) && (v24(v1))) && ((v28(v1)) === (v1));
});
Object.defineProperty(v0, "MatricesIndicesExtraKind", ({get : (function (){
return v0._MatricesIndicesExtraKind;
}), enumerable : true, configurable : true}));
var v1 = (function (v1, v2){
(this.name) = 'MusicServices';
(this.host) = v1;
(this.port) = (v2) || (1400);
(this.controlURL) = '/MusicServices/Control';
(this.eventSubURL) = '/MusicServices/Event';
(this.SCPDURL) = '/xml/MusicServices1.xml';
});
var v2 = Array.prototype.filter.call(v1, v0);
if(! Array.isArray(v2)){
(v2) = [];
}
var v3 = (function (v1, v2, v3){
var v4 = v3(605), v5 = v3(419).concat("length", "prototype");
(v2.f) = (Object.getOwnPropertyNames) || ((function (v1){
return v4(v1, v5);
}));
});
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v3(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v3(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
(v1.ABORT_ERR) = 4;
