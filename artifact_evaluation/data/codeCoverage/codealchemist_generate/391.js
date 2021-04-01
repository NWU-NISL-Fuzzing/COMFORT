var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/effectiveNetworkSecurityGroups?api-version=2017-10-01').reply(200, "{\r\n  \"value\": []\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '19', 'content-type' : 'application/json; charset=utf-8', expires : '-1', location : 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operationResults/b8cb070b-7153-4265-ab19-f9059c8c31de?api-version=2017-10-01', 'x-ms-request-id' : 'b8cb070b-7153-4265-ab19-f9059c8c31de', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1195', 'x-ms-correlation-request-id' : 'c938db20-0011-42d2-aeb5-51e1d3ff1c6f', 'x-ms-routing-request-id' : 'WESTEUROPE:20170606T075133Z:c938db20-0011-42d2-aeb5-51e1d3ff1c6f', date : 'Tue, 06 Jun 2017 07:51:32 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1, v2, v3){
"use strict";
(v1.exports) = v3(5366);
});
var v2 = (function (v1){
var v2 = v1('backbone');
var v3 = v1('core/models/configModel');
var v4 = v2.Collection.extend(({model : v3, url : 'api/content/config'}));
return v4;
});
(v1.prototype._getProperty) = (function (v1){
return this._actionManager._getProperty(v1);
});
v2(v0, v1);
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v0(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v1(v3)[1]) : (v1(v3)[0]));
}else {
if(v4){
return (v5) + (v1(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v1(v3)[1]) : (v1(v3)[2]));
}
}
}
}
var v4 = (function (v1, v2, v3){
var v4 = v1('./_is-object'), v5 = v1('./_meta').onFreeze;
v1('./_object-sap')('freeze', (function (v6){
return (function (v7){
return ((v6) && (v4(v7))) ? (v6(v5(v7))) : (v7);
});
}));
});
(v4.prototype.removeNode) = (function (v1){
this.shiftDown(v1);
var v2 = v1.parent;
if((v2.left) === (v1)){
(v2.left) = v3;
}else {
if((v2.right) === (v1)){
(v2.right) = v3;
}
}
this.removeLeafNode(v1);
(this._root) = v1(v2);
return v1;
});
