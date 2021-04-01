var v0 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/arm-apiapp-tests6650-WestUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : 'd08a9ab3804708c6bf74c82ae00f9056', date : 'Tue, 02 Aug 2016 19:57:16 GMT', connection : 'close'}));
return v2;
});
// GenBlkBrick
for(var v1 = 1;(v1) <= (v1);v1++){
// GenBlkBrick
for(var v2 = 0;- 0;){
if(((v2) >= (0)) && ((v2) <= (9))){
(v2) = ("0") + (v2);
}
(v4) = v2.split('.');
}
// GenBlkBrick
while(false){
var v5 = (function (v1){
this.selectionModel.reset();
this.unstashRowSelections();
this.unstashColumnSelections();
this.behaviorShapeChanged();
});
}
}
v5(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
(v5.prototype.bind) = (function (v1, v2, v3){
v1.call(this, v2, v3);
var v4 = [];
this.$selection.on(v4.join(' '), (function (v5){
v5.stopPropagation();
}));
});
if(((v1) === (2)) && ((v2) === ("2"))){
(v6) = true;
}
(v7) = (v6) ? (((v4[v1]) !== (undefined)) ? (v4[v1]) : ('')) : (v4[0]);
for(v0 in v1){
if(v1.hasOwnProperty(v0)){
(v7) += v5(v1[v0], v0, "");
}
}
function v8(v1, v2){
(v1[v7]) = v2;
v4.push(v1);
var v5 = v1[v2];
if(v5){
for(var v7 = 0;(v7) < (v5.length);++v7){
v8(v5[v7], v1);
}
}
}
