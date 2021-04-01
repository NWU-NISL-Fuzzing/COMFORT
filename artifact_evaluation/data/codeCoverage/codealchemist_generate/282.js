// GenBlkBrick
for(var v0 = 0;(v0) < (100);++v0){
(v0) ^= ((v0) >> (4)) & (268435455);
}
(v0) += 2047;
// GenBlkBrick
do {
var v1 = (function (v1){
var v2 = this.boundsValue_;
return (this.getOption('reversed')) ? (this.getWidthAtY_((v1) - (v2.top))) : (this.getWidthAtY_(((v2.height) - (v1)) + (v2.top)));
});
} while(v0);
// GenBlkBrick
for(var v2 = 0;(v2) < (1);++v2){
// GenBlkBrick
for(var v3 = 0;(v3) < (10000);v3++){
var v4 = (function (){
var v1 = Math.sqrt(((((this.x) * (this.x)) + ((this.y) * (this.y))) + ((this.z) * (this.z))) + ((this.w) * (this.w)));
if((v1) === (0)){
(this.x) = 0;
(this.y) = 0;
(this.z) = 0;
(this.w) = 0;
}else {
(v1) = (1) / (v1);
(this.x) = (this.x) * (v1);
(this.y) = (this.y) * (v1);
(this.z) = (this.z) * (v1);
(this.w) = (this.w) * (v1);
}
return this;
});
var v5 = (function (v1){
var v2 = v1('http://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate6929/providers/Microsoft.ContainerService/containerServices/xplatContainer24038?api-version=2017-01-31', '*').reply(201, "{\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate6929/providers/Microsoft.ContainerService/containerServices/xplatContainer24038\",\r\n  \"name\": \"xplatContainer24038\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Creating\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"Swarm\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer24038master\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer24038a1\",\r\n        \"count\": 1,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer24038a2\",\r\n        \"osType\": \"Linux\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEA1J/ZLar7bMxCr0eN1yAkMM8B7Z6eQP2P0LG5W/ATM/c7r5voER2N/xJ2JMyKRM73zX83nyTroGRynFsLTaizSQ2hNCAs15oxwspnFrlBZVsNhNs6DvPUDosJ81/ud5Emle8VYAWCwtAl0BVx+fWCygqKTXcYznuHTwnxYyk5hgPno3YD7/mk2j53EN6iY+ua0FNnxPQAHIXxwREOWSTr4zp40vEpfbww2GuabdACh5gg7rxtjCb2NAIKBmn8Bm0fpKzwtaPA6ihFfUwpBvhihdn7OIpss7G50VplX+h3xdyx31TFJ7rcqlsSrwXI1SNic0WWjnU1j/6Ely4Z1HnCYQ==\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true\r\n      }\r\n    }\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1439', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/43feeb4b-e98d-4431-a159-0543dae93a4b?api-version=2017-01-31', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : '9626245e-74e6-4408-af5c-6fa7269107e5_131358123722959165', 'x-ms-request-id' : '43feeb4b-e98d-4431-a159-0543dae93a4b', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1199', 'x-ms-correlation-request-id' : '86b2645a-f327-4671-8a91-f993e26952f6', 'x-ms-routing-request-id' : 'WESTUS2:20170602T145254Z:86b2645a-f327-4671-8a91-f993e26952f6', date : 'Fri, 02 Jun 2017 14:52:53 GMT', connection : 'close'}));
return v2;
});
}
var v6 = (function (){
return this.getProxy().create(this);
});
}
function v7(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v1(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v6(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v5(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
(v8) = (v3) ? (v5(v0, v3)) : (('') + (Math.round(v0))).split('.');
for(var v9 = 0;(v9) <= (v3);v9++){
(v14) = (v9) / (v3);
(v15) = v1(v5, v6, v14);
(v16) = v1(v8, v9, v14);
(v10) = v1(v6, v11, v14);
(v11) = v1(v9, v13, v14);
(v12) = v1(v15, v10, v14);
(v13) = v1(v16, v11, v14);
v8.push(v12, v13);
}
var v17 = (function (v1, v2, v3){
var v4, v5, v6, v7;
for(((v4) = 0, (v5) = this.types.length);(v4) < (v5);v4++){
try{
(v6) = this.types[v4].createResolver(v2, v3);
}catch(v8){
continue ;
}
(v7) = this.types[v4]._branchConstructor;
if(v7){
(v1._read) = (function (v9){
return new v7(v6._read(v9));
});
}else {
(v1._read) = (function (){
return null;
});
}
return;
}
});
