(v0) = " ";
switch(v0){
}
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTESTGVMCREATE3056/providers/Microsoft.Compute/virtualMachines/xplatvm2?$expand=instanceView&api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"85fe9c3d-3ff4-4eea-a151-440fa3b6102c\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTESTGVMCREATE3056/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL9930\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli6ca18a65598a25db-os-1493731907878\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage1809.blob.core.windows.net/xplatteststoragecnt1385/cli6ca18a65598a25db-os-1493731907878.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate3056/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": false\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 1,\r\n      \"platformFaultDomain\": 1,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.7.1198.802\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2017-06-02T16:15:48+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": [\r\n          {\r\n            \"type\": \"Microsoft.Compute.BGInfo\",\r\n            \"typeHandlerVersion\": \"2.1\",\r\n            \"status\": {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Ready\",\r\n              \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli6ca18a65598a25db-os-1493731907878\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2017-05-02T13:36:25.7663203+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"extensions\": [\r\n        {\r\n          \"name\": \"BGInfo\",\r\n          \"type\": \"Microsoft.Compute.BGInfo\",\r\n          \"typeHandlerVersion\": \"2.1\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2017-05-02T13:38:47.8083628+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"westus\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTESTGVMCREATE3056/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTESTGVMCREATE3056/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n  \"name\": \"xplatvm2\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '4610', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : '21502de0-6f98-4d84-959e-6be54f3bb855_131333058203508764', 'x-ms-request-id' : '3117d10c-fed1-49fe-8df8-f7121d0dc8a2', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14976', 'x-ms-correlation-request-id' : '2c1e8481-6f19-4e5b-8af7-6fe6af2040f7', 'x-ms-routing-request-id' : 'WESTUS:20170602T161556Z:2c1e8481-6f19-4e5b-8af7-6fe6af2040f7', date : 'Fri, 02 Jun 2017 16:15:55 GMT', connection : 'close'}));
return v2;
});
v1(new RegExp((((("(") + (v0.substr(0, 1))) + (")")) + (v0.substr(1))) + ("$"), "i"), ('$1') + (v0.substr(1)));
if((v0) === ("prop")){
(v2) = true;
}
var v3 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Express/versions?api-version=2017-03-30').reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"11.1.65235\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Express/Versions/11.1.65235\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"11.5.65235\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Express/Versions/11.5.65235\"\r\n  }\r\n]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '605', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : 'bdb89581-1ae1-4f86-9ebc-7ed3317b1bdb', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14884', 'x-ms-correlation-request-id' : '52b29a14-49b1-43db-bc13-ffee14d2e806', 'x-ms-routing-request-id' : 'WESTUS:20170602T151918Z:52b29a14-49b1-43db-bc13-ffee14d2e806', date : 'Fri, 02 Jun 2017 15:19:18 GMT', connection : 'close'}));
return v2;
});
// GenBlkBrick
for(var v4 = 1;(v4) < (1024);v4++){
var v5 = (function (v1, v2){
var v3 = v2.picoModal(({content : "Curse your sudden but inevitable betrayal!", parent : v2.query("#myParent").one().elem})).show();
v2.assert.equal(v2.query("#myParent").one().elem, v3.modalElem().parentNode);
v1();
});
}
// GenBlkBrick
for(var v0 in v5.prototype){
var v6 = (function (v1){
v1.buffs_remove('mining_deplete_rocks_in_time_period');
});
var v7 = (function (v1, v2, v3){
'use strict';
var v4 = ({onClick : true, onDoubleClick : true, onMouseDown : true, onMouseMove : true, onMouseUp : true, onClickCapture : true, onDoubleClickCapture : true, onMouseDownCapture : true, onMouseMoveCapture : true, onMouseUpCapture : true});
var v5 = ({getNativeProps : (function (v6, v7, v8){
if(! v7.disabled){
return v7;
}
var v9 = ({});
for(var v10 in v7){
if((v7.hasOwnProperty(v10)) && (! v4[v10])){
(v9[v10]) = v7[v10];
}
}
return v9;
})});
(v2.exports) = v5;
});
}
