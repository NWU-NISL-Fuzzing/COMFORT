var v0 = (function (v1){
return ((v1.eslint) != (null)) && (v1.eslint.fixed);
});
var v1 = (function (v1, v2, v3){
v1.superclass.call(this, v1, v2);
(v3) = (v3) || (({}));
(this.__min) = v3.min;
(this.__max) = v3.max;
(this.__step) = v3.step;
if(v4.isUndefined(this.__step)){
if((this.initialValue) == (0)){
(this.__impliedStep) = 1;
}else {
(this.__impliedStep) = (Math.pow(10, Math.floor((Math.log(this.initialValue)) / (Math.LN10)))) / (10);
}
}else {
(this.__impliedStep) = this.__step;
}
(this.__precision) = v0(this.__impliedStep);
});
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
(v1.modes) = ({});
// GenBlkBrick
for(var v3 = 0;(v3) < (2);v3++){
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
(v0.prototype._attachHelperEvents) = (function (){
var v1 = this.$popup.find('.popup-close-btn'), v2 = this.$popup.find('.popup-overlay'), v3 = v4('body');
v5.bindClick(v1, this.namespace, this._triggerPopupHide.bind(this));
v5.bindClick(v2, this.namespace, this._triggerPopupHide.bind(this));
v5.bindClick(v3, this.namespace, this._onBodyClick.bind(this));
});
}
(v1.prototype) = ((v0) === (null)) ? (Object.create(v0)) : (((v2.prototype) = v0.prototype, new v2()));
if((v3) < ((1) / (2.75))){
(v3) = ((7.5625) * (v3)) * (v3);
}else {
if((v3) < ((2) / (2.75))){
(v3) = (((7.5625) * ((v3) -= (1.5) / (2.75))) * (v3)) + (0.75);
}else {
if((v3) < ((2.5) / (2.75))){
(v3) = (((7.5625) * ((v3) -= (2.25) / (2.75))) * (v3)) + (0.9375);
}else {
(v3) = (((7.5625) * ((v3) -= (2.625) / (2.75))) * (v3)) + (0.984375);
}
}
}
Array.prototype.reduce.call(v1, v2, v3);
