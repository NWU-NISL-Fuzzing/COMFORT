var v0 = (function (v1, v2){
(v1.returns) = (v1.returns) || ([]);
v1.returns.push(v2.value);
});
v0(/([ti])um$/i, "$1um");
var v1 = (function (){
var v1 = ({});
(v1.type) = 'circular-buffer';
(v1.length) = this._length;
(v1.data) = this.toArray();
return v1;
});
(v2) = (function (){
v0();
v1();
});
// GenBlkBrick
for(var v0 = v1;(v0) <= (v2);v0++){
var v3 = (function (v1, v2, v3){
var v4 = v3(4968);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? ("") : (v4(v1));
});
});
var v4 = (function (v1){
var v2 = v1('http://management.azure.com:443').delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate7114/providers/Microsoft.Compute/images/xplattestimg7?api-version=2017-03-30').reply(202, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '0', expires : '-1', location : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?monitor=true&api-version=2017-03-30', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?api-version=2017-03-30', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714', 'x-ms-request-id' : '840391d3-fe88-4cfd-8866-da9cf84e5fb8', server : 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1199', 'x-ms-correlation-request-id' : '02607a89-645b-4a80-82d7-5e166645a6ce', 'x-ms-routing-request-id' : 'WESTUS2:20170207T191337Z:02607a89-645b-4a80-82d7-5e166645a6ce', date : 'Tue, 07 Feb 2017 19:13:37 GMT', connection : 'close'}));
return v2;
});
}
var v5 = (function (v1, v2){
var v3 = ({});
(v3.items) = [];
(v3.recipes) = [];
return v3;
});
// GenBlkBrick
for(var v0 in v2.prototype){
v0(v1, v5);
}
(v4.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v3(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v3(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v0(v5);
return v5;
});
