var v0 = (function (v1){
for(var v2 = 0, v3;((v2) < (this.routes.length), (v3) = this.routes[v2]);v2++){
if(((v3.handler) === (v1)) || ((v3.re) === (v1))){
this.routes.splice(v2, 1);
return this;
}
}
return this;
});
(v0.prototype.visitMany) = (function (v1){
var v2 = new Array(v1.length);
for(var v4 = 0;(v4) < (v1.length);v4++){
var v5 = v1[v4];
var v6 = this.visit(v5);
(v2[v4]) = v6;
}
return v2;
});
(v0.reset) = (function (){
(v0.wasCalled) = false;
(v0.callCount) = 0;
(v0.calls) = [];
});
// GenBlkBrick
while((v0) && ((v0.nodeType) == (1))){
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/availabilitySets/xplattestavs7?api-version=2017-03-30').reply(200, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '0', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594', 'x-ms-request-id' : '0f5f641e-9d69-4ba2-91ed-1acc52f5d293', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1196', 'x-ms-correlation-request-id' : '88aea28c-cbae-4077-8c2c-594e6abd8393', 'x-ms-routing-request-id' : 'WESTUS2:20170602T165608Z:88aea28c-cbae-4077-8c2c-594e6abd8393', date : 'Fri, 02 Jun 2017 16:56:08 GMT', connection : 'close'}));
return v2;
});
}
(v1.log) = [];
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = v3(311), v5 = v3(310), v6 = v3(208), v7 = v3(1965), v8 = v3(428), v9 = v3(1964);
(v1.exports) = ({isAndroid : v4, isChrome : v5, isIos : v6, isIosSafari : v7, isSamsungBrowser : v8, isMobileFirefox : v9});
});
(v1[2]) = 9;
// GenBlkBrick
for(var v0 in v1){
(v2.prototype.freeze) = (function (){
var v1 = this.o, v2 = ({writable : false, configurable : false});
this.names.forEach((function (v3){
if(v1.hasOwnProperty(v3)){
Object.defineProperty(v1, v3, v2);
}
}));
return this;
});
}
