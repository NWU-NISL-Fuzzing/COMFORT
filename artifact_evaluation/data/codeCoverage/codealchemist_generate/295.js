var v0 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/ServiceBus/Namespaces/nodesdk-4').reply(500, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>InternalError</Code><Message>The server encountered an internal error. Please retry the request.</Message></Error>", ({'cache-control' : 'no-cache', 'content-length' : '229', 'content-type' : 'application/xml; charset=utf-8', server : '33.0.6198.18 (rd_rdfe_stable.130314-1521) Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : '45062213b71b472091c847343e34e204', date : 'Tue, 19 Mar 2013 20:16:41 GMT'}));
return v2;
});
var v1 = (function (v1){
if(v1){
this._updateHeight();
}else {
this.invokeLast(this._updateHeight);
}
return this;
});
var v2 = (function (){
if((this.flatMidpointRevision_) != (this.getRevision())){
(this.flatMidpoint_) = this.getCoordinateAt(0.5, this.flatMidpoint_);
(this.flatMidpointRevision_) = this.getRevision();
}
return this.flatMidpoint_;
});
var v3 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/9135e259-1f76-4dbd-a5c8-bc4fcdf3cf1c/resourceGroups/xplatTestADEOneOff5555/providers/Microsoft.Compute/virtualMachines/xplattestvm/extensions/AzureDiskEncryption?$expand=instanceView&api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Azure.Security\",\r\n    \"type\": \"AzureDiskEncryption\",\r\n    \"typeHandlerVersion\": \"1.1\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"AADClientID\":\"28290dca-b7df-4fad-95f3-8df253214d34\",\"KeyVaultURL\":\"https://xplattestkvoneoff.vault.azure.net\",\"EncryptionOperation\":\"EnableEncryption\",\"AutoUpgradeMinorVersion\":true},\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"AzureDiskEncryption\",\r\n      \"type\": \"Microsoft.Azure.Security.AzureDiskEncryption\",\r\n      \"typeHandlerVersion\": \"1.1.0.4\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"https://xplattestkvoneoff.vault.azure.net/secrets/6773300B-5FB4-4984-B6B2-CC5CB05E654A/9f7520f0611b43458642dc8725feaa95\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/9135e259-1f76-4dbd-a5c8-bc4fcdf3cf1c/resourceGroups/xplatTestADEOneOff5555/providers/Microsoft.Compute/virtualMachines/xplattestvm/extensions/AzureDiskEncryption\",\r\n  \"name\": \"AzureDiskEncryption\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1230', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : '64e02c07-da64-431a-89d5-1f0dad0aed07_131506966718292467', 'x-ms-request-id' : 'a41c1f43-bbaa-4eee-9a3a-4c40b0e29e70', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14979', 'x-ms-correlation-request-id' : '1a9963ed-bd2f-44b2-a87d-d476778de85c', 'x-ms-routing-request-id' : 'WESTUS2:20171004T235813Z:1a9963ed-bd2f-44b2-a87d-d476778de85c', date : 'Wed, 04 Oct 2017 23:58:13 GMT', connection : 'close'}));
return v2;
});
(v1.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v3(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v3(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v2(v5);
return v5;
});
(v0.length) = 100;
var v4 = (function (v1, v2, v3){
var v4 = v3(80);
(v1.exports) = (function (v1, v2, v3){
if((v4(v1), (void 0) === (v2))){
return v1;
}
switch(v3){
}
return (function (){
return v1.apply(v2, arguments);
});
});
});
function v5(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v4(v3);
(v4) += v3(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
