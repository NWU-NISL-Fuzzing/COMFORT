var v0 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_";
while(v0){
if(((v0) % (2)) === (1)){
(v0) += v2;
}
if((v0) > (1)){
(v2) += v2;
}
(v0) >>= 1;
}
var v1 = (function (v1){
var v2 = v1('https://graph.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).post('/1273adef-00a3-4086-a51a-dbcce1857d36/getObjectsByObjectIds?api-version=1.6', '*').reply(200, "{\"odata.metadata\":\"https://graph.windows.net/1273adef-00a3-4086-a51a-dbcce1857d36/$metadata#directoryObjects\",\"value\":[{\"odata.type\":\"Microsoft.DirectoryServices.User\",\"objectType\":\"User\",\"objectId\":\"430e10d5-bddf-4899-aa02-7e911ea0b2b2\",\"deletionTimestamp\":null,\"accountEnabled\":false,\"signInNames\":[],\"assignedLicenses\":[],\"assignedPlans\":[],\"city\":null,\"companyName\":null,\"country\":null,\"creationType\":null,\"department\":null,\"dirSyncEnabled\":null,\"displayName\":\"testUserAuto2\",\"facsimileTelephoneNumber\":null,\"givenName\":null,\"immutableId\":null,\"isCompromised\":null,\"jobTitle\":null,\"lastDirSyncTime\":null,\"mail\":null,\"mailNickname\":\"testUserAuto2\",\"mobile\":null,\"onPremisesSecurityIdentifier\":null,\"otherMails\":[],\"passwordPolicies\":null,\"passwordProfile\":null,\"physicalDeliveryOfficeName\":null,\"postalCode\":null,\"preferredLanguage\":null,\"provisionedPlans\":[],\"provisioningErrors\":[],\"proxyAddresses\":[],\"refreshTokensValidFromDateTime\":\"2017-05-18T00:15:23Z\",\"showInAddressList\":null,\"sipProxyAddress\":null,\"state\":null,\"streetAddress\":null,\"surname\":null,\"telephoneNumber\":null,\"usageLocation\":null,\"userPrincipalName\":\"testUserAuto2@rbacCliTest.onmicrosoft.com\",\"userType\":\"Member\"}]}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-type' : 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8', expires : '-1', server : 'Microsoft-IIS/8.5', 'ocp-aad-diagnostics-server-name' : 'NhmNzC7xYSG6p1RBfBqgeSEzxdFtwIuKLO06kq/4oCk=', 'request-id' : 'fa39a32d-f44e-4298-9864-8f5d050cd2b4', 'client-request-id' : 'b9c55a01-a4be-4454-8cf3-568689ae9689', 'x-ms-dirapi-data-contract-version' : '1.6', 'ocp-aad-session-key' : '0tJvZUMLGeLqLjNF4jvmZwWzwOm50Mf6CBLxpVU8CqPZtTzyN3Z7ANFmtjrV7IoeyZw3sZU_Jq39-NeHN_KvGuUA19iTi6iJqWkmOXTNJr9VVdyOYKi5JhlDCqLroZyS7Wm16Y6IKcQETOnZCyd5EA.QnX991HelXJR1-Y8jt9hV2jkcE4CP-9ULJn9tg3oSmM', 'x-content-type-options' : 'nosniff', dataserviceversion : '3.0;', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'access-control-allow-origin' : '*', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET, ASP.NET', duration : '753112', date : 'Thu, 18 May 2017 00:16:43 GMT', connection : 'close', 'content-length' : '1190'}));
return v2;
});
// GenBlkBrick
for(var v2 = 10;(v2) < (14);v2++){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
{
var v5 = 0;
for(var v6 = 0;((v6) + (v2)) < (v3);v6++){
if((v4[(v6) + (v2)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v2)];
(v4[(v6) + (v2)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v2) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
if((v4) >= (Math.pow(16, v3))){
var v3 = Math.floor((v4) / (Math.pow(16, v3)));
(v4) -= (v3) * (Math.pow(16, v3));
if((v3) >= (10)){
if((v3) == (10)){
(v0) += "A";
}
if((v3) == (11)){
(v0) += "B";
}
if((v3) == (12)){
(v0) += "C";
}
if((v3) == (13)){
(v0) += "D";
}
if((v3) == (14)){
(v0) += "E";
}
if((v3) == (15)){
(v0) += "F";
}
}else {
(v0) += String(v3);
}
}else {
(v0) += "0";
}
// GenBlkBrick
for(var v7 = 0;(v7) < (12);v7++){
if((! v0) || ((v0) < (Math.abs(v2)))){
(v0) = v2;
(v8) = (v7) / (4);
}else {
(v8) = ((v7) / ((2) * (Math.PI))) * (Math.asin((v2) / (v0)));
}
}
// GenBlkBrick
while((v0) && ((v0) = v0.$parent)){
var v9 = (function (){
return this.getZoomForResolution(this.minResolution_);
});
Object.defineProperty(v9, "FILTER_BLURVARIANCESHADOWMAP", ({get : (function (){
return v9._FILTER_BLURVARIANCESHADOWMAP;
}), enumerable : true, configurable : true}));
}
{
if((v0) === ("prop1")){
v6++;
}
if((v0) === ("prop2")){
v5++;
}
if((v0) === ("prop3")){
v3++;
}
}
