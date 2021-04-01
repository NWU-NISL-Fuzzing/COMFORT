// GenBlkBrick
do {
// GenBlkBrick
while(false){
var v0 = (function (v1){
var v2 = v1('https://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourcegroups/xDeploymentTestGroup8082/providers/Microsoft.Resources/deployments/Deploy1895?api-version=2016-09-01', '*').reply(201, "{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Resources/deployments/Deploy1895\",\"name\":\"Deploy1895\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite1772\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost2805\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Basic\"},\"workerSize\":{\"type\":\"String\",\"value\":\"1\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-10-26T20:42:25.9475111Z\",\"duration\":\"PT0.8286106S\",\"correlationId\":\"086eb3ae-7935-47d0-b170-24eb0d5d4d53\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/serverfarms/xDeploymentTestHost2805\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost2805\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/Sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite1772/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/serverfarms/xDeploymentTestHost2805\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost2805\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost2805-xDeploymentTestGroup8082\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost2805-xDeploymentTestGroup8082\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite1772\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite1772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite1772\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite1772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/serverfarms/xDeploymentTestHost2805\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost2805\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost2805\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost2805\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/serverfarms/xDeploymentTestHost2805\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost2805\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost2805\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost2805\"},{\"dependsOn\":[{\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/Microsoft.Web/sites/xDeploymentTestSite1772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1772\"}],\"id\":\"/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourceGroups/xDeploymentTestGroup8082/providers/microsoft.insights/components/xDeploymentTestSite1772\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite1772\"}]}}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/89ec4d1d-dcc7-4a3f-a701-0a5d074c8505/resourcegroups/xDeploymentTestGroup8082/providers/Microsoft.Resources/deployments/Deploy1895/operationStatuses/08587240923403588008?api-version=2016-09-01', 'x-ms-ratelimit-remaining-subscription-writes' : '1199', 'x-ms-request-id' : '086eb3ae-7935-47d0-b170-24eb0d5d4d53', 'x-ms-correlation-request-id' : '086eb3ae-7935-47d0-b170-24eb0d5d4d53', 'x-ms-routing-request-id' : 'WESTUS2:20161026T204226Z:086eb3ae-7935-47d0-b170-24eb0d5d4d53', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Wed, 26 Oct 2016 20:42:25 GMT', connection : 'close', 'content-length' : '5322'}));
return v2;
});
}
(v0.BEND_POSITIVE) = "bendPositive";
} while(v0);
(v0.BLEND_TYPE) = "blendType";
// GenBlkBrick
for(var v1 = 0;(v1) < (100);++v1){
// GenBlkBrick
for(var v2 = 0;(v2) < (100);++v2){
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(4), v5 = v3(305)(! 1), v6 = [].indexOf, v7 = (! ! v6) && (((1) / ([].indexOf(1, - 0))) < (0));
v4((v4.P) + ((v4.F) * ((v7) || (! v3(113)(v6)))), "Array", ({indexOf : (function (v1){
return (v7) ? ((v6.apply(this, arguments)) || (0)) : (v5(this, v1, arguments[1]));
})}));
});
(v2) += (v2) >> (16);
}
{
(v2) >>= 2;
(v1) += 2;
}
}
var v4 = (function (v1){
if(! v1.FCarry){
(v1.programCounter) = (((v1.programCounter) + (((v1.memoryReader[v1.programCounter](v1, v1.programCounter)) << (24)) >> (24))) + (1)) & (0xFFFF);
(v1.CPUTicks) += 4;
}else {
(v1.programCounter) = ((v1.programCounter) + (1)) & (0xFFFF);
}
});
var v5 = (function (v1, v2, v3){
'use strict';
var v4 = v1('fast-isnumeric');
(v2.exports) = (function (v5, v6){
if((v5) > (0)){
return (Math.log(v5)) / (Math.LN10);
}
var v8 = (Math.log(Math.min(v6[0], v6[1]))) / (Math.LN10);
if(! v4(v8)){
(v8) = ((Math.log(Math.max(v6[0], v6[1]))) / (Math.LN10)) - (6);
}
return v8;
});
});
var v6 = (function (v1){
this.base(arguments, v1);
});
(v7) = (v1) ? (v5(v2, v1)) : (('') + (Math.round(v2))).split('.');
// GenBlkBrick
for((v8) = 0;(v8) < (1e3);v8++){
Array.prototype.reduce.call(v3, v0, v8);
}
