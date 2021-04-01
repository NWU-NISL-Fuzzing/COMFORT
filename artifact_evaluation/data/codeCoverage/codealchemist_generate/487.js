// GenBlkBrick
for(var v0 = 0;(v0) < (10);v0++){
var v1 = (function (v1){
if((v1) != (this.colorText)){
(this.colorText.value) = this.color.toRGBString();
}
(this.colorText.style.backgroundColor) = this.color.toRGBString();
if(v1){
this.fireChangeEvent();
}
});
}
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
var v2 = (function (){
return this.a.N();
});
(v3) = v1(v2, v3, v0);
var v4 = (v2.prototype) = new v1();
var v5 = ((v3) + (':')) + (v0);
(v6) = v5.length;
(v4.contacts_leaveRoom) = "Leave this room";
