var v0 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"35938cdf-7df6-4a87-a236-26156a96f09f\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"another-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/another-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"privateIPAddressVersion\": \"IPv6\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalDomainNameSuffix\": \"55sgx04fktwe5oheyb1hehl3lh.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-02-0F\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '2390', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63"', 'x-ms-request-id' : 'd5e9f805-0c6c-42a7-9513-edc879462f61', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14995', 'x-ms-correlation-request-id' : '7d65a476-b54d-4f45-a926-6418d73c96fa', 'x-ms-routing-request-id' : 'WESTEUROPE:20170707T113242Z:7d65a476-b54d-4f45-a926-6418d73c96fa', date : 'Fri, 07 Jul 2017 11:32:42 GMT', connection : 'close'}));
return v2;
});
(v0.prototype.faClass) = '';
(v0.prototype.render) = (function (v1, v2, v3, v4){
if(v1){
v1(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
return;
}
var v5 = this._scene.getEngine();
if((this._depthOnlySubMeshes.length) !== (0)){
v5.setAlphaTesting(true);
v5.setColorWrite(false);
this._renderAlphaTest(this._depthOnlySubMeshes);
v5.setAlphaTesting(false);
v5.setColorWrite(true);
}
if((this._opaqueSubMeshes.length) !== (0)){
this._renderOpaque(this._opaqueSubMeshes);
}
if((this._alphaTestSubMeshes.length) !== (0)){
v5.setAlphaTesting(true);
this._renderAlphaTest(this._alphaTestSubMeshes);
v5.setAlphaTesting(false);
}
var v6 = v5.getStencilBuffer();
v5.setStencilBuffer(false);
if(v2){
this._renderSprites();
}
if(v3){
this._renderParticles(v4);
}
if(this.onBeforeTransparentRendering){
this.onBeforeTransparentRendering();
}
if((this._transparentSubMeshes.length) !== (0)){
this._renderTransparent(this._transparentSubMeshes);
v5.setAlphaMode(v7.Engine.ALPHA_DISABLE);
}
v5.setStencilBuffer(false);
for(var v8 = 0;(v8) < (this._edgesRenderers.length);v8++){
this._edgesRenderers.data[v8].render();
}
v5.setStencilBuffer(v6);
});
var v1 = (function (v1){
return ((((typeof v1) === ('string')) && ((v1.length) >= (32))) && ((v1.length) < (50))) && (/^[a-zA-Z0-9=+-]*$/.test(v1));
});
(v1.htmlParser.EntityNode) = v1.Util.extend(v1.htmlParser.HtmlNode, ({getType : (function (){
return 'entity';
})}));
var v2 = (function (){
function v1(v2, v3, v4){
return new Date();
}
var v6 = [].filter(v1);
return ((v6.length) === (1)) && ((v6[0]) === (11));
});
function v3(v1, v2, v3){
var v4 = ({'ss' : 'secunde', 'mm' : 'minute', 'hh' : 'ore', 'dd' : 'zile', 'MM' : 'luni', 'yy' : 'ani'}), v5 = ' ';
if((((v1) % (100)) >= (20)) || (((v1) >= (100)) && (((v1) % (100)) === (0)))){
(v5) = ' de ';
}
return ((v1) + (v5)) + (v4[v3]);
}
function v4(){
try{
v4();
}catch(v1){
v2();
}
}
