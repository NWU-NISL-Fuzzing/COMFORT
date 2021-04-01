var v0 = (function (v1){
var v2 = ({id : "genesis_of_a_rock", level : 1, max_level : 4});
if(! v1.conversations_can_do_chain(v2)){
return false;
}
if((v1.conversations_has_completed(null, "the_chronicles_of_peat")) && (v1.conversations_has_completed(null, "the_first_rock_4"))){
return true;
}
return false;
});
var v0 = (v1) ? (v1(v2)) : (v2);
(v0.prototype._onDeactivateTool) = (function (v1, v2){
(this.active) = false;
var v3 = (this.options) && (this.options.alwaysVisible);
if(! v3){
this.hideControls();
}else {
this.showControls();
}
});
(v0.prototype.isReady) = (function (v1, v2){
var v3 = v1.getMaterial();
if(v3.disableDepthWrite){
return false;
}
var v4 = [];
var v5 = [];
var v6 = v1.getMesh();
var v7 = v6.getScene();
if((v3) && (v3.needAlphaTesting())){
v4.push("#define ALPHATEST");
if(v6.isVerticesDataPresent(v8.VertexBuffer.UVKind)){
v5.push(v8.VertexBuffer.UVKind);
v4.push("#define UV1");
}
if(v6.isVerticesDataPresent(v8.VertexBuffer.UV2Kind)){
v5.push(v8.VertexBuffer.UV2Kind);
v4.push("#define UV2");
}
}
if((v6.useBones) && (v6.computeBonesUsingShaders)){
v5.push(v8.VertexBuffer.MatricesIndicesKind);
v5.push(v8.VertexBuffer.MatricesWeightsKind);
if((v6.numBoneInfluencers) > (4)){
v5.push(v8.VertexBuffer.MatricesIndicesExtraKind);
v5.push(v8.VertexBuffer.MatricesWeightsExtraKind);
}
v4.push(("#define NUM_BONE_INFLUENCERS ") + (v6.numBoneInfluencers));
v4.push(("#define BonesPerMesh ") + ((v6.skeleton.bones.length) + (1)));
}else {
v4.push("#define NUM_BONE_INFLUENCERS 0");
}
if(v2){
v4.push("#define INSTANCES");
v5.push("world0");
v5.push("world1");
v5.push("world2");
v5.push("world3");
}
var v9 = v4.join("\n");
if((this._cachedDefines) !== (v9)){
(this._cachedDefines) = v9;
(this._effect) = this._scene.getEngine().createEffect("depth", v5, [], [], v9);
}
return this._effect.isReady();
});
var v1 = (function (){
return this['x'];
});
Object.defineProperty(v0.prototype, "rightHMatrix", ({get : (function (){
var v2 = ((this.hScreenSize) / (4)) - ((this.lensSeparationDistance) / (2));
var v3 = ((4) * (v2)) / (this.hScreenSize);
return v4.Matrix.Translation(- v3, 0, 0);
}), enumerable : true, configurable : true}));
(v1.HasTags) = (function (v1){
if(! v1._tags){
return false;
}
return ! v2.Tools.IsEmpty(v1._tags);
});
(v0.prototype.remove) = (function (v1){
if((v1) >= (this._root.size)){
return v2;
}
var v3 = v1(this._root, v1);
return this.removeNode(v3);
});
