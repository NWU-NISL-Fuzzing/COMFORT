var v0 = (function (v1){
if((v1) == (null)){
(v1) = this._hasChangesCore();
}
var v2 = this._hasChanges;
(this._hasChanges) = v1;
if((v1) != (v2)){
this.hasChangesChanged.publish(({entityManager : this, hasChanges : v1}));
}
(this._hasChangesAction) = null;
});
var v1 = (function (){
var v1 = ({}), v2 = this.element.attributes;
if(v2['width']){
(v1.width) = v2['width'].value;
}
if(v2['height']){
(v1.height) = v2['height'].value;
}
if(v2['value']){
(v1.value) = v2['value'].value;
}
if(v2['align']){
(v1.align) = v2['align'].value;
}
if((v1) && (v1.source)){
(v1.dataSource) = v1.source;
delete v1.source;
}
return v1;
});
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ef8462e1-c322-4ce4-841a-5608d5d3090f?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : '45f14186-0624-41c6-ad12-c29d15c50161', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14954', 'x-ms-correlation-request-id' : 'aa132a24-2fa6-47fe-96fa-7f548b35cb0d', 'x-ms-routing-request-id' : 'WESTEUROPE:20171003T080751Z:aa132a24-2fa6-47fe-96fa-7f548b35cb0d', date : 'Tue, 03 Oct 2017 08:07:50 GMT', connection : 'close'}));
return v2;
});
(v0.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v1(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v2(v1, v1.right);
}else {
break ;
}
}
}
}
});
(v0.clear) = (function (){
(v1) = [];
});
// GenBlkBrick
for((v3) = 0;(v3) < (16);(v3) = (v3) + (1)){
var v4 = (function (v1, v2, v3){
var v4 = v3(432);
(v1.exports) = (function (v1){
return new v4().update(v1).digest();
});
});
}
(v4.reIndex) = (function (v1, v2, v3){
var v4 = new v4();
for(var v5 in v1._entries){
var v6 = parseInt(v5);
if((v6) >= (v2)){
(v6) += v3;
}
var v8 = v1.get(v5);
(v8.index) = v6;
v4.set(v6, v8);
}
return v4;
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
v0(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v2(v1, v1.right);
}else {
break ;
}
}
}
}
});
