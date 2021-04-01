var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(5), v5 = v3(63), v6 = v3(119);
v4((v4.P) + ((v4.F) * (v3(26)((function (){
return ((null) !== (new Date(NaN).toJSON())) || ((1) !== (Date.prototype.toJSON.call(({toISOString : (function (){
return 1;
})}))));
})))), "Date", ({toJSON : (function (v1){
var v2 = v5(this), v3 = v6(v2);
return ((("number") != (typeof v3)) || (isFinite(v3))) ? (v2.toISOString()) : (null);
})}));
});
var v1 = (function (v1){
this.setColors(v1);
});
// GenBlkBrick
while((v0) && ((v0.nodeType) == (1))){
var v2 = (function (v1, v2, v3){
var v4 = v3(5282), v5 = v3(476), v6 = v3(475), v7 = (v6) && (v6.isTypedArray), v8 = (v7) ? (v5(v7)) : (v4);
(v1.exports) = v8;
});
var v3 = (function (){
(this.options.consistent) = true;
return this;
});
}
var v4 = (function (){
function v4(){
}
(v4.prototype.getLeftJoystick) = (function (){
return this._leftjoystick;
});
(v4.prototype.getRightJoystick) = (function (){
return this._rightjoystick;
});
(v4.prototype.checkInputs) = (function (){
if(this._leftjoystick){
var v1 = this.camera;
var v2 = (v1._computeLocalCameraSpeed()) * (50);
var v3 = v4.Matrix.RotationYawPitchRoll(v1.rotation.y, v1.rotation.x, 0);
var v5 = v4.Vector3.TransformCoordinates(new v4.Vector3((this._leftjoystick.deltaPosition.x) * (v2), (this._leftjoystick.deltaPosition.y) * (v2), (this._leftjoystick.deltaPosition.z) * (v2)), v3);
(v1.cameraDirection) = v1.cameraDirection.add(v5);
(v1.cameraRotation) = v1.cameraRotation.addVector3(this._rightjoystick.deltaPosition);
if(! this._leftjoystick.pressed){
(this._leftjoystick.deltaPosition) = this._leftjoystick.deltaPosition.scale(0.9);
}
if(! this._rightjoystick.pressed){
(this._rightjoystick.deltaPosition) = this._rightjoystick.deltaPosition.scale(0.9);
}
}
});
(v4.prototype.attachControl) = (function (v6, v7){
(this._leftjoystick) = new v4.VirtualJoystick(true);
this._leftjoystick.setAxisForUpDown(v4.JoystickAxis.Z);
this._leftjoystick.setAxisForLeftRight(v4.JoystickAxis.X);
this._leftjoystick.setJoystickSensibility(0.15);
(this._rightjoystick) = new v4.VirtualJoystick(false);
this._rightjoystick.setAxisForUpDown(v4.JoystickAxis.X);
this._rightjoystick.setAxisForLeftRight(v4.JoystickAxis.Y);
(this._rightjoystick.reverseUpDown) = true;
this._rightjoystick.setJoystickSensibility(0.05);
this._rightjoystick.setJoystickColor("yellow");
});
(v4.prototype.detachControl) = (function (v6){
this._leftjoystick.releaseCanvas();
this._rightjoystick.releaseCanvas();
});
(v4.prototype.getTypeName) = (function (){
return "FreeCameraVirtualJoystickInput";
});
(v4.prototype.getSimpleName) = (function (){
return "virtualJoystick";
});
return v4;
})();
(v3.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v4(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
var v5 = (function (v1, v2, v3){
var v4 = v1();
if(v5.Tags){
v5.Tags.AddTagsTo(v4, v2.tags);
}
var v6 = v0(v4);
for(var v8 in v6){
var v9 = v6[v8];
var v10 = v2[v8];
var v11 = v9.type;
if(((v10) !== (undefined)) && ((v10) !== (null))){
switch(v11){
}
}
}
return v4;
});
(v2.prototype.get) = (function (v1){
if((v1) >= (this.size)){
return v2;
}
return v4(this._root, v1);
});
// GenBlkBrick
for(var v0 in v2){
(v4.prototype.shiftDown) = (function (v1){
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
v5(v1, v1.right);
}else {
break ;
}
}
}
}
});
}
