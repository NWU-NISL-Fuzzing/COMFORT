// GenBlkBrick
for(var v0 = 0;(v0) < (256);v0++){
{
var v1 = 0;
for(var v2 = 0;((v2) + (v0)) < (v3);v2++){
if((v4[(v2) + (v0)].area) > (v4[v2].area)){
var v5 = v4[(v2) + (v0)];
(v4[(v2) + (v0)]) = v4[v2];
(v4[v2]) = v5;
v1++;
}
}
if((v0) == (1)){
if((v1) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
}
var v3 = Math.floor((v1) / (1000));
var v4 = (function (v1){
var v2 = v1('https://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*').reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"http\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", ({'cache-control' : 'private', 'content-length' : '553', 'content-type' : 'application/json; charset=utf-8', 'x-content-type-options' : 'nosniff', 'x-ms-request-id' : '154d4b9f-4e56-48fb-94e6-b0711955436b', server : 'Microsoft-IIS/7.5', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-ratelimit-remaining-subscription-resource-requests' : '10799', 'x-ms-correlation-request-id' : '16540b5e-f072-4397-a34d-cba1a0ab4c5d', 'x-ms-routing-request-id' : 'SOUTHEASTASIA:20150521T083150Z:16540b5e-f072-4397-a34d-cba1a0ab4c5d', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Thu, 21 May 2015 08:31:50 GMT', connection : 'close'}));
return v2;
});
(v4.prototype.getInstanceDivisor) = (function (){
return this._buffer.instanceDivisor;
});
while((v1) < (0x100)){
if((v1) & (v1)){
v0++;
}
(v1) <<= 1;
}
(v5) = v4(v2, v3, v2);
{
var v6 = (v1) >>> (v3);
if((v6) < (0)){
v2++;
}
}
// GenBlkBrick
for(((v0) = v1, (v2) = v3);(v0) < (v2);(v0) += v4){
var v7 = ({prop1 : 0.1});
}
