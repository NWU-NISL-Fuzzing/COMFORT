var v0 = (function (){
this.setAndBroadcastState('blank');
this.apiSetTimer('enable', 2000);
(this.is_disabled) = true;
});
// GenBlkBrick
while((v0) == (2046)){
var v1 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt/firewallrules', '*').reply(201, "<ServiceResource xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>AllowAllWindowsAzureIps</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt/firewallrules/AllowAllWindowsAzureIps</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt</ParentLink><StartIPAddress>0.0.0.0</StartIPAddress><EndIPAddress>0.0.0.0</EndIPAddress></ServiceResource>", ({'cache-control' : 'no-store,no-cache', 'content-length' : '620', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth2', 'x-content-type-options' : 'nosniff', 'x-ms-request-id' : '35912ae2d5177d958a35483377c00928', date : 'Fri, 13 Mar 2015 03:48:04 GMT'}));
return v2;
});
var v2 = (function (v1, v2, v3){
var v4 = v3(460), v5 = v3(326);
(v1.exports) = (function (v1){
return (v5(v1)) && (v4(v1));
});
});
}
var v3 = (function (){
return JSON.stringify(this.toJSON());
});
(v1.prototype) = v3.prototype;
var v4 = (function (){
(function (){
debugger;
})();
});
var v5 = (function (v1, v2){
function v3(){
}
(v3.prototype) = v2.prototype;
(v1.superClass_) = v2.prototype;
(v1.prototype) = new v3();
(v1.prototype.constructor) = v1;
});
var v6 = (function (v1, v2, v3){
var v4 = v1("./$"), v5 = v1("./$.def");
v5(v5.S, "String", ({raw : (function (v6){
var v7 = v4.toObject(v6.raw), v8 = v4.toLength(v7.length), v9 = arguments.length, v11 = [], v12 = 0;
while((v8) > (v12)){
v11.push(String(v7[v12++]));
if((v12) < (v9)){
v11.push(String(arguments[v12]));
}
}
return v11.join("");
})}));
});
var v7 = (function (){
return this.getPropertyValue('speak-header');
});
