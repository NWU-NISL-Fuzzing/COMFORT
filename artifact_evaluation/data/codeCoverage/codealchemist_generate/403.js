// GenBlkBrick
for(var v0 = 0;(v0) <= (15);v0++){
var v1 = ((v0) - (v2)) / (v0);
}
var v2 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/xDeploymentTestGroup6257-WestUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '135616b0d7b70f4cba90e80c8a61147f', date : 'Tue, 02 Aug 2016 19:52:39 GMT', connection : 'close'}));
return v2;
});
if((v0) > (1)){
while(((v0) && ((v0) >= (v1))) && (((v2) === (undefined)) || ((v1) < (v2)))){
v1++;
(v0) = (v0) / (v1);
}
}else {
if(((v0) > (0)) && ((v0) < (1))){
while(((v0) < (1)) && (((v5) === (undefined)) || ((v1) > (v5)))){
v1--;
(v0) = (v0) * (v1);
}
}
}
(v3) = (v0) ? (v2(v1, v0)) : (('') + (Math.round(v1))).split('.');
// GenBlkBrick
while((v0) < ((v1) - (v2))){
{
var v4 = 0;
for(var v5 = 0;((v5) + (v0)) < (v3);v5++){
if((v4[(v5) + (v0)].area) > (v4[v5].area)){
var v5 = v4[(v5) + (v0)];
(v4[(v5) + (v0)]) = v4[v5];
(v4[v5]) = v5;
v4++;
}
}
if((v0) == (1)){
if((v4) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
}
v3.push(({group1 : v1, group2 : 0, id : (((v1) * (9)) + (v5)) + (1)}));
{
var v6 = v4;
for(var v7 = 0;(v7) < (8);v7++){
if((v6) & (1)){
(v6) = (3988292384) ^ ((v6) >>> (1));
}else {
(v6) = (v6) >>> (1);
}
}
(v3[v4]) = v6;
}
(v2[v3[v0].toUpperCase()]) = (v2[v3[v0].toUpperCase().substring(0, 3)]) = v0;
