var v0 = (function (){
(this.ScriptFragment) = '<script[^>]*>([\\S\\s]*?)<\/script>';
(this.specialChar) = ({'\b' : '\\b', '\t' : '\\t', '\n' : '\\n', '\f' : '\\f', '\r' : '\\r', '\\' : '\\\\'});
});
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate3752/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail5025?api-version=2017-03-30', '*').reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate3752/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail5025\",\r\n  \"name\": \"xplatTestZVMAvail5025\",\r\n  \"sku\": {\r\n    \"name\": \"Classic\"\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '442', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594', 'x-ms-request-id' : '3269aea5-4c69-4001-a7c9-987b7fef2000', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1193', 'x-ms-correlation-request-id' : '7dec1182-f352-46d0-ba81-669ebbd47ab7', 'x-ms-routing-request-id' : 'WESTUS2:20170602T172304Z:7dec1182-f352-46d0-ba81-669ebbd47ab7', date : 'Fri, 02 Jun 2017 17:23:04 GMT', connection : 'close'}));
return v2;
});
(v0.prototype.update) = (function (v1, v2, v3, v4, v5, v6, v7){
v8.Vector3.UnprojectFloatsToRef(v1, v2, 0, v3, v4, v5, v6, v7, this.origin);
v8.Vector3.UnprojectFloatsToRef(v1, v2, 1, v3, v4, v5, v6, v7, v8.Tmp.Vector3[0]);
v8.Tmp.Vector3[0].subtractToRef(this.origin, this.direction);
this.direction.normalize();
return this;
});
(v1.ClearCache) = (function (){
(v1) = [];
});
(v1.prototype) = v0.prototype;
(v1.prototype.updateColor) = (function (){
var v1 = this.getColor();
this.elements.preview.css('background-color', v1);
this.elements.input.val(v1);
this.kolorPicker.changeColor(v1);
});
(v1.DATA_VERSION_4_0) = "4.0";
function v2(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v0(v3)) + (v1(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
