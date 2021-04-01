var v0 = (function (v1){
(v1) = (v1) * (2);
if((v1) < (1)){
return (((0.5) * (v1)) * (v1)) * (v1);
}
(v1) -= 2;
return (0.5) * ((((v1) * (v1)) * (v1)) + (2));
});
var v1 = (function (){
if(("\u0020abc".trim()) === ("abc")){
return true;
}
});
(v0.prototype.isReady) = (function (v1, v2){
var v3 = v1.getMaterial();
if(v3.disableDepthWrite){
return false;
}
var v4 = [];
var v5 = [];
var v6 = v1.getMesh();
var v7 = v6.getScene();
if((v3) && (v3.needAlphaTesting())){
v4.push("#define ALPHATEST");
if(v6.isVerticesDataPresent(v8.VertexBuffer.UVKind)){
v5.push(v8.VertexBuffer.UVKind);
v4.push("#define UV1");
}
if(v6.isVerticesDataPresent(v8.VertexBuffer.UV2Kind)){
v5.push(v8.VertexBuffer.UV2Kind);
v4.push("#define UV2");
}
}
if((v6.useBones) && (v6.computeBonesUsingShaders)){
v5.push(v8.VertexBuffer.MatricesIndicesKind);
v5.push(v8.VertexBuffer.MatricesWeightsKind);
if((v6.numBoneInfluencers) > (4)){
v5.push(v8.VertexBuffer.MatricesIndicesExtraKind);
v5.push(v8.VertexBuffer.MatricesWeightsExtraKind);
}
v4.push(("#define NUM_BONE_INFLUENCERS ") + (v6.numBoneInfluencers));
v4.push(("#define BonesPerMesh ") + ((v6.skeleton.bones.length) + (1)));
}else {
v4.push("#define NUM_BONE_INFLUENCERS 0");
}
if(v2){
v4.push("#define INSTANCES");
v5.push("world0");
v5.push("world1");
v5.push("world2");
v5.push("world3");
}
var v9 = v4.join("\n");
if((this._cachedDefines) !== (v9)){
(this._cachedDefines) = v9;
(this._effect) = this._scene.getEngine().createEffect("depth", v5, [], [], v9);
}
return this._effect.isReady();
});
// GenBlkBrick
for(;(v0) > (0);(v0) = (v0) - (1)){
var v2 = (function (v1, v2, v3){
(v1.exports) = v3(1227)();
});
// GenBlkBrick
while((v0) && ((v0.nodeType) == (1))){
var v3 = (function (v1, v2, v3){
return v1._modulesNamespaceMap[v3];
});
}
}
(v3.formatDijitFormWidget) = v1;
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
(v1.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v0.prototype) = v2.prototype, new v0()));
(v2.wasCalled) = false;
