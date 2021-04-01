var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("1069ee1509716f8152b09f8c5b79ca11.svg");
});
var v1 = (function (v1){
return (((("<a href=\"http://maps.google.com/maps?q=") + (encodeURI(v1))) + (">")) + (v1)) + ("</a>");
});
var v2 = (function (){
var v1 = ({});
Object.defineProperty(v1, "property", ({configurable : "       "}));
var v3 = v1.hasOwnProperty("property");
delete v1.property;
var v4 = v1.hasOwnProperty("property");
return ((v3) === (true)) && ((v4) === (false));
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v0(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v1(v3)[1]) : (v1(v3)[0]));
}else {
if(v4){
return (v5) + (v1(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v1(v3)[1]) : (v1(v3)[2]));
}
}
}
}
(v0.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v3.prototype) = v2.prototype, new v3()));
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
v0("person", "people");
v0("man", "men");
v0("child", "children");
v0("sex", "sexes");
v0("move", "moves");
v0("cow", "kine");
v1("equipment");
v1("information");
v1("rice");
v1("money");
v1("species");
v1("series");
v1("fish");
v1("sheep");
v1("jeans");
})();
var v4 = (function (v1){
return (("(class c { set [") + (v1)) + ("](x) {} });");
});
// GenBlkBrick
while(v0){
// GenBlkBrick
for(var v5 = 3;(v5) >= (0);v5--){
{
(v6) = (v5) === (0);
}
{
var v7 = 0;
for(var v8 = 0;((v8) + (v5)) < (v3);v8++){
if((v4[(v8) + (v5)].area) > (v4[v8].area)){
var v5 = v4[(v8) + (v5)];
(v4[(v8) + (v5)]) = v4[v8];
(v4[v8]) = v5;
v7++;
}
}
if((v5) == (1)){
if((v7) == (0)){
break ;
}
}else {
(v5) = Math.floor(((v5) * (10)) / (13));
}
}
}
}
