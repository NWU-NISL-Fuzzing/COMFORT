var v0 = (function (v1, v2, v3){
var v4 = v3(1349), v5 = v3(1354);
(v1.exports) = (v3(382)) ? ((function (v1, v2, v3){
return v4.f(v1, v2, v5(1, v3));
})) : ((function (v1, v2, v3){
return ((v1[v2]) = v3, v1);
}));
});
var v1 = (function (v1, v2, v3){
(v3) = (v3) || (0);
return ({x : v1[v3], y : v1[(1) - (v3)], width : v2[v3], height : v2[(1) - (v3)]});
});
(v0.prototype.isReady) = (function (v1, v2){
var v3 = [];
if(this._useFullFloat){
v3.push("#define FULLFLOAT");
}
if((this.useVarianceShadowMap) || (this.useBlurVarianceShadowMap)){
v3.push("#define VSM");
}
if(this.getLight().needCube()){
v3.push("#define CUBEMAP");
}
var v4 = [];
var v5 = v1.getMesh();
var v6 = v1.getMaterial();
if((v6) && (v6.needAlphaTesting())){
v3.push("#define ALPHATEST");
if(v5.isVerticesDataPresent(v7.VertexBuffer.UVKind)){
v4.push(v7.VertexBuffer.UVKind);
v3.push("#define UV1");
}
if(v5.isVerticesDataPresent(v7.VertexBuffer.UV2Kind)){
var v8 = v6.getAlphaTestTexture();
if((v8.coordinatesIndex) === (1)){
v4.push(v7.VertexBuffer.UV2Kind);
v3.push("#define UV2");
}
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
v3.push(("#define BonesPerMesh ") + ((v5.skeleton.bones.length) + (1)));
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
var v9 = v3.join("\n");
if((this._cachedDefines) !== (v9)){
(this._cachedDefines) = v9;
(this._effect) = this._scene.getEngine().createEffect("shadowMap", v4, [], [], v9);
}
return this._effect.isReady();
});
(v1.prototype.enableSampler) = (function (){
if(! this.kolorPicker.canvas){
return;
}
this.kolorPicker.canvas.colorSampler('enable');
(this.sampling) = true;
this.colorPicker.toggle(false);
});
(v0.UTC) = v1.UTC;
var v2 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/cf941040-29d3-4cbe-82c6-aef630d34d65?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '29', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : 'a0420b00-69d7-436d-b517-c69395f84525', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14991', 'x-ms-correlation-request-id' : '7fe41f1f-c660-4e61-bc7a-c037c387ccfc', 'x-ms-routing-request-id' : 'WESTEUROPE:20171002T185729Z:7fe41f1f-c660-4e61-bc7a-c037c387ccfc', date : 'Mon, 02 Oct 2017 18:57:28 GMT', connection : 'close'}));
return v2;
});
(v1.prototype.name) = 'DrawerPluginOvercanvasPopup';
// GenBlkBrick
for(var v3 = 1;(v3) < (v1);v3++){
do {
(v4) += v4;
}while((0) < (--v3))
}
