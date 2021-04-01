// GenBlkBrick
for(var v0 = 1;(v0) < (1024);v0++){
for(;(v0) < (v1);++v0){
(v2[v0]) += v2[(v0) - (1)];
}
}
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDocker/providers/Microsoft.Network/networkInterfaces/xplatnicdocker?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"xplatnicdocker\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDocker/providers/Microsoft.Network/networkInterfaces/xplatnicdocker\",\r\n  \"etag\": \"W/\\\"dfcfe0bc-4d51-447e-9e56-a5f0c1d703c6\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"46739158-5522-4206-bef7-8d7e5bbc75f1\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1496429868038\",\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDocker/providers/Microsoft.Network/networkInterfaces/xplatnicdocker/ipConfigurations/ipconfig1496429868038\",\r\n        \"etag\": \"W/\\\"dfcfe0bc-4d51-447e-9e56-a5f0c1d703c6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDocker/providers/Microsoft.Network/publicIPAddresses/xplatdockerip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDocker/providers/Microsoft.Network/virtualNetworks/xplatdockervnet/subnets/xplatdockersubnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"tyxh4zwcee5uzlngjp15e20z4a.ix.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1760', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"dfcfe0bc-4d51-447e-9e56-a5f0c1d703c6"', 'x-ms-request-id' : '757e1396-c366-402d-ba3d-762417fc56bb', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14993', 'x-ms-correlation-request-id' : '2212ceea-5d04-4b26-bd64-681c144c1dcd', 'x-ms-routing-request-id' : 'WESTUS2:20170602T185832Z:2212ceea-5d04-4b26-bd64-681c144c1dcd', date : 'Fri, 02 Jun 2017 18:58:31 GMT', connection : 'close'}));
return v2;
});
[].reduce(v1, v0);
(v1.BindFogParameters) = (function (v1, v2, v3){
if(((v1.fogEnabled) && (v2.applyFog)) && ((v1.fogMode) !== (v4.Scene.FOGMODE_NONE))){
v3.setFloat4("vFogInfos", v1.fogMode, v1.fogStart, v1.fogEnd, v1.fogDensity);
v3.setColor3("vFogColor", v1.fogColor);
}
});
v1(/(n)ews$/i, "$1ews");
var v2 = (function (){
var v1 = ({});
function v2(v3, v4, v5){
if((v4) === (5)){
return (v3) === (v1);
}
return false;
}
var v5 = ({5 : v1, length : 100});
return Array.prototype.some.call(v5, v2);
});
Array.prototype.reduce.call(v1, v2, v0);
var v3 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v2, save : v2, init : v1, shutdown : v1, getAuthUrl : v2, revokeToken : v2});
