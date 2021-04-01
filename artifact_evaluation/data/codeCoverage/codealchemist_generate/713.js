var v0 = 22;
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/microsoft.network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*').reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns\",\"fqdn\":\"xplattmpendptdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"http\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", ({'cache-control' : 'private', 'content-length' : '553', 'content-type' : 'application/json; charset=utf-8', 'x-content-type-options' : 'nosniff', 'x-ms-request-id' : '154d4b9f-4e56-48fb-94e6-b0711955436b', server : 'Microsoft-IIS/7.5', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-ratelimit-remaining-subscription-resource-requests' : '10799', 'x-ms-correlation-request-id' : '16540b5e-f072-4397-a34d-cba1a0ab4c5d', 'x-ms-routing-request-id' : 'SOUTHEASTASIA:20150521T083150Z:16540b5e-f072-4397-a34d-cba1a0ab4c5d', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Thu, 21 May 2015 08:31:50 GMT', connection : 'close'}));
return v2;
});
while((v0--) > (0)){
v1();
}
var v2 = (function (){
(this.instanceProps) = ({});
(this.instanceProps.current_step_id) = "1";
(this.instanceProps.fuel_level) = "0";
});
var v3 = (function (v1, v2, v3){
var v4 = v3(24).parseFloat, v5 = v3(221).trim;
(v1.exports) = (((1) / (v4((v3(510)) + ("-0")))) != ((- 1) / (0))) ? ((function (v1){
var v2 = v5(String(v1), 3), v3 = v4(v2);
return (((0) === (v3)) && (("-") == (v2.charAt(0)))) ? (- 0) : (v3);
})) : (v4);
});
(v2.UTC) = v3.UTC;
(v2.prototype) = Object.create(v1.prototype);
var v4 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v1, v0);
});
