var v0 = ({length : 0});
var v1 = (function (){
return ((this.constant) *= - 1, this.normal.negate(), this);
});
var v2 = (function (v1){
var v2 = v1.t1;
var v3 = v1.t2;
var v4 = v1.duration;
var v5 = v1.prop;
var v6 = v1.from;
var v7 = v1.to;
this.set('0.000%', v5, v6);
if((v2) < (v4)){
this.set((((v2) / (v4)) * (100).toFixed(3)) + ("%"), v5, v6);
}
if((v3) < (v4)){
this.set((((v3) / (v4)) * (100).toFixed(3)) + ("%"), v5, v7);
}
this.set('100.000%', v5, v7);
});
(v0.Controller) = v2;
function v3(v1, v2, v3, v4, v5){
return v2(v1(v1, v2, v3, v4), v5);
}
var v4 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/ServiceBus/Namespaces/nodesdk-2').reply(200, "<entry xmlns=\"http://www.w3.org/2005/Atom\"><id>uuid:6ae65aa2-5867-43a3-904c-80a0be3bf0a4;id=3002273</id><title type=\"text\">nodesdk-2</title><updated>2013-03-19T20:15:00Z</updated><content type=\"application/xml\"><NamespaceDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>nodesdk-2</Name><Region>West US</Region><Status>Activating</Status><CreatedAt>2013-03-19T20:15:00.137Z</CreatedAt><AcsManagementEndpoint>https://nodesdk-2-sb.accesscontrol.windows.net/</AcsManagementEndpoint><ServiceBusEndpoint>https://nodesdk-2.servicebus.windows.net/</ServiceBusEndpoint><SubscriptionId>279b0675cf67467f98f067ae31eb540f</SubscriptionId><Enabled>true</Enabled></NamespaceDescription></content></entry>", ({'cache-control' : 'no-cache', 'content-length' : '786', 'content-type' : 'application/atom+xml; type=entry; charset=utf-8', server : '33.0.6198.18 (rd_rdfe_stable.130314-1521) Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : 'ac712c9c03d14eefa96dbc2b218f4818', date : 'Tue, 19 Mar 2013 20:15:02 GMT'}));
return v2;
});
// GenBlkBrick
for(var v5 = 0;(v5) < (1000);v5++){
(v5) |= ((v5) >> (8)) & (16777215);
}
(v0.property140) = 140;
