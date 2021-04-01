// GenBlkBrick
while(v0--){
if((v0) === (6)){
break ;
}
var v1 = (function (v1, v2, v3){
var v4 = v3(476), v5 = v3(5195), v6 = v3(5194), v7 = "[object Null]", v8 = "[object Undefined]", v9 = (v4) ? (v4.toStringTag) : (void 0);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? (((void 0) === (v1)) ? (v8) : (v7)) : (((v9) && ((v9) in (Object(v1)))) ? (v5(v1)) : (v6(v1)));
});
});
}
var v2 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2012/skus/Express/versions?api-version=2017-03-30').reply(200, "[]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '2', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : 'd86e4a24-a2ea-413d-9c8a-ac3a3efc46d2', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14887', 'x-ms-correlation-request-id' : '5b769a6b-9697-4a1e-bec6-3eeb4c162924', 'x-ms-routing-request-id' : 'WESTUS:20170602T151922Z:5b769a6b-9697-4a1e-bec6-3eeb4c162924', date : 'Fri, 02 Jun 2017 15:19:21 GMT', connection : 'close'}));
return v2;
});
Array.prototype.reduce.call(v1, v2, v0);
var v3 = (function (v1){
var v2 = '__default';
if((v1) && (v1.name)){
(v2) = v1.name;
}
return v2;
});
v0--;
Array.prototype.reduce.call(v3, v2, v0);
[].reduce(v2, v0);
Array.prototype.reduce.call(v3, v2, v0);
