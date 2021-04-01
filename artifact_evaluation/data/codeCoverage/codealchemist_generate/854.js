var v0 = (function (v1){
return this.setFilters((v1) ? ([]) : ([]));
});
var v1 = (function (v1){
return this.params.$$validates(v1);
});
(v0.prototype) = v1.prototype;
(v0.prototype.get) = (function (v1){
if((v1) >= (this.size)){
return v2;
}
return v1(this._root, v1);
});
var v2 = (function (v1, v2, v3){
var v4 = v3(4);
v4(v4.S, "Reflect", ({ownKeys : v3(630)}));
});
(v2.prototype.intersects) = (function (v1, v2){
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
if(! v1(v4.directions[0], v4, v5)){
return false;
}
if(! v1(v4.directions[1], v4, v5)){
return false;
}
if(! v1(v4.directions[2], v4, v5)){
return false;
}
if(! v1(v5.directions[0], v4, v5)){
return false;
}
if(! v1(v5.directions[1], v4, v5)){
return false;
}
if(! v1(v5.directions[2], v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v0(v1)) ? (v2(v3)[1]) : (v2(v3)[0]));
}else {
if(v4){
return (v5) + (v2(v3)[1]);
}else {
return (v5) + ((v0(v1)) ? (v2(v3)[1]) : (v2(v3)[2]));
}
}
}
}
function v4(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v1(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v2(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
