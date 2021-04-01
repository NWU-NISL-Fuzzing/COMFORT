var v0 = (function (v1, v2){
(v1.exports) = ({render : (function (){
var v1 = this, v2 = v1.$createElement, v3 = (v1._self._c) || (v2);
return v3("div", ({staticClass : "switch-option"}), []);
}), staticRenderFns : []});
});
(v0.htmlParser.HtmlParser) = v0.Util.extend(Object, ({htmlRegex : (function (){
var v2 = /!--([\s\S]+?)--/, v3 = /[0-9a-zA-Z][0-9a-zA-Z:]*/, v4 = /[^\s\0"'>\/=\x01-\x1F\x7F]+/, v5 = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, v6 = (((v4.source) + ('(?:\\s*=\\s*')) + (v5.source)) + (')?');
return new RegExp([].join(""), 'gi');
})(), htmlCharacterEntitiesRegex : /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi, parse : (function (v8){
var v9 = this.htmlRegex, v10, v11 = 0, v12, v13 = [];
while(((v10) = v9.exec(v8)) !== (null)){
var v14 = v10[0], v15 = v10[3], v16 = (v10[1]) || (v10[4]), v17 = ! ! v10[2], v18 = v8.substring(v11, v10.index);
if(v18){
(v12) = this.parseTextAndEntityNodes(v18);
v13.push.apply(v13, v12);
}
if(v15){
v13.push(this.createCommentNode(v14, v15));
}else {
v13.push(this.createElementNode(v14, v16, v17));
}
(v11) = (v10.index) + (v14.length);
}
if((v11) < (v8.length)){
var v19 = v8.substring(v11);
if(v19){
(v12) = this.parseTextAndEntityNodes(v19);
v13.push.apply(v13, v12);
}
}
return v13;
}), parseTextAndEntityNodes : (function (v19){
var v13 = [], v20 = v0.Util.splitAndCapture(v19, this.htmlCharacterEntitiesRegex);
for(var v21 = 0, v22 = v20.length;(v21) < (v22);(v21) += 2){
var v23 = v20[v21], v24 = v20[(v21) + (1)];
if(v23){
v13.push(this.createTextNode(v23));
}
if(v24){
v13.push(this.createEntityNode(v24));
}
}
return v13;
}), createCommentNode : (function (v14, v15){
return new v0.htmlParser.CommentNode(({text : v14, comment : v0.Util.trim(v15)}));
}), createElementNode : (function (v14, v16, v17){
return new v0.htmlParser.ElementNode(({text : v14, tagName : v16.toLowerCase(), closing : v17}));
}), createEntityNode : (function (v19){
return new v0.htmlParser.EntityNode(({text : v19}));
}), createTextNode : (function (v19){
return new v0.htmlParser.TextNode(({text : v19}));
})}));
(v0.frontToBackSortCompare) = (function (v1, v2){
if((v1._distanceToCamera) < (v2._distanceToCamera)){
return - 1;
}
if((v1._distanceToCamera) > (v2._distanceToCamera)){
return 1;
}
return 0;
});
var v1 = (function (){
(this.regEAWrite) = this.abMem[this.regPC++];
(this.regRC) = ((this.regRC) & (0xff00)) | (this.abMem[this.regEAWrite]);
(this.regRC) = ((this.regRC) & (0xfdff)) | (((this.regRC) & (0x0001)) ? (0x0200) : (0));
(this.regRC) >>= 1;
(this.regRN) = (this.regRZ) = (this.abMem[this.regEAWrite]) = (this.regRC) & (0xff);
});
(v0.prototype.terrainObject) = (function (){
for(var v1 = 0, v2 = this.objects.length;(v1) < (v2);v1++){
if(this.objects[v1].isTerrain){
return this.objects[v1];
}
}
return null;
});
(v2) = (function (v1, v2){
v1('singulars', v1, v2);
});
v0(v1, v2);
var v3 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"dfe0f633-ce19-4bd3-bea6-684df62c2c74\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ecde1d8d-b8b3-49f5-9fda-3139885f730d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '753', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"dfe0f633-ce19-4bd3-bea6-684df62c2c74"', 'x-ms-request-id' : '98e1aeac-7c96-4ebb-a964-503d9b395819', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14999', 'x-ms-correlation-request-id' : 'e5ef00eb-1b6e-4029-a3e1-15a65d5db860', 'x-ms-routing-request-id' : 'WESTEUROPE:20170927T082921Z:e5ef00eb-1b6e-4029-a3e1-15a65d5db860', date : 'Wed, 27 Sep 2017 08:29:21 GMT', connection : 'close'}));
return v2;
});
