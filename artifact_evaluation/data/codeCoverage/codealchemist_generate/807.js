var v0 = (function (v1, v2){
var v3;
if(v2){
(this._setCursor) = v2;
}
if((this._setCursor) !== (undefined)){
return this._setCursor;
}
(v3) = this.get('parentView');
if((this.get('shouldInheritCursor')) && (v3)){
return v3.get('cursor');
}
return null;
});
var v1 = (function (v1, v2){
return ! (((((v1.x) + (v1.width)) < (v2.x)) || (((v2.x) + (v2.width)) < (v1.x))) || (((v1.y) + (v1.height)) < (v2.y))) || (((v2.y) + (v2.height)) < (v1.y));
});
var v2 = (function (v1, v2, v3){
(v1.currMBCRAMBank) = (v3) & (0x03);
(v1.currMBCRAMBankPosition) = ((v1.currMBCRAMBank) << (13)) - (0xA000);
});
var v3 = (function (){
return (this.a) - (1);
});
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v2(v1, v1.left);
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
Array.prototype.forEach.call(v2, v1);
(v1.getSphericalPolynomialFromHarmonics) = (function (v1){
var v2 = new v1();
(v2.x) = v1.L11.scale(1.02333);
(v2.y) = v1.L1_1.scale(1.02333);
(v2.z) = v1.L10.scale(1.02333);
(v2.xx) = v1.L00.scale(0.886277).subtract(v1.L20.scale(0.247708)).add(v1.L22.scale(0.429043));
(v2.yy) = v1.L00.scale(0.886277).subtract(v1.L20.scale(0.247708)).subtract(v1.L22.scale(0.429043));
(v2.zz) = v1.L00.scale(0.886277).add(v1.L20.scale(0.495417));
(v2.yz) = v1.L2_1.scale(0.858086);
(v2.zx) = v1.L21.scale(0.858086);
(v2.xy) = v1.L2_2.scale(0.858086);
v2.scale((1.0) / (Math.PI));
return v2;
});
(v3.formatPropertyName) = v0;
