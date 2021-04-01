var v0 = (function (){
var v1 = this.getPicker().getSelectionModel().getSelection();
if((v1.length) === (1)){
this.setValue(v1[0]);
}
this.collapse();
});
(v0.prototype.scale) = (function (v1){
(this.x) = this.x.scale(v1);
(this.y) = this.y.scale(v1);
(this.z) = this.z.scale(v1);
(this.xx) = this.xx.scale(v1);
(this.yy) = this.yy.scale(v1);
(this.zz) = this.zz.scale(v1);
(this.yz) = this.yz.scale(v1);
(this.zx) = this.zx.scale(v1);
(this.xy) = this.xy.scale(v1);
});
var v1 = (function (v1){
this._setProperty('cue-before', v1);
});
var v2 = (function (v1, v2, v3){
'use strict';
var v4 = v3(282), v5 = v3(283), v6 = v3(302), v7 = v3(193);
function v8(v9, v10){
var v11 = (v7(v9)) ? (v4) : (v5);
return v11(v9, v6(v10, 3));
}
(v1.exports) = v8;
});
var v3 = (function (v1){
return (function (v2){
return [];
});
});
var v4 = (function v4(v1, v2){
if((v2) === ('__proto__')){
if(! v1.call(v1, v2)){
return void 0;
}else {
if(v0){
return v0(v1, v2).value;
}
}
}
return v1[v2];
});
(function (){
v2(/$/, "s");
v2(/s$/i, "s");
v2(/(ax|test)is$/i, "$1es");
v2(/(octop|vir)us$/i, "$1i");
v2(/(octop|vir)i$/i, "$1i");
v2(/(alias|status)$/i, "$1es");
v2(/(bu)s$/i, "$1ses");
v2(/(buffal|tomat)o$/i, "$1oes");
v2(/([ti])a$/i, "$1a");
v2(/([ti])um$/i, "$1a");
v2(/sis$/i, "ses");
v2(/ses$/i, "ses");
v2(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v2(/(hive)$/i, "$1s");
v2(/([^aeiouy]|qu)y$/i, "$1ies");
v2(/(x|ch|ss|sh)$/i, "$1es");
v2(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v2(/([m|l])ouse$/i, "$1ice");
v2(/([m|l])ice$/i, "$1ice");
v2(/^(ox)$/i, "$1en");
v2(/^(ox)en$/i, "$1en");
v2(/(quiz)$/i, "$1zes");
v3(/s$/i, "");
v3(/ss$/i, "ss");
v3(/(n)ews$/i, "$1ews");
v3(/([ti])um$/i, "$1um");
v3(/([ti])a$/i, "$1um");
v3(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v3(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v3(/(^analy)ses$/i, "$1sis");
v3(/(^analy)sis$/i, "$1sis");
v3(/([^f])ves$/i, "$1fe");
v3(/(hive)s$/i, "$1");
v3(/(tive)s$/i, "$1");
v3(/([lr])ves$/i, "$1f");
v3(/([^aeiouy]|qu)ies$/i, "$1y");
v3(/(s)eries$/i, "$1eries");
v3(/(m)ovies$/i, "$1ovie");
v3(/(x|ch|ss|sh)es$/i, "$1");
v3(/([m|l])ice$/i, "$1ouse");
v3(/([m|l])ouse$/i, "$1ouse");
v3(/(bus)es$/i, "$1");
v3(/(bus)$/i, "$1");
v3(/(o)es$/i, "$1");
v3(/(shoe)s$/i, "$1");
v3(/(cris|ax|test)es$/i, "$1is");
v3(/(cris|ax|test)is$/i, "$1is");
v3(/(octop|vir)i$/i, "$1us");
v3(/(octop|vir)us$/i, "$1us");
v3(/(alias|status)es$/i, "$1");
v3(/(alias|status)$/i, "$1");
v3(/^(ox)en/i, "$1");
v3(/(vert|ind)ices$/i, "$1ex");
v3(/(matr)ices$/i, "$1ix");
v3(/(quiz)zes$/i, "$1");
v3(/(database)s$/i, "$1");
v4("person", "people");
v4("man", "men");
v4("child", "children");
v4("sex", "sexes");
v4("move", "moves");
v4("cow", "kine");
v0("equipment");
v0("information");
v0("rice");
v0("money");
v0("species");
v0("series");
v0("fish");
v0("sheep");
v0("jeans");
})();
(v3.default) = v2;
