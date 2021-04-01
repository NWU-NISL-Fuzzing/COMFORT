var v0 = (function (v1){
var v2 = v1.nodeName;
return ((v2) == ("SPAN")) || ((v2) == ("span"));
});
(v0.prototype.getText) = (function (){
return JSON.stringify(this.json);
});
(v0.prototype.reject) = (function (v1){
(this.error) = v1;
delete this.callbacks;
var v2 = this.errbacks;
delete this.errbacks;
for(var v3 = 0;(v3) < (v2.length);v3++){
v2[v3](v1);
}
});
(v0.SLOT_POSE) = "slotPose";
(v0.prototype.name) = 'XRefParseException';
var v1 = (function (v1){
if(v1.requestFullscreen){
v1.requestFullscreen();
}else {
if(v1.mozRequestFullScreen){
v1.mozRequestFullScreen();
}else {
if(v1.webkitRequestFullscreen){
v1.webkitRequestFullscreen();
}else {
if(v1.msRequestFullscreen){
v1.msRequestFullscreen();
}
}
}
}
});
var v2 = (function (v1){
return new Array((v1) + (1)).join(this);
});
(v2.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v1(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v1(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v0(v5);
return v5;
});
