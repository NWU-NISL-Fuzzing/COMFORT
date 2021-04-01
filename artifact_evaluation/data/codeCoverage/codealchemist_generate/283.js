var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("d2b5656704f3d247731e5d5231bb1901.svg");
});
v0(/(quiz)$/i, "$1zes");
var v1 = (function (v1, v2){
var v3 = (v2) || (0);
return this.cursors_[v3].update(v1);
});
(v0.prototype.intersects) = (function (v1, v2){
if((! this.boundingSphere.centerWorld) || (! v1.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v1.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v1.boundingBox)){
return false;
}
if(! v2){
return true;
}
var v4 = this.boundingBox;
var v5 = v1.boundingBox;
if(! v1(v4.directions[0], v4, v5)){
return false;
}
if(! v1(v4.directions[1], v4, v5)){
return false;
}
if(! v1(v4.directions[2], v4, v5)){
return false;
}
if(! v1(v5.directions[0], v4, v5)){
return false;
}
if(! v1(v5.directions[1], v4, v5)){
return false;
}
if(! v1(v5.directions[2], v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
// GenBlkBrick
for(var v2 = 0;(v2) < (10);++v2){
for(var v3 = 0;(v3) <= (v2);v3++){
v1(v3);
}
[].reduce(v1, v2);
}
var v4 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Network/virtualNetworks/xplattestvnet2747?api-version=2017-10-01').reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/xplattestvnet2747' under resource group 'xplatTstVmssGCreate2715' was not found.\"}}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-failure-cause' : 'gateway', 'x-ms-request-id' : 'b6a25fb8-ad21-45ed-b87c-d2254b66b92b', 'x-ms-correlation-request-id' : 'b6a25fb8-ad21-45ed-b87c-d2254b66b92b', 'x-ms-routing-request-id' : 'WESTEUROPE:20170606T140230Z:b6a25fb8-ad21-45ed-b87c-d2254b66b92b', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Tue, 06 Jun 2017 14:02:30 GMT', connection : 'close', 'content-length' : '178'}));
return v2;
});
(v5) = (v2) ? (v4(v3, v2)) : (('') + (Math.round(v3))).split('.');
Array.prototype.reduce.call(v0, v4, v2);
