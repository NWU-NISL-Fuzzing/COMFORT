var v0 = (function (){
var v1 = this;
return this.GetFilteredBoundingSphere((function (v2){
return v1.IsVisibleObject(v2);
}));
});
(v0.prototype._renderSprites) = (function (){
if((! this._scene.spritesEnabled) || ((this._spriteManagers.length) === (0))){
return;
}
var v1 = this._scene.activeCamera;
this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
for(var v2 = 0;(v2) < (this._spriteManagers.length);v2++){
var v3 = this._spriteManagers.data[v2];
if(((v1) && ((v1.layerMask) & (v3.layerMask))) !== (0)){
v3.render();
}
}
this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene);
});
(v0.prototype._prepareRessources) = (function (){
if(this._colorShader){
return;
}
(this._colorShader) = new v1.ShaderMaterial("colorShader", this._scene, "color", ({attributes : [], uniforms : []}));
var v2 = this._scene.getEngine();
var v3 = v1.VertexData.CreateBox(({size : 1.0}));
(this._vertexBuffers[v1.VertexBuffer.PositionKind]) = new v1.VertexBuffer(v2, v3.positions, v1.VertexBuffer.PositionKind, false);
this._createIndexBuffer();
});
(v0.FRAME_WIDTH) = "frameWidth";
var v1 = (function (){
Array.prototype.filter.call(undefined);
});
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westeurope/operations/0502de55-2f7a-41b3-9185-51e349c8b573?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : 'b6a4bd34-3406-426f-b4c2-e6f12f009928', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14995', 'x-ms-correlation-request-id' : '1e5e59b4-aec0-4521-8b4a-d531f57268f9', 'x-ms-routing-request-id' : 'WESTEUROPE:20170728T115913Z:1e5e59b4-aec0-4521-8b4a-d531f57268f9', date : 'Fri, 28 Jul 2017 11:59:12 GMT', connection : 'close'}));
return v2;
});
(v1.prototype.copyFrom) = (function (v1){
(this.a) = v1.a;
(this.b) = v1.b;
(this.c) = v1.c;
(this.d) = v1.d;
(this.tx) = v1.tx;
(this.ty) = v1.ty;
return this;
});
(v2.escapeString) = v0;
