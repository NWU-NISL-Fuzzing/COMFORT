var v0 = (function (v1){
(this.UI) = v1;
});
var v1 = (function (v1, v2, v3){
var v4 = v1('../../internals'), v5 = v1('./ConstantForceBehavior');
var v6 = (function (v7){
v5.call(this, v7);
});
v4.extend(v6, v5);
(v6.prototype.configure) = (function (v8){
(this.timeStep) = v8;
(this.scaledForce) = this.force.scale((v8) * (v8));
});
(v3.exports) = v6;
});
function v2(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v1(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v0(v1.left, v1.left.right);
(v1) = v1(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v0(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v1(v1.right, v1.right.left);
(v1) = v0(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v2(v1.left, false);
v2(v1.right, true);
(v1) = v2(v1, true);
(v1) = v2(v1, false);
return v1;
}
var v3 = (function (){
return (function v1(v2, v3){
var v4 = (this._private.cy) || (this);
if(! v4.styleEnabled()){
return this;
}
return this.animate(({delay : v2, duration : v2, complete : v3}));
});
});
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
v2("person", "people");
v2("man", "men");
v2("child", "children");
v2("sex", "sexes");
v2("move", "moves");
v2("cow", "kine");
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
(function (){
v1(/$/, "s");
v1(/s$/i, "s");
v1(/(ax|test)is$/i, "$1es");
v1(/(octop|vir)us$/i, "$1i");
v1(/(octop|vir)i$/i, "$1i");
v1(/(alias|status)$/i, "$1es");
v1(/(bu)s$/i, "$1ses");
v1(/(buffal|tomat)o$/i, "$1oes");
v1(/([ti])a$/i, "$1a");
v1(/([ti])um$/i, "$1a");
v1(/sis$/i, "ses");
v1(/ses$/i, "ses");
v1(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v1(/(hive)$/i, "$1s");
v1(/([^aeiouy]|qu)y$/i, "$1ies");
v1(/(x|ch|ss|sh)$/i, "$1es");
v1(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v1(/([m|l])ouse$/i, "$1ice");
v1(/([m|l])ice$/i, "$1ice");
v1(/^(ox)$/i, "$1en");
v1(/^(ox)en$/i, "$1en");
v1(/(quiz)$/i, "$1zes");
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
v3("person", "people");
v3("man", "men");
v3("child", "children");
v3("sex", "sexes");
v3("move", "moves");
v3("cow", "kine");
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
// GenBlkBrick
for(var v4 = 0;(v4) < (3);v4++){
function v5(v1, v2, v3){
v4++;
if((v2) === (0)){
return (v1) === (11);
}else {
if((v2) === (1)){
return (v1) === (9);
}else {
return false;
}
}
}
}
function v6(v1){
(v1) = (v1) | (0);
return (((v1) | (0)) / (5)) | (0);
}
