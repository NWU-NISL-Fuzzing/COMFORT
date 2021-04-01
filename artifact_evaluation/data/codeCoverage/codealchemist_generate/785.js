var v0 = (function (v1, v2, v3){
var v4 = v3(24).parseFloat, v5 = v3(224).trim;
(v1.exports) = (((1) / (v4((v3(526)) + ("-0")))) != ((- 1) / (0))) ? ((function (v1){
var v2 = v5(String(v1), 3), v3 = v4(v2);
return (((0) === (v3)) && (("-") == (v2.charAt(0)))) ? (- 0) : (v3);
})) : (v4);
});
(v1) = ((v1) * (2)) - (1);
function v2(v1, v2, v3, v4){
v1++;
return (v1) + (v2);
}
var v3 = (function (){
Number.prototype.ValueOf.call(({}));
});
var v4 = (function (){
for(var v1 = 10;(v1) > (5);v1--){
if((v1) < (0)){
return false;
}
if((v1) === (5)){
return false;
}
}
return true;
});
(function (){
v4(/$/, "s");
v4(/s$/i, "s");
v4(/(ax|test)is$/i, "$1es");
v4(/(octop|vir)us$/i, "$1i");
v4(/(octop|vir)i$/i, "$1i");
v4(/(alias|status)$/i, "$1es");
v4(/(bu)s$/i, "$1ses");
v4(/(buffal|tomat)o$/i, "$1oes");
v4(/([ti])a$/i, "$1a");
v4(/([ti])um$/i, "$1a");
v4(/sis$/i, "ses");
v4(/ses$/i, "ses");
v4(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v4(/(hive)$/i, "$1s");
v4(/([^aeiouy]|qu)y$/i, "$1ies");
v4(/(x|ch|ss|sh)$/i, "$1es");
v4(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v4(/([m|l])ouse$/i, "$1ice");
v4(/([m|l])ice$/i, "$1ice");
v4(/^(ox)$/i, "$1en");
v4(/^(ox)en$/i, "$1en");
v4(/(quiz)$/i, "$1zes");
v0(/s$/i, "");
v0(/ss$/i, "ss");
v0(/(n)ews$/i, "$1ews");
v0(/([ti])um$/i, "$1um");
v0(/([ti])a$/i, "$1um");
v0(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v0(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v0(/(^analy)ses$/i, "$1sis");
v0(/(^analy)sis$/i, "$1sis");
v0(/([^f])ves$/i, "$1fe");
v0(/(hive)s$/i, "$1");
v0(/(tive)s$/i, "$1");
v0(/([lr])ves$/i, "$1f");
v0(/([^aeiouy]|qu)ies$/i, "$1y");
v0(/(s)eries$/i, "$1eries");
v0(/(m)ovies$/i, "$1ovie");
v0(/(x|ch|ss|sh)es$/i, "$1");
v0(/([m|l])ice$/i, "$1ouse");
v0(/([m|l])ouse$/i, "$1ouse");
v0(/(bus)es$/i, "$1");
v0(/(bus)$/i, "$1");
v0(/(o)es$/i, "$1");
v0(/(shoe)s$/i, "$1");
v0(/(cris|ax|test)es$/i, "$1is");
v0(/(cris|ax|test)is$/i, "$1is");
v0(/(octop|vir)i$/i, "$1us");
v0(/(octop|vir)us$/i, "$1us");
v0(/(alias|status)es$/i, "$1");
v0(/(alias|status)$/i, "$1");
v0(/^(ox)en/i, "$1");
v0(/(vert|ind)ices$/i, "$1ex");
v0(/(matr)ices$/i, "$1ix");
v0(/(quiz)zes$/i, "$1");
v0(/(database)s$/i, "$1");
v3("person", "people");
v3("man", "men");
v3("child", "children");
v3("sex", "sexes");
v3("move", "moves");
v3("cow", "kine");
v2("equipment");
v2("information");
v2("rice");
v2("money");
v2("species");
v2("series");
v2("fish");
v2("sheep");
v2("jeans");
})();
function v5(v1, v2, v3, v4, v5){
v2(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v3));
}
(v2.prototype.visitCall) = (function (v1){
return v1.update(this.visit(v1.obj), this.visitMany(v1.args));
});
