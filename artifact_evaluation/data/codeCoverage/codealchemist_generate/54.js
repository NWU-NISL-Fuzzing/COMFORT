// GenBlkBrick
for(var v0 = 1;(v0) <= (20);v0++){
var v1 = (function (){
if(this.$dragHint){
this.$dragHint.show();
}else {
this.render();
}
});
}
(v1.htmlParser.CommentNode) = v1.Util.extend(v1.htmlParser.HtmlNode, ({comment : '', getType : (function (){
return 'comment';
}), getComment : (function (){
return this.comment;
})}));
(v0) -= 5;
(v1.prototype.getOrAdd) = (function (v1, v2){
var v3 = this.get(v1);
if((v3) !== (undefined)){
return v3;
}
this.add(v1, v2);
return v2;
});
var v2 = Math.sin(v0);
Object.defineProperty(v1.prototype, "capturePhysicsTime", ({get : (function (){
return this._capturePhysicsTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._capturePhysicsTime)){
return;
}
(this._capturePhysicsTime) = v2;
if(v2){
(this._onBeforePhysicsObserver) = this.scene.onBeforePhysicsObservable.add((function (){
v4.Tools.StartPerformanceCounter("Physics");
v3._physicsTime.beginMonitoring();
}));
(this._onAfterPhysicsObserver) = this.scene.onAfterPhysicsObservable.add((function (){
v4.Tools.EndPerformanceCounter("Physics");
v3._physicsTime.endMonitoring();
}));
}else {
this.scene.onBeforePhysicsObservable.remove(this._onBeforePhysicsObserver);
(this._onBeforePhysicsObserver) = null;
this.scene.onAfterPhysicsObservable.remove(this._onAfterPhysicsObserver);
(this._onAfterPhysicsObserver) = null;
}
}), enumerable : true, configurable : true}));
while(v0--){
new v1();
}
var v3 = (function (v1){
var v2 = v1('https://jstesteastus2.eastus2.batch.azure.com:443').post('/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z/enablescheduling?api-version=2016-07-01.3.1&timeout=30').reply(200, "", ({'transfer-encoding' : 'chunked', server : 'Microsoft-HTTPAPI/2.0', 'request-id' : '740bedef-6ace-4e31-ad4c-6fbe62532068', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'client-request-id' : '5728a3d1-039e-45ac-bc95-f2517e9d6e91', dataserviceversion : '3.0', dataserviceid : 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z/enablescheduling', date : 'Mon, 12 Sep 2016 23:35:49 GMT', connection : 'close'}));
return v2;
});
