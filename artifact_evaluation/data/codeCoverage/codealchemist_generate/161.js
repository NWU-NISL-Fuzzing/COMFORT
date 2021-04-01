var v0 = (function (v1, v2, v3){
var v4 = v3(17);
});
(v0.ROTATED) = "rotated";
(v0.prototype._movePopup) = (function (v1){
var v2 = this.sizes, v3, v4 = ({}), v5, v6, v7 = (v2.popupSizes.width) / (2), v8 = (v2.popupSizes.height) / (2), v9;
switch(v1){
}
if(v3){
(v4.top) = v6;
(v9) = ((v5) + (v2.popupSizes.width)) - (v2.canvasSizes.width);
if((v9) > (0)){
(v7) += v9;
(v4.right) = 0;
}else {
if((v5) < (0)){
(v7) += v5;
(v5) = 0;
}
(v4.left) = v5;
}
}else {
(v4.left) = v5;
(v9) = ((v6) + (v2.popupSizes.height)) - (v2.canvasSizes.height);
if((v9) > (0)){
(v8) += v9;
(v4.bottom) = 0;
}else {
if((v6) < (0)){
(v8) += v6;
(v6) = 0;
}
(v4.top) = v6;
}
}
this.$popupContentWrapper.attr('data-position', v1);
this.$popupContentWrapper.removeAttr('style');
this.$popupContentWrapper.css(v4);
this._moveArrow(v7, v8);
});
var v1 = (function (v1, v2, v3){
v3(79);
});
function v2(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v0(v3)) + (v1(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
(v2.prototype.forEach) = (function (v1){
for(var v2 in this._data){
var v3 = this._data[v2];
v1(v2, v3);
}
});
(v3) = (function (){
v2();
v1();
});
var v4 = (function (v1, v2, v3){
var v4 = v3(401);
(v1.exports) = (function (v1){
return new v4().update(v1).digest();
});
});
