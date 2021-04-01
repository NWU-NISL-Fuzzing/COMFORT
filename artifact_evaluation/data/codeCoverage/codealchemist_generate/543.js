var v0 = (function (){
var v1 = this.geo_links_get_outgoing();
for(var v2 in v1){
if((((v1.length) == (1)) || ((v1[v2].deco_class) && ((v1[v2].deco_class.indexOf('entrance')) >= (0)))) || ((v1[v2].door_id) && ((v1[v2].door_id) == ('door_out')))){
return ({tsid : v1[v2].tsid, x : v1[v2].x, y : v1[v2].y});
}
}
return ({});
});
var v1 = (function (){
return (this._currentLayer) ? ((this._currentLayer.bringToBack(), this)) : (void 0);
});
var v2 = (function (v1, v2, v3){
var v4 = v3(262).Symbol;
(v1.exports) = v4;
});
var v3 = (function (v1){
var v2 = ({ZERO : "zero", ONE : "one", TWO : "two", FEW : "few", MANY : "many", OTHER : "other"});
v1.value("$locale", ({"DATETIME_FORMATS" : ({"AMPMS" : [], "DAY" : [], "ERANAMES" : [], "ERAS" : [], "FIRSTDAYOFWEEK" : 0, "MONTH" : [], "SHORTDAY" : [], "SHORTMONTH" : [], "STANDALONEMONTH" : [], "WEEKENDRANGE" : [], "fullDate" : "EEEE, d MMMM, y", "longDate" : "d MMMM, y", "medium" : "d MMM, y HH:mm:ss", "mediumDate" : "d MMM, y", "mediumTime" : "HH:mm:ss", "short" : "d/M/yy HH:mm", "shortDate" : "d/M/yy", "shortTime" : "HH:mm"}), "NUMBER_FORMATS" : ({"CURRENCY_SYM" : "Rs", "DECIMAL_SEP" : ".", "GROUP_SEP" : ",", "PATTERNS" : []}), "id" : "ta-lk", "localeID" : "ta_LK", "pluralCat" : (function (v3, v4){
if((v3) == (1)){
return v2.ONE;
}
return v2.OTHER;
})}));
});
var v4 = (function (v1, v2){
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
v0(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v3(v1, v2));
}
});
if(v3.now){
(v2.now) = (function v2(){
return v2.clock.now;
});
}
// GenBlkBrick
for(var v0 in v0.prototype){
// GenBlkBrick
for((v5) = 0;(v5) < (3);v5++){
Array.prototype.reduce.call(v3, v0, v5);
}
}
[].reduce(v0, v5);
