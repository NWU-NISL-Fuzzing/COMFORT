var v0 = (function (v1){
return this._views.indexOf(v1);
});
var v1 = (function (v1, v2){
(v1.Assets.Shaders.Noise3D) = [].join("\n");
});
var v2 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v1, save : v1, init : v0, shutdown : v0, getAuthUrl : v1, revokeToken : v1});
if(((v0) - (v1)) > (0)){
(v2.thereYet) = v0;
(v2.cap) = v1;
}
Object.defineProperty(v2, "set", ({get : (function (){
return v1;
})}));
// GenBlkBrick
for(var v3 = 0;(v3) < (v1);(v3) += 3){
var v4 = (function (v1){
var v2 = v1('https://management.azure.com:443').delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatTestGrpShow5502?api-version=2016-09-01').reply(202, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', expires : '-1', location : 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHUlBTSE9XNTUwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01', 'retry-after' : '15', 'x-ms-ratelimit-remaining-subscription-writes' : '1198', 'x-ms-request-id' : 'acfc133f-037e-47e2-9db3-e81b834c4585', 'x-ms-correlation-request-id' : 'acfc133f-037e-47e2-9db3-e81b834c4585', 'x-ms-routing-request-id' : 'WESTUS:20160421T032811Z:acfc133f-037e-47e2-9db3-e81b834c4585', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Thu, 21 Apr 2016 03:28:11 GMT', connection : 'close', 'content-length' : '0'}));
return v2;
});
}
Object.defineProperty(v2, 30, ({}));
// GenBlkBrick
for((v5) = 0;(v5) < (100);v5++){
(v1.IK) = "ik";
{
var v6 = 0;
for(var v7 = 0;((v7) + (v5)) < (v3);v7++){
if((v4[(v7) + (v5)].area) > (v4[v7].area)){
var v5 = v4[(v7) + (v5)];
(v4[(v7) + (v5)]) = v4[v7];
(v4[v7]) = v5;
v6++;
}
}
if((v5) == (1)){
if((v6) == (0)){
break ;
}
}else {
(v5) = Math.floor(((v5) * (10)) / (13));
}
}
}
