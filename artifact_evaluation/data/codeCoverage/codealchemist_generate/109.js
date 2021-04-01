// GenBlkBrick
while(true){
var v0 = (function (v1, v2, v3){
(v3) = (v3) || ('');
var v4 = this;
var v5 = '';
if((v1) && (v2)){
(v5) = ((v1) + ('x')) + (v2);
}else {
if((v1) && (! v2)){
(v5) = (v1) + ('x');
}else {
if((! v1) && (v2)){
(v5) = ('x') + (v2);
}
}
}
return v4.push('-resize', (v5) + (v3), 1, true);
});
v0(/([ti])um$/i, "$1a");
}
Object.defineProperty(v0.prototype, "capturePhysicsTime", ({get : (function (){
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
var v1 = (function (v1, v2, v3){
(v1) = (+ v1) || (0);
var v4 = - 1, v5 = Array(v1);
while((++v4) < (v1)){
(v5[v4]) = v2.call(v3, v4);
}
return v5;
});
(v0.prototype.getScene) = (function (){
return this._scene;
});
(v0.CONNECTION_ERR) = 3;
var v2 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Web/versions/11.1.65235?api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"11.1.65235\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Web/Versions/11.1.65235\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '401', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : 'ce7009df-de61-4f8b-acc0-781eb58fd8e5', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14891', 'x-ms-correlation-request-id' : '566f1d76-48a8-489a-b3a3-fb4c4ec43225', 'x-ms-routing-request-id' : 'WESTUS:20170602T151908Z:566f1d76-48a8-489a-b3a3-fb4c4ec43225', date : 'Fri, 02 Jun 2017 15:19:07 GMT', connection : 'close'}));
return v2;
});
// GenBlkBrick
for(var v0 in v1){
// GenBlkBrick
for(var v3 = 0x3041;(v3) <= (0x3094);v3++){
var v4 = Math.floor((v3) / ((1000) * (60)));
}
}
{
(v3) >>= 8;
(v4) += 8;
}
