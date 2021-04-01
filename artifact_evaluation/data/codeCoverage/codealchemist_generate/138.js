var v0 = (function (){
RegExp("*", "u");
});
// GenBlkBrick
for(((v1) = 0, (v1) = v2);(v1) < (v1);++v1){
{
var v2 = 0;
for(var v3 = 0;((v3) + (v1)) < (v3);v3++){
if((v4[(v3) + (v1)].area) > (v4[v3].area)){
var v5 = v4[(v3) + (v1)];
(v4[(v3) + (v1)]) = v4[v3];
(v4[v3]) = v5;
v2++;
}
}
if((v1) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
(v0.prototype.visitNew) = (function (v1){
return v1.update(this.visitMany(v1.args));
});
(v4) = ((v3) | (0)) < ((v2) | (0));
(v5) = (v2) ? (v0(v1, v2)) : (('') + (Math.round(v1))).split('.');
var v6 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/pstestsvc9435/deploymentslots/Production').reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>No deployments were found.</Message></Error>", ({'cache-control' : 'no-cache', 'content-length' : '191', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth2', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : '67e451cc9dd076398c5ad9330582e39c', date : 'Fri, 17 Mar 2017 21:35:42 GMT', connection : 'close'}));
return v2;
});
(v7) = v6(v3, v1, v2);
{
var v8 = (v7) - (v1);
(v9) = ((v3) > (0.5)) ? ((v8) / (((2) - (v7)) - (v1))) : ((v8) / ((v7) + (v1)));
switch(v7){
}
(v10) /= 6;
}
