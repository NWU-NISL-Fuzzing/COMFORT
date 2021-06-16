var v0 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).post('/8d57ddbd-c779-40ea-b660-1015f4bf027d/services/WebSpaces/uksouthwebspace/sites', '*').reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ClientAffinityEnabled>true</ClientAffinityEnabled><ClientCertEnabled>false</ClientCertEnabled><CloningInfo i:nil=\"true\"/><ComputeMode i:nil=\"true\"/><ContainerSize>0</ContainerSize><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DailyMemoryTimeQuota>0</DailyMemoryTimeQuota><DefaultHostName>clitests5648.azurewebsites.net</DefaultHostName><DeploymentId>clitests5648</DeploymentId><DomainVerificationIdentifiers i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests5648.azurewebsites.net</a:string><a:string>clitests5648.scm.azurewebsites.net</a:string></EnabledHostNames><FunctionExecutionUnitsCache i:nil=\"true\"/><GatewaySiteName i:nil=\"true\"/><HomeStamp>waws-prod-ln1-003</HomeStamp><HostNameSslStates><HostNameSslState><HostType>Standard</HostType><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests5648.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><HostType>Repository</HostType><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests5648.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests5648.azurewebsites.net</a:string></HostNames><HostNamesDisabled>false</HostNamesDisabled><HostingEnvironment i:nil=\"true\"/><HostingEnvironmentId i:nil=\"true\"/><HostingEnvironmentProfile i:nil=\"true\"/><Kind i:nil=\"true\"/><LastModifiedTimeUtc>2016-11-02T16:39:00.0766667</LastModifiedTimeUtc><MaxNumberOfWorkers i:nil=\"true\"/><MicroService>WebSites</MicroService><Name>clitests5648</Name><OutboundIpAddresses>51.140.180.76,51.140.191.115,51.140.176.159,51.140.176.11,51.140.185.39,51.140.177.87,51.140.185.119,51.140.188.39,51.140.188.241,51.140.183.68,51.140.184.173</OutboundIpAddresses><Owner i:nil=\"true\"/><PremiumAppDeployed i:nil=\"true\"/><RepositorySiteName>clitests5648</RepositorySiteName><Reserved>false</Reserved><ResourceGroup>Default-Web-UKSouth</ResourceGroup><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SKU>Free</SKU><SSLCertificates i:nil=\"true\"/><ScmSiteAlsoStopped>false</ScmSiteAlsoStopped><SelfLink>https://waws-prod-ln1-003.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/uksouthwebspace/sites/clitests5648</SelfLink><ServerFarm>Default1</ServerFarm><ServerFarmId i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteDisabledReason>0</SiteDisabledReason><SiteMode i:nil=\"true\"/><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><SuspendedTill i:nil=\"true\"/><Tags i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><TargetSwapSlot i:nil=\"true\"/><TrafficManagerHostNames i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><UsageState>Normal</UsageState><WebSpace>uksouthwebspace</WebSpace></Site>", ({'cache-control' : 'private', 'content-length' : '3626', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.442 (rd_rdfe_stable.161012-2349) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '0b841878e9d235a2b28f14384598e531', date : 'Wed, 02 Nov 2016 16:39:01 GMT', connection : 'close'}));
return v2;
});
(v0.prototype.replace) = (function v1(v2){
(this.parent[this.key]) = v2;
});
var v1 = (function (){
(this.regPC) += ((! (this.regRC) & (0x0100)) ? ((this.nStepCycles--, ((this.abMem[this.regPC]) << (24)) >> (24))) : (0)) + (1);
});
var v2 = (function (v1, v2, v3){
"never use strict";
(v3.exports) = ({_default : ({text : "", isLine : ! 1})});
});
// GenBlkBrick
while(false){
var v3 = (function (v1, v2, v3){
'use strict';
var v4 = v1('babel-runtime/helpers/extends')['default'];
var v5 = v1('babel-runtime/helpers/interop-require-default')['default'];
(v3.__esModule) = true;
var v6 = v1('classnames');
var v7 = v5(v6);
var v8 = v1('react');
var v9 = v5(v8);
var v10 = v1('./utils/bootstrapUtils');
var v11 = v1('./SafeAnchor');
var v12 = v5(v11);
var v13 = v9['default'].createClass(({displayName : 'Thumbnail', propTypes : ({alt : v9['default'].PropTypes.string, href : v9['default'].PropTypes.string, src : v9['default'].PropTypes.string}), render : (function (){
var v14 = v10.getClassSet(this.props);
if(this.props.href){
return v9['default'].createElement(v12['default'], v4(({}), this.props, ({href : this.props.href, className : v7['default'](this.props.className, v14)})), v9['default'].createElement('img', ({src : this.props.src, alt : this.props.alt})));
}
if(this.props.children){
return v9['default'].createElement('div', v4(({}), this.props, ({className : v7['default'](this.props.className, v14)})), v9['default'].createElement('img', ({src : this.props.src, alt : this.props.alt})), v9['default'].createElement('div', ({className : 'caption'}), this.props.children));
}
return v9['default'].createElement('div', v4(({}), this.props, ({className : v7['default'](this.props.className, v14)})), v9['default'].createElement('img', ({src : this.props.src, alt : this.props.alt})));
})}));
(v3['default']) = v10.bsClass('thumbnail', v13);
(v2.exports) = v3['default'];
});
}
// GenBlkBrick
for(var v0 in Object){
var v4 = (function v4(v1, v2){
if((v2) === ('__proto__')){
if(! v2.call(v1, v2)){
return void 0;
}else {
if(v0){
return v0(v1, v2).value;
}
}
}
return v1[v2];
});
}
(v4.prototype.dispose) = (function (){
if(this._ownsBuffer){
this._buffer.dispose();
}
});
var v5 = Array.prototype.map.call(v3, v4);
