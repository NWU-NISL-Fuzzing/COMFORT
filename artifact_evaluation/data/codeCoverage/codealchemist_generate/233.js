var v0 = (function (v1){
(this._elementRegistry) = v1;
});
var v1 = (function (v1){
v1.unmixAll();
});
Object.defineProperty(v0.prototype, "captureGPUFrameTime", ({get : (function (){
return this._captureGPUFrameTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureGPUFrameTime)){
return;
}
(this._captureGPUFrameTime) = v2;
if(v2){
(this._onBeginFrameObserver) = this.engine.onBeginFrameObservable.add((function (){
if(! v3._gpuFrameTimeToken){
(v3._gpuFrameTimeToken) = v3.engine.startTimeQuery();
}
}));
(this._onEndFrameObserver) = this.engine.onEndFrameObservable.add((function (){
if(! v3._gpuFrameTimeToken){
return;
}
var v4 = v3.engine.endTimeQuery(v3._gpuFrameTimeToken);
if((v4) > (- 1)){
(v3._gpuFrameTimeToken) = null;
v3._gpuFrameTime.fetchNewFrame();
v3._gpuFrameTime.addCount(v4, true);
}
}));
}else {
this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver);
(this._onBeginFrameObserver) = null;
this.engine.onEndFrameObservable.remove(this._onEndFrameObserver);
(this._onEndFrameObserver) = null;
}
}), enumerable : true, configurable : true}));
(v1.prototype.isReady) = (function (v1, v2){
var v3 = [];
var v4 = [];
var v5 = v1.getMesh();
var v6 = v1.getMaterial();
if(v6){
if(v6.needAlphaTesting()){
v3.push("#define ALPHATEST");
if(v5.isVerticesDataPresent(v7.VertexBuffer.UVKind)){
v4.push(v7.VertexBuffer.UVKind);
v3.push("#define UV1");
}
if(v5.isVerticesDataPresent(v7.VertexBuffer.UV2Kind)){
v4.push(v7.VertexBuffer.UV2Kind);
v3.push("#define UV2");
}
}
if(v6.useLogarithmicDepth){
v3.push("#define LOGARITHMICDEPTH");
}
}
if((v5.useBones) && (v5.computeBonesUsingShaders)){
v4.push(v7.VertexBuffer.MatricesIndicesKind);
v4.push(v7.VertexBuffer.MatricesWeightsKind);
if((v5.numBoneInfluencers) > (4)){
v4.push(v7.VertexBuffer.MatricesIndicesExtraKind);
v4.push(v7.VertexBuffer.MatricesWeightsExtraKind);
}
v3.push(("#define NUM_BONE_INFLUENCERS ") + (v5.numBoneInfluencers));
v3.push(("#define BonesPerMesh ") + ((v5.skeleton) ? ((v5.skeleton.bones.length) + (1)) : (0)));
}else {
v3.push("#define NUM_BONE_INFLUENCERS 0");
}
if(v2){
v3.push("#define INSTANCES");
v4.push("world0");
v4.push("world1");
v4.push("world2");
v4.push("world3");
}
var v8 = v3.join("\n");
if((this._cachedDefines) !== (v8)){
(this._cachedDefines) = v8;
(this._effect) = this._scene.getEngine().createEffect("outline", v4, [], [], v8);
}
return this._effect.isReady();
});
v1("rice");
var v2 = (function (v1){
this.child.send(({action : 'unprotect', args : v1}));
});
(v1.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v0(v5);
return v5;
});
(v1.prototype) = ({start : (function (){
}), clicked : (function (v1){
return true;
}), mouseDown : (function (v1){
return true;
}), keyDown : (function (v1){
return true;
}), keyPress : (function (v1){
return true;
}), selectionChanged : (function (v2){
}), setEnabled : (function (v3){
}), setDisabled : (function (v3){
}), caretUpdated : (function (){
}), nodeInserted : (function (v4, v2){
}), nodeCreated : (function (v4, v5){
}), caretPositioned : (function (){
}), remove : (function (){
this._ice.removeKeyPressListener(this);
}), setSettings : (function (v6){
})});
