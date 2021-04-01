var v0 = (function (v1){
if((! this.grid_) || (! this.keys_)){
return null;
}
var v2 = ((v1[0]) - (this.extent_[0])) / ((this.extent_[2]) - (this.extent_[0]));
var v3 = ((v1[1]) - (this.extent_[1])) / ((this.extent_[3]) - (this.extent_[1]));
var v4 = this.grid_[Math.floor(((1) - (v3)) * (this.grid_.length))];
if((typeof v4) !== ('string')){
return null;
}
var v6 = v4.charCodeAt(Math.floor((v2) * (v4.length)));
if((v6) >= (93)){
v6--;
}
if((v6) >= (35)){
v6--;
}
(v6) -= 32;
var v7 = null;
if((v6) in (this.keys_)){
var v8 = this.keys_[v6];
if((this.data_) && ((v8) in (this.data_))){
(v7) = this.data_[v8];
}else {
(v7) = v8;
}
}
return v7;
});
var v1 = (function (v1, v2){
if((! v2.pols_is_pol) || (! v2.pols_is_pol())){
return;
}
this.findPiggies();
this.findCollectors();
var v3 = this.container.pols_get_owner();
if(v3.imagination_has_upgrade("remoteherdkeeping_production_2")){
this.apiSetInterval("onInterval", 20);
}else {
if(v3.imagination_has_upgrade("remoteherdkeeping_production_1")){
this.apiSetInterval("onInterval", 22);
}else {
this.apiSetInterval("onInterval", 24);
}
}
});
// GenBlkBrick
while(((v0) && ((v0.nodeName) === ('OBJECT'))) && (v0.parentNode)){
(v1.prototype._onRemove) = (function (v1){
this._onAssetRemove.call(this._scope, this.propertyName, this.parent, v1);
});
}
var v2 = Array.prototype.filter.call(v0, v1);
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : false}));
function v3(){
(this.constructor) = v1;
}
// GenBlkBrick
while((v0) >= (2)){
var v4 = (function (v1){
var v2 = [];
return v2.includes(v1);
});
(v4.prototype._resizeCropWrapper) = (function (){
var v1 = this.drawer.toolbars.cropImageToolbar, v2 = ((v1) && (v1.$toolbar)) && (v1.$toolbar.height()), v3 = (this.cropper) && (this.cropper.$element);
if(v3){
v3.css('top', (v2) || (0));
}
if((v2) && ((v2) > (0))){
(this.cropContainerSizesUpdated) = true;
}
});
}
(v2.f) = (function (){
});
