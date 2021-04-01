var v0 = (function (v1){
return (v1.w) == (v1.h);
});
var v1 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate3552/providers/Microsoft.Network/networkInterfaces/vm438-south-vzprsug95v6y-nic?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"vm438-south-vzprsug95v6y-nic\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate3552/providers/Microsoft.Network/networkInterfaces/vm438-south-vzprsug95v6y-nic\",\r\n  \"etag\": \"W/\\\"47aee261-4b60-4a88-9910-3170efed1fb4\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"554be668-2031-4870-9692-0fb444d54277\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1496418458156\",\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate3552/providers/Microsoft.Network/networkInterfaces/vm438-south-vzprsug95v6y-nic/ipConfigurations/ipconfig1496418458156\",\r\n        \"etag\": \"W/\\\"47aee261-4b60-4a88-9910-3170efed1fb4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.1.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate3552/providers/Microsoft.Network/publicIPAddresses/vm438-south-vzprsug95v6y-pip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate3552/providers/Microsoft.Network/virtualNetworks/vm438-south-vzprsug95v6y-vnet/subnets/vm438-south-vzprsug95v6y-snet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"02hcjlkd4wbufe3v13y4xaojcb.ix.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1859', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"47aee261-4b60-4a88-9910-3170efed1fb4"', 'x-ms-request-id' : '6e784751-6b72-4562-8ac6-94b696859651', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14992', 'x-ms-correlation-request-id' : '0730e68f-b181-4229-bb5d-59335d7fad28', 'x-ms-routing-request-id' : 'WESTUS2:20170602T154821Z:0730e68f-b181-4229-bb5d-59335d7fad28', date : 'Fri, 02 Jun 2017 15:48:21 GMT', connection : 'close'}));
return v2;
});
var v2 = (function (){
return ([].indexOf(true, + 0)) === (0);
});
(v1.DATA_VERSION_4_0) = "4.0";
(v2.prototype._userIsMoving) = (function (){
if(! this._attachedCamera){
return false;
}
return ((((((this._attachedCamera.inertialAlphaOffset) !== (0)) || ((this._attachedCamera.inertialBetaOffset) !== (0))) || ((this._attachedCamera.inertialRadiusOffset) !== (0))) || ((this._attachedCamera.inertialPanningX) !== (0))) || ((this._attachedCamera.inertialPanningY) !== (0))) || (this._isPointerDown);
});
for(var v0 in v1){
if(v0.call(v1, v0)){
(v3[v0]) = v1[v0];
}
}
(v2.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v0(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v0(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
var v3 = (function (v1){
(this.body.acceleration.y) = v1;
return this;
});
