var v0 = (function (v1, v2){
var v3 = this;
v3.collection.update(v3.id, ({$push : ({elements : ({$each : [], $slice : - 4})})}), v2((function (v4, v5){
v1.isFalse(v4);
v1.equal(v3.collection.findOne(v3.id), ({_id : v3.id, name : 'jens', elements : []}));
})));
});
(v0.prototype.create) = (function (v1){
return this._buffer.create(v1);
});
(v0.prototype.render) = (function (v1, v2, v3, v4){
if(v1){
v1(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
return;
}
var v5 = this._scene.getEngine();
if((this._depthOnlySubMeshes.length) !== (0)){
v5.setAlphaTesting(true);
v5.setColorWrite(false);
this._renderAlphaTest(this._depthOnlySubMeshes);
v5.setAlphaTesting(false);
v5.setColorWrite(true);
}
if((this._opaqueSubMeshes.length) !== (0)){
this._renderOpaque(this._opaqueSubMeshes);
}
if((this._alphaTestSubMeshes.length) !== (0)){
v5.setAlphaTesting(true);
this._renderAlphaTest(this._alphaTestSubMeshes);
v5.setAlphaTesting(false);
}
var v6 = v5.getStencilBuffer();
v5.setStencilBuffer(false);
if(v2){
this._renderSprites();
}
if(v3){
this._renderParticles(v4);
}
if(this.onBeforeTransparentRendering){
this.onBeforeTransparentRendering();
}
if((this._transparentSubMeshes.length) !== (0)){
this._renderTransparent(this._transparentSubMeshes);
v5.setAlphaMode(v7.Engine.ALPHA_DISABLE);
}
v5.setStencilBuffer(false);
for(var v8 = 0;(v8) < (this._edgesRenderers.length);v8++){
this._edgesRenderers.data[v8].render();
}
v5.setStencilBuffer(v6);
});
var v1 = (function (v1){
if((v1.name) !== (undefined)){
(this.name) = v1.name;
}
if((v1.userData) !== (undefined)){
(this.userData) = JSON.parse(JSON.stringify(v1.userData));
}
});
var v2 = (function (v1, v2, v3){
var v4 = 60;
(v2.exports) = ({LINE_HEIGHT : 26, DIAMOND_SIZE : 10, MARKER_TRACK_HEIGHT : 60, width : 600, height : 200, TIMELINE_SCROLL_HEIGHT : 0, LEFT_PANE_WIDTH : 250, time_scale : v4, default_length : 20});
});
(v0.prototype.showPopup) = (function (v1, v2){
(this.popupIsVisible) = true;
this.$popup.removeClass('hidden');
this._adjustPosition(v2);
this.$popupContentWrapper.removeClass('popup-transparent');
this.drawerInstance.trigger(this.drawerInstance.EVENT_TOOLBAR_CHANGE_STATE, []);
});
v2(v0, v1);
var v3 = (function (){
if(this.inf){
return this;
}
var v1 = this.y.redAdd(this.y);
if((v1.cmpn(0)) === (0)){
return this.curve.point(null, null);
}
var v2 = this.curve.a;
var v3 = this.x.redSqr();
var v4 = v1.redInvm();
var v5 = v3.redAdd(v3).redIAdd(v3).redIAdd(v2).redMul(v4);
var v6 = v5.redSqr().redISub(this.x.redAdd(this.x));
var v7 = v5.redMul(this.x.redSub(v6)).redISub(this.y);
return this.curve.point(v6, v7);
});
