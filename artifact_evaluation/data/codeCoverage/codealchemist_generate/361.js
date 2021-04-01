var v0 = (function (v1, v2){
if(! this._events){
return;
}
return this._events.removeListener.apply(this._events, arguments);
});
(v0.wasCalled) = false;
var v1 = v0(v2), v2 = (v2) - (v1);
(v0.prototype._detachCameras) = (function (v1){
var v2 = v3.Tools.MakeArray((v1) || (this._cameras));
if(! v2){
return;
}
for(var v4 = 0;(v4) < (v2.length);v4++){
var v5 = v2[v4];
var v6 = v5.name;
v5.detachPostProcess(this._postProcesses[(this._singleInstance) ? (0) : (v6)]);
if(this._cameras[v6]){
(this._cameras[v6]) = null;
}
for(var v7 in this._renderPasses){
this._renderPasses[v7]._decRefCount();
}
}
});
var v3 = (function (){
this.run();
});
var v4 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).post('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/westuswebspace/sites', '*').reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ClientAffinityEnabled>true</ClientAffinityEnabled><ClientCertEnabled>false</ClientCertEnabled><CloningInfo i:nil=\"true\"/><ComputeMode i:nil=\"true\"/><ContainerSize>0</ContainerSize><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DefaultHostName>utr357.azurewebsites.net</DefaultHostName><DeploymentId>utr357</DeploymentId><DomainVerificationIdentifiers i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>utr357.azurewebsites.net</a:string><a:string>utr357.scm.azurewebsites.net</a:string></EnabledHostNames><GatewaySiteName i:nil=\"true\"/><HomeStamp>waws-prod-bay-061</HomeStamp><HostNameSslStates><HostNameSslState><HostType>Standard</HostType><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>utr357.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><HostType>Repository</HostType><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>utr357.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>utr357.azurewebsites.net</a:string></HostNames><HostNamesDisabled>false</HostNamesDisabled><HostingEnvironment i:nil=\"true\"/><HostingEnvironmentId i:nil=\"true\"/><HostingEnvironmentProfile i:nil=\"true\"/><Kind i:nil=\"true\"/><LastModifiedTimeUtc>2016-08-02T19:57:25.06</LastModifiedTimeUtc><MaxNumberOfWorkers i:nil=\"true\"/><MicroService>WebSites</MicroService><Name>utr357</Name><OutboundIpAddresses>40.118.255.137,40.118.255.231,40.118.250.218,40.118.252.35</OutboundIpAddresses><Owner i:nil=\"true\"/><PremiumAppDeployed i:nil=\"true\"/><RepositorySiteName>utr357</RepositorySiteName><Reserved i:nil=\"true\"/><ResourceGroup>Default-Web-WestUS</ResourceGroup><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SKU>Free</SKU><SSLCertificates i:nil=\"true\"/><ScmSiteAlsoStopped>false</ScmSiteAlsoStopped><SelfLink>https://waws-prod-bay-061.api.azurewebsites.windows.net:454/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/webspaces/westuswebspace/sites/utr357</SelfLink><ServerFarm>Default1</ServerFarm><ServerFarmId i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode i:nil=\"true\"/><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><Tags i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><TargetSwapSlot i:nil=\"true\"/><TrafficManagerHostNames i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site>", ({'cache-control' : 'private', 'content-length' : '3296', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '8e60c23a780d0b77a8d7bc1d8000f531', date : 'Tue, 02 Aug 2016 19:57:26 GMT', connection : 'close'}));
return v2;
});
if((((v0) >>> (v2)) & (1)) != (0)){
v1++;
}
(v5) = (v2) ? (v0(v1, v2)) : (('') + (Math.round(v1))).split('.');
