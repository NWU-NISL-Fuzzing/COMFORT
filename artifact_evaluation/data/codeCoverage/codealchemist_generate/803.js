var v0 = (function (){
return 13;
});
// GenBlkBrick
for(var v1 = [], v2 = 0;(v2) < (256);v2++){
(v1[v2]) = "grue";
}
for(var v3 = 0;(v3) <= (v2);v3++){
(v8) = (v3) / (v2);
(v9) = v0(v5, v6, v8);
(v10) = v0(v8, v9, v8);
(v4) = v0(v6, v11, v8);
(v5) = v0(v9, v13, v8);
(v6) = v0(v9, v4, v8);
(v7) = v0(v10, v5, v8);
v1.push(v6, v7);
}
// GenBlkBrick
for(var v11 = 1;(v11) < (2);++v11){
var v12 = (function (v1){
var v2 = v1('https://ciserversb-sb.accesscontrol.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).post('/WRAPv0.9/', '*').reply(200, "wrap_access_token=net.windows.servicebus.action%3dListen%252cManage%252cSend%26http%253a%252f%252fschemas.microsoft.com%252faccesscontrolservice%252f2010%252f07%252fclaims%252fidentityprovider%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26Audience%3dhttp%253a%252f%252fciserversb.servicebus.windows.net%252fxplathubnxt7%252fregistrations%253fapi-version%253d2013-07%26ExpiresOn%3d1370295287%26Issuer%3dhttps%253a%252f%252fciserversb-sb.accesscontrol.windows.net%252f%26HMACSHA256%3dpCPrbHgUAPTs%252beGXq6itFeTTsI%252biqEm4jgC4qcRMzNs%253d&wrap_access_token_expires_in=1199", ({'cache-control' : 'no-cache, no-store', pragma : 'no-cache', 'content-type' : 'application/x-www-form-urlencoded; charset=us-ascii', expires : '-1', 'request-id' : 'f641706c-5027-4f3f-bef7-bd0f01f31a67', 'x-content-type-options' : 'nosniff', date : 'Mon, 03 Jun 2013 21:14:47 GMT', 'content-length' : '595'}));
return v2;
});
var v13 = (v11) * (v2);
}
var v14 = ({valueOf : (function (){
(v1[4]) = v0;
return 11;
})});
if((v6) === (1)){
(v15) = (v9) === (0);
}
Object.defineProperty(v14, "prop", ({get : v12, set : v0, enumerable : false, configurable : true}));
Object.defineProperty(v1, "1", ({get : (function (){
if(v15){
return 1;
}else {
return 100;
}
}), configurable : true}));
