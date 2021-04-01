var v0 = (function (){
this.listenTo(this.graph, 'state', this.updateState, this);
this.listenTo(this.graph, 'all', this.addCommand, this);
this.listenTo(this.graph, 'batch:start', this.initBatchCommand, this);
this.listenTo(this.graph, 'batch:stop', this.storeBatchCommand, this);
});
var v1 = (function (){
if((this.cacheSize_) > (this.maxCacheSize_)){
var v1 = 0;
var v2, v3;
for(v2 in this.cache_){
(v3) = this.cache_[v2];
if((((v1++) & (3)) === (0)) && (! v3.hasListener())){
delete this.cache_[v2];
--this.cacheSize_;
}
}
}
});
(v1.prototype.findNode) = (function (){
this._buildTree();
return v1.prototype.findNode.apply(this, arguments);
});
// GenBlkBrick
for((v2) = 0;(v2) < (9);v2++){
var v3 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/43feeb4b-e98d-4431-a159-0543dae93a4b?api-version=2017-01-31').reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:52:47.5166033+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"43feeb4b-e98d-4431-a159-0543dae93a4b\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '134', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : '9626245e-74e6-4408-af5c-6fa7269107e5_131358123722959165', 'x-ms-request-id' : 'f3254983-6e15-4a61-9fcb-ed4f41718426', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14917', 'x-ms-correlation-request-id' : '7a418815-c034-4210-8492-ee3d256d122f', 'x-ms-routing-request-id' : 'WESTUS:20170602T145700Z:7a418815-c034-4210-8492-ee3d256d122f', date : 'Fri, 02 Jun 2017 14:57:00 GMT', connection : 'close'}));
return v2;
});
[].reduce(v3, v2);
}
Array.prototype.reduce.call(v1, v3, v2);
(v4) = (v2) !== (0);
while((v2--) > (0)){
v0();
}
// GenBlkBrick
for(;(v0) > (0);(v0) = (v0) - (1)){
var v5 = (function (v1, v2){
var v3 = this['static'].map[v1];
if((v3) && (v3.values[v2])){
return v3.values[v2];
}
var v4 = Math.max(0, (this.dynamic.length) - (this.lookupDepth));
for(var v6 = (this.dynamic.length) - (1);(v6) >= (v4);v6--){
var v7 = this.dynamic[v6];
if(((v7.name) === (v1)) && ((v7.value) === (v2))){
return (this.length) - (v6);
}
if((v7.name) === (v1)){
if(v3){
break ;
}
return - (this.length) - (v6);
}
}
if(v3){
return - v3.index;
}
return 0;
});
(v5.prototype.hide) = (function (){
if((this._renderFunction) && (this._scene)){
this._scene.unregisterBeforeRender(this._renderFunction);
(this._scene) = null;
(this._renderFunction) = null;
if(this._renderLine){
this._renderLine.dispose();
(this._renderLine) = null;
}
(this._renderPoints) = [];
}
});
}
