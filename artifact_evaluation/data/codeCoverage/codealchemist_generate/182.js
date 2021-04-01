var v0 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/xDeploymentTestGroup355-WestUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '8f934230f69600cb84db1445a3000b92', date : 'Tue, 02 Aug 2016 21:09:55 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2016-WS2012R2/skus/Enterprise/versions/13.5.31640?api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"13.5.31640\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2012R2/Skus/Enterprise/Versions/13.5.31640\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '405', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : 'e2eae5e1-bf42-44c9-a51e-ab3dd34a70a8', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14871', 'x-ms-correlation-request-id' : '3cb6e0bc-de8b-4114-bf17-e937b6838e18', 'x-ms-routing-request-id' : 'WESTUS:20170602T151923Z:3cb6e0bc-de8b-4114-bf17-e937b6838e18', date : 'Fri, 02 Jun 2017 15:19:23 GMT', connection : 'close'}));
return v2;
});
var v2 = ({thereYet : v1, cap : v0});
var v3 = (function (v1, v2){
var v3 = v1.match(/^tag::(.*)$/i);
if(v3){
(v2.tags[v3[1]]) = v0(v2);
v2.tagInit();
return;
}
(v2.options[v1]) = v2;
});
(v0.prototype) = ((v1) === (null)) ? (Object.create(v1)) : (((v3.prototype) = v1.prototype, new v3()));
v3(/([ti])um$/i, "$1um");
v3(v0, v1);
(v2.poll_p_save) = "Your settings are updated instantly, so you never need to save.";
