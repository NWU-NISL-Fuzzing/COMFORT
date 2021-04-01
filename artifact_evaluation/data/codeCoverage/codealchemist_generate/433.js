var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"applicationGatewayName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName\",\r\n  \"etag\": \"W/\\\"020349b4-0e26-4be1-9def-ebb94169d1c9\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2a721caf-1cc8-40fe-9a08-891f4f59d1c8\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Medium\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"operationalState\": \"Running\",\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"020349b4-0e26-4be1-9def-ebb94169d1c9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"020349b4-0e26-4be1-9def-ebb94169d1c9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.6\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"020349b4-0e26-4be1-9def-ebb94169d1c9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"020349b4-0e26-4be1-9def-ebb94169d1c9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"10.0.0.0\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"020349b4-0e26-4be1-9def-ebb94169d1c9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"020349b4-0e26-4be1-9def-ebb94169d1c9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Http\",\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"020349b4-0e26-4be1-9def-ebb94169d1c9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-ssl-cert/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [],\r\n    \"redirectConfigurations\": []\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '7551', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"020349b4-0e26-4be1-9def-ebb94169d1c9"', 'x-ms-request-id' : 'e397cefe-b387-41b0-ac7f-87451d1c5c39', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14989', 'x-ms-correlation-request-id' : 'dc0ab85d-91da-497a-b152-6ea2b09237ea', 'x-ms-routing-request-id' : 'WESTEUROPE:20171003T080824Z:dc0ab85d-91da-497a-b152-6ea2b09237ea', date : 'Tue, 03 Oct 2017 08:08:24 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1, v2){
v2.forEach((function (v3){
this.push(v3);
}), v1);
});
// GenBlkBrick
for(var v2 = (v1) - (1);(v2) >= (0);v2--){
var v3 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("b87bfee085c04983d00a9e83b6d26248.svg");
});
}
var v4 = (function (){
var v1 = this.res;
v1.map("get", "GET", "/photos/zoom/{id}", ({id : /\d+/}));
v1.get(({id : "123"}));
this.assertSend("GET", "/photos/zoom/123");
});
(function (){
v0(/$/, "s");
v0(/s$/i, "s");
v0(/(ax|test)is$/i, "$1es");
v0(/(octop|vir)us$/i, "$1i");
v0(/(octop|vir)i$/i, "$1i");
v0(/(alias|status)$/i, "$1es");
v0(/(bu)s$/i, "$1ses");
v0(/(buffal|tomat)o$/i, "$1oes");
v0(/([ti])a$/i, "$1a");
v0(/([ti])um$/i, "$1a");
v0(/sis$/i, "ses");
v0(/ses$/i, "ses");
v0(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v0(/(hive)$/i, "$1s");
v0(/([^aeiouy]|qu)y$/i, "$1ies");
v0(/(x|ch|ss|sh)$/i, "$1es");
v0(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v0(/([m|l])ouse$/i, "$1ice");
v0(/([m|l])ice$/i, "$1ice");
v0(/^(ox)$/i, "$1en");
v0(/^(ox)en$/i, "$1en");
v0(/(quiz)$/i, "$1zes");
v1(/s$/i, "");
v1(/ss$/i, "ss");
v1(/(n)ews$/i, "$1ews");
v1(/([ti])um$/i, "$1um");
v1(/([ti])a$/i, "$1um");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v1(/(^analy)ses$/i, "$1sis");
v1(/(^analy)sis$/i, "$1sis");
v1(/([^f])ves$/i, "$1fe");
v1(/(hive)s$/i, "$1");
v1(/(tive)s$/i, "$1");
v1(/([lr])ves$/i, "$1f");
v1(/([^aeiouy]|qu)ies$/i, "$1y");
v1(/(s)eries$/i, "$1eries");
v1(/(m)ovies$/i, "$1ovie");
v1(/(x|ch|ss|sh)es$/i, "$1");
v1(/([m|l])ice$/i, "$1ouse");
v1(/([m|l])ouse$/i, "$1ouse");
v1(/(bus)es$/i, "$1");
v1(/(bus)$/i, "$1");
v1(/(o)es$/i, "$1");
v1(/(shoe)s$/i, "$1");
v1(/(cris|ax|test)es$/i, "$1is");
v1(/(cris|ax|test)is$/i, "$1is");
v1(/(octop|vir)i$/i, "$1us");
v1(/(octop|vir)us$/i, "$1us");
v1(/(alias|status)es$/i, "$1");
v1(/(alias|status)$/i, "$1");
v1(/^(ox)en/i, "$1");
v1(/(vert|ind)ices$/i, "$1ex");
v1(/(matr)ices$/i, "$1ix");
v1(/(quiz)zes$/i, "$1");
v1(/(database)s$/i, "$1");
v4("person", "people");
v4("man", "men");
v4("child", "children");
v4("sex", "sexes");
v4("move", "moves");
v4("cow", "kine");
v3("equipment");
v3("information");
v3("rice");
v3("money");
v3("species");
v3("series");
v3("fish");
v3("sheep");
v3("jeans");
})();
// GenBlkBrick
for(var v5 = 0x3041;(v5) <= (0x3094);v5++){
var v6 = (function (v1, v2, v3){
(v1.exports) = v3(1951)();
});
}
(v3.prototype) = ((v1) === (null)) ? (Object.create(v1)) : (((v6.prototype) = v1.prototype, new v6()));
(v1.prototype) = ((v0) === (null)) ? (Object.create(v0)) : (((v6.prototype) = v0.prototype, new v6()));
