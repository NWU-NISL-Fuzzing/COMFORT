var v0 = (function (v1, v2){
return ((((((((((/^(?:a|area|link|base)$/.test(v2)) && ((v1) === ('href'))) || (((v2) === ('img')) && (/^(?:src|longdesc|usemap)$/.test(v1)))) || (((v2) === ('object')) && (/^(?:classid|codebase|data|usemap)$/.test(v1)))) || (((v2) === ('q')) && ((v1) === ('cite')))) || (((v2) === ('blockquote')) && ((v1) === ('cite')))) || ((((v2) === ('ins')) || ((v2) === ('del'))) && ((v1) === ('cite')))) || (((v2) === ('form')) && ((v1) === ('action')))) || (((v2) === ('input')) && (((v1) === ('src')) || ((v1) === ('usemap'))))) || (((v2) === ('head')) && ((v1) === ('profile')))) || (((v2) === ('script')) && (((v1) === ('src')) || ((v1) === ('for'))));
});
(v0.prototype.constructor) = 12;
// GenBlkBrick
for(var v0 in undefined){
var v1 = (function (v1){
"use strict";
return v1.extend("sap.ui.demo.bulletinboard.model.FlaggedType", ({formatValue : (function (v2){
return (v2) === (1);
}), parseValue : (function (v3){
if(v3){
return 1;
}
return 0;
}), validateValue : (function (){
return true;
})}));
});
v1(/$/, "s");
}
Object.defineProperty(Object.prototype, "constructor", ({get : v1, set : v0, configurable : true}));
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = v3(10), v5 = v4;
(v1.exports) = v5;
});
(v2.Log2) = (function (v1){
return (Math.log(v1)) * (Math.LOG2E);
});
// GenBlkBrick
for(var v0 in v0){
function v3(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v0(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v2(v1.left, v1.left.right);
(v1) = v0(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v2(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v0(v1.right, v1.right.left);
(v1) = v2(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v3(v1.left, false);
v3(v1.right, true);
(v1) = v3(v1, true);
(v1) = v3(v1, false);
return v1;
}
}
(function (){
v3(/$/, "s");
v3(/s$/i, "s");
v3(/(ax|test)is$/i, "$1es");
v3(/(octop|vir)us$/i, "$1i");
v3(/(octop|vir)i$/i, "$1i");
v3(/(alias|status)$/i, "$1es");
v3(/(bu)s$/i, "$1ses");
v3(/(buffal|tomat)o$/i, "$1oes");
v3(/([ti])a$/i, "$1a");
v3(/([ti])um$/i, "$1a");
v3(/sis$/i, "ses");
v3(/ses$/i, "ses");
v3(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v3(/(hive)$/i, "$1s");
v3(/([^aeiouy]|qu)y$/i, "$1ies");
v3(/(x|ch|ss|sh)$/i, "$1es");
v3(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v3(/([m|l])ouse$/i, "$1ice");
v3(/([m|l])ice$/i, "$1ice");
v3(/^(ox)$/i, "$1en");
v3(/^(ox)en$/i, "$1en");
v3(/(quiz)$/i, "$1zes");
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
