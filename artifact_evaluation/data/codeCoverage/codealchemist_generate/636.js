// GenBlkBrick
for(var v0 = 1;(v0) < ((v1) - (1));v0++){
{
var v1 = 0;
for(var v2 = 0;((v2) + (v0)) < (v3);v2++){
if((v4[(v2) + (v0)].area) > (v4[v2].area)){
var v5 = v4[(v2) + (v0)];
(v4[(v2) + (v0)]) = v4[v2];
(v4[v2]) = v5;
v1++;
}
}
if((v0) == (1)){
if((v1) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
}
(v3) = (v1) === (12);
var v4 = (function (v1){
(v1.example) = ({text : 'guest', word : /^\s*\w*\s*$/});
});
var v5 = ((Math.sin(v0)) * (v2)) * (Math.cos(v1));
(v6) = + ~ ~ v2;
var v7 = Math.max(v6, v1, v0), v8 = Math.min(v6, v1, v0);
var v9 = (((v8) * (v5)) - ((v2) * (v7))) / (v6);
(v4.prototype.isReady) = (function (v1, v2){
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
