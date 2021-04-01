// GenBlkBrick
for(var v0 = 0;(v0) < (9);v0++){
{
var v1 = 0;
for(var v2 = 0;((v2) + (v0)) < (v3);v2++){
if((v4[(v2) + (v0)].area) > (v4[v2].area)){
var v5 = v4[(v2) + (v0)];
(v4[(v2) + (v0)]) = v4[v2];
(v4[v2]) = v5;
v1++;
}
}
if((v0) == (1)){
if((v1) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
}
function v3(){
return (this) instanceof (String);
}
var v4 = (function (v1){
var v2 = v1('https://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet?api-version=2017-10-01', '*').reply(201, "{\r\n  \"name\": \"GatewaySubnet\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\",\r\n  \"etag\": \"W/\\\"1e1b66ec-db81-4f5a-a6b2-3791bb7a4daa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.1.0.0/28\"\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '365', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '3', 'x-ms-request-id' : 'e9ad468a-ad15-40ab-ae66-c50643ebe82c', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westeurope/operations/e9ad468a-ad15-40ab-ae66-c50643ebe82c?api-version=2017-10-01', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1199', 'x-ms-correlation-request-id' : 'a31946ac-3e74-45d4-8f46-d04e11f5395e', 'x-ms-routing-request-id' : 'WESTEUROPE:20170728T113506Z:a31946ac-3e74-45d4-8f46-d04e11f5395e', date : 'Fri, 28 Jul 2017 11:35:05 GMT', connection : 'close'}));
return v2;
});
function v5(){
(this.constructor) = v3;
}
for(;(v0) >= (8);((v1[(v2) + (v2)]) = (v0) & (0xff), (v2) += v1, (v0) /= 256, (v0) -= 8)){
}
(v6) = v4(v2, v3, v0);
Object.assign(v5.prototype, ({equals : (function (v2){
return ((this.globalId) === (v2.globalId)) && ((this.revision) === (v2.revision));
}), notequals : (function (v2){
return ((this.globalId) !== (v2.globalId)) || ((this.revision) !== (v2.revision));
}), copy : (function (v2){
(this.globalId) = v2.globalId;
(this.revision) = v2.revision;
}), reset : (function (){
(this.globalId) = 0;
(this.revision) = 0;
})}));
(v3.prototype.get) = (function (v1){
if((v1) >= (this.size)){
return v2;
}
return v4(this._root, v1);
});
