var v0 = (function (){
return ({foo : "bar"});
});
(v0.CreateAndShow) = (function (v1, v2, v3){
var v4 = new v0(v1);
v4.show(v2, v3);
return v4;
});
(function (){
(this.stepBackward) = (function (){
(this.$tokenIndex) -= 1;
while((this.$tokenIndex) < (0)){
(this.$row) -= 1;
if((this.$row) < (0)){
(this.$row) = 0;
return null;
}
(this.$rowTokens) = this.$session.getTokens(this.$row);
(this.$tokenIndex) = (this.$rowTokens.length) - (1);
}
return this.$rowTokens[this.$tokenIndex];
});
(this.stepForward) = (function (){
(this.$tokenIndex) += 1;
var v0;
while((this.$tokenIndex) >= (this.$rowTokens.length)){
(this.$row) += 1;
if(! v0){
(v0) = this.$session.getLength();
}
if((this.$row) >= (v0)){
(this.$row) = (v0) - (1);
return null;
}
(this.$rowTokens) = this.$session.getTokens(this.$row);
(this.$tokenIndex) = 0;
}
return this.$rowTokens[this.$tokenIndex];
});
(this.getCurrentToken) = (function (){
return this.$rowTokens[this.$tokenIndex];
});
(this.getCurrentTokenRow) = (function (){
return this.$row;
});
(this.getCurrentTokenColumn) = (function (){
var v1 = this.$rowTokens;
var v2 = this.$tokenIndex;
var v3 = v1[v2].start;
if((v3) !== (undefined)){
return v3;
}
(v3) = 0;
while((v2) > (0)){
(v2) -= 1;
(v3) += v1[v2].value.length;
}
return v3;
});
}).call(v0.prototype);
function v1(v1, v2, v3, v4){
return (v2) ? (v0(v3)[0]) : ((v4) ? (v0(v3)[1]) : (v0(v3)[2]));
}
// GenBlkBrick
for(((v2) = 0, (v1) = v2);(v2) < (v1);++v2){
// GenBlkBrick
while((v0) < (v1)){
var v3 = (function (v1){
var v2 = '';
if(v1.scheme){
(v2) += (v1.scheme) + (':');
}
(v2) += '//';
if(v1.auth){
(v2) += (v1.auth) + ('@');
}
if(v1.host){
(v2) += v1.host;
}
if(v1.port){
(v2) += (":") + (v1.port);
}
if(v1.path){
(v2) += v1.path;
}
return v2;
});
var v4 = (function (){
return '/';
});
}
}
Array.prototype.reduce.call(v4, v0, v2);
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
v4(/s$/i, "");
v4(/ss$/i, "ss");
v4(/(n)ews$/i, "$1ews");
v4(/([ti])um$/i, "$1um");
v4(/([ti])a$/i, "$1um");
v4(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v4(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v4(/(^analy)ses$/i, "$1sis");
v4(/(^analy)sis$/i, "$1sis");
v4(/([^f])ves$/i, "$1fe");
v4(/(hive)s$/i, "$1");
v4(/(tive)s$/i, "$1");
v4(/([lr])ves$/i, "$1f");
v4(/([^aeiouy]|qu)ies$/i, "$1y");
v4(/(s)eries$/i, "$1eries");
v4(/(m)ovies$/i, "$1ovie");
v4(/(x|ch|ss|sh)es$/i, "$1");
v4(/([m|l])ice$/i, "$1ouse");
v4(/([m|l])ouse$/i, "$1ouse");
v4(/(bus)es$/i, "$1");
v4(/(bus)$/i, "$1");
v4(/(o)es$/i, "$1");
v4(/(shoe)s$/i, "$1");
v4(/(cris|ax|test)es$/i, "$1is");
v4(/(cris|ax|test)is$/i, "$1is");
v4(/(octop|vir)i$/i, "$1us");
v4(/(octop|vir)us$/i, "$1us");
v4(/(alias|status)es$/i, "$1");
v4(/(alias|status)$/i, "$1");
v4(/^(ox)en/i, "$1");
v4(/(vert|ind)ices$/i, "$1ex");
v4(/(matr)ices$/i, "$1ix");
v4(/(quiz)zes$/i, "$1");
v4(/(database)s$/i, "$1");
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
(v3.prototype.updateEffect) = (function (v1){
(this._effect) = this._engine.createEffect(({vertex : "postprocess", fragment : this._fragmentUrl}), [], this._parameters, this._samplers, ((v1) !== (undefined)) ? (v1) : (""));
});
