var v0 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/CIStressbasice948a83056e84617906f34aff3a0814f-SouthCentralUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '51481fd48a62a52c8831fdd542d6a266', date : 'Tue, 02 Aug 2016 19:52:39 GMT', connection : 'close'}));
return v2;
});
(v0.prototype.add) = (function (v1){
if((this._animatebles.indexOf(v1)) < (0)){
this._animatebles.push(v1);
(v1.clock) = this;
}
});
var v1 = (function (v1){
var v2 = v1.id;
if(! this.newDepIds.has(v2)){
this.newDepIds.add(v2);
this.newDeps.push(v1);
if(! this.depIds.has(v2)){
v1.addSub(this);
}
}
});
Object.defineProperty(v0.prototype, "rotationInProgress", ({get : (function (){
return (Math.abs(this._cameraRotationSpeed)) > (0);
}), enumerable : true, configurable : true}));
(v1.default) = v0;
// GenBlkBrick
for((v2) = 0;(v2) < (16);(v2) = (v2) + (1)){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
var v5 = ((- v2) + (Math.sqrt(v3))) / ((2) * (v4));
}
[].reduce(v0, v5);
(v6) = v1(v2, v3, v2);
