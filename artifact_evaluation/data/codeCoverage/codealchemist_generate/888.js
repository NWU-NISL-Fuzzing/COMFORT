var v0 = (function (){
(this._interestedResizables) = [];
(this._boundNotifyResize) = this.notifyResize.bind(this);
});
// GenBlkBrick
for((v1) = 0;(v1) < (10);v1++){
(v1) /= ((v1) / (2)) + (v2);
}
for(var v2 = 0;(v2) <= (v1);v2++){
v0(v2);
}
(v0.prototype._onToolbarCreated) = (function (v1, v2){
(this.cropContainerSizesUpdated) = false;
(this.$toolbar) = v2.$toolbar;
this._resizeCropWrapper();
this._createToolbarButtons(v2);
});
[].reduce(v0, v2);
(v3) = (((v2) | (0)) % ((v1) | (0))) | (0);
var v4 = ((- v3) - (Math.sqrt(v1))) / ((2) * (v2));
(v0.prototype._disableEffect) = (function (v1, v2){
var v3 = this._renderEffects[v1];
if(! v3){
return;
}
v3._disable(v4.Tools.MakeArray((v2) || (this._cameras)));
});
