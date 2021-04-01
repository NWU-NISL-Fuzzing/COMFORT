var v0 = true, v1;
var v1 = (function (v1, v2, v3){
(v1.exports) = ({default : v3(1683), __esModule : ! 0});
});
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/705ba60a-a831-493d-a389-69a2e9c07296?api-version=2015-05-01-preview').reply(200, "{\r\n  \"operationId\": \"705ba60a-a831-493d-a389-69a2e9c07296\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-04-27T14:48:10.0435125+00:00\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '141', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : '7f53d8ad-5c9f-4b86-ac50-921bde41a4ed', server : 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '31985', 'x-ms-correlation-request-id' : 'b05aa73e-b4a1-46b1-b5d2-156779029de3', 'x-ms-routing-request-id' : 'EASTASIA:20150427T145838Z:b05aa73e-b4a1-46b1-b5d2-156779029de3', date : 'Mon, 27 Apr 2015 14:58:38 GMT', connection : 'close'}));
return v2;
});
function v3(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v1(v3);
(v4) += v2(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
var v4 = (function v4(v1, v2){
if((v2) === ('__proto__')){
if(! v2.call(v1, v2)){
return void 0;
}else {
if(v1){
return v1(v1, v2).value;
}
}
}
return v1[v2];
});
if(v4.now){
(v3.now) = (function v2(){
return v3.clock.now;
});
}
var v5 = (function (v1){
this._setProperty('-webkit-highlight', v1);
});
(v2.DATASOURCE_UNKNOWN) = 0;
