var v0 = (function (v1, v2, v3, v4, v5){
if(((v1) === (v4)) || ((v1) === (v5))){
return ({start : (v2) - ((v3) / (2)), end : (v2) + ((v3) / (2))});
}else {
if(((v1) < (v4)) || ((v1) > (v5))){
return ({start : (v2) - (v3), end : v2});
}
}
return ({start : v2, end : (v2) + (v3)});
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("13c22b05b67e203010c9bdf7bef139ef.svg");
});
var v2 = (function (v1){
return this._parse(this.stripWhitespace(this._stripComments(v1)));
});
(v0.prototype) = ((v1) === (null)) ? (Object.create(v1)) : (((v2.prototype) = v1.prototype, new v2()));
var v3 = (function (v1, v2){
var v3 = arguments[2];
var v5 = (this.capacity) - (1);
for(var v6 = (this.length) - (1);(v6) >= (0);v6--){
var v7 = ((this.front) + (v6)) & (v5);
(v2) = v1.call(v3, v2, this[v7], v6, this);
}
return v2;
});
(v2.prototype.dispose) = (function (){
});
(v3.prototype.contains) = (function (v1){
if((v1) === (this)){
return false;
}
var v2 = v1;
while(((v2) !== (this)) && ((v2) !== (null))){
(v2) = v2.clock;
}
return (v2) === (this);
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
v1("person", "people");
v1("man", "men");
v1("child", "children");
v1("sex", "sexes");
v1("move", "moves");
v1("cow", "kine");
v3("equipment");
v3("information");
v3("rice");
v3("money");
v3("species");
v3("series");
v3("fish");
v3("sheep");
v3("jeans");
})();
