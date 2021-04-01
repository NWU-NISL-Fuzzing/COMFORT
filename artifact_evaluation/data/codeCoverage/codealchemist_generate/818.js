var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("fadb5208b3cfe613768e0ea7a8d1156c.svg");
});
(v0.prototype._createHelperElements) = (function (){
this._removeHelperElements();
var v1 = (((((((((((('') + ('<div class="')) + (this.popupClass)) + (' hidden">')) + ('<div class="popup-content-wrapper">')) + ('<div class="popup-arrow"></div>')) + ('<div class="popup-content"></div>')) + ('</div>')) + ('<div class="popup-overlay"></div>')) + ('<div class="popup-close-btn">')) + ('<div class="fa fa-close"></div>')) + ('</div>')) + ('</div>');
var v2 = v3(v1), v4 = this.drawerInstance.$canvasEditContainer;
v4.append(v2);
(this.drawerInstance.$popupWrapper) = v2;
(this.$popup) = v2;
(this.$arrow) = v2.find('.popup-arrow');
(this.$popupContentWrapper) = v2.find('.popup-content-wrapper');
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(15), v5 = v3(1845), v6 = v3(46), v7 = v3(70), v8 = v3(655), v9 = v3(27), v10 = v3(23);
(v1.exports) = ({create : v10((function (v1){
return v7.verify(({name : "Apple Pay", client : v1.client})).then((function (){
return (v1.client.getConfiguration().gatewayConfiguration.applePayWeb) ? ((v6.sendEvent(v1.client, "applepay.initialized"), new v5(v1))) : (v9.reject(new v4(v8.APPLE_PAY_NOT_ENABLED)));
}));
})), VERSION : "3.28.0"});
});
var v2 = (function (v1, v2, v3){
v1('./_typed-array')('Int8', 1, (function (v4){
return (function Int8Array(v6, v7, v8){
return v4(this, v6, v7, v8);
});
}));
});
(v0.prototype.intersectionSegment) = (function (v1, v2, v3){
var v4 = this.origin.add(this.direction.multiplyByFloats(v0.rayl, v0.rayl, v0.rayl));
var v5 = v2.subtract(v1);
var v6 = v4.subtract(this.origin);
var v7 = v1.subtract(this.origin);
var v8 = v9.Vector3.Dot(v5, v5);
var v10 = v9.Vector3.Dot(v5, v6);
var v11 = v9.Vector3.Dot(v6, v6);
var v12 = v9.Vector3.Dot(v5, v7);
var v13 = v9.Vector3.Dot(v6, v7);
var v14 = ((v8) * (v11)) - ((v10) * (v10));
var v15, v16, v17 = v14;
var v18, v19, v20 = v14;
if((v14) < (v0.smallnum)){
(v16) = 0.0;
(v17) = 1.0;
(v19) = v13;
(v20) = v11;
}else {
(v16) = ((v10) * (v13)) - ((v11) * (v12));
(v19) = ((v8) * (v13)) - ((v10) * (v12));
if((v16) < (0.0)){
(v16) = 0.0;
(v19) = v13;
(v20) = v11;
}else {
if((v16) > (v17)){
(v16) = v17;
(v19) = (v13) + (v10);
(v20) = v11;
}
}
}
if((v19) < (0.0)){
(v19) = 0.0;
if((- v12) < (0.0)){
(v16) = 0.0;
}else {
if((- v12) > (v8)){
(v16) = v17;
}else {
(v16) = - v12;
(v17) = v8;
}
}
}else {
if((v19) > (v20)){
(v19) = v20;
if(((- v12) + (v10)) < (0.0)){
(v16) = 0;
}else {
if(((- v12) + (v10)) > (v8)){
(v16) = v17;
}else {
(v16) = (- v12) + (v10);
(v17) = v8;
}
}
}
}
(v15) = ((Math.abs(v16)) < (v0.smallnum)) ? (0.0) : ((v16) / (v17));
(v18) = ((Math.abs(v19)) < (v0.smallnum)) ? (0.0) : ((v19) / (v20));
var v22 = v6.multiplyByFloats(v18, v18, v18);
var v23 = v7.add(v5.multiplyByFloats(v15, v15, v15)).subtract(v22);
var v24 = (((v18) > (0)) && ((v18) <= (this.length))) && ((v23.lengthSquared()) < ((v3) * (v3)));
if(v24){
return v22.length();
}
return - 1;
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
(this._root) = v2(v5);
return v5;
});
(v1.FRAME) = "frame";
// GenBlkBrick
for((v3) = 0;(v3) < (4);v3++){
(v1.prototype.transformPoint) = (function (v1, v2, v3, v4){
if((v4) === (void 0)){
(v4) = false;
}
(v3.x) = ((this.a) * (v1)) + ((this.c) * (v2));
(v3.y) = ((this.b) * (v1)) + ((this.d) * (v2));
if(! v4){
(v3.x) += this.tx;
(v3.y) += this.ty;
}
});
}
