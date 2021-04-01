var v0 = (function (v1){
return this._innerContainer.getChildByName(v1);
});
var v1 = (function (v1, v2, v3){
var v4 = v3(46), v5 = v3(475), v6 = v3(118);
(v1.exports) = (function (v1, v2, v3, v7){
var v8 = String(v6(v1)), v10 = v8.length, v11 = ((void 0) === (v3)) ? (" ") : (String(v3)), v12 = v4(v2);
if(((v12) <= (v10)) || (("") == (v11))){
return v8;
}
var v13 = (v12) - (v10), v14 = v5.call(v11, Math.ceil((v13) / (v11.length)));
return (((v14.length) > (v13)) && ((v14) = v14.slice(0, v13)), (v7) ? ((v14) + (v8)) : ((v8) + (v14)));
});
});
(v1.prototype.removeNode) = (function (v1){
this.shiftDown(v1);
var v2 = v1.parent;
if((v2.left) === (v1)){
(v2.left) = v3;
}else {
if((v2.right) === (v1)){
(v2.right) = v3;
}
}
this.removeLeafNode(v1);
(this._root) = v0(v2);
return v1;
});
(v1.prototype.clear) = (function (){
(this._data) = ({});
(this._count) = 0;
});
(v1.prototype) = new v0();
(v1.prototype.getRightJoystick) = (function (){
return this._rightjoystick;
});
var v2 = (function (){
this.resetFailedTestCount();
this.resetSuccessfulTestCount();
this.resetSkippedTestCount();
this.clearResults();
(this.__testResults) = ({});
});
function v3(v1){
while((v1.parent) !== (v2)){
var v3 = v1;
(v1) = v1.parent;
if((v1.left) === (v3)){
(v1) = v1(v1, true);
}else {
(v1) = v1(v1, false);
}
}
return v1;
}
