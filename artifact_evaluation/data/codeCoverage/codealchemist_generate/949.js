var v0 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/csmrg8822-WestUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '92d905bde0ab01ed9600d60203e153dc', date : 'Tue, 02 Aug 2016 21:09:56 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(2121), v5 = v3(2120)(v4);
(v1.exports) = v5;
});
(v1.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v0(v9, v4);
}));
return v4;
});
var v2 = (v1) >> (4);
if((v2) < (0)){
(v2) = (v1) + (v2);
}
Array.prototype.reduce.call(v0, v1, v2);
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(46), v5 = v3(70), v6 = v3(601), v7 = v3(23), v8 = v3(15), v9 = v3(1682), v10 = v3(27);
(v1.exports) = ({create : v7((function (v1){
return v5.verify(({name : "Venmo", client : v1.client})).then((function (){
var v2;
return (v1.client.getConfiguration().gatewayConfiguration.payWithVenmo) ? (((v2) = new v9(v1), v4.sendEvent(v1.client, "venmo.initialized"), v2._initialize())) : (v10.reject(new v8(v6.VENMO_NOT_ENABLED)));
}));
})), VERSION : "3.28.0"});
});
(v2) *= 2057;
