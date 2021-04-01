(v0) = Number(v0);
(v0) = Math.min(Math.max(0, v0), 20);
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2014-WS2012R2/skus/Enterprise-Optimized-for-DW/versions?api-version=2017-03-30').reply(200, "[]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '2', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : '60c79027-292b-4083-bc35-b745373eb252', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14911', 'x-ms-correlation-request-id' : 'c32cbb78-9117-48f1-95f2-80b34524eedc', 'x-ms-routing-request-id' : 'WESTUS:20170602T151907Z:c32cbb78-9117-48f1-95f2-80b34524eedc', date : 'Fri, 02 Jun 2017 15:19:07 GMT', connection : 'close'}));
return v2;
});
(v0) = Math.floor(((v0) * (10)) / (13));
[].reduce(v1, v0);
(v1.prototype.set) = (function (v1, v2){
if((this._data[v1]) === (undefined)){
return false;
}
(this._data[v1]) = v2;
return true;
});
{
--v0;
(v2) = (- 0.5) * (((v0) * ((v0) - (2))) - (1));
}
for(var v3 = 0;(v3) <= (v2);v3++){
v1(v3);
}
