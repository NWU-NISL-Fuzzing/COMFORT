var v0 = (function (){
JSON.parse('12\n34');
});
// GenBlkBrick
for(var v1 = 0;(v1) < (0x8000);v1++){
var v2 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourcegroups/xDeploymentTestGroup8082/providers/Microsoft.Resources/deployments/Deploy1895?api-version=2016-09-01').reply(200, "{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Resources/deployments/Deploy1895\",\"name\":\"Deploy1895\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite1772\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost2805\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Basic\"},\"workerSize\":{\"type\":\"String\",\"value\":\"1\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Succeeded\",\"timestamp\":\"2016-10-26T20:42:59.4526486Z\",\"duration\":\"PT34.3337481S\",\"correlationId\":\"086eb3ae-7935-47d0-b170-24eb0d5d4d53\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/serverfarms/xDeploymentTestHost2805\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost2805\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/Sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite1772/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/serverfarms/xDeploymentTestHost2805\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost2805\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost2805-xDeploymentTestGroup8082\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost2805-xDeploymentTestGroup8082\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite1772\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite1772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite1772\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite1772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/serverfarms/xDeploymentTestHost2805\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost2805\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost2805\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost2805\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/serverfarms/xDeploymentTestHost2805\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost2805\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost2805\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost2805\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/components/xDeploymentTestSite1772\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"outputs\":{\"exampleOutput\":{\"type\":\"String\",\"value\":\"stringToConcatenate\"}},\"outputResources\":[{\"id\":\"microsoft.insights/alertrules/CPUHigh xDeploymentTestHost2805\"},{\"id\":\"microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite1772\"},{\"id\":\"microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost2805\"},{\"id\":\"microsoft.insights/alertrules/ServerErrors xDeploymentTestSite1772\"},{\"id\":\"microsoft.insights/autoscalesettings/xDeploymentTestHost2805-xDeploymentTestGroup8082\"},{\"id\":\"microsoft.insights/components/xDeploymentTestSite1772\"},{\"id\":\"Microsoft.Web/serverfarms/xDeploymentTestHost2805\"},{\"id\":\"Microsoft.Web/sites/xDeploymentTestSite1772\"},{\"id\":\"Microsoft.Web/sites/xDeploymentTestSite1772/Extensions/MSDeploy\"}]}}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-ratelimit-remaining-subscription-reads' : '14995', 'x-ms-request-id' : '9193bc26-9595-4842-8af1-f91df59c0516', 'x-ms-correlation-request-id' : '9193bc26-9595-4842-8af1-f91df59c0516', 'x-ms-routing-request-id' : 'CENTRALUS:20161026T204307Z:9193bc26-9595-4842-8af1-f91df59c0516', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Wed, 26 Oct 2016 20:43:07 GMT', connection : 'close', 'content-length' : '6068'}));
return v2;
});
v2(/([^aeiouy]|qu)y$/i, "$1ies");
}
// GenBlkBrick
for(var v3 = 0;(v3) < (9);v3++){
var v4 = Math.abs(v3);
}
(v5) = v0(v3, v1, v4);
(v6) = v0(v4, v1, v3);
v2(v4);
// GenBlkBrick
for(var v7 = 0;(v7) > (- 1);--v7){
// GenBlkBrick
for(var v8 = 1;(v8) <= (20);v8++){
if((v8) < (20)){
break ;
}
{
var v9 = 0;
for(var v10 = 0;((v10) + (v8)) < (v3);v10++){
if((v4[(v10) + (v8)].area) > (v4[v10].area)){
var v5 = v4[(v10) + (v8)];
(v4[(v10) + (v8)]) = v4[v10];
(v4[v10]) = v5;
v9++;
}
}
if((v8) == (1)){
if((v9) == (0)){
break ;
}
}else {
(v8) = Math.floor(((v8) * (10)) / (13));
}
}
}
}
// GenBlkBrick
while(((Date.now()) - (v10)) < (v3)){
if((v1) === (6)){
break ;
}
}
