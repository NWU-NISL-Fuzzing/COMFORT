var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("967c295ae9c624d78ca885cec8e13cb1.svg");
});
(v0.prototype.concat) = (function (v1){
var v2 = (this.a) * (v1.a);
var v3 = 0.0;
var v4 = 0.0;
var v5 = (this.d) * (v1.d);
var v6 = ((this.tx) * (v1.a)) + (v1.tx);
var v7 = ((this.ty) * (v1.d)) + (v1.ty);
if(((this.b) !== (0.0)) || ((this.c) !== (0.0))){
(v2) += (this.b) * (v1.c);
(v3) += (this.b) * (v1.d);
(v4) += (this.c) * (v1.a);
(v5) += (this.c) * (v1.b);
}
if(((v1.b) !== (0.0)) || ((v1.c) !== (0.0))){
(v3) += (this.a) * (v1.b);
(v4) += (this.d) * (v1.c);
(v6) += (this.ty) * (v1.c);
(v7) += (this.tx) * (v1.b);
}
(this.a) = v2;
(this.b) = v3;
(this.c) = v4;
(this.d) = v5;
(this.tx) = v6;
(this.ty) = v7;
return this;
});
(v0.prototype.getData) = (function (){
return this._data;
});
var v1 = (function (v1){
var v2 = '';
if(v1.staticStyle){
(v2) += (("staticStyle:") + (v1.staticStyle)) + (",");
}
if(v1.styleBinding){
(v2) += (("style:(") + (v1.styleBinding)) + ("),");
}
return v2;
});
var v2 = (function (v1){
var v2 = (v1) >>> (0);
return ((v2) / (v2)) | (0);
});
(v2.FFD) = "ffd";
(v0.prototype.then) = (function (v1){
(this._child) = v1;
(v1._actionManager) = this._actionManager;
v1._prepare();
return v1;
});
var v3 = (function (v1){
return (v1.object.name) == ("Math");
});
