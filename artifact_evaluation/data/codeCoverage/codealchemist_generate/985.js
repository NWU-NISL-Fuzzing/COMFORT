var v0 = (function (v1, v2){
if((v1) < (0)){
return 0;
}
if((v1) >= (1)){
return 1;
}
return (1) - (v2);
});
(v0.prototype.clear) = (function (){
(this.values) = ({});
});
(v0[0]) = 12;
(v0.prototype.push) = (function (v1){
(this.data[this.length++]) = v1;
if((this.length) > (this.data.length)){
(this.data.length) *= 2;
}
if(! v1.__smartArrayFlags){
(v1.__smartArrayFlags) = ({});
}
(v1.__smartArrayFlags[this._id]) = this._duplicateId;
});
// GenBlkBrick
for(var v0 in Array.prototype){
var v1 = (function (v1){
return (((v1) + (4095)) >> (12)) << (12);
});
var v2 = (function (){
return this._anticlockwise;
});
}
(v2.prototype.shiftDown) = (function (v1){
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
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v0(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v2(v3)[1]) : (v2(v3)[0]));
}else {
if(v4){
return (v5) + (v2(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v2(v3)[1]) : (v2(v3)[2]));
}
}
}
}
// GenBlkBrick
for(var v4 = 1;(v4) <= (v1);v4++){
// GenBlkBrick
while((v0) && ((v0.nodeType) == (1))){
var v5 = (function (v1){
(this.edges) = this.edges.filter((function (v2){
return ! v2.isEqual(v1);
}));
v1.deleteEdge();
});
}
}
