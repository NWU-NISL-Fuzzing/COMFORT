var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus?api-version=2017-03-30').reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Enterprise\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Enterprise\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Express\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Express\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Standard\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Standard\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Web\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Web\"\r\n  }\r\n]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1115', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : '1d005bf3-c693-4962-aaab-070710d6e558', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14877', 'x-ms-correlation-request-id' : '24f8a43c-84db-4fbd-a892-a5450d1daffb', 'x-ms-routing-request-id' : 'WESTUS:20170602T151921Z:24f8a43c-84db-4fbd-a892-a5450d1daffb', date : 'Fri, 02 Jun 2017 15:19:21 GMT', connection : 'close'}));
return v2;
});
Object.defineProperty(v0, "property", ({value : 12}));
(v0.prototype.fround) = (function (v1, v2){
var v3 = (v1) && (v1.numPrecision);
return ((v3) == (null)) ? (v2) : (Number((v2) + (2e-16).toFixed(v3)));
});
(v0.LENGTHS) = "lengths";
(v0.prototype.getDarkness) = (function (){
return this._darkness;
});
var v1 = (function (v1){
return v1.dropTable('comments');
});
var v2 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v4 = v3(666);
(v1.exports) = (function (v1){
return ((v1) = (v1) || (v2.navigator.userAgent), (v4(v1)) || ((/iPhone|iPod|iPad|Mobile|Tablet/i.test(v1)) && (/Firefox/i.test(v1))));
});
}).call(this, v3(10));
});
(v3) = (function (){
v2();
v0();
});
