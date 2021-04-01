var v0 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"applicationGatewayName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName\",\r\n  \"etag\": \"W/\\\"f59ad3cc-ea21-4924-bf69-2c76b8bd554f\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9c19bd74-c967-4816-997d-4bdb3af56a76\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Medium\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"operationalState\": \"Running\",\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"f59ad3cc-ea21-4924-bf69-2c76b8bd554f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"f59ad3cc-ea21-4924-bf69-2c76b8bd554f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"f59ad3cc-ea21-4924-bf69-2c76b8bd554f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"f59ad3cc-ea21-4924-bf69-2c76b8bd554f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"10.0.0.0\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"f59ad3cc-ea21-4924-bf69-2c76b8bd554f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"f59ad3cc-ea21-4924-bf69-2c76b8bd554f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Http\",\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"f59ad3cc-ea21-4924-bf69-2c76b8bd554f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-policy/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [],\r\n    \"redirectConfigurations\": [],\r\n    \"sslPolicy\": {\r\n      \"policyType\": \"Custom\",\r\n      \"minProtocolVersion\": \"TLSv1_0\",\r\n      \"cipherSuites\": [\r\n        \"TLS_RSA_WITH_AES_256_CBC_SHA256\"\r\n      ]\r\n    }\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '7717', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"f59ad3cc-ea21-4924-bf69-2c76b8bd554f"', 'x-ms-request-id' : 'af240282-0021-4756-a871-c843158dcbe2', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14651', 'x-ms-correlation-request-id' : '76fd9635-f413-494c-b173-e08276cca645', 'x-ms-routing-request-id' : 'WESTEUROPE:20171003T095605Z:76fd9635-f413-494c-b173-e08276cca645', date : 'Tue, 03 Oct 2017 09:56:05 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1){
this.quaternion.premultiply(v1);
return this;
});
var v2 = (function (v1){
return (function (){
return this[v1]();
});
});
(v2.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v0(v1, v1.left);
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
function v3(v1, v2, v3, v4){
if((v3) < (v4)){
var v5 = v0(v3, v4);
var v7 = (v3) - (1);
v1(v1, v5, v4);
var v9 = v1[v4];
for(var v10 = v3;(v10) < (v4);v10++){
if((v2(v1[v10], v9)) <= (0)){
(v7) += 1;
v1(v1, v7, v10);
}
}
v1(v1, (v7) + (1), v10);
var v11 = (v7) + (1);
v3(v1, v2, v3, (v11) - (1));
v3(v1, v2, (v11) + (1), v4);
}
}
var v4 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("719dea390f043257e74b39b7944b57a4.svg");
});
(v0.SCALE_Y) = "scY";
function v5(v1){
v1.find('table').filter(v1).removeAttr('cellpadding').removeAttr('cellspacing').removeAttr('border').removeAttr('border-top').removeAttr('border-bottom').removeAttr('border-left').removeAttr('border-right');
v1.find('td').filter(v1).each((function (){
var v3 = this;
if(v4.isProppedParagraph(v3.innerHTML)){
(v3.innerHTML) = '&nbsp;';
}
var v5 = v6('>p', v3);
if((1) === (v5.length)){
v5.contents().unwrap();
}
}));
v1.find('table,th,td,tr').filter(v1).removeAttr('width').removeAttr('height').removeAttr('valign');
v1.find('colgroup').filter(v1).remove();
}
