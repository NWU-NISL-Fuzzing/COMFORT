// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
var v1 = (function (v1, v2){
var v3 = (function (v4, v5){
v1(v4, v5);
v2(v4, v5);
});
(v3._merged) = true;
return v3;
});
(v1.prototype.namespace) = 'OvercanvasPopup';
}
// GenBlkBrick
for(var v2 = 0;(v2) < (10);++v2){
if((v0) === (64)){
(v2) |= 0x08;
}
// GenBlkBrick
for((v3) = 0;(v3) < ((v1) || ("").length);v3++){
while(v3--){
(v1) = v2(v1, v3[v3], v3, v3);
}
}
}
var v4 = (function (v1){
if((this._listeners) === (undefined)){
return;
}
var v3 = this._listeners;
var v4 = v3[v1.type];
if((v4) !== (undefined)){
(v1.target) = this;
for(var v5 = 0, v6 = v4.length;(v5) < (v6);v5++){
v4[v5].call(this, v1);
}
}
});
function v5(v1, v2){
var v3 = ({dx : v1.v, dv : v1(v1)}), v5 = v4(v1, (v2) * (0.5), v3), v7 = v4(v1, (v2) * (0.5), v5), v8 = v4(v1, v2, v7), v9 = ((1.0) / (6.0)) * (((v3.dx) + ((2.0) * ((v5.dx) + (v7.dx)))) + (v8.dx)), v10 = ((1.0) / (6.0)) * (((v3.dv) + ((2.0) * ((v5.dv) + (v7.dv)))) + (v8.dv));
(v1.x) = (v1.x) + ((v9) * (v2));
(v1.v) = (v1.v) + ((v10) * (v2));
return v1;
}
// GenBlkBrick
for(var v6 = 0;(v6) < (4);v6++){
function v7(){
return (v6) * (v6);
}
}
var v8 = ((v6) * (v6)) - (((4) * (v0)) * (v2));
(function (){
v5(/$/, "s");
v5(/s$/i, "s");
v5(/(ax|test)is$/i, "$1es");
v5(/(octop|vir)us$/i, "$1i");
v5(/(octop|vir)i$/i, "$1i");
v5(/(alias|status)$/i, "$1es");
v5(/(bu)s$/i, "$1ses");
v5(/(buffal|tomat)o$/i, "$1oes");
v5(/([ti])a$/i, "$1a");
v5(/([ti])um$/i, "$1a");
v5(/sis$/i, "ses");
v5(/ses$/i, "ses");
v5(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v5(/(hive)$/i, "$1s");
v5(/([^aeiouy]|qu)y$/i, "$1ies");
v5(/(x|ch|ss|sh)$/i, "$1es");
v5(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v5(/([m|l])ouse$/i, "$1ice");
v5(/([m|l])ice$/i, "$1ice");
v5(/^(ox)$/i, "$1en");
v5(/^(ox)en$/i, "$1en");
v5(/(quiz)$/i, "$1zes");
v1(/s$/i, "");
v1(/ss$/i, "ss");
v1(/(n)ews$/i, "$1ews");
v1(/([ti])um$/i, "$1um");
v1(/([ti])a$/i, "$1um");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v1(/(^analy)ses$/i, "$1sis");
v1(/(^analy)sis$/i, "$1sis");
v1(/([^f])ves$/i, "$1fe");
v1(/(hive)s$/i, "$1");
v1(/(tive)s$/i, "$1");
v1(/([lr])ves$/i, "$1f");
v1(/([^aeiouy]|qu)ies$/i, "$1y");
v1(/(s)eries$/i, "$1eries");
v1(/(m)ovies$/i, "$1ovie");
v1(/(x|ch|ss|sh)es$/i, "$1");
v1(/([m|l])ice$/i, "$1ouse");
v1(/([m|l])ouse$/i, "$1ouse");
v1(/(bus)es$/i, "$1");
v1(/(bus)$/i, "$1");
v1(/(o)es$/i, "$1");
v1(/(shoe)s$/i, "$1");
v1(/(cris|ax|test)es$/i, "$1is");
v1(/(cris|ax|test)is$/i, "$1is");
v1(/(octop|vir)i$/i, "$1us");
v1(/(octop|vir)us$/i, "$1us");
v1(/(alias|status)es$/i, "$1");
v1(/(alias|status)$/i, "$1");
v1(/^(ox)en/i, "$1");
v1(/(vert|ind)ices$/i, "$1ex");
v1(/(matr)ices$/i, "$1ix");
v1(/(quiz)zes$/i, "$1");
v1(/(database)s$/i, "$1");
v4("person", "people");
v4("man", "men");
v4("child", "children");
v4("sex", "sexes");
v4("move", "moves");
v4("cow", "kine");
v7("equipment");
v7("information");
v7("rice");
v7("money");
v7("species");
v7("series");
v7("fish");
v7("sheep");
v7("jeans");
})();
{
(v2) = ((v2) + (1)) | (0);
}
