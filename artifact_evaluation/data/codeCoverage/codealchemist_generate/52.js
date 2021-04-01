var v0 = (function (v1){
if(((! v1) || (! v1.value)) || ((v1.value) === (''))){
return false;
}
var v2 = v1.value.length;
v1.setSelectionRange(0, v2);
return true;
});
var v1 = (function (v1, v2){
(this.root) = ({used : ! 0, x : 0, y : 0, w : this.root.w, h : (this.root.h) + (v2), down : ({x : 0, y : this.root.h, w : this.root.w, h : v2}), right : this.root});
var v3 = this.findNode(this.root, v1, v2);
return (v3) ? (this.splitNode(v3, v1, v2)) : (null);
});
// GenBlkBrick
while((v0) > (v1)){
// GenBlkBrick
for(var v2 = 1;(v2) <= (20);v2++){
for(var v3 = 0;NaN;){
v2++;
}
(v3) = Math.min(Math.max(0, v3), 20);
}
var v4 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Storage/operations/379089d2-498e-4dc4-855a-a2aaaf1e885c?monitor=true&api-version=2016-12-01').reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplattestzvmcreate3752/providers/Microsoft.Storage/storageAccounts/clisto484735394xplatvm\",\"kind\":\"Storage\",\"location\":\"southeastasia\",\"name\":\"clisto484735394xplatvm\",\"properties\":{\"creationTime\":\"2017-06-02T17:24:35.2170899Z\",\"primaryEndpoints\":{\"blob\":\"https://clisto484735394xplatvm.blob.core.windows.net/\",\"file\":\"https://clisto484735394xplatvm.file.core.windows.net/\",\"queue\":\"https://clisto484735394xplatvm.queue.core.windows.net/\",\"table\":\"https://clisto484735394xplatvm.table.core.windows.net/\"},\"primaryLocation\":\"southeastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '810', 'content-type' : 'application/json', expires : '-1', 'x-ms-request-id' : 'abaf543f-18f0-440f-8432-c4e47e349782', server : 'Microsoft-Azure-Storage-Resource-Provider/1.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14984', 'x-ms-correlation-request-id' : 'abaf543f-18f0-440f-8432-c4e47e349782', 'x-ms-routing-request-id' : 'WESTUS:20170602T172506Z:abaf543f-18f0-440f-8432-c4e47e349782', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Fri, 02 Jun 2017 17:25:06 GMT', connection : 'close'}));
return v2;
});
}
var v5 = (function (v1, v2, v3){
var v4 = v3(107), v5 = v3(448), v6 = v3(2229), v7 = v3(556);
(v1.exports) = (function (v1, v2){
return (v4(v1)) ? (v1) : ((v5(v1, v2)) ? ([]) : (v6(v7(v1))));
});
});
(v0.prototype.removeNode) = (function (v1){
this.shiftDown(v1);
var v2 = v1.parent;
if((v2.left) === (v1)){
(v2.left) = v3;
}else {
if((v2.right) === (v1)){
(v2.right) = v3;
}
}
this.removeLeafNode(v1);
(this._root) = v5(v2);
return v1;
});
var v6 = (function v6(v1){
if((! v1) || ((v4.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v1.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v1.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v1.call(v1, v6));
});
Array.prototype.reduce.call(v1, v6, v2);
// GenBlkBrick
for(var v7 in v5){
// GenBlkBrick
for(var v8 = 0;(v8) < (10);++v8){
// GenBlkBrick
for((v9) = 0;(v9) < ((v1) - (1));v9++){
{
var v10 = 0;
for(var v11 = 0;((v11) + (v9)) < (v3);v11++){
if((v4[(v11) + (v9)].area) > (v4[v11].area)){
var v5 = v4[(v11) + (v9)];
(v4[(v11) + (v9)]) = v4[v11];
(v4[v11]) = v5;
v10++;
}
}
if((v9) == (1)){
if((v10) == (0)){
break ;
}
}else {
(v9) = Math.floor(((v9) * (10)) / (13));
}
}
}
// GenBlkBrick
for(((v12) = 0, (v1) = v2);(v12) < (v1);++v12){
(v11) += ((v12) * (v10)) + (1);
}
}
(v13) = (v11) ? (v5(v10, v11)) : (('') + (Math.round(v10))).split('.');
}
