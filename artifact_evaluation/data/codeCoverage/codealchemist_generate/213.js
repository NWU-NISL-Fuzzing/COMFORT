var v0 = (function (v1, v2, v3){
var v4 = v3(29), v5 = v3(1), v6 = v4.key, v7 = v4.set;
v4.exp(({defineMetadata : (function (v1, v2, v3, v4){
v7(v1, v2, v5(v3), v6(v4));
})}));
});
(v0.prototype.copyFrom) = (function (v1){
var v2 = this;
this.clear();
v1.forEach((function (v3, v4){
return v2.add(v3, v4);
}));
});
var v1 = (function (v1, v2, v3){
var v4 = v3(379), v5 = v3(378).document, v6 = (v4(v5)) && (v4(v5.createElement));
(v1.exports) = (function (v1){
return (v6) ? (v5.createElement(v1)) : (({}));
});
});
var v2 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/arm-apiapp-tests6650-WestUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '43da5b63be3b0f65895d441cb68c4afb', date : 'Tue, 02 Aug 2016 21:09:55 GMT', connection : 'close'}));
return v2;
});
(v1.UTC) = v2.UTC;
var v3 = (function (v1, v2){
var v3 = this;
v3.handlebars.registerHelper(v1, (function (v4){
return v3.async.resolve(v2, v4);
}));
});
(v3.prototype) = new Array(1, 2, 3);
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v3(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v0(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
