var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/83b9f405-a959-482f-9ef3-67658cac4460?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : 'cc675cb1-ee2d-4b25-be99-8d0e18e909e5', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14988', 'x-ms-correlation-request-id' : '3e776fbc-5ba0-4434-980e-c99ec3d988f1', 'x-ms-routing-request-id' : 'WESTEUROPE:20171002T171622Z:3e776fbc-5ba0-4434-980e-c99ec3d988f1', date : 'Mon, 02 Oct 2017 17:16:22 GMT', connection : 'close'}));
return v2;
});
// GenBlkBrick
while((v0) && ((v0) != (v1))){
var v1 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/clitestvm6558/deploymentslots/Production').reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvm6558</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>dfdb904e1d8e4d448eecf0bdbc46e66d</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtNjU1OA==</Label><Url>http://clitestvm6558.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm02NTU4Ij4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvm6558</RoleName><InstanceName>clitestvm6558</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.79.24.46</IpAddress><PowerState>Started</PowerState><HostName>clitestvm6558</HostName><RemoteAccessCertificateThumbprint>75eeacb7d9b7a2c8ea82a7512bd9addc</RemoteAccessCertificateThumbprint><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-06-12T11:01:06Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role clitestvm6558.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvm6558</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvm6558-clitestvm6558-0-201506121051440603</DiskName><MediaLink>https://aaa4junestrgeacct.blob.core.windows.net/vhd-store/clitestvm6558-2b1aa18b9f135224.vhd</MediaLink><SourceImageName>03f55de797f546a1b29d1b8d66be687a__CoreCLR-x64-Beta5-Linux-PartsUnlimited-Demo-App-201504.29</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-06-12T10:51:38Z</CreatedTime><LastModifiedTime>2015-06-12T11:01:05Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2015-04-10T14:58:47Z</StartTime><EndTime>2015-04-14T14:58:47Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>104.210.34.82</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvm6558.d10.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", ({'cache-control' : 'no-cache', 'content-length' : '3153', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'usnorth2', 'x-ms-request-id' : '793a6b90383db85885b20b39e32373fe', date : 'Fri, 12 Jun 2015 11:02:17 GMT', connection : 'close'}));
return v2;
});
}
var v2 = ({thereYet : v1, cap : v0});
// GenBlkBrick
for(var v3 in v0){
(v0.prototype.save) = (function (v1, v2, v3){
var v4 = "tiddlywiki.html", v5 = v6.location.pathname.lastIndexOf("/");
if((v5) !== (- 1)){
(v4) = v6.location.pathname.substr((v5) + (1));
}
var v7 = new v8([], ({type : "text/html"}));
v9.navigator.msSaveBlob(v7, v4);
v3(null);
return true;
});
v0(new RegExp(((v3.substr(0, 1).toUpperCase()) + (v3.substr(1))) + ("$")), (v3.substr(0, 1).toUpperCase()) + (v3.substr(1)));
}
// GenBlkBrick
for(var v4 = 1;(v4) <= (20);v4++){
// GenBlkBrick
for(var v5 = [], v6 = 0;(256) > (v6);v6++){
if((v5[v6]) === ('')){
continue ;
}
}
v5.reduce(v1, v4);
}
(v2[v3]) = (v2[(v3) + ("s")]) = v0(v5[v4]);
(v2[v3]) = ({$not : ({$type : 10})});
// GenBlkBrick
for(var v0 in v0){
Object.defineProperties(v0.prototype, ({stateKey : ({get : (function (){
if(this.stateKeyInvalid){
(this._stateKey) = this.computeStateKey();
(this.stateKeyInvalid) = false;
}
return this._stateKey;
})}), drawInterior : ({get : (function (){
return this._drawInterior;
}), set : (function (v2){
(this._drawInterior) = v2;
(this.stateKeyInvalid) = true;
})}), drawOutline : ({get : (function (){
return this._drawOutline;
}), set : (function (v2){
(this._drawOutline) = v2;
(this.stateKeyInvalid) = true;
})}), enableLighting : ({get : (function (){
return this._enableLighting;
}), set : (function (v2){
(this._enableLighting) = v2;
(this.stateKeyInvalid) = true;
})}), interiorColor : ({get : (function (){
return this._interiorColor;
}), set : (function (v2){
(this._interiorColor) = v2;
(this.stateKeyInvalid) = true;
})}), outlineColor : ({get : (function (){
return this._outlineColor;
}), set : (function (v2){
(this._outlineColor) = v2;
(this.stateKeyInvalid) = true;
})}), outlineWidth : ({get : (function (){
return this._outlineWidth;
}), set : (function (v2){
(this._outlineWidth) = v2;
(this.stateKeyInvalid) = true;
})}), outlineStipplePattern : ({get : (function (){
return this._outlineStipplePattern;
}), set : (function (v2){
(this._outlineStipplePattern) = v2;
(this.stateKeyInvalid) = true;
})}), outlineStippleFactor : ({get : (function (){
return this._outlineStippleFactor;
}), set : (function (v2){
(this._outlineStippleFactor) = v2;
(this.stateKeyInvalid) = true;
})}), imageSource : ({get : (function (){
return this._imageSource;
}), set : (function (v2){
(this._imageSource) = v2;
(this.stateKeyInvalid) = true;
})}), depthTest : ({get : (function (){
return this._depthTest;
}), set : (function (v2){
(this._depthTest) = v2;
(this.stateKeyInvalid) = true;
})}), drawVerticals : ({get : (function (){
return this._drawVerticals;
}), set : (function (v2){
(this._drawVerticals) = v2;
(this.stateKeyInvalid) = true;
})}), applyLighting : ({get : (function (){
return this._applyLighting;
}), set : (function (v2){
(this._applyLighting) = v2;
(this.stateKeyInvalid) = true;
})})}));
}
