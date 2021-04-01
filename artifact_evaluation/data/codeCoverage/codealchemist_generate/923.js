var v0 = (function (v1){
return v1._virtualConsole;
});
(v0.prototype.dispose) = (function (){
this.getGBuffer().dispose();
});
var v1 = [].map(v0);
var v0 = v1.forEach(v0);
var v2 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/CIStressbasic6aac79e91bcd4aefa991e9794e0a5232-SouthCentralUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '0733f46dbea908669ea1022aff99ab0f', date : 'Tue, 02 Aug 2016 21:09:55 GMT', connection : 'close'}));
return v2;
});
(v2.clear) = (function (){
(v1.length) = 0;
});
(v1.get) = (function (){
return "arrayGetProperty";
});
Object.defineProperty(v1, "prop", ({get : v0, set : v2, enumerable : true, configurable : false}));
