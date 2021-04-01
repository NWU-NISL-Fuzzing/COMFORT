var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/ef8462e1-c322-4ce4-841a-5608d5d3090f?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : '6f1c0eeb-7037-4919-9288-c480933ea0e5', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14991', 'x-ms-correlation-request-id' : '7540bdf9-3974-4720-b149-5a280c61a286', 'x-ms-routing-request-id' : 'WESTEUROPE:20171003T080440Z:7540bdf9-3974-4720-b149-5a280c61a286', date : 'Tue, 03 Oct 2017 08:04:39 GMT', connection : 'close'}));
return v2;
});
(v0.prototype.removePass) = (function (v1){
delete this._renderPasses[v1._name];
this._linkParameters();
});
(v0.BLUE_MULTIPLIER) = "bM";
Object.defineProperty(v0, "MatricesWeightsExtraKind", ({get : (function (){
return v0._MatricesWeightsExtraKind;
}), enumerable : true, configurable : true}));
(v0.BindLights) = (function (v1, v2, v3, v4, v5){
if((v5) === (void 0)){
(v5) = 4;
}
var v6 = 0;
var v7 = false;
for(var v8 = 0;(v8) < (v1.lights.length);v8++){
var v9 = v1.lights[v8];
if(! v9.isEnabled()){
continue ;
}
if(! v9.canAffectMesh(v2)){
continue ;
}
v0.BindLightProperties(v9, v3, v6);
v9.diffuse.scaleToRef(v9.intensity, v10.Tmp.Color3[0]);
v3.setColor4(("vLightDiffuse") + (v6), v10.Tmp.Color3[0], v9.range);
if(v4["SPECULARTERM"]){
v9.specular.scaleToRef(v9.intensity, v10.Tmp.Color3[1]);
v3.setColor3(("vLightSpecular") + (v6), v10.Tmp.Color3[1]);
}
if(v1.shadowsEnabled){
(v7) = this.BindLightShadow(v9, v1, v2, v6, v3, v7);
}
v6++;
if((v6) === (v5)){
break ;
}
}
});
var v1 = (function (v1, v2, v3){
"use strict";
(v1.exports) = ({isIos : v3(207), isIosWKWebview : v3(1988), supportsPopups : v3(440)});
});
(v1.toString) = (function v1(){
return v0.toString();
});
if(v1.now){
(v0.now) = (function v2(){
return v0.clock.now;
});
}
