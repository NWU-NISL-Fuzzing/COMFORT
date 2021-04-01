var v0 = (function (){
this.notify('draw');
return this;
});
var v1 = (function (v1, v2, v3){
if(! this.__isInit){
this.reset();
(this.__isInit) = true;
}
(this.alter) = v1;
(this.ast) = v2;
(this.options) = v3;
});
(v0.BONE_POSE) = "bonePose";
var v2 = (function (v1, v2, v3){
if(this.root){
(v2) = this.root.reduceRight(v1, v2, (this.length) - (1), v3, this);
}
return v2;
});
(v1.prototype._createToolbarButtons) = (function (v1){
var v2, v3, v4, v5, v6, v7 = ({buttonOrder : this.options.buttonOrder, additionalClass : 'btn-another-crop', iconClass : 'fa-scissors', tooltipText : this.drawer.t('Crop image'), clickHandler : this._onAnotherCropButtonClick.bind(this)}), v8 = ({buttonOrder : this.options.buttonOrder, additionalClass : 'btn-apply-crop', iconClass : 'fa-check', tooltipText : this.drawer.t('Apply current image'), clickHandler : this._onApplyCropButtonClick.bind(this)}), v9 = ({buttonOrder : this.options.buttonOrder, additionalClass : 'btn-undo-crop', iconClass : 'fa-undo', tooltipText : this.drawer.t('Undo crop'), clickHandler : this._onUndoCropButtonClick.bind(this)}), v10 = ({buttonOrder : this.options.buttonOrder, additionalClass : 'btn-useorigin-crop', iconClass : 'fa-image', tooltipText : this.drawer.t('Use origin image'), clickHandler : this._onUseOriginButtonClick.bind(this)}), v11 = ({buttonOrder : this.options.buttonOrder, additionalClass : 'btn-cancel-crop', iconClass : 'fa-ban', tooltipText : this.drawer.t('Cancel'), clickHandler : this._onCancelCropButtonClick.bind(this)});
(v2) = v1.addButton(v7);
(v3) = v1.addButton(v8);
(v4) = v1.addButton(v9);
(v6) = v1.addButton(v11);
(this.$anotherCropButton) = v2;
(this.$applyButton) = v3;
(this.$undoCropButton) = v4;
(this.$useOriginButton) = v5;
(this.$cancelButton) = v6;
});
(v3) = (function (v1, v2){
if((v1.substr(0, 1).toUpperCase()) == (v2.substr(0, 1).toUpperCase())){
v0(new RegExp((((("(") + (v1.substr(0, 1))) + (")")) + (v1.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
v0(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
v2(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v1.substr(1)));
}else {
v0(new RegExp(((v1.substr(0, 1).toUpperCase()) + (v1.substr(1))) + ("$")), (v2.substr(0, 1).toUpperCase()) + (v2.substr(1)));
v0(new RegExp(((v1.substr(0, 1).toLowerCase()) + (v1.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
v0(new RegExp(((v2.substr(0, 1).toUpperCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toUpperCase()) + (v2.substr(1)));
v0(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
v2(new RegExp(((v2.substr(0, 1).toUpperCase()) + (v2.substr(1))) + ("$")), (v1.substr(0, 1).toUpperCase()) + (v1.substr(1)));
v2(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v1.substr(0, 1).toLowerCase()) + (v1.substr(1)));
}
});
var v4 = Array.prototype.map.call(v3, v0);
// GenBlkBrick
for((v5) = 0;(v5) < (100);v5++){
// GenBlkBrick
for((v6) = 0;(v6) < (65536);v6++){
// GenBlkBrick
for(var v7 = 10;(v7) < (14);v7++){
var v8 = (function (v1, v2, v3){
if((v3) === (undefined)){
(v3) = true;
}
(v2) = (v2) || ('rgba(0, 255, 0, 0.4)');
this.start();
if(v3){
(this.context.fillStyle) = v2;
this.context.fillRect((v1.x) - (this.game.camera.x), (v1.y) - (this.game.camera.y), v1.width, v1.height);
}else {
(this.context.lineWidth) = this.lineWidth;
(this.context.strokeStyle) = v2;
this.context.strokeRect((v1.x) - (this.game.camera.x), (v1.y) - (this.game.camera.y), v1.width, v1.height);
}
this.stop();
});
}
}
while((++v7) < (v1)){
(v2[v7]) = v5;
(v4[v7]) = (Math.sin(v5)) + ((((2) * (Math.random())) - (1)) * (v6));
(v5) += (v6) * ((1) + ((((2) * (Math.random())) - (1)) * (v8)));
}
}
