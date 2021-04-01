var v0 = (function (v1, v2, v3){
this.set(1, 0, 0, v1, 0, 1, 0, v2, 0, 0, 1, v3, 0, 0, 0, 1);
return this;
});
(v0.last) = (v0.prev) = (v0.previous) = (function (){
return v0.today().last();
});
var v1 = (function (v1, v2, v3){
for(var v4 = 0, v5 = v1.length;(v4) < (v5);v4++){
v2.apply(v3, []);
}
});
(v1.prototype.remove) = (function (v1){
delete this._entries[v1];
});
// GenBlkBrick
while((--v2) > (0)){
var v3 = (function (v1, v2, v3){
var v4 = v3(177)(v3(120), "Map");
(v1.exports) = v4;
});
}
// GenBlkBrick
for(var v0 in Object){
var v4 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/pstestsvc3212/deploymentslots/Production').reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>pstestsvc3212Prod</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>45f42275c54a4a7d89180be0141ffe9c</PrivateID><Status>Running</Status><Label>cHN0ZXN0c3ZjMzIxMlByb2Q=</Label><Url>http://pstestsvc3212.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJwc3Rlc3RzdmMzMjEyIj4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>pstestsvc3212</RoleName><InstanceName>pstestsvc3212</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Large</InstanceSize><InstanceStateDetails/><IpAddress>100.76.220.22</IpAddress><PowerState>Started</PowerState><HostName>pstestsvc3212</HostName><RemoteAccessCertificateThumbprint>B1CA301EFB63A4960931054AA4F332C942330F2A</RemoteAccessCertificateThumbprint><MaintenanceStatus><IsCustomerInitiatedMaintenanceAllowed>false</IsCustomerInitiatedMaintenanceAllowed><LastOperationResultCode>MaintenanceCompleted</LastOperationResultCode><LastOperationResultString>User initiated maintenance on the Virtual Machine was successfully completed. </LastOperationResultString></MaintenanceStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>pstestsvc3212</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks><DataVirtualHardDisk><HostCaching>ReadOnly</HostCaching><DiskLabel>testDataDiskLabel5</DiskLabel><DiskName>pstestsvc3212Prod-pstestsvc3212-0-201703162112210519</DiskName><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://psteststo6647.blob.core.windows.net/myvhds/pstestsvc32125.vhd</MediaLink><IOType>Standard</IOType></DataVirtualHardDisk></DataVirtualHardDisks><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>pstestsvc3212Prod-pstestsvc3212-0-201703162112200363</DiskName><MediaLink>http://psteststo6647.blob.core.windows.net/myvhds/pstestsvc3212.vhd</MediaLink><SourceImageName>9b7cfe55da0349d5a8316a8cc4741f87__StorSimple-VirtualAppliance-1100-20141209</SourceImageName><OS>Windows</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Large</RoleSize><ProvisionGuestAgent>false</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2017-03-16T21:12:18Z</CreatedTime><LastModifiedTime>2017-03-18T17:41:13Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2017-03-18T14:12:33Z</StartTime><EndTime>2017-03-25T14:12:33Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>52.180.178.221</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>pstestsvc3212.cdm6.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", ({'cache-control' : 'no-cache', 'content-length' : '3526', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth2', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : 'a224d0ac0dcb72a8a03046e28db4f405', date : 'Sat, 18 Mar 2017 17:42:27 GMT', connection : 'close'}));
return v2;
});
}
Array.prototype.reduce.call(v0, v4, v2);
var v5 = (function (v1, v2){
var v3 = v1.x, v4 = v1.y, v5 = v1.z, v6 = v1.w;
var v7 = v2.x, v8 = v2.y, v9 = v2.z, v10 = v2.w;
(this.x) = ((((v3) * (v10)) + ((v6) * (v7))) + ((v4) * (v9))) - ((v5) * (v8));
(this.y) = ((((v4) * (v10)) + ((v6) * (v8))) + ((v5) * (v7))) - ((v3) * (v9));
(this.z) = ((((v5) * (v10)) + ((v6) * (v9))) + ((v3) * (v8))) - ((v4) * (v7));
(this.w) = ((((v6) * (v10)) - ((v3) * (v7))) - ((v4) * (v8))) - ((v5) * (v9));
return this;
});
