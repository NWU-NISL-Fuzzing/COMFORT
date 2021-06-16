var v0 = (function (v1){
return v1.extend(({checkAccess : (function (){
if(this.getUser().isAdmin()){
return true;
}
return false;
})}));
});
// GenBlkBrick
for(var v1 = 0;(v1) < (6);++v1){
if((v1) < (20)){
break ;
}
}
// GenBlkBrick
while((v0) >= (0x20)){
var v2 = (function (v1, v2, v3){
var v4 = v3(5122), v5 = v3(458);
(v1.exports) = (function (v1){
return (v5(v1)) && (v4(v1));
});
});
}
// GenBlkBrick
for(var v3 in v0){
// GenBlkBrick
while((v0) >= (2)){
var v4 = (function (v1, v2){
return ((v1.modeSTAT) > (2)) ? (0xFF) : (((v1.currVRAMBank) == (0)) ? (v1.memory[v2]) : (v1.VRAM[(v2) & (0x1FFF)]));
});
}
}
(v4.prototype.reset) = (function (){
this.setState(v3);
});
v0(new RegExp((((("(") + (v3.substr(0, 1))) + (")")) + (v3.substr(1))) + ("$"), "i"), ('$1') + (v3.substr(1)));
(v0.prototype.reset) = (function (){
this.setState(v3);
});
(v4.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v0(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v0(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v2(v5);
return v5;
});
