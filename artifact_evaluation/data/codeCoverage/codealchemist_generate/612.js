var v0 = (function (v1, v2){
var v3 = new v1.constructor((v1.length) + (v2.length));
v3.set(v1);
v3.set(v2, v1.length);
return v3;
});
var v1 = (function (v1, v2, v3){
var v4 = v1('./_export');
v4(v4.S, 'Date', ({now : (function (){
return new Date().getTime();
})}));
});
(v1.escapeString) = v0;
var v2 = (function (v1, v2){
if(((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_LOADED)) || ((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_NONE))){
if(v1.material){
if((v1.material) instanceof (v3.StandardMaterial)){
(v2.materials) = (v2.materials) || ([]);
if(! v2.materials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.materials.push(v1.material.serialize());
}
}else {
if((v1.material) instanceof (v3.MultiMaterial)){
(v2.multiMaterials) = (v2.multiMaterials) || ([]);
if(! v2.multiMaterials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.multiMaterials.push(v1.material.serialize());
}
}
}
}
var v5 = v1._geometry;
if(v5){
if(! v2.geometries){
(v2.geometries) = ({});
(v2.geometries.boxes) = [];
(v2.geometries.spheres) = [];
(v2.geometries.cylinders) = [];
(v2.geometries.toruses) = [];
(v2.geometries.grounds) = [];
(v2.geometries.planes) = [];
(v2.geometries.torusKnots) = [];
(v2.geometries.vertexData) = [];
}
v1(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v0(v1, v2));
}
});
// GenBlkBrick
while((v0) >= (2)){
var v3 = (function (){
var v1, v2 = this.values(), v3;
while(true){
(v3) = v2.next();
if(v3.done){
break ;
}
(v1) = v3.value;
}
return v1;
});
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
var v4 = Array.prototype.filter.call(v3, v0);
var v5 = (function (v1, v2, v3){
var v4 = v3(5195);
(v1.exports) = (function (v1, v2){
var v3 = v1.__data__;
return (v4(v2)) ? (v3[(("string") == (typeof v2)) ? ("string") : ("hash")]) : (v3.map);
});
});
