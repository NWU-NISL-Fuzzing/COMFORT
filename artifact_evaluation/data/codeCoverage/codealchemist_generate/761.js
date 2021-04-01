var v0 = (function (){
this._loadercache.clear();
});
(v0.prototype.copyFromArray) = (function (v1, v2){
if((v2) === (void 0)){
(v2) = 0;
}
(this.a) = v1[v2];
(this.b) = v1[(v2) + (1)];
(this.c) = v1[(v2) + (2)];
(this.d) = v1[(v2) + (3)];
(this.tx) = v1[(v2) + (4)];
(this.ty) = v1[(v2) + (5)];
return this;
});
// GenBlkBrick
while((v0) > (0)){
// GenBlkBrick
for(((v1) = 0, (v1) = v2);(v1) < (v1);++v1){
var v2 = (function (v1, v2, v3, v4){
return ((((((v3) * ((v1) /= v4)) * (v1)) * (v1)) * (v1)) * (v1)) + (v2);
});
}
{
var v3 = 0;
for(var v4 = 0;((v4) + (v1)) < (v3);v4++){
if((v4[(v4) + (v1)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v1)];
(v4[(v4) + (v1)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v1) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
while(v1--){
new v0();
}
(v5) += ((v4) * (v1)) + (1);
var v6 = (function (v1, v2){
return this.readGeometryFromText(this.getText_(v1), this.adaptOptions(v2));
});
var v7 = (function (v1){
var v2 = v1('https://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension5919/providers/Microsoft.Compute/virtualMachines/xplatvmExt2?api-version=2017-03-30', '*').reply(201, "{\r\n  \"properties\": {\r\n    \"vmId\": \"37b26441-6ab4-4eae-89e9-a12d95474bac\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli54a77cfbc1e0da98-os-1496428346526\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext1505.blob.core.windows.net/xplatstoragecntext1875/cli54a77cfbc1e0da98-os-1496428346526.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension5919/providers/Microsoft.Network/networkInterfaces/xplatnicExt2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext1505.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension5919/providers/Microsoft.Compute/virtualMachines/xplatvmExt2\",\r\n  \"name\": \"xplatvmExt2\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1680', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/5cf45a5e-4a00-4b4b-a3fd-f8864c70b06a?api-version=2017-03-30', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594', 'x-ms-request-id' : '5cf45a5e-4a00-4b4b-a3fd-f8864c70b06a', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1198', 'x-ms-correlation-request-id' : 'f8794caa-5ab7-4b36-9c10-3217f70af66f', 'x-ms-routing-request-id' : 'WESTUS2:20170602T183354Z:f8794caa-5ab7-4b36-9c10-3217f70af66f', date : 'Fri, 02 Jun 2017 18:33:53 GMT', connection : 'close'}));
return v2;
});
Array.prototype.reduce.call(v2, v7, v5);
