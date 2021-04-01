// GenBlkBrick
for(var v0 = 0;(v0) < (5);++v0){
if((v0) > (1)){
(v1) = false;
}
}
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDocker/providers/Microsoft.Compute/virtualMachines/xplatvmdocker?api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"39c9843f-c36a-42fd-968f-40e8fc6ac300\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"Canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"14.04.1-LTS\",\r\n        \"version\": \"14.04.201409090\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli1f42df0fffd5a1d9-os-1496429793778\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstdocker6627.blob.core.windows.net/xplatscntdocker6243/cli1f42df0fffd5a1d9-os-1496429793778.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmdocker\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDocker/providers/Microsoft.Network/networkInterfaces/xplatnicdocker\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstdocker6627.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDocker/providers/Microsoft.Compute/virtualMachines/xplatvmdocker\",\r\n  \"name\": \"xplatvmdocker\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '3283', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594', 'x-ms-request-id' : 'acbd0d44-1098-4981-87a2-edc5b7486839', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14994', 'x-ms-correlation-request-id' : '73c21f6b-8fa2-456f-aede-a0844fad6967', 'x-ms-routing-request-id' : 'WESTUS2:20170602T190010Z:73c21f6b-8fa2-456f-aede-a0844fad6967', date : 'Fri, 02 Jun 2017 19:00:10 GMT', connection : 'close'}));
return v2;
});
function v3(){
if(! v1){
(v1) = true;
v2(v3.get());
}
return v4;
}
if(((v1) !== (false)) && ((v1) === (undefined))){
(v1) = v1;
}
var v4 = (function (v1, v2, v3){
var v4 = v3(111), v5 = v3(404), v6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, v7 = /^\w*$/;
(v1.exports) = (function (v1, v2){
if(v4(v1)){
return ! 1;
}
var v3 = typeof v1;
return (((! ((((("number") != (v3)) && (("symbol") != (v3))) && (("boolean") != (v3))) && ((null) != (v1))) && (! v5(v1))) || (v7.test(v1))) || (! v6.test(v1))) || (((null) != (v2)) && ((v1) in (Object(v2))));
});
});
var v5 = (v1) ? (NaN) : (v3);
(v4[1]) = 9;
var v6 = (function (v1, v2, v3){
var v4 = v1("./Digraph"), v5 = v1("./compoundify");
var v6 = v5(v4);
(v2.exports) = v6;
(v6.fromDigraph) = (function (v7){
var v8 = new v6(), v9 = v7.graph();
if((v9) !== (undefined)){
v8.graph(v9);
}
v7.eachNode((function (v11, v12){
if((v12) === (undefined)){
v8.addNode(v11);
}else {
v8.addNode(v11, v12);
}
}));
v7.eachEdge((function (v13, v11, v14, v12){
if((v12) === (undefined)){
v8.addEdge(null, v11, v14);
}else {
v8.addEdge(null, v11, v14, v12);
}
}));
return v8;
});
(v6.prototype.toString) = (function (){
return ("CDigraph ") + (JSON.stringify(this, null, 2));
});
});
