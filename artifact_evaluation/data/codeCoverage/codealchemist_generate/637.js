var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate7114/providers/Microsoft.Compute/images/xplattestimg7?api-version=2017-03-30').reply(202, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '0', expires : '-1', location : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?monitor=true&api-version=2017-03-30', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?api-version=2017-03-30', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714', 'x-ms-request-id' : '840391d3-fe88-4cfd-8866-da9cf84e5fb8', server : 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1199', 'x-ms-correlation-request-id' : '02607a89-645b-4a80-82d7-5e166645a6ce', 'x-ms-routing-request-id' : 'WESTUS2:20170207T191337Z:02607a89-645b-4a80-82d7-5e166645a6ce', date : 'Tue, 07 Feb 2017 19:13:37 GMT', connection : 'close'}));
return v2;
});
if((v0) === ('about')){
(v1) = 'približne';
}
(v0.prototype.render) = (function (v1, v2, v3){
var v4 = this;
if((v3) === (void 0)){
(v3) = false;
}
var v5 = this._scene;
var v6 = this._scene.getEngine();
var v7 = (((v6.getCaps().instancedArrays) !== (null)) && ((v2.visibleInstances[v1._id]) !== (null))) && ((v2.visibleInstances[v1._id]) !== (undefined));
if(! this.isReady(v1, v7)){
return;
}
var v9 = v1.getRenderingMesh();
var v10 = v1.getMaterial();
v6.enableEffect(this._effect);
this._effect.setFloat("offset", (v3) ? (0) : (v9.outlineWidth));
this._effect.setColor4("color", (v3) ? (v9.overlayColor) : (v9.outlineColor), (v3) ? (v9.overlayAlpha) : (1.0));
this._effect.setMatrix("viewProjection", v5.getTransformMatrix());
if((v9.useBones) && (v9.computeBonesUsingShaders)){
this._effect.setMatrices("mBones", v9.skeleton.getTransformMatrices(v9));
}
v9._bind(v1, this._effect, v11.Material.TriangleFillMode);
if((v10) && (v10.needAlphaTesting())){
var v12 = v10.getAlphaTestTexture();
this._effect.setTexture("diffuseSampler", v12);
this._effect.setMatrix("diffuseMatrix", v12.getTextureMatrix());
}
v9._processRendering(v1, this._effect, v11.Material.TriangleFillMode, v2, v7, (function (v13, v14){
v4._effect.setMatrix("world", v14);
}));
});
// GenBlkBrick
for((v2) = 0;(v2) < (v1);(v2) += 1){
if((v2) === (6)){
break ;
}
}
(v0.SURFACE) = "surface";
function v3(v1){
var v2;
if((v1.callee.type) !== ('MemberExpression')){
return;
}
(v2) = v1.callee;
if(v2.computed){
return;
}
if((v2.property.type) !== ('Identifier')){
return;
}
if((v2.property.name) !== ('push')){
return;
}
if((v1.arguments.length) !== (1)){
v3.report(v1, v1);
}
}
Array.prototype.reduce.call(v3, v0, v2);
(v3.prototype.loading) = (function (){
this.setState(v1);
});
