var v0 = (function (v1){
(this.elements) = (v1) || ([]);
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("e724ebe35afdf2e7056b8730b3b4247d.svg");
});
(v0.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v1(v9, v4);
}));
return v4;
});
(v1.prototype._executeCurrent) = (function (v1){
if(this._nextActiveAction._condition){
var v2 = this._nextActiveAction._condition;
var v3 = this._actionManager.getScene().getRenderId();
if((v2._evaluationId) === (v3)){
if(! v2._currentResult){
return;
}
}else {
(v2._evaluationId) = v3;
if(! v2.isValid()){
(v2._currentResult) = false;
return;
}
(v2._currentResult) = true;
}
}
this._nextActiveAction.execute(v1);
this.skipToNextActiveAction();
});
(v1.prototype.intersectsBoxMinMax) = (function (v1, v2){
var v3 = 0.0;
var v4 = Number.MAX_VALUE;
var v6;
var v7;
var v8;
var v9;
if((Math.abs(this.direction.x)) < (0.0000001)){
if(((this.origin.x) < (v1.x)) || ((this.origin.x) > (v2.x))){
return false;
}
}else {
(v6) = (1.0) / (this.direction.x);
(v7) = ((v1.x) - (this.origin.x)) * (v6);
(v8) = ((v2.x) - (this.origin.x)) * (v6);
if((v8) === (- Infinity)){
(v8) = Infinity;
}
if((v7) > (v8)){
(v9) = v7;
(v7) = v8;
(v8) = v9;
}
(v3) = Math.max(v7, v3);
(v4) = Math.min(v8, v4);
if((v3) > (v4)){
return false;
}
}
if((Math.abs(this.direction.y)) < (0.0000001)){
if(((this.origin.y) < (v1.y)) || ((this.origin.y) > (v2.y))){
return false;
}
}else {
(v6) = (1.0) / (this.direction.y);
(v7) = ((v1.y) - (this.origin.y)) * (v6);
(v8) = ((v2.y) - (this.origin.y)) * (v6);
if((v8) === (- Infinity)){
(v8) = Infinity;
}
if((v7) > (v8)){
(v9) = v7;
(v7) = v8;
(v8) = v9;
}
(v3) = Math.max(v7, v3);
(v4) = Math.min(v8, v4);
if((v3) > (v4)){
return false;
}
}
if((Math.abs(this.direction.z)) < (0.0000001)){
if(((this.origin.z) < (v1.z)) || ((this.origin.z) > (v2.z))){
return false;
}
}else {
(v6) = (1.0) / (this.direction.z);
(v7) = ((v1.z) - (this.origin.z)) * (v6);
(v8) = ((v2.z) - (this.origin.z)) * (v6);
if((v8) === (- Infinity)){
(v8) = Infinity;
}
if((v7) > (v8)){
(v9) = v7;
(v7) = v8;
(v8) = v9;
}
(v3) = Math.max(v7, v3);
(v4) = Math.min(v8, v4);
if((v3) > (v4)){
return false;
}
}
return true;
});
(v0._getDisplayType) = (function (v1){
switch(v1.toLowerCase()){
}
});
(v1.prototype.intersects) = (function (v1, v2){
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
if(! v0(v4.directions[0], v4, v5)){
return false;
}
if(! v0(v4.directions[1], v4, v5)){
return false;
}
if(! v0(v4.directions[2], v4, v5)){
return false;
}
if(! v0(v5.directions[0], v4, v5)){
return false;
}
if(! v0(v5.directions[1], v4, v5)){
return false;
}
if(! v0(v5.directions[2], v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
var v2 = ({source : [], formatDropdownItem : v1, formatResult : v0});
