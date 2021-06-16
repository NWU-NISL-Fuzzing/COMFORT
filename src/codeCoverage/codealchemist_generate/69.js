var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(5), v5 = v3(530);
v4((v4.P) + ((v4.F) * (! v3(82)([].reduce, ! 0))), "Array", ({reduce : (function (v1){
return v5(this, v1, arguments.length, arguments[1], ! 1);
})}));
});
var v1 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/csmrg634-WestUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : 'f1941230118203b485a6a39e0be88767', date : 'Tue, 02 Aug 2016 19:52:39 GMT', connection : 'close'}));
return v2;
});
v1("cow", "kine");
function v2(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v0(v3)) + (v1(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
v2(/(shoe)s$/i, "$1");
// GenBlkBrick
for(var v0 in v2.prototype){
(v2.VERSION) = "version";
}
(v1.prototype.addPlugins) = (function (v1){
if(v1){
for(var v2 = 0;(v2) < (v1.length);v2++){
this.addPlugin(v1[v2]);
}
}
});
(v1.DATA_VERSION_2_3) = "2.3";
