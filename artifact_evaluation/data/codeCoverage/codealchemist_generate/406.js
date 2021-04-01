var v0 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate80/providers/Microsoft.Network/publicIPAddresses/vm129-westu-l2kamdnse3zp-pip?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"vm129-westu-l2kamdnse3zp-pip\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate80/providers/Microsoft.Network/publicIPAddresses/vm129-westu-l2kamdnse3zp-pip\",\r\n  \"etag\": \"W/\\\"2af41d42-434b-471e-9ce8-b3c9dea98ed2\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"21c4f895-8728-4612-a0cb-189343122666\",\r\n    \"ipAddress\": \"40.78.111.157\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"vm12900-pip\",\r\n      \"fqdn\": \"vm12900-pip.westus.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate80/providers/Microsoft.Network/networkInterfaces/vm129-westu-l2kamdnse3zp-nic/ipConfigurations/ipconfig1495992179874\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1004', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"2af41d42-434b-471e-9ce8-b3c9dea98ed2"', 'x-ms-request-id' : 'fe51e376-f96c-4bd5-969b-d433af25fd86', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14947', 'x-ms-correlation-request-id' : 'c0009cf4-6ec8-4202-bd31-40b2d5c70d15', 'x-ms-routing-request-id' : 'WESTUS:20170602T161604Z:c0009cf4-6ec8-4202-bd31-40b2d5c70d15', date : 'Fri, 02 Jun 2017 16:16:03 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("55bdc62a2ab1ca6f1bae78551cbf0009.svg");
});
v1("rice");
function v2(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v0(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v1(v1.left, v1.left.right);
(v1) = v0(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v1(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v0(v1.right, v1.right.left);
(v1) = v1(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v2(v1.left, false);
v2(v1.right, true);
(v1) = v2(v1, true);
(v1) = v2(v1, false);
return v1;
}
Object.defineProperty(v2.prototype, "captureParticlesRenderTime", ({get : (function (){
return this._captureParticlesRenderTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureParticlesRenderTime)){
return;
}
(this._captureParticlesRenderTime) = v2;
if(v2){
(this._onBeforeParticlesRenderingObserver) = this.scene.onBeforeParticlesRenderingObservable.add((function (){
v4.Tools.StartPerformanceCounter("Particles");
v3._particlesRenderTime.beginMonitoring();
}));
(this._onAfterParticlesRenderingObserver) = this.scene.onAfterParticlesRenderingObservable.add((function (){
v4.Tools.EndPerformanceCounter("Particles");
v3._particlesRenderTime.endMonitoring(false);
}));
}else {
this.scene.onBeforeParticlesRenderingObservable.remove(this._onBeforeParticlesRenderingObserver);
(this._onBeforeParticlesRenderingObserver) = null;
this.scene.onAfterParticlesRenderingObservable.remove(this._onAfterParticlesRenderingObserver);
(this._onAfterParticlesRenderingObserver) = null;
}
}), enumerable : true, configurable : true}));
var v3 = ({source : [], formatDropdownItem : v0, formatResult : v2});
Object.defineProperty(v3, "prop", ({get : v1, set : v0, enumerable : true, configurable : true}));
// GenBlkBrick
for(var v0 in v1){
var v4 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("f8070cead720bd67c983bc2491961931.svg");
});
function v5(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v1(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v4(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
}
