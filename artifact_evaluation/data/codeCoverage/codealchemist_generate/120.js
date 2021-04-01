var v0 = (function (v1, v2, v3){
var v4 = v3(881), v5 = v3(4), v6 = v3(347)("metadata"), v7 = (v6.store) || ((v6.store) = new v3(878)()), v8 = (function (v1, v2, v3){
var v5 = v7.get(v1);
if(! v5){
if(! v3){
return;
}
v7.set(v1, (v5) = new v4());
}
var v6 = v5.get(v2);
if(! v6){
if(! v3){
return;
}
v5.set(v2, (v6) = new v4());
}
return v6;
});
(v1.exports) = ({store : v7, map : v8, has : (function (v1, v2, v3){
var v4 = v8(v2, v3, ! 1);
return ((void 0) !== (v4)) && (v4.has(v1));
}), get : (function (v1, v2, v3){
var v4 = v8(v2, v3, ! 1);
return ((void 0) === (v4)) ? (void 0) : (v4.get(v1));
}), set : (function (v1, v2, v3, v4){
v8(v3, v4, ! 0).set(v1, v2);
}), keys : (function (v1, v2){
var v3 = v8(v1, v2, ! 1), v4 = [];
return ((v3) && (v3.forEach((function (v1, v2){
v4.push(v2);
}))), v4);
}), key : (function (v1){
return (((void 0) === (v1)) || (("symbol") == (typeof v1))) ? (v1) : (String(v1));
}), exp : (function (v1){
v5(v5.S, "Reflect", v1);
})});
});
(v0.prototype.loadMap) = (function (){
(this.map) = this.listWidget.wiki.getTiddlerData(this.getMapTiddlerTitle(), ({positions : ({}), newTiddlerPosition : ({x : 0, y : 0}), width : parseInt(this.listWidget.getAttribute("cecily-width", "600"), 10)}));
});
// GenBlkBrick
for(var v1 = 0;(v1) < (24);v1++){
// GenBlkBrick
for(var v2 = 3;(v2) >= (0);v2--){
var v3 = (function (v1, v2, v3){
var v4 = v3(27);
v3(93)("isExtensible", (function (v1){
return (function (v2){
return (! ! v4(v2)) && ((! v1) || (v1(v2)));
});
}));
});
}
{
if((v2) === (6)){
break ;
}
(v1) += v2;
}
}
var v4 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v3, save : v3, init : v0, shutdown : v0, getAuthUrl : v3, revokeToken : v3});
while(v1--){
new v0();
}
(v0.parse) = v3.parse;
for(var v5 = 0;(v5) <= (v1);v5++){
v0(v5);
}
var v6 = (function (v1, v2){
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
v3(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v0(v1, v2));
}
});
