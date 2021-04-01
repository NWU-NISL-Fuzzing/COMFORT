var v0 = (function (v1, v2, v3){
(function (v2){
(v1.exports) = (function (v1, v3){
for(var v4 = Math.min(v1.length, v3.length), v6 = new v2(v4), v7 = 0;(v7) < (v4);++v7){
(v6[v7]) = (v1[v7]) ^ (v3[v7]);
}
return v6;
});
}).call(this, v3(36).Buffer);
});
var v1 = (function (){
return ({fill : (function (){
}), stroke : (function (){
}), beginPath : (function (){
}), clip : (function (){
}), moveTo : (function (){
}), lineTo : (function (){
}), closePath : (function (){
}), setLineDash : (function (){
}), save : (function (){
}), restore : (function (){
})});
});
var v2 = (function (v1, v2, v3){
var v4 = v3(5231);
(v1.exports) = (function (v1, v2){
return (! ((null) == (v1)) || (! v1.length)) && ((v4(v1, v2, 0)) > (- 1));
});
});
var v3 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("759b8edafa7e0655ceb3eea551fc62d8.svg");
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
for(var v0 in v1){
v1(v0, v2);
}
(v3.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v0(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v0(this._root, v1);
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
// GenBlkBrick
for(var v4 = 0;(v4) < (5);++v4){
{
var v5 = 0;
for(var v6 = 0;((v6) + (v4)) < (v3);v6++){
if((v4[(v6) + (v4)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v4)];
(v4[(v6) + (v4)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v4) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v4) = Math.floor(((v4) * (10)) / (13));
}
}
(v7) = (function (){
v1();
v0();
});
}
