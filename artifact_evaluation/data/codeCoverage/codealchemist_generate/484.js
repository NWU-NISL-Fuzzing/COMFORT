var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').delete('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource4629?api-version=2016-09-01').reply(202, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', expires : '-1', location : 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNDYyOS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01', 'retry-after' : '15', 'x-ms-ratelimit-remaining-subscription-writes' : '1199', 'x-ms-request-id' : '6e8a8a8f-74d4-41d2-8915-d0b8cf12ac13', 'x-ms-correlation-request-id' : '6e8a8a8f-74d4-41d2-8915-d0b8cf12ac13', 'x-ms-routing-request-id' : 'WESTUS:20161207T032015Z:6e8a8a8f-74d4-41d2-8915-d0b8cf12ac13', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Wed, 07 Dec 2016 03:20:14 GMT', connection : 'close', 'content-length' : '0'}));
return v2;
});
(v0.TWEEN_EASING) = "tweenEasing";
var v1 = (function (){
return (this.__children) && ((this.__children.length) > (0));
});
if(v1.toSource){
(v0.toSource) = (function v2(){
return v1.toSource();
});
}
(v1.formatDijitFormWidget) = v0;
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v1(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v0(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
// GenBlkBrick
for(var v0 in v1.prototype){
var v3 = (function (v1, v2, v3){
var v4 = v3(267).Symbol;
(v1.exports) = v4;
});
var v4 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v3, save : v3, init : v1, shutdown : v1, getAuthUrl : v3, revokeToken : v3});
}
(v4.filePickerButton) = "Embed a file stored in CryptDrive";
