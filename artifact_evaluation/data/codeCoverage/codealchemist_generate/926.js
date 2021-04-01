var v0 = (function (){
this.fireEvent("applyexpression", this.selectedField.data.data.name, this.down("#valueField").getValue());
});
var v1 = (function (v1, v2, v3){
v1.superclass.call(this, v1, v2);
(v3) = (v3) || (({}));
(this.__min) = v3.min;
(this.__max) = v3.max;
(this.__step) = v3.step;
if(v4.isUndefined(this.__step)){
if((this.initialValue) == (0)){
(this.__impliedStep) = 1;
}else {
(this.__impliedStep) = (Math.pow(10, Math.floor((Math.log(this.initialValue)) / (Math.LN10)))) / (10);
}
}else {
(this.__impliedStep) = this.__step;
}
(this.__precision) = v0(this.__impliedStep);
});
(v2) = (function (v1, v2){
if((v1.substr(0, 1).toUpperCase()) == (v2.substr(0, 1).toUpperCase())){
v0(new RegExp((((("(") + (v1.substr(0, 1))) + (")")) + (v1.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
v0(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
v1(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v1.substr(1)));
}else {
v0(new RegExp(((v1.substr(0, 1).toUpperCase()) + (v1.substr(1))) + ("$")), (v2.substr(0, 1).toUpperCase()) + (v2.substr(1)));
v0(new RegExp(((v1.substr(0, 1).toLowerCase()) + (v1.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
v0(new RegExp(((v2.substr(0, 1).toUpperCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toUpperCase()) + (v2.substr(1)));
v0(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
v1(new RegExp(((v2.substr(0, 1).toUpperCase()) + (v2.substr(1))) + ("$")), (v1.substr(0, 1).toUpperCase()) + (v1.substr(1)));
v1(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v1.substr(0, 1).toLowerCase()) + (v1.substr(1)));
}
});
(v0.fn.plugin) = (function (){
return 'plugin';
});
// GenBlkBrick
for(var v0 in v2.prototype){
var v3 = (function (v1, v2, v3){
var v4 = v3(955), v5 = v3(524).concat("length", "prototype");
(v2.f) = (Object.getOwnPropertyNames) || ((function (v1){
return v4(v1, v5);
}));
});
// GenBlkBrick
for(var v0 in v2){
(v2.prototype.visit) = (function (v1){
if((v1) === (null)){
return null;
}
return v1.accept(this);
});
}
}
function v4(v1){
v2.apply(({}));
}
(v3.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v0.prototype) = v2.prototype, new v0()));
(v3.prototype) = v4.prototype;
