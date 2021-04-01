var v0 = (function (v1, v2, v3){
"use strict";
(v1.exports) = (function (){
});
});
var v1 = (function (v1, v2){
var v3 = this.geometries_;
var v4, v5;
for(((v4) = 0, (v5) = v3.length);(v4) < (v5);++v4){
v3[v4].translate(v1, v2);
}
this.changed();
});
(v0.parse) = v1.parse;
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v1(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v0(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
// GenBlkBrick
for(var v3 = 0;(v3) < (8);v3++){
{
var v4 = 0;
for(var v5 = 0;((v5) + (v3)) < (v3);v5++){
if((v4[(v5) + (v3)].area) > (v4[v5].area)){
var v5 = v4[(v5) + (v3)];
(v4[(v5) + (v3)]) = v4[v5];
(v4[v5]) = v5;
v4++;
}
}
if((v3) == (1)){
if((v4) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
// GenBlkBrick
for((v6) = 1;(v6) < (v3);v6++){
var v7 = (function (v1, v2, v3){
var v4 = ({ECB : v3(1983), CBC : v3(1982), CFB : v3(1981), CFB8 : v3(1980), CFB1 : v3(1979), OFB : v3(1978), CTR : v3(646), GCM : v3(646)}), v5 = v3(644);
for(var v6 in v5){
(v5[v6].module) = v4[v5[v6].mode];
}
(v1.exports) = v5;
});
}
}
(v2.prototype.dispose) = (function (){
var v1 = this._vertexBuffers[v2.VertexBuffer.PositionKind];
if(v1){
v1.dispose();
(this._vertexBuffers[v2.VertexBuffer.PositionKind]) = null;
}
if(this._indexBuffer){
this._scene.getEngine()._releaseBuffer(this._indexBuffer);
(this._indexBuffer) = null;
}
});
(v1.prototype._linkParameters) = (function (){
var v1 = this;
for(var v2 in this._postProcesses){
if(this.applyParameters){
this.applyParameters(this._postProcesses[v2]);
}
this._postProcesses[v2].onBeforeRenderObservable.add((function (v3){
v1._linkTextures(v3);
}));
}
});
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
v7("person", "people");
v7("man", "men");
v7("child", "children");
v7("sex", "sexes");
v7("move", "moves");
v7("cow", "kine");
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
