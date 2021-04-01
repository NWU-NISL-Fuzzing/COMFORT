// GenBlkBrick
while((v0) && ((v0) = v0.$parent)){
var v0 = (function (){
this.route('a');
this.route('b', (function (){
this.route('c');
this.route('d');
}));
});
Object.defineProperty(v0.prototype, "transparentSortCompareFn", ({set : (function (v2){
if(v2){
(this._transparentSortCompareFn) = v2;
}else {
(this._transparentSortCompareFn) = v0.defaultTransparentSortCompare;
}
(this._renderTransparent) = this.renderTransparentSorted;
}), enumerable : true, configurable : true}));
}
// GenBlkBrick
do {
var v1 = (function (){
return (this.charCodeAt(0)) - ("0".charCodeAt(0));
});
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName?api-version=2017-10-01', '*').reply(200, "{\r\n  \"name\": \"applicationGatewayName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName\",\r\n  \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e13237d6-b339-4032-ba18-3e91e1cd08d1\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Medium\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"operationalState\": \"Running\",\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"port\": 80,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"frontendPortName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPortName\",\r\n        \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"port\": 8080\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"10.0.0.0\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Http\",\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"df9c783e-6025-4dd6-8dec-1212ec9e2b62\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-frontend-port/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [],\r\n    \"redirectConfigurations\": []\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '8028', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : '5e9a644a-5b72-49e6-9bd7-362507da628c', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/5e9a644a-5b72-49e6-9bd7-362507da628c?api-version=2017-10-01', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1199', 'x-ms-correlation-request-id' : 'b6f954a3-84a9-4f7c-8ef8-8c220d7c2189', 'x-ms-routing-request-id' : 'WESTEUROPE:20171002T172723Z:b6f954a3-84a9-4f7c-8ef8-8c220d7c2189', date : 'Mon, 02 Oct 2017 17:27:23 GMT', connection : 'close'}));
return v2;
});
} while(v0);
var v3 = (function (v1){
var v2 = (v1) ? (true) : (null);
return (v2) | (0);
});
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
var v4 = (function (){
return this.getPropertyValue('-webkit-margin-before-collapse');
});
// GenBlkBrick
for(var v5 = 0;(v5) < (12);v5++){
function v6(){
return (v5) * (v5);
}
}
while((v5--) > (0)){
v4();
}
// GenBlkBrick
for(var v0 in v3.prototype){
(v1._getBoneType) = (function (v1){
switch(v1.toLowerCase()){
}
});
// GenBlkBrick
while((v7) &= 3){
var v8 = (function (v1){
if((this.labels.length) < (2)){
this.chart.removeLabelDomain(this);
return;
}
var v2, v3, v4, v5, v6;
var v7 = 0;
var v8 = 0;
var v9 = 0;
for(var v10 = 0, v11 = this.labels.length;(v10) < (v11);v10++){
(v2) = this.labels[v10];
(v3) = (this.chart.state.getSeriesState()) | (this.chart.state.getPointStateByIndex(v2.getIndex()));
(v4) = this.getLabelBounds_(v2, v3);
(v5) = this.chart.data().meta(v2.getIndex(), 'point');
(v6) = v5.getBounds();
if(! v10){
(v7) = v6.top;
}
(v9) += v4.height;
(v8) += v6.height;
}
(v8) += (this.chart.pointsPaddingValue_) * ((v11) - (1));
var v12 = (v7) + ((v8) / (2));
var v13 = (v12) - ((v9) / (2));
var v14 = this.chart.boundsValue_;
if(((v13) + (v9)) > ((v14.top) + (v14.height))){
(v13) = ((v14.top) + (v14.height)) - (v9);
}
if((v13) < (v14.top)){
(v13) = v14.top;
}
(this.y) = v13;
this.applyLabelsPosition_(v1);
});
}
}
