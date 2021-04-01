var v0 = (function (){
return ("dataset-units dataset-bars dataset-") + (this.constants.index);
});
var v1 = (function (){
(this.str) = "";
});
// GenBlkBrick
for(var v2 = 0x21;(v2) <= (0x7E);v2++){
if((v2) < (20)){
break ;
}
}
var v3 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-10-01').reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/virtualNetworksDefaultName' under resource group 'xplat-test-vnet' was not found.\"}}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-failure-cause' : 'gateway', 'x-ms-request-id' : '59729714-c7fc-4953-8bee-292db513d232', 'x-ms-correlation-request-id' : '59729714-c7fc-4953-8bee-292db513d232', 'x-ms-routing-request-id' : 'WESTEUROPE:20170927T083038Z:59729714-c7fc-4953-8bee-292db513d232', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Wed, 27 Sep 2017 08:30:38 GMT', connection : 'close', 'content-length' : '179'}));
return v2;
});
var v4 = (function (v1, v2){
for(var v3 in v2){
var v4 = v2[v3];
(v4.configurable) = (v4.enumerable) = true;
if(("value") in (v4)){
(v4.writable) = true;
}
Object.defineProperty(v1, v3, v4);
}
return v1;
});
function v5(v1, v2, v3, v4){
(v5) = true;
if((v2) !== (v1)){
(v7) = false;
}
(v2) = v2;
return v2;
}
Array.prototype.reduce.call(v1, v5, v2);
var v6 = (function (v1){
var v2 = this._rowArr[v1];
if((v2) != (null)){
var v3 = ({});
for(var v4 = 0;(v4) < (this.getColumnCount());v4++){
(v3[this.getColumnId(v4)]) = v2[v4];
}
if((v2.originalData) != (null)){
for(var v5 in v2.originalData){
if((v3[v5]) == (undefined)){
(v3[v5]) = v2.originalData[v5];
}
}
}
return v3;
}
return ((v2) && (v2.originalData)) ? (v2.originalData) : (null);
});
