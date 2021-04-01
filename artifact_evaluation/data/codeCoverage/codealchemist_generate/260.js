// GenBlkBrick
for((v0) = 0;(v0) < ((v1) || ("").length);v0++){
if((v0) === (6)){
break ;
}
var v1 = (function (v1, v2){
(v1.UniformUtils) = ({UniformTypes : [], defaultUniforms : ({uResolution : ({type : "2f", value : []}), uGlobalTime : ({type : "1f", value : 0}), uTimeDelta : ({type : "1f", value : 0}), uBlendColor : ({type : "4f", value : []}), uPixelRatio : ({type : "1f", value : v1.CanvasUtils.pixelRatio})}), validValueForUniformType : (function (v1, v3){
var v4 = ! 1, v5 = (function (v1){
return ! isNaN(v1);
});
switch(v1){
}
return v4;
}), glslDataTypeForUniformType : (function (v1){
var v2;
switch(v1){
}
return v2;
}), fullSwizzleStringForUniformType : (function (v1){
var v2;
switch(v1){
}
return v2;
}), extractValidUniforms : (function (v3){
return ((v3) = (v3) || (({})), v2.reduce(v3, (function (v3, v4, v5){
return ((- 1) == (v1.UniformUtils.UniformTypes.indexOf(v4.type))) ? ((v1.Messaging.logError("Blotter.UniformUtils", "extractValidUniforms", ("uniforms must be one of type: ") + (v1.UniformUtils.UniformTypes.join(", "))), v3)) : ((v1.UniformUtils.validValueForUniformType(v4.type, v4.value)) ? (((v3[v5]) = v2.pick(v4, "type", "value"), v3)) : ((v1.Messaging.logError("Blotter.UniformUtils", "extractValidUniforms", ((("uniform value for ") + (v5)) + (" is incorrect for type: ")) + (v4.type)), v3)));
}), ({})));
}), ensureHasRequiredDefaultUniforms : (function (v2, v3, v4){
if(! v1.UniformUtils.hasRequiredDefaultUniforms(v2)){
return void this.logError(v3, v4, "uniforms object is missing required default uniforms defined in Blotter.UniformUtils.defaultUniforms");
}
}), hasRequiredDefaultUniforms : (function (v3){
return ! v2.difference(v2.allKeys(v1.UniformUtils.defaultUniforms), v2.allKeys(v3)).length;
})});
});
}
var v2 = (function (){
return this.pause_;
});
[].reduce(v2, v0);
var v3 = (function (v1, v2, v3){
return this.getRouter().makePath(v1, v2, v3);
});
// GenBlkBrick
while((v4) !== (0)){
// GenBlkBrick
while((v0) >= (2)){
var v5 = (function (v1){
var v2 = v1('https://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate6150/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2017-03-30', '*').reply(202, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '0', expires : '-1', location : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0deade3b-bfa0-4358-82c3-375df9a8031d?monitor=true&api-version=2017-03-30', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0deade3b-bfa0-4358-82c3-375df9a8031d?api-version=2017-03-30', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594', 'x-ms-request-id' : '0deade3b-bfa0-4358-82c3-375df9a8031d', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1197', 'x-ms-correlation-request-id' : '75c96d08-4c9f-4f21-93c1-aa226b37cd98', 'x-ms-routing-request-id' : 'WESTUS:20170602T143504Z:75c96d08-4c9f-4f21-93c1-aa226b37cd98', date : 'Fri, 02 Jun 2017 14:35:04 GMT', connection : 'close'}));
return v2;
});
Object.defineProperty(v5.prototype, "renderTimeCounter", ({get : (function (){
return this._renderTime;
}), enumerable : true, configurable : true}));
}
while((v4--) > (0)){
v5();
}
}
(v2.formatDijitFormWidget) = v3;
Array.prototype.reduce.call(v2, v1, v0);
(v6) = (v4) ? (v5(v0, v4)) : (('') + (Math.round(v0))).split('.');
