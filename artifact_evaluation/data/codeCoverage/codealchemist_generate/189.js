var v0 = (function (v1, v2){
if((v1) === (undefined)){
(v1) = [];
}
if((v2) === (undefined)){
(v2) = 0;
}
(v1[v2]) = this.x;
(v1[(v2) + (1)]) = this.y;
(v1[(v2) + (2)]) = this.z;
(v1[(v2) + (3)]) = this.w;
return v1;
});
// GenBlkBrick
for((v1) = 0;(v1) < (6);v1++){
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = v3(417), v5 = v3(198);
(v1.exports) = (function (v1, v2, v3){
return ((((((v1) + ("/web/")) + (v4.VERSION)) + ("/html/hosted-fields-frame")) + (v5(v3))) + (".html#")) + (v2);
});
});
}
v0(/s$/i, "s");
Array.prototype.reduce.call(v2, v0, v1);
for(var v3 = 0;(v3) <= (v1);v3++){
v2(v3);
}
var v4 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westeurope/operations/39faf8b2-6943-4f0b-8ff5-5da29fb3247f?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '29', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : '5600e15d-6b89-430b-a6b3-09b63ffaf914', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14998', 'x-ms-correlation-request-id' : '8b6839da-ac45-4ac9-bd5c-d9d7a291df70', 'x-ms-routing-request-id' : 'WESTEUROPE:20170728T113610Z:8b6839da-ac45-4ac9-bd5c-d9d7a291df70', date : 'Fri, 28 Jul 2017 11:36:09 GMT', connection : 'close'}));
return v2;
});
(v3) ^= ((v3) >> (4)) & (268435455);
if(v0){
do {
if(! isNaN(v0.offsetLeft)){
(v3) += (v0.offsetLeft) - (v0.scrollLeft);
}
if(! isNaN(v0.offsetTop)){
(v1) += (v0.offsetTop) - (v0.scrollTop);
}
}while((v0) = v0.offsetParent)
}
