var v0 = (function (v1, v2){
return ((((v1.name) + (": ")) + (v2)) + (((v1.repeated) && ((v2) !== ("array"))) ? ("[]") : (((v1.map) && ((v2) !== ("object"))) ? ((("{k:") + (v1.keyType)) + ("}")) : ("")))) + (" expected");
});
var v1 = (function (v1, v2){
var v3 = (v1.value) - (v2.value);
this.writeWordRegister(v1.address, (v3) & (0xFFFF));
this.writeFlags((v3) < (0), null);
});
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v0(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v1(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
v0(v2, v1);
// GenBlkBrick
for(var v0 in v2){
var v3 = (function (v1){
if(! this._events){
return;
}
return this._events.removeAllListeners.apply(this._events, arguments);
});
var v4 = (function (v1, v2, v3){
var v4 = v3(136);
(v1.exports) = (function (v1){
return ((v1) == (v1)) && (! v4(v1));
});
});
}
var v5 = (function (v1, v2, v3, v4){
var v5, v6 = 1;
for((v5) = 0;(v5) < (v1.length);v5++){
if(((v1[v5].name) === ('')) && (v1[v5].text)){
(v1[v5].name) = ((((((v2) + ('.')) + (v3.split(' ').join(''))) + ('.')) + (v4)) + ('.')) + ((v1[v5].exampleName) || (v6));
v6++;
}
}
});
// GenBlkBrick
for(var v0 in v1.prototype){
(function (){
return (function (v0){
return (function (v0){
});
})();
})();
}
var v6 = (function (v1){
var v2 = v1('https://management.azure.com:443').filteringPath((function (v3){
return v3.slice(0, v3.indexOf('&'));
})).get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/providers/microsoft.insights/eventtypes/management/values?api-version=2015-04-01').reply(200, "{\"value\":[{\"caller\":\"Microsoft.Insights/autoscaleSettings\",\"correlationId\":\"da3210d1-3abc-48bd-99ea-abb4ece57ef7\",\"eventSource\":{\"value\":\"microsoft.insights/autoscalesettings\",\"localizedValue\":\"Microsoft Insights Autoscale Settings\"},\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-brazilsouth/providers/microsoft.web/serverFarms/Default1/events/6d72235b-b784-4868-adb6-759ee15cf09c/ticks/635651610016491590\",\"resourceGroupName\":\"Default-Web-brazilsouth\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-brazilsouth/providers/microsoft.web/serverFarms/Default1\",\"operationName\":{\"value\":\"ScaleUp\",\"localizedValue\":\"Scale up\"},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":null},\"eventTimestamp\":\"2015-04-20T21:10:01.649159Z\",\"subscriptionId\":\"b67f7fec-69fc-4974-9099-a26bd6ffeda3\"},{\"caller\":\"Microsoft.Insights/autoscaleSettings\",\"correlationId\":\"da3210d1-3abc-48bd-99ea-abb4ece57ef7\",\"eventSource\":{\"value\":\"microsoft.insights/autoscalesettings\",\"localizedValue\":\"Microsoft Insights Autoscale Settings\"},\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/runnerGroup/providers/microsoft.insights/autoscalesettings/AuxInsightsRunnerSetting_West+US/events/f15dd979-f166-489b-83e8-76416f25f77a/ticks/635651610016491590\",\"resourceGroupName\":\"runnerGroup\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/runnerGroup/providers/microsoft.insights/autoscalesettings/AuxInsightsRunnerSetting_West US\",\"operationName\":{\"value\":\"ScaleUp\",\"localizedValue\":\"Scale up\"},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":null},\"eventTimestamp\":\"2015-04-20T21:10:01.649159Z\",\"subscriptionId\":\"b67f7fec-69fc-4974-9099-a26bd6ffeda3\"}]}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1823', 'content-type' : 'application/json; charset=utf-8', expires : '-1', vary : 'Accept-Encoding', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : 'WestUS_74114c1b6df64259b27d28a0044c64fd_635651645296874886', server : 'Microsoft-IIS/8.5', 'x-ms-ratelimit-remaining-subscription-reads' : '31837', 'x-ms-correlation-request-id' : '0c3477f8-b834-4b74-9a42-b75a684fa5ed', 'x-ms-routing-request-id' : 'WESTUS:20150420T220849Z:0c3477f8-b834-4b74-9a42-b75a684fa5ed', date : 'Mon, 20 Apr 2015 22:08:48 GMT', connection : 'close'}));
return v2;
});
