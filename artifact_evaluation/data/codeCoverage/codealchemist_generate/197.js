var v0 = (function (){
return ({width : 400, height : 400});
});
(v0.prototype.intersectsPoint) = (function (v1){
var v2 = (this.centerWorld.x) - (v1.x);
var v3 = (this.centerWorld.y) - (v1.y);
var v4 = (this.centerWorld.z) - (v1.z);
var v5 = Math.sqrt((((v2) * (v2)) + ((v3) * (v3))) + ((v4) * (v4)));
if((Math.abs((this.radiusWorld) - (v5))) < (v7.Epsilon)){
return false;
}
return true;
});
(v0.prototype.showCropper) = (function (){
if((this.$cropperContainer) && (this.$cropperContainer.length)){
this.$cropperContainer.removeClass('hidden');
}
});
var v1 = (function (v1){
(v1.fn.selectpicker.defaults) = ({noneSelectedText : "\u6ca1\u6709\u9009\u4e2d\u4efb\u4f55\u9879", noneResultsText : "\u6ca1\u6709\u627e\u5230\u5339\u914d\u9879", countSelectedText : "\u9009\u4e2d{1}\u4e2d\u7684{0}\u9879", maxOptionsText : [], multipleSeparator : ", ", selectAllText : "\u5168\u9009", deselectAllText : "\u53d6\u6d88\u5168\u9009"});
});
(v1.prototype.parse) = (function (v1){
this._validate(v1);
return v1.data;
});
var v2 = (function (v1, v2, v3){
(v1.default) = v2.default.extend(v3.default, ({startKey : [], addPermission : "add_lab"}));
});
v0(v2, v1);
var v3 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/availabilitySets/xplattestavs7?api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 2,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate6512/providers/Microsoft.Compute/availabilitySets/xplattestavs7\",\r\n  \"name\": \"xplattestavs7\",\r\n  \"sku\": {\r\n    \"name\": \"Aligned\"\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '439', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594', 'x-ms-request-id' : '4e1cbdbd-bc48-4958-8d49-632a9cccc11b', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14995', 'x-ms-correlation-request-id' : '73020303-e757-485b-9ae5-b104f895c921', 'x-ms-routing-request-id' : 'WESTUS2:20170602T165605Z:73020303-e757-485b-9ae5-b104f895c921', date : 'Fri, 02 Jun 2017 16:56:04 GMT', connection : 'close'}));
return v2;
});
