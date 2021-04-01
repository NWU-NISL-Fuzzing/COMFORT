var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2014SP1-WS2012R2-BYOL/skus/Standard/versions?api-version=2017-03-30').reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"12.0.444999\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2-BYOL/Skus/Standard/Versions/12.0.444999\"\r\n  }\r\n]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '312', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : '898add54-4fab-4a67-928a-1869069a450d', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14895', 'x-ms-correlation-request-id' : '8908181f-adc8-4e9b-9f93-37966e86f0a0', 'x-ms-routing-request-id' : 'WESTUS:20170602T151922Z:8908181f-adc8-4e9b-9f93-37966e86f0a0', date : 'Fri, 02 Jun 2017 15:19:22 GMT', connection : 'close'}));
return v2;
});
(v0.prototype.elevationAtLocation) = (function (v1, v2){
return 0;
});
// GenBlkBrick
for(var v1 = 0;(v1) < (256);v1++){
// GenBlkBrick
while(typeof 11){
var v2 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/media', '*').reply(202, "", ({'cache-control' : 'no-cache', 'content-length' : '0', server : '1.0.6198.408 (rd_rdfe_stable.160802-0931) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : '6c8b96a426fb0c9f857e00d40d50525d', date : 'Wed, 17 Aug 2016 09:21:33 GMT'}));
return v2;
});
var v3 = (function (v1){
v1.addFieldType();
v1.pushAssets();
v1.pushCreateSingleton();
});
}
// GenBlkBrick
for(var v0 in v1){
// GenBlkBrick
while((v4) = 0){
var v5 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/xTestResource8409-SouthCentralUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : 'd629439c4bb50e16a9eec378ee7feb70', date : 'Tue, 02 Aug 2016 21:09:56 GMT', connection : 'close'}));
return v2;
});
(v5.prototype.then) = (function (v1, v2){
if(('value') in (this)){
v1(this.value);
}else {
if(('error') in (this)){
v2(this.error);
}else {
this.callbacks.push(v1);
this.errbacks.push(v2);
}
}
});
}
}
}
(v0.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v2(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v3(v1, v1.right);
}else {
break ;
}
}
}
}
});
v2(v0, v3);
{
(v6) = (v1) % (v4);
(v1) = v4;
(v4) = v6;
}
var v7 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v0, v6);
});
Object.defineProperty(v2.prototype, "onAfterRender", ({set : (function (v2){
if(this._onAfterRenderObserver){
this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
}
(this._onAfterRenderObserver) = this.onAfterRenderObservable.add(v2);
}), enumerable : true, configurable : true}));
