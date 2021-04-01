// GenBlkBrick
while((v0) > (8)){
var v0 = (function (){
(this.flatSettings_) = null;
});
var v1 = (function (v1, v2){
(v1.onblur) = null;
});
}
// GenBlkBrick
for((v2) = 0;(v2) < ((v1) || ("").length);v2++){
(v1.prototype._userIsMoving) = (function (){
if(! this._attachedCamera){
return false;
}
return ((((((this._attachedCamera.inertialAlphaOffset) !== (0)) || ((this._attachedCamera.inertialBetaOffset) !== (0))) || ((this._attachedCamera.inertialRadiusOffset) !== (0))) || ((this._attachedCamera.inertialPanningX) !== (0))) || ((this._attachedCamera.inertialPanningY) !== (0))) || (this._isPointerDown);
});
}
Array.prototype.reduce.call(v0, v1, v2);
function v3(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v1(v3);
(v4) += v0(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
var v4 = ({get : v0, configurable : true});
Array.prototype.reduce.call(v0, v3, v2);
(v4.foo) = v2;
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v0(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v3(v1, v1.right);
}else {
break ;
}
}
}
}
});
