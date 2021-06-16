var v0 = (function (v1, v2, v3){
var v4 = v3(2174), v5 = v3(2173), v6 = v3(435), v7 = v3(207);
(v1.exports) = (function (v1){
return (v6(v1)) ? (v4(v7(v1))) : (v5(v1));
});
});
(v0.prototype.detachControl) = (function (v1){
this._leftjoystick.releaseCanvas();
this._rightjoystick.releaseCanvas();
});
var v1 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/services/hostedservices/vjubu4/deploymentslots/Production').reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>vjubu4</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>f91250929be846a283cf5c5acf54c40c</PrivateID><Status>Running</Status><Label>dmp1YnU0</Label><Url>http://vjubu4.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ2anVidTQiPg0KICAgIDxJbnN0YW5jZXMgY291bnQ9IjEiIC8+DQogIDwvUm9sZT4NCjwvU2VydmljZUNvbmZpZ3VyYXRpb24+</Configuration><RoleInstanceList><RoleInstance><RoleName>vjubu4</RoleName><InstanceName>vjubu4</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.90.8.48</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>SSH</Name><Vip>13.82.59.221</Vip><PublicPort>22</PublicPort><LocalPort>22</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState><HostName>vjubu4</HostName><RemoteAccessCertificateThumbprint>d57987f198af96335b4bb90791fcf29f</RemoteAccessCertificateThumbprint><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2016-12-23T05:28:55Z</Timestamp><GuestAgentVersion>WALinuxAgent-2.0.16</GuestAgentVersion><Status>Ready</Status><FormattedMessage><Language>en-US</Language><Message>GuestAgent is running and accepting new configurations.</Message></FormattedMessage></GuestAgentStatus><ResourceExtensionStatusList><ResourceExtensionStatus><HandlerName>Chef.Bootstrap.WindowsAzure.LinuxChefClient</HandlerName><Version>1210.12.106.1000</Version><Status>Ready</Status><ExtensionSettingStatus><Timestamp>2016-12-21T10:24:59Z</Timestamp><Name>Chef Extension Handler</Name><Operation>chef-client-run</Operation><Status>Success</Status><FormattedMessage><Language>en-US</Language><Message>chef-service enabled</Message></FormattedMessage></ExtensionSettingStatus></ResourceExtensionStatus></ResourceExtensionStatusList></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>vjubu4</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>22</LocalPort><Name>SSH</Name><Port>22</Port><Protocol>tcp</Protocol><Vip>13.82.59.221</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><ResourceExtensionReferences><ResourceExtensionReference><ReferenceName>LinuxChefClient</ReferenceName><Publisher>Chef.Bootstrap.WindowsAzure</Publisher><Name>LinuxChefClient</Name><Version>1210.12</Version><ResourceExtensionParameterValues><ResourceExtensionParameterValue><Key>LinuxChefClientPublicConfigParameter</Key><Value>eyJjbGllbnRfcmIiOiJjdXJyZW50X2RpciA9IEZpbGUuZGlybmFtZShfX0ZJTEVfXylcbmxvZ19sZXZlbCAgICAgICAgICAgICAgICA6aW5mb1xubG9nX2xvY2F0aW9uICAgICAgICAgICAgIFNURE9VVFxubm9kZV9uYW1lICAgICAgICAgICAgICAgIFwidmFzdW5kaGFyYWpcIlxuY2xpZW50X2tleSAgICAgICAgICAgICAgIFwiI3tjdXJyZW50X2Rpcn0vdmFzdW5kaGFyYWoucGVtXCJcbnZhbGlkYXRpb25fY2xpZW50X25hbWUgICBcInZhc3VqLXZhbGlkYXRvclwiXG52YWxpZGF0aW9uX2tleSAgICAgICAgICAgXCIje2N1cnJlbnRfZGlyfS92YXN1ai12YWxpZGF0b3IucGVtXCJcbmNoZWZfc2VydmVyX3VybCAgICAgICAgICBcImh0dHBzOi8vYXBpLm9wc2NvZGUuY29tL29yZ2FuaXphdGlvbnMvdmFzdWpcIlxuY29va2Jvb2tfcGF0aCAgICAgICAgICAgIFtcIiN7Y3VycmVudF9kaXJ9Ly4uL2Nvb2tib29rc1wiXVxuIn0=</Value><Type>Public</Type></ResourceExtensionParameterValue></ResourceExtensionParameterValues><State>Enable</State></ResourceExtensionReference></ResourceExtensionReferences><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>vjubu4-vjubu4-0-201612211017450085</DiskName><MediaLink>https://portalvhdstbj405pxlbjwb.blob.core.windows.net/vhds/vjubu4-vjubu4-2016-12-21.vhd</MediaLink><SourceImageName>b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu-14_04_5-LTS-amd64-server-20161213-en-us-30GB</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2016-12-21T10:17:43Z</CreatedTime><LastModifiedTime>2016-12-23T05:29:09Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2016-12-17T05:34:27Z</StartTime><EndTime>2017-12-17T05:34:27Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>13.82.59.221</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>vjubu4ContractContract</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>vjubu4.b10.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", ({'cache-control' : 'no-cache', 'content-length' : '5141', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.468 (rd_rdfe_stable.161212-1209) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : '845a48ee3c643ff294e41191631b4813', date : 'Fri, 23 Dec 2016 05:30:06 GMT'}));
return v2;
});
var v2 = (function (v1, v2){
(this._bosh_options) = v1;
(this._bep) = v2;
(this._sn_state) = ({});
(this._sn_info) = ({length : 0, total : 0});
(this._terminated_streams) = ({});
});
if(v0.now){
(v1.now) = (function v2(){
return v1.clock.now;
});
}
var v3 = (function (){
(this.name) = "Grayscale";
(this.defaultValues) = ({});
(this.valueRanges) = ({});
(this.filter) = (function (v1, v2){
var v3 = v1.width, v4 = v1.height;
var v5 = v1.data;
for(var v6 = 0;(v6) < (v4);v6++){
for(var v7 = 0;(v7) < (v3);v7++){
var v8 = (((v6) * (v3)) + (v7)) * (4);
var v9 = (((v5[v8]) * (0.3)) + ((v5[(v8) + (1)]) * (0.59))) + ((v5[(v8) + (2)]) * (0.11));
(v5[v8]) = (v5[(v8) + (1)]) = (v5[(v8) + (2)]) = v9;
}
}
});
});
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v0(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v3(v1, v1.right);
}else {
break ;
}
}
}
}
});
v3(v2, v1);
