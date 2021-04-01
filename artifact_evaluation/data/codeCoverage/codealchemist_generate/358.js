var v0 = (function (v1, v2, v3){
var v4 = v3(2214), v5 = v3(2179), v6 = v3(703);
(v1.exports) = (function (v1){
var v2 = v5(v1);
return (((1) == (v2.length)) && (v2[0][2])) ? (v6(v2[0][0], v2[0][1])) : ((function (v3){
return ((v3) === (v1)) || (v4(v3, v1, v2));
}));
});
});
(v0._getArmatureType) = (function (v1){
switch(v1.toLowerCase()){
}
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("73cc87b44ecc2c2520700ef5498ce779.svg");
});
(v1.prototype.lookupTiddlerInMap) = (function (v1, v2){
var v3 = this.listWidget.wiki.getTiddler(v1);
if(v3){
var v4 = v3.fields["draft.of"];
if((v4) && (this.map.positions[v4])){
return this.map.positions[v4];
}
}
if(this.map.positions[v1]){
return this.map.positions[v1];
}
var v5;
switch(this.map.positionNew){
}
(v5) = (v5) || (({x : 0, y : 0, w : 100, h : 100}));
(this.map.positions[v1]) = v5;
return v5;
});
(v0.prototype) = Object.create(v1.prototype);
// GenBlkBrick
for(var v2 = 0;(v2) < (41);v2++){
var v3 = (function (v1, v2, v3){
(v1.exports) = ({default : v3(1687), __esModule : ! 0});
});
(v2) = ((1) & (v2)) ? ((3988292384) ^ ((v2) >>> (1))) : ((v2) >>> (1));
}
(v0.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v1(v1, v1.left);
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
(v1.prototype.insert) = (function (v1, v2){
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
(this._root) = v3(v5);
return v5;
});
