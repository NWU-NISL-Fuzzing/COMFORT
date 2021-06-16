var v0 = (function (v1, v2, v3){
var v4 = v3(1317), v5 = v3(1264), v6 = (function (){
var v1 = 0, v2 = 0;
return (function (v3, v6){
var v7 = v5(), v8 = (16) - ((v7) - (v2));
if(((v2) = v7, (v8) > (0))){
if((++v1) >= (150)){
return v3;
}
}else {
(v1) = 0;
}
return v4(v3, v6);
});
})();
(v1.exports) = v6;
});
(v0.SLOT_POSE) = "slotPose";
(v0.prototype.getKind) = (function (){
return this._kind;
});
// GenBlkBrick
for(var v1 = 1;(v1) <= (100);v1++){
// GenBlkBrick
for(var v2 = 0;(v2) < (10);v2++){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
(v5) = (((v3) >>> (0)) % ((v4) >>> (0))) | (0);
}
(v0.prototype.getIndex) = (function (v1){
var v2 = v1.left.size;
while((v1) !== (this._root)){
var v3 = v1.parent;
if((v3.right) === (v1)){
(v2) += (v3.left.size) + (1);
}
(v1) = v3;
}
return v2;
});
var v6 = (Math.min(v4, v3)) / ((v1) ? (v1) : (1));
(v7) = v0(v4, v5, v2);
{
(v8) += ((v4) * (v1)) + (1);
}
