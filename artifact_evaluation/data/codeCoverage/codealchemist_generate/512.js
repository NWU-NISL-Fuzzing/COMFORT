var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("6c9fd1703b5fc9804ce9a3e5a9b0c72d.svg");
});
var v1 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/875dd2a1-5a1a-48d0-9ed8-4d802098f332?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '29', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : 'b269bbfd-5e43-44bc-b096-fceb0ac8724a', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14996', 'x-ms-correlation-request-id' : '75b0c3ac-92ab-4c12-8af7-ff1ad9503ec8', 'x-ms-routing-request-id' : 'WESTEUROPE:20170927T080604Z:75b0c3ac-92ab-4c12-8af7-ff1ad9503ec8', date : 'Wed, 27 Sep 2017 08:06:04 GMT', connection : 'close'}));
return v2;
});
var v2 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v1, save : v1, init : v0, shutdown : v0, getAuthUrl : v1, revokeToken : v1});
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : true}));
var v3 = (function (v1){
return (function (){
return arguments;
}).apply(undefined, v1);
});
var v4 = (function (v1){
return ((typeof v1) === ("function")) ? ((v1.constructor.toString().match(/regexp/i)) !== (null)) : (false);
});
Object.defineProperty(v2, "prop", ({get : v1, set : v4, enumerable : true, configurable : true}));
var v5 = (function v5(v1){
if((! v1) || ((v0.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v4.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v4.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v4.call(v1, v6));
});
