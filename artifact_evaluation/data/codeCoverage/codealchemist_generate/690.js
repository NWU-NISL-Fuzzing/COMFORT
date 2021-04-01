var v0 = (function (v1, v2, v3, v4){
(this.element.style.clip) = (((((((('rect(') + ((v4) - (v2))) + ('px ')) + (v3)) + ('px ')) + (v4)) + ('px ')) + ((v3) - (v1))) + ('px)');
});
var v1 = (function (){
var v1 = this.diagram;
if((this.isActive) && ((v1) !== (null))){
var v2 = v1.lastInput.documentPoint;
this.reshape(v2);
(this.transactionResult) = this.name;
}
this.stopTool();
});
(v0.prototype.setText) = (function (v1){
(this.json) = v2.parse(v1);
});
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Storage/storageAccounts/xplateffectiveaccount?api-version=2016-12-01', '*').reply(202, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '0', expires : '-1', location : 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/c39c8e62-81b3-4c5f-a3fc-58d36a11760d?monitor=true&api-version=2016-12-01', 'retry-after' : '17', 'x-ms-ratelimit-remaining-subscription-writes' : '1197', 'x-ms-request-id' : '6eca86ce-61fe-4c2f-9117-e0ce49484a64', server : 'Microsoft-Azure-Storage-Resource-Provider/1.0', 'x-ms-correlation-request-id' : '6eca86ce-61fe-4c2f-9117-e0ce49484a64', 'x-ms-routing-request-id' : 'WESTEUROPE:20170606T074841Z:6eca86ce-61fe-4c2f-9117-e0ce49484a64', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Tue, 06 Jun 2017 07:48:40 GMT', connection : 'close'}));
return v2;
});
var v3 = (function (v1){
var v2 = 0;
var v3 = (v1) && (v1.length);
var v4 = null;
var v5, v6, v7, v8;
if((v3) < (2)){
if((v1[0]) > (0xFF)){
return false;
}
}else {
(v5) = v1[0];
(v6) = v1[1];
if(((v5) === (0xFF)) && ((v6) === (0xFE))){
return true;
}
if(((v5) === (0xFE)) && ((v6) === (0xFF))){
return true;
}
for(;(v2) < (v3);v2++){
if((v1[v2]) === (0x00)){
(v4) = v2;
break ;
}else {
if((v1[v2]) > (0xFF)){
return false;
}
}
}
if((v4) === (null)){
return false;
}
(v7) = v1[(v4) + (1)];
if((((v7) !== (void 0)) && ((v7) > (0x00))) && ((v7) < (0x80))){
return true;
}
(v8) = v1[(v4) - (1)];
if((((v8) !== (void 0)) && ((v8) > (0x00))) && ((v8) < (0x80))){
return true;
}
}
return false;
});
(v0.prototype.insert) = (function (v1, v2){
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
(this._root) = v1(v5);
return v5;
});
(v4) = (function (){
v3();
v1();
});
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v3(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v0(v1, v1.right);
}else {
break ;
}
}
}
}
});
