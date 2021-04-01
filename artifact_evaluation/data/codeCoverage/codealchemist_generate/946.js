var v0 = (function (v1, v2, v3){
var v4 = v3(1351);
(v1.exports) = (function (v1, v2, v3){
if((v4(v1), (void 0) === (v2))){
return v1;
}
switch(v3){
}
return (function (){
return v1.apply(v2, arguments);
});
});
});
(v0.prototype.getRightJoystick) = (function (){
return this._rightjoystick;
});
(v0.prototype._onDeactivateTool) = (function (v1, v2){
(this.active) = false;
var v3 = (this.options) && (this.options.alwaysVisible);
if(! v3){
this.hideControls();
}else {
this.showControls();
}
});
var v1 = new v0();
var v2 = (function (v1, v2, v3, v4){
var v5 = (((arguments.length) > (4)) && ((void 0) !== (arguments[4]))) ? (arguments[4]) : (1), v7 = (((arguments.length) > (5)) && ((void 0) !== (arguments[5]))) ? (arguments[5]) : (0), v8 = (v3.x) + (v1.x), v9 = (v3.y) + (v1.y), v10 = (v3.x) + (v2.x), v11 = (v3.y) + (v2.y);
return (((((((((((((((((((("M") + (v3.x)) + (" ")) + (v3.y)) + ("\n\t\tL")) + (v8)) + (" ")) + (v9)) + ("\n\t\tA ")) + (v4)) + (" ")) + (v4)) + (" 0 ")) + (v7)) + (" ")) + ((v5) ? (1) : (0))) + ("\n\t\t")) + (v10)) + (" ")) + (v11)) + (" z");
});
for(var v0 in v1){
if((v0) === ("property")){
(v3) = true;
}
}
do {
(v3) = ! v3;
}while(v3)
if(((typeof v0) === ('function')) && (v0.amd)){
v0([], v0);
}else {
if((typeof v2) !== ('undefined')){
v0(v2);
}else {
v0((v1.estraverse) = ({}));
}
}
