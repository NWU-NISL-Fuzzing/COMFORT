var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/51a791f7-96a6-484a-8a83-b82ad0e62f20?api-version=2017-03-30').reply(200, "{\r\n  \"startTime\": \"2017-06-02T18:28:06.3724212+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"51a791f7-96a6-484a-8a83-b82ad0e62f20\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '134', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594', 'x-ms-request-id' : 'f5c9faa3-c2bb-42bf-9602-ede3ebba428c', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14994', 'x-ms-correlation-request-id' : '24ca8bde-8170-431e-8705-5a3bef3cf667', 'x-ms-routing-request-id' : 'WESTUS2:20170602T182837Z:24ca8bde-8170-431e-8705-5a3bef3cf667', date : 'Fri, 02 Jun 2017 18:28:37 GMT', connection : 'close'}));
return v2;
});
// GenBlkBrick
for(var v1 = 0;(v1) < (24);v1++){
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
if((v2) < (1)){
(v2) = 1;
}else {
(v4) = ((v3) * (Math.asin((1) / (v2)))) / ((2) * (Math.PI));
}
}
// GenBlkBrick
for((v5) = 2;(v5) <= (v1);++v5){
(v5) = ((v5) + (1)) | (0);
}
{
(v4) >>>= 1;
(v3) >>>= 1;
(v5) += 1;
}
// GenBlkBrick
while((v0) > (8)){
var v6 = (function (v1){
(this.array) = v1.split(",");
(this.length) = this.array.length;
for(var v2 = 0;(v2) < (this.length);v2++){
(this[v2]) = this.array[v2];
}
(this.reverse) = Array.prototype.reverse;
(this.getClass) = Object.prototype.toString;
});
}
var v7 = Array.prototype.filter.call(v6, v0);
var v8 = (function (v1){
if((this._progressCallback) !== (undefined)){
this.executeProgressCallback();
}
this.removeExpiredSubgraphs(v1, 0.0025);
this.takeRequests();
this.addLoadedDataToSceneGraph(v1, 0.005);
});
(v6.prototype) = ((v0) === (null)) ? (Object.create(v0)) : (((v8.prototype) = v0.prototype, new v8()));
