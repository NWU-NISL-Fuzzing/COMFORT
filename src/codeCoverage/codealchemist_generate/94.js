var v0 = (function (v1){
if(this.isEnabled()){
if(this.__semaphore){
(this.__semaphore) = false;
return;
}
if(this.isEnabled()){
(this.__semaphore) = true;
this.execute();
}
}
});
var v1 = (function (v1, v2, v3){
var v4 = v3(4);
v4(v4.S, "Number", ({MIN_SAFE_INTEGER : - 9007199254740991}));
});
(v1.prototype._movePopup) = (function (v1){
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
Object.defineProperty(v0.prototype, "isSupported", ({get : (function (){
return this._multiRenderTarget.isSupported;
}), enumerable : true, configurable : true}));
(v0.DATA_VERSION) = v0.DATA_VERSION_5_6;
// GenBlkBrick
for((v2) = 1;(v2) < (10);v2++){
// GenBlkBrick
for(var v3 = 0;(v3) < (1);++v3){
function v4(v1){
return ((((typeof v1) == ('number')) && ((v1) > (- 1))) && (((v1) % (1)) == (0))) && ((v1) <= (v3));
}
}
// GenBlkBrick
for(var v0 in v1.prototype){
var v5 = (function (v1, v2, v3){
var v4 = v1('./core');
(v2.exports) = v4.createClass('Line', []);
});
}
}
(v4.prototype.onSelectionCleared) = (function (){
});
v1(v0, v4);
