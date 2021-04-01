var v0 = (function (v1){
this._setProperty('-webkit-mask-position', v1);
});
var v1 = (function (v1, v2){
if(((v1) === (null)) && ((v2) === (null))){
return 0;
}
if((v1) === (null)){
return - 1;
}
if((v2) === (null)){
return 1;
}
if((v1) < (v2)){
return - 1;
}
if((v1) > (v2)){
return 1;
}
return 0;
});
(v1.prototype.addSelectionInterval) = (function (){
this._buildTree();
v1.prototype.addSelectionInterval.apply(this, arguments);
});
// GenBlkBrick
for(v0 in v1){
function v2(v1, v2){
(this.parent) = v1;
(this.key) = v2;
}
(v1.prototype) = Object.create(v2.prototype);
}
v0(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
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
(v0.default) = v2;
// GenBlkBrick
for(var v3 = 3;(v3) >= (0);v3--){
var v4 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/83b9f405-a959-482f-9ef3-67658cac4460?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : 'b87b013b-1725-410b-a743-07a3b2434d24', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14989', 'x-ms-correlation-request-id' : '94b73d67-59d4-404f-9b39-f814b1d9269b', 'x-ms-routing-request-id' : 'WESTEUROPE:20171002T172442Z:94b73d67-59d4-404f-9b39-f814b1d9269b', date : 'Mon, 02 Oct 2017 17:24:41 GMT', connection : 'close'}));
return v2;
});
}
