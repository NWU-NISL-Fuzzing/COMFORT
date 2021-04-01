// GenBlkBrick
while((v0) < ((v1) - (v2))){
var v0 = (function (v1){
var v2 = v1('http://graph.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).post('/1273adef-00a3-4086-a51a-dbcce1857d36/getObjectsByObjectIds?api-version=1.6', '*').reply(200, "{\"odata.metadata\":\"https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/$metadata#directoryObjects\",\"value\":[{\"odata.type\":\"Microsoft.DirectoryServices.User\",\"objectType\":\"User\",\"objectId\":\"430e10d5-bddf-4899-aa02-7e911ea0b2b2\",\"deletionTimestamp\":null,\"accountEnabled\":false,\"signInNames\":[],\"assignedLicenses\":[],\"assignedPlans\":[],\"city\":null,\"companyName\":null,\"country\":null,\"creationType\":null,\"department\":null,\"dirSyncEnabled\":null,\"displayName\":\"testUserAuto2\",\"facsimileTelephoneNumber\":null,\"givenName\":null,\"immutableId\":null,\"isCompromised\":null,\"jobTitle\":null,\"lastDirSyncTime\":null,\"mail\":null,\"mailNickname\":\"testUserAuto2\",\"mobile\":null,\"onPremisesSecurityIdentifier\":null,\"otherMails\":[],\"passwordPolicies\":null,\"passwordProfile\":null,\"physicalDeliveryOfficeName\":null,\"postalCode\":null,\"preferredLanguage\":null,\"provisionedPlans\":[],\"provisioningErrors\":[],\"proxyAddresses\":[],\"refreshTokensValidFromDateTime\":\"2017-05-18T00:15:23Z\",\"showInAddressList\":null,\"sipProxyAddress\":null,\"state\":null,\"streetAddress\":null,\"surname\":null,\"telephoneNumber\":null,\"usageLocation\":null,\"userPrincipalName\":\"testUserAuto2@rbacCliTest.onmicrosoft.com\",\"userType\":\"Member\"}]}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-type' : 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8', expires : '-1', server : 'Microsoft-IIS/8.5', 'ocp-aad-diagnostics-server-name' : 'pcp0jm/WwewSmUqBBv0xd/+n+TajXbqdNLjn0ETp79w=', 'request-id' : 'c041fc70-2180-4a15-834b-b67229d386e0', 'client-request-id' : 'd50b2276-88ed-4f32-94c7-51ffbfd5002d', 'x-ms-dirapi-data-contract-version' : '1.6', 'ocp-aad-session-key' : 'AybTfvHC_TZtJpHpG86LUDGgenpY-SXshsGVn78JXsbKIQAzsaGRfaR9fGTtps7LpcdwfWJaX1eCrPfBfaMa7Q0AggjtGPKgPIr0p4spZpNBN4NcRZN4LJ6CSX_iFZ5CcsC-HfezlmVnQ6hJHDgtPg.Y2jqd4rWHFK6llbNBGzoOjLaLnPVGtUqJ590XzzzDDc', 'x-content-type-options' : 'nosniff', dataserviceversion : '3.0;', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'access-control-allow-origin' : '*', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET, ASP.NET', duration : '715693', date : 'Thu, 18 May 2017 00:16:42 GMT', connection : 'close', 'content-length' : '1190'}));
return v2;
});
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-10-01').reply(202, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '0', expires : '-1', location : 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operationResults/def7d0e4-674b-414d-aa02-5a783b94e7ad?api-version=2017-10-01', 'retry-after' : '10', 'x-ms-request-id' : 'def7d0e4-674b-414d-aa02-5a783b94e7ad', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/def7d0e4-674b-414d-aa02-5a783b94e7ad?api-version=2017-10-01', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1198', 'x-ms-correlation-request-id' : 'cfdc6e1c-f48e-4632-8aa4-4c1fd0e03e5c', 'x-ms-routing-request-id' : 'WESTEUROPE:20170927T083120Z:cfdc6e1c-f48e-4632-8aa4-4c1fd0e03e5c', date : 'Wed, 27 Sep 2017 08:31:20 GMT', connection : 'close'}));
return v2;
});
}
(v1.prototype.getBuffer) = (function (){
return this._buffer.getBuffer();
});
var v2 = [].some(v0);
// GenBlkBrick
while((--v3) >= (0)){
{
var v4 = 0;
for(var v5 = 0;((v5) + (v3)) < (v3);v5++){
if((v4[(v5) + (v3)].area) > (v4[v5].area)){
var v5 = v4[(v5) + (v3)];
(v4[(v5) + (v3)]) = v4[v5];
(v4[v5]) = v5;
v4++;
}
}
if((v3) == (1)){
if((v4) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
}
(v6) = (v3) ? (v0(v5, v3)) : (('') + (Math.round(v5))).split('.');
var v7 = (function (){
"use strict";
var v1 = ({});
Object.defineProperty(v1, "prop", ({get : (function (){
return 11;
}), set : undefined, enumerable : true, configurable : true}));
try{
(v1.prop) ^= 20;
return false;
}catch(v4){
return ((v4) instanceof (TypeError)) && ((v1.prop) === (11));
}
});
if(v2){
v6.push('margin-top', 'margin-bottom');
}
Object.defineProperty(v0.prototype, "aspectRatioFov", ({get : (function (){
return (2) * (Math.atan(((this.postProcessScaleFactor) * (this.vScreenSize)) / ((2) * (this.eyeToScreenDistance))));
}), enumerable : true, configurable : true}));
