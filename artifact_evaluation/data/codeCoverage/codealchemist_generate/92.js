var v0 = (function (v1){
var v2 = (function (){
function v2(v3, v4, v5, v6, v7, v8){
if((v3) === (void 0)){
(v3) = 1.0;
}
if((v4) === (void 0)){
(v4) = 0.0;
}
if((v5) === (void 0)){
(v5) = 0.0;
}
if((v6) === (void 0)){
(v6) = 1.0;
}
if((v7) === (void 0)){
(v7) = 0.0;
}
if((v8) === (void 0)){
(v8) = 0.0;
}
(this.a) = v3;
(this.b) = v4;
(this.c) = v5;
(this.d) = v6;
(this.tx) = v7;
(this.ty) = v8;
}
(v2.prototype.toString) = (function (){
return ((((((((((("[object dragonBones.Matrix] a:") + (this.a)) + (" b:")) + (this.b)) + (" c:")) + (this.c)) + (" d:")) + (this.d)) + (" tx:")) + (this.tx)) + (" ty:")) + (this.ty);
});
(v2.prototype.copyFrom) = (function (v9){
(this.a) = v9.a;
(this.b) = v9.b;
(this.c) = v9.c;
(this.d) = v9.d;
(this.tx) = v9.tx;
(this.ty) = v9.ty;
return this;
});
(v2.prototype.copyFromArray) = (function (v9, v10){
if((v10) === (void 0)){
(v10) = 0;
}
(this.a) = v9[v10];
(this.b) = v9[(v10) + (1)];
(this.c) = v9[(v10) + (2)];
(this.d) = v9[(v10) + (3)];
(this.tx) = v9[(v10) + (4)];
(this.ty) = v9[(v10) + (5)];
return this;
});
(v2.prototype.identity) = (function (){
(this.a) = (this.d) = 1.0;
(this.b) = (this.c) = 0.0;
(this.tx) = (this.ty) = 0.0;
return this;
});
(v2.prototype.concat) = (function (v9){
var v11 = (this.a) * (v9.a);
var v12 = 0.0;
var v13 = 0.0;
var v14 = (this.d) * (v9.d);
var v15 = ((this.tx) * (v9.a)) + (v9.tx);
var v16 = ((this.ty) * (v9.d)) + (v9.ty);
if(((this.b) !== (0.0)) || ((this.c) !== (0.0))){
(v11) += (this.b) * (v9.c);
(v12) += (this.b) * (v9.d);
(v13) += (this.c) * (v9.a);
(v14) += (this.c) * (v9.b);
}
if(((v9.b) !== (0.0)) || ((v9.c) !== (0.0))){
(v12) += (this.a) * (v9.b);
(v13) += (this.d) * (v9.c);
(v15) += (this.ty) * (v9.c);
(v16) += (this.tx) * (v9.b);
}
(this.a) = v11;
(this.b) = v12;
(this.c) = v13;
(this.d) = v14;
(this.tx) = v15;
(this.ty) = v16;
return this;
});
(v2.prototype.invert) = (function (){
var v11 = this.a;
var v12 = this.b;
var v13 = this.c;
var v14 = this.d;
var v15 = this.tx;
var v16 = this.ty;
if(((v12) === (0.0)) && ((v13) === (0.0))){
(this.b) = (this.c) = 0.0;
if(((v11) === (0.0)) || ((v14) === (0.0))){
(this.a) = (this.b) = (this.tx) = (this.ty) = 0.0;
}else {
(v11) = (this.a) = (1.0) / (v11);
(v14) = (this.d) = (1.0) / (v14);
(this.tx) = (- v11) * (v15);
(this.ty) = (- v14) * (v16);
}
return this;
}
var v17 = ((v11) * (v14)) - ((v12) * (v13));
if((v17) === (0.0)){
(this.a) = (this.d) = 1.0;
(this.b) = (this.c) = 0.0;
(this.tx) = (this.ty) = 0.0;
return this;
}
(v17) = (1.0) / (v17);
var v18 = (this.a) = (v14) * (v17);
(v12) = (this.b) = (- v12) * (v17);
(v13) = (this.c) = (- v13) * (v17);
(v14) = (this.d) = (v11) * (v17);
(this.tx) = - ((v18) * (v15)) + ((v13) * (v16));
(this.ty) = - ((v12) * (v15)) + ((v14) * (v16));
return this;
});
(v2.prototype.transformPoint) = (function (v19, v20, v21, v22){
if((v22) === (void 0)){
(v22) = false;
}
(v21.x) = ((this.a) * (v19)) + ((this.c) * (v20));
(v21.y) = ((this.b) * (v19)) + ((this.d) * (v20));
if(! v22){
(v21.x) += this.tx;
(v21.y) += this.ty;
}
});
(v2.prototype.transformRectangle) = (function (v23, v22){
if((v22) === (void 0)){
(v22) = false;
}
var v3 = this.a;
var v4 = this.b;
var v5 = this.c;
var v6 = this.d;
var v7 = (v22) ? (0.0) : (this.tx);
var v8 = (v22) ? (0.0) : (this.ty);
var v19 = v23.x;
var v20 = v23.y;
var v24 = (v19) + (v23.width);
var v25 = (v20) + (v23.height);
var v26 = (((v3) * (v19)) + ((v5) * (v20))) + (v7);
var v27 = (((v4) * (v19)) + ((v6) * (v20))) + (v8);
var v28 = (((v3) * (v24)) + ((v5) * (v20))) + (v7);
var v29 = (((v4) * (v24)) + ((v6) * (v20))) + (v8);
var v30 = (((v3) * (v24)) + ((v5) * (v25))) + (v7);
var v31 = (((v4) * (v24)) + ((v6) * (v25))) + (v8);
var v32 = (((v3) * (v19)) + ((v5) * (v25))) + (v7);
var v33 = (((v4) * (v19)) + ((v6) * (v25))) + (v8);
var v34 = 0.0;
if((v26) > (v28)){
(v34) = v26;
(v26) = v28;
(v28) = v34;
}
if((v30) > (v32)){
(v34) = v30;
(v30) = v32;
(v32) = v34;
}
(v23.x) = Math.floor(((v26) < (v30)) ? (v26) : (v30));
(v23.width) = Math.ceil((((v28) > (v32)) ? (v28) : (v32)) - (v23.x));
if((v27) > (v29)){
(v34) = v27;
(v27) = v29;
(v29) = v34;
}
if((v31) > (v33)){
(v34) = v31;
(v31) = v33;
(v33) = v34;
}
(v23.y) = Math.floor(((v27) < (v31)) ? (v27) : (v31));
(v23.height) = Math.ceil((((v29) > (v33)) ? (v29) : (v33)) - (v23.y));
});
return v2;
})();
(v1.Matrix) = v2;
});
var v1 = (function (v1, v2, v3, v4){
return (((((1) - (v4)) * ((1) - (v4))) * (v1)) + ((((2) * ((1) - (v4))) * (v4)) * (v2))) + (((v4) * (v4)) * (v3));
});
Object.defineProperty(v0.prototype, "size", ({get : (function (){
return this._values.length;
}), enumerable : true, configurable : true}));
(v0.prototype._disableEffect) = (function (v1, v2){
var v3 = this._renderEffects[v1];
if(! v3){
return;
}
v3._disable(v4.Tools.MakeArray((v2) || (this._cameras)));
});
// GenBlkBrick
for((v2) = 0;(v2) < ((v1) || ("").length);v2++){
(v3) = (v1) * ((1) - ((v2) * ((1) - (v2))));
var v4 = (function (v1){
var v2 = this.x, v3 = this.y, v4 = this.z, v5 = this.w;
return ((v1) = v1.elements, (this.x) = ((((v1[0]) * (v2)) + ((v1[4]) * (v3))) + ((v1[8]) * (v4))) + ((v1[12]) * (v5)), (this.y) = ((((v1[1]) * (v2)) + ((v1[5]) * (v3))) + ((v1[9]) * (v4))) + ((v1[13]) * (v5)), (this.z) = ((((v1[2]) * (v2)) + ((v1[6]) * (v3))) + ((v1[10]) * (v4))) + ((v1[14]) * (v5)), (this.w) = ((((v1[3]) * (v2)) + ((v1[7]) * (v3))) + ((v1[11]) * (v4))) + ((v1[15]) * (v5)), this);
});
}
var v5 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v4, v3);
});
if((v3) === (0)){
(v6) = (v2) === (1);
}
(v5.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v4(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v4(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
