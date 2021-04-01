(v0) = (! v0) ? (' \\s\u00A0') : ((v0) + ('').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1'));
var v1 = (function (v1, v2){
return v2(v1, 5)[0];
});
// GenBlkBrick
while((v0) > (v1)){
// GenBlkBrick
while((v2) = 0){
if((v2) < (0)){
(v2) = 0.1;
}
}
if((v2) < (1)){
(v2) = (0.5) * (Math.pow(2, (10) * ((v2) - (1))));
}else {
(v2) = (0.5) * ((- Math.pow(2, (- 10) * ((v2) - (1)))) + (2));
}
}
Object.defineProperty(v1.prototype, "rightHMatrix", ({get : (function (){
var v2 = ((this.hScreenSize) / (4)) - ((this.lensSeparationDistance) / (2));
var v3 = ((4) * (v2)) / (this.hScreenSize);
return v4.Matrix.Translation(- v3, 0, 0);
}), enumerable : true, configurable : true}));
var v3 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate4654/providers/Microsoft.Network/networkInterfaces/vm397-eastu-mmcmlngri40j-nic?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"vm397-eastu-mmcmlngri40j-nic\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate4654/providers/Microsoft.Network/networkInterfaces/vm397-eastu-mmcmlngri40j-nic\",\r\n  \"etag\": \"W/\\\"599657e6-0a39-4dda-b58c-a7e36de03b69\\\"\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0f59c92e-026a-4cef-8ec1-1748ea7f5e2d\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1495934525280\",\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate4654/providers/Microsoft.Network/networkInterfaces/vm397-eastu-mmcmlngri40j-nic/ipConfigurations/ipconfig1495934525280\",\r\n        \"etag\": \"W/\\\"599657e6-0a39-4dda-b58c-a7e36de03b69\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.1.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate4654/providers/Microsoft.Network/publicIPAddresses/vm397-eastu-mmcmlngri40j-pip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate4654/providers/Microsoft.Network/virtualNetworks/vm397-eastu-mmcmlngri40j-vnet/subnets/vm397-eastu-mmcmlngri40j-snet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"zwh4x2qbu0xeffnkllolyy3rta.bx.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-19-19-87\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false,\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate4654/providers/Microsoft.Compute/virtualMachines/vm39706\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '2104', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"599657e6-0a39-4dda-b58c-a7e36de03b69"', 'x-ms-request-id' : '5ca9c3f9-0860-41c1-aac6-00db9b87c03d', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14978', 'x-ms-correlation-request-id' : 'd6582f79-6b69-41e3-826f-bfae1c0451cc', 'x-ms-routing-request-id' : 'WESTUS:20170602T161601Z:d6582f79-6b69-41e3-826f-bfae1c0451cc', date : 'Fri, 02 Jun 2017 16:16:00 GMT', connection : 'close'}));
return v2;
});
var v4 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v3, v2);
});
(v4.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v3(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
function v5(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v4(v3)) + (v3(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
