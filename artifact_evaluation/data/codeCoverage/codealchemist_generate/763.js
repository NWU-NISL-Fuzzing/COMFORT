var v0 = (function (v1){
return ((3) === (arguments.length)) ? (this.setRGB(arguments[0], arguments[1], arguments[2])) : (this.set(v1));
});
(v0._getBoneType) = (function (v1){
switch(v1.toLowerCase()){
}
});
var v1 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westeurope/operations/0502de55-2f7a-41b3-9185-51e349c8b573?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : '149c1046-9626-43f2-bafa-5c44cb7f114e', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14996', 'x-ms-correlation-request-id' : '4d7a534d-0ace-485c-81ba-f536e8b22848', 'x-ms-routing-request-id' : 'WESTEUROPE:20170728T121056Z:4d7a534d-0ace-485c-81ba-f536e8b22848', date : 'Fri, 28 Jul 2017 12:10:55 GMT', connection : 'close'}));
return v2;
});
var v2 = (function (v1, v2){
(v1.x1) += v2.x;
(v1.x2) += v2.x;
(v1.y1) += v2.y;
(v1.y2) += v2.y;
});
(v1.DATASOURCE_RAW3D) = 10;
(v2.prototype) = ((v0) === (null)) ? (Object.create(v0)) : (((v1.prototype) = v0.prototype, new v1()));
var v3 = v1(v2), v4 = (v2) - (v3);
while((--v5) >= (0)){
var v1 = (v2[++v3]) & (0x3fff);
var v4 = (v2[v3]) >> (14);
var v5 = ((v4) * (v1)) + ((v4) * (v3));
(v1) = ((((v3) * (v1)) + (((v5) & (0x3fff)) << (14))) + (v8[++v9])) + (v10);
(v10) = (((v1) >> (28)) + ((v5) >> (14))) + ((v4) * (v4));
(v8[v9]) = (v1) & (0xfffffff);
}
