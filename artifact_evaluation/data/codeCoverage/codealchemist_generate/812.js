var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("9ff23cdb0da49d75de71469a6bd4725c.svg");
});
var v1 = (function (){
var v1 = false;
function v2(v3, v4, v5){
(v1) = true;
return (v3) > (10);
}
var v5 = ({0 : 11, length : Infinity});
return (Array.prototype.some.call(v5, v2)) && (v1);
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
v1(/([^aeiouy]|qu)y$/i, "$1ies");
var v2 = Array.prototype.filter.call(v0, v1);
var v3 = (function (v1){
v2.push(v1);
if((v1.contentItems) instanceof (Array)){
for(var v4 = 0;(v4) < (v1.contentItems.length);v4++){
v3(v1.contentItems[v4]);
}
}
});
v1(v3);
(v1.MoveTowardsAngle) = (function (v1, v2, v3){
var v4 = v1.DeltaAngle(v1, v2);
var v5 = 0;
if(((- v3) < (v4)) && ((v4) < (v3))){
(v5) = v2;
}else {
(v2) = (v1) + (v4);
(v5) = v1.MoveTowards(v1, v2, v3);
}
return v5;
});
