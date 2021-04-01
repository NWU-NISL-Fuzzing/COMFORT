var v0 = (function (){
this.send(this.prepareRequestData(this.requestData));
});
(v0.log) = [];
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(45), v5 = v3(67), v6 = v3(610), v7 = v3(24), v8 = v3(15), v9 = v3(1864), v10 = v3(27);
(v1.exports) = ({create : v7((function (v1){
return v5.verify(({name : "Venmo", client : v1.client})).then((function (){
var v2;
return (v1.client.getConfiguration().gatewayConfiguration.payWithVenmo) ? (((v2) = new v9(v1), v4.sendEvent(v1.client, "venmo.initialized"), v2._initialize())) : (v10.reject(new v8(v6.VENMO_NOT_ENABLED)));
}));
})), VERSION : "3.28.0"});
});
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
(v1.prototype.copyFrom) = (function (v1){
(this.x) = v1.x;
(this.y) = v1.y;
});
function v2(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v1(v7)]) = v0(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
var v3 = (function (v1, v2, v3){
(v1.exports) = v3(1847)();
});
(v3.last) = (v3.prev) = (v3.previous) = (function (){
return v3.today().last();
});
