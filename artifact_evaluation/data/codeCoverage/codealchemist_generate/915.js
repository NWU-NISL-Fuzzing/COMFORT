var v0 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/705ba60a-a831-493d-a389-69a2e9c07296?api-version=2015-05-01-preview').reply(200, "{\r\n  \"operationId\": \"705ba60a-a831-493d-a389-69a2e9c07296\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-04-27T14:48:10.0435125+00:00\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '141', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : 'bae0a4ca-23e3-4ae1-938a-ef623bec9205', server : 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '31970', 'x-ms-correlation-request-id' : 'ce89ff3f-6f23-426d-8998-f05e38bb24c3', 'x-ms-routing-request-id' : 'EASTASIA:20150427T145459Z:ce89ff3f-6f23-426d-8998-f05e38bb24c3', date : 'Mon, 27 Apr 2015 14:54:58 GMT', connection : 'close'}));
return v2;
});
v0("sheep");
var v1 = (function (v1){
var v2 = v1.length;
var v3 = new Array(v2);
for(var v5 = (v2) - (1), v6 = 0;(v5) >= (0);(v5--, v6++)){
var v7 = v1[v5];
(v3[v6]) = [];
}
return v3;
});
(v0.prototype._update) = (function (v1){
v2.Vector3.TransformCoordinatesToRef(this.center, v1, this.centerWorld);
v2.Vector3.TransformNormalFromFloatsToRef(1.0, 1.0, 1.0, v1, this._tempRadiusVector);
(this.radiusWorld) = (Math.max(Math.abs(this._tempRadiusVector.x), Math.abs(this._tempRadiusVector.y), Math.abs(this._tempRadiusVector.z))) * (this.radius);
});
(v1.default) = v0;
// GenBlkBrick
for(var v2 = 0;(v2) > (- 1);--v2){
var v3 = (v2) * (4);
if((v3) < (1)){
(v3) = 1;
}else {
(v4) = ((v2) * (Math.asin((1) / (v3)))) / ((2) * (Math.PI));
}
}
(v5) = v0(v2, v3, v4);
(v6) = (v2) ? (v1(v4, v2)) : (('') + (Math.round(v4))).split('.');
