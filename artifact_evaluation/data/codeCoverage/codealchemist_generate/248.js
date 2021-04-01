var v0 = (function (v1, v2, v3){
var v4 = v3(310), v5 = Array.prototype.splice;
(v1.exports) = (function (v1){
var v2 = this.__data__, v3 = v4(v2, v1);
return ! ((v3) < (0)) || ((((v3) == ((v2.length) - (1))) ? (v2.pop()) : (v5.call(v2, v3, 1)), --this.size, 0));
});
});
(v0.prototype) = ({interpolate : (function (v1, v2, v3){
var v4 = (v1) + (((v2) - (v1)) * (v3));
if((v3) < (this.lensPos)){
(v4) += ((this.leftImpl.interpolate(v1, (v1) + (((v2) - (v1)) * (this.lensPos)), (v3) / (this.lensPos))) - (v4)) * (this.absStrength);
}else {
(v4) += ((this.rightImpl.interpolate((v1) + (((v2) - (v1)) * (this.lensPos)), v2, ((v3) - (this.lensPos)) / ((1) - (this.lensPos)))) - (v4)) * (this.absStrength);
}
return v4;
}), setLensPos : (function (v5, v6){
(this.lensPos) += ((v7.clipNormalized(v5)) - (this.lensPos)) * (v6);
}), setLensStrength : (function (v8, v6){
(this.lensStrength) += ((v7.clip(v8, - 1, 1)) - (this.lensStrength)) * (v6);
(this.absStrength) = v7.abs(this.lensStrength);
this.leftImpl.setFlipped((this.lensStrength) > (0));
this.rightImpl.setFlipped((this.lensStrength) < (0));
})});
var v1 = (function (v1, v2, v3){
var v4 = v3(181)(Object, "create");
(v1.exports) = v4;
});
var v2 = (function (){
try{
}finally{
v0((393266900) * (1957286472));
}
});
var v3 = (function (){
return this.getPropertyValue('-webkit-perspective-origin');
});
var v4 = (function v4(v1){
if((! v1) || ((v2.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v0.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v0.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v0.call(v1, v6));
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
v0("person", "people");
v0("man", "men");
v0("child", "children");
v0("sex", "sexes");
v0("move", "moves");
v0("cow", "kine");
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
if(v1.now){
(v4.now) = (function v2(){
return v4.clock.now;
});
}
