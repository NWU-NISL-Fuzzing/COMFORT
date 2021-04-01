var v0 = (function (){
return this._private.renderer;
});
var v1 = (function (){
return this.showToday_;
});
// GenBlkBrick
while((v2) != (0)){
// GenBlkBrick
for(var v3 = 0;(v3) < (v1);(v3) += 3){
var v4 = (function (v1){
(v1.touch) = true;
this.pointerup(v1);
this.removePointer(v1);
this.app.emitGlobalEvent("pointerup", v1);
});
}
}
(v5) = (v2) ? (v0(v3, v2)) : (('') + (Math.round(v3))).split('.');
{
(v2) = ("0") + (v2);
}
v1(v3);
for(var v7 = 0;(v7) <= (v3);v7++){
v1(v7);
}
(v4[v2]) = v1[v2];
