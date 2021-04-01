var v0 = (function (v1){
Object.prototype.valueOf.apply(v1, arguments);
});
// GenBlkBrick
for(var v0 in Array.prototype){
var v1 = (function (v1){
(v1) = (v1) || ('');
var v2 = /\{\{(tripIndex)\}\}/g;
var v3 = /\{\{(tripTotal)\}\}/g;
(v1) = v1.replace(v2, (this.tripIndex) + (1));
(v1) = v1.replace(v3, this.tripData.length);
return v1;
});
}
// GenBlkBrick
for(var v0 in v1){
var v2 = (function (v1){
this._setProperty('-webkit-backface-visibility', v1);
});
}
var v3 = (function (v1){
(v1) = Number(v1);
var v3 = ((v1) < (0)) ? (- 1) : (1);
if((v1) != (v1)){
return 0;
}
if(((Math.abs(v1)) == (0)) || ((Math.abs(v1)) == (Number.POSITIVE_INFINITY))){
return v1;
}
return (v3) * (Math.floor(Math.abs(v1)));
});
var v4 = (function (v1, v2, v3){
"use strict";
var v4 = Object.prototype.toString, v6 = v4.call((function (){
return arguments;
})());
(v2.exports) = (function (v1){
return (v4.call(v1)) === (v6);
});
});
(v2.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v0(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v4(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v0(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
(function (){
v0(/$/, "s");
v0(/s$/i, "s");
v0(/(ax|test)is$/i, "$1es");
v0(/(octop|vir)us$/i, "$1i");
v0(/(octop|vir)i$/i, "$1i");
v0(/(alias|status)$/i, "$1es");
v0(/(bu)s$/i, "$1ses");
v0(/(buffal|tomat)o$/i, "$1oes");
v0(/([ti])a$/i, "$1a");
v0(/([ti])um$/i, "$1a");
v0(/sis$/i, "ses");
v0(/ses$/i, "ses");
v0(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v0(/(hive)$/i, "$1s");
v0(/([^aeiouy]|qu)y$/i, "$1ies");
v0(/(x|ch|ss|sh)$/i, "$1es");
v0(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v0(/([m|l])ouse$/i, "$1ice");
v0(/([m|l])ice$/i, "$1ice");
v0(/^(ox)$/i, "$1en");
v0(/^(ox)en$/i, "$1en");
v0(/(quiz)$/i, "$1zes");
v2(/s$/i, "");
v2(/ss$/i, "ss");
v2(/(n)ews$/i, "$1ews");
v2(/([ti])um$/i, "$1um");
v2(/([ti])a$/i, "$1um");
v2(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v2(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v2(/(^analy)ses$/i, "$1sis");
v2(/(^analy)sis$/i, "$1sis");
v2(/([^f])ves$/i, "$1fe");
v2(/(hive)s$/i, "$1");
v2(/(tive)s$/i, "$1");
v2(/([lr])ves$/i, "$1f");
v2(/([^aeiouy]|qu)ies$/i, "$1y");
v2(/(s)eries$/i, "$1eries");
v2(/(m)ovies$/i, "$1ovie");
v2(/(x|ch|ss|sh)es$/i, "$1");
v2(/([m|l])ice$/i, "$1ouse");
v2(/([m|l])ouse$/i, "$1ouse");
v2(/(bus)es$/i, "$1");
v2(/(bus)$/i, "$1");
v2(/(o)es$/i, "$1");
v2(/(shoe)s$/i, "$1");
v2(/(cris|ax|test)es$/i, "$1is");
v2(/(cris|ax|test)is$/i, "$1is");
v2(/(octop|vir)i$/i, "$1us");
v2(/(octop|vir)us$/i, "$1us");
v2(/(alias|status)es$/i, "$1");
v2(/(alias|status)$/i, "$1");
v2(/^(ox)en/i, "$1");
v2(/(vert|ind)ices$/i, "$1ex");
v2(/(matr)ices$/i, "$1ix");
v2(/(quiz)zes$/i, "$1");
v2(/(database)s$/i, "$1");
v1("person", "people");
v1("man", "men");
v1("child", "children");
v1("sex", "sexes");
v1("move", "moves");
v1("cow", "kine");
v5("equipment");
v5("information");
v5("rice");
v5("money");
v5("species");
v5("series");
v5("fish");
v5("sheep");
v5("jeans");
})();
