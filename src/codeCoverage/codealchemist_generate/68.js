var v0 = (function v1(v2){
(this.drawerInstance) = v2;
(this.LOGTAG) = this.name;
this._attachDrawerEvents();
});
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
var v1 = new Error((('EISDIR, illegal operation on directory \'') + (v2)) + ('\''));
// GenBlkBrick
while(v2--){
if((v2) === (6)){
break ;
}
// GenBlkBrick
while((v0) && ((v0) = v0.$parent)){
var v3 = (function (v1){
if((v1) === (undefined)){
return this._private.zoom;
}else {
var v3 = this.getZoomedViewport(v1);
var v4 = this._private;
if(((v3) == (null)) || (! v3.zoomed)){
return this;
}
(v4.zoom) = v3.zoom;
if(v3.panned){
(v4.pan.x) = v3.pan.x;
(v4.pan.y) = v3.pan.y;
}
this.emit((('zoom') + ((v3.panned) ? (' pan') : (''))) + (' viewport'));
this.notify('viewport');
return this;
}
});
}
}
var v4 = (function (v1, v2){
if(! Array.isArray(v2)){
(v2) = [];
}
v2.forEach((function (v4){
if(v1.hasOwnProperty(('style_') + (v4))){
v1.style.removeProperty(v4);
v1.style.setProperty(v4, v1[('style_') + (v4)], v1[(('style_') + (v4)) + ('_priority')]);
}
}));
});
var v5 = (function (v1, v2){
var v3 = 'http://api.rottentomatoes.com/api/public/v1.0/';
(v2.url) = (v3) + (v2.url);
if((v2.url.indexOf('?')) < (0)){
(v2.url) += '?';
}
(v2.url) += '&apikey=b6pr5tn4s5342z5dz4qfkz67';
});
[].forEach(v5, v1);
(v5.prototype._rebuild) = (function (){
(this._buffer) = null;
this.create(this._data);
});
