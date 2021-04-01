var v0 = (function (){
var v1 = false;
function v2(v3, v4, v5, v6){
if((v5) === (1)){
(v1) = (v3) === (0);
}
}
var v7 = ({0 : 0, 1 : 1, 2 : 2, length : 3});
var v8 = (function (){
});
(v8.prototype) = v7;
var v9 = new v8();
(v9.length) = 3;
Array.prototype.reduce.call(v9, v2);
return v1;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(39), v5 = v3(354), v6 = v3(106);
(v1.exports) = (function (v1, v2, v3, v7){
var v8 = String(v6(v1)), v10 = v8.length, v11 = ((void 0) === (v3)) ? (" ") : (String(v3)), v12 = v4(v2);
if(((v12) <= (v10)) || (("") == (v11))){
return v8;
}
var v13 = (v12) - (v10), v14 = v5.call(v11, Math.ceil((v13) / (v11.length)));
return (((v14.length) > (v13)) && ((v14) = v14.slice(0, v13)), (v7) ? ((v14) + (v8)) : ((v8) + (v14)));
});
});
(v1.prototype) = v0.prototype;
(v0.prototype._create) = (function (v1, v2, v3){
(this.container) = v1;
(this.options) = (v2) || (({}));
(this.json) = (v3) || (({}));
var v4 = (this.options.mode) || ('tree');
this.setMode(v4);
});
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v0(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v1(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
var v3 = (function (){
var v1 = (function (){
var v2 = (function (){
});
var v3 = (function (){
});
var v4 = (function (){
});
var v5 = (function (){
});
var v6 = (function (){
});
v6();
v4();
v5();
v3();
v2();
});
var v7 = (function (){
var v8 = (function (){
});
var v9 = (function (){
});
var v10 = (function (){
});
var v11 = (function (){
});
var v12 = (function (){
});
v11();
v10();
v12();
v9();
v8();
});
var v13 = (function (){
var v14 = (function (){
});
var v15 = (function (){
});
var v16 = (function (){
});
var v17 = (function (){
});
v16();
v15();
v14();
v17();
});
var v18 = (function (){
var v8 = (function (){
});
var v9 = (function (){
});
var v10 = (function (){
});
var v11 = (function (){
});
var v12 = (function (){
});
v11();
v10();
v12();
v9();
v8();
});
var v19 = (function (){
var v9 = (function (){
});
var v10 = (function (){
});
var v11 = (function (){
});
var v12 = (function (){
});
var v8 = (function (){
});
v11();
v10();
v12();
v9();
v8();
});
var v20 = (function (){
var v10 = (function (){
});
var v12 = (function (){
});
var v11 = (function (){
});
var v9 = (function (){
});
var v8 = (function (){
});
var v21 = (function (){
});
var v22 = (function (){
});
v11();
v10();
v12();
v9();
v8();
v21();
v22();
});
var v23 = (function (){
var v9 = (function (){
});
var v10 = (function (){
});
var v12 = (function (){
});
var v11 = (function (){
});
var v8 = (function (){
});
v11();
v10();
v12();
v9();
v8();
});
v7();
v19();
v23();
v18();
v13();
v13();
v20();
v1();
});
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
[].reduce(v1, 1);
