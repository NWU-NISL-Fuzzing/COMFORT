var v0 = (function (v1){
return Math.sqrt(this.distanceToSquared(v1));
});
// GenBlkBrick
for(var v1 = 0;(v1) < (12);v1++){
for(var v0 in v1){
if(((v0) % (2)) == (0)){
(v1) += parseInt(v1[v0]);
}else {
(v1) += (parseInt(v1[v0])) * (3);
}
}
var v2 = (function (v1, v2){
return Array.prototype.slice.call(v2, 0).sort((function (v4, v5){
var v6 = 0;
var v7 = 0;
while(((v6) === (0)) && ((v7) < (v1.length))){
(v6) = v1[v7](v4, v5);
(v7) += 1;
}
return v6;
}));
});
}
Array.prototype.reduce.call(v0, v2, v1);
(v0.prototype.intersects) = (function (v1, v2){
if((! this.boundingSphere.centerWorld) || (! v1.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v1.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v1.boundingBox)){
return false;
}
if(! v2){
return true;
}
var v4 = this.boundingBox;
var v5 = v1.boundingBox;
if(! v2(v4.directions[0], v4, v5)){
return false;
}
if(! v2(v4.directions[1], v4, v5)){
return false;
}
if(! v2(v4.directions[2], v4, v5)){
return false;
}
if(! v2(v5.directions[0], v4, v5)){
return false;
}
if(! v2(v5.directions[1], v4, v5)){
return false;
}
if(! v2(v5.directions[2], v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
var v3 = ({valueOf : (function (){
(v1) = true;
return 2;
})});
// GenBlkBrick
for((v4) = 0;(v4) < (65536);v4++){
var v5 = (function (v1, v2){
if(this.featuresRtree_){
return this.featuresRtree_.forEach(v1, v2);
}else {
if(this.featuresCollection_){
return this.featuresCollection_.forEach(v1, v2);
}
}
});
var v6 = (function (){
if(this.questPC.repeatingTower){
this.setAvailableQuests([]);
}else {
this.setAvailableQuests([]);
}
this.offerQuests(this.questPC);
});
}
Object.defineProperty(v3, "prop", ({get : v2, set : v6, enumerable : true, configurable : false}));
(v3.pad_mediatagPreview) = "Preview";
