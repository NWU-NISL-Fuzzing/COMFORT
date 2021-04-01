var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("656a6c9ad248051ce95bfb0bcec98ffa.svg");
});
var v1 = (function (v1, v2, v3){
v3(1348).polyfill();
});
function v2(v1){
if((! v1) || (((typeof v1) != ("object")) && (! v1.prototype))){
return null;
}
var v2 = (v1.prototype) ? (v1.prototype) : (Object.getPrototypeOf(v1));
var v4 = Object.getPrototypeOf(v2);
if(! v4){
return null;
}
var v5 = v6.getQualifiedClassName(v4.constructor);
if(! v5){
return null;
}
return v5;
}
// GenBlkBrick
while((new Date()) < ((v1) * (1000))){
var v3 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Network/networkInterfaces/dcos-master-4CC1E6A6-nic-0?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"dcos-master-4CC1E6A6-nic-0\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Network/networkInterfaces/dcos-master-4CC1E6A6-nic-0\",\r\n  \"etag\": \"W/\\\"431eb25c-b764-49a7-99b7-519cb349ddbb\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"117ce869-61d6-4051-a1be-4761a631c319\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfigNode\",\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Network/networkInterfaces/dcos-master-4CC1E6A6-nic-0/ipConfigurations/ipConfigNode\",\r\n        \"etag\": \"W/\\\"431eb25c-b764-49a7-99b7-519cb349ddbb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"172.16.0.5\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Network/virtualNetworks/dcos-vnet-4CC1E6A6/subnets/dcos-masterSubnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\",\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Network/loadBalancers/dcos-master-lb-4CC1E6A6/backendAddressPools/dcos-master-pool-4CC1E6A6\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Network/loadBalancers/dcos-master-lb-4CC1E6A6/inboundNatRules/SSH-dcos-master-4CC1E6A6-0\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Network/loadBalancers/dcos-master-lb-4CC1E6A6/inboundNatRules/SSHPort22-dcos-master-4CC1E6A6-0\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"zwue1n4fvo2u3kiwwhjbirglmb.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A2-3A-28\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Network/networkSecurityGroups/dcos-master-nsg-4CC1E6A6\"\r\n    },\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate2024/providers/Microsoft.Compute/virtualMachines/dcos-master-4CC1E6A6-0\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '2961', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"431eb25c-b764-49a7-99b7-519cb349ddbb"', 'x-ms-request-id' : '1682da31-8831-4f1e-9b2e-2a11718c14be', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14985', 'x-ms-correlation-request-id' : '30ba759c-8d5c-4f1e-80a7-92cce046c8b9', 'x-ms-routing-request-id' : 'WESTUS:20170602T161608Z:30ba759c-8d5c-4f1e-80a7-92cce046c8b9', date : 'Fri, 02 Jun 2017 16:16:07 GMT', connection : 'close'}));
return v2;
});
var v4 = (function (v1){
return (((v1) != (null)) && ((typeof v1.x) === ('number'))) && ((typeof v1.y) === ('number'));
});
}
(v2.prototype.identity) = (function (){
(this.x) = (this.y) = 0.0;
(this.skew) = (this.rotation) = 0.0;
(this.scaleX) = (this.scaleY) = 1.0;
return this;
});
(function (){
v3(/$/, "s");
v3(/s$/i, "s");
v3(/(ax|test)is$/i, "$1es");
v3(/(octop|vir)us$/i, "$1i");
v3(/(octop|vir)i$/i, "$1i");
v3(/(alias|status)$/i, "$1es");
v3(/(bu)s$/i, "$1ses");
v3(/(buffal|tomat)o$/i, "$1oes");
v3(/([ti])a$/i, "$1a");
v3(/([ti])um$/i, "$1a");
v3(/sis$/i, "ses");
v3(/ses$/i, "ses");
v3(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v3(/(hive)$/i, "$1s");
v3(/([^aeiouy]|qu)y$/i, "$1ies");
v3(/(x|ch|ss|sh)$/i, "$1es");
v3(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v3(/([m|l])ouse$/i, "$1ice");
v3(/([m|l])ice$/i, "$1ice");
v3(/^(ox)$/i, "$1en");
v3(/^(ox)en$/i, "$1en");
v3(/(quiz)$/i, "$1zes");
v4(/s$/i, "");
v4(/ss$/i, "ss");
v4(/(n)ews$/i, "$1ews");
v4(/([ti])um$/i, "$1um");
v4(/([ti])a$/i, "$1um");
v4(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v4(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v4(/(^analy)ses$/i, "$1sis");
v4(/(^analy)sis$/i, "$1sis");
v4(/([^f])ves$/i, "$1fe");
v4(/(hive)s$/i, "$1");
v4(/(tive)s$/i, "$1");
v4(/([lr])ves$/i, "$1f");
v4(/([^aeiouy]|qu)ies$/i, "$1y");
v4(/(s)eries$/i, "$1eries");
v4(/(m)ovies$/i, "$1ovie");
v4(/(x|ch|ss|sh)es$/i, "$1");
v4(/([m|l])ice$/i, "$1ouse");
v4(/([m|l])ouse$/i, "$1ouse");
v4(/(bus)es$/i, "$1");
v4(/(bus)$/i, "$1");
v4(/(o)es$/i, "$1");
v4(/(shoe)s$/i, "$1");
v4(/(cris|ax|test)es$/i, "$1is");
v4(/(cris|ax|test)is$/i, "$1is");
v4(/(octop|vir)i$/i, "$1us");
v4(/(octop|vir)us$/i, "$1us");
v4(/(alias|status)es$/i, "$1");
v4(/(alias|status)$/i, "$1");
v4(/^(ox)en/i, "$1");
v4(/(vert|ind)ices$/i, "$1ex");
v4(/(matr)ices$/i, "$1ix");
v4(/(quiz)zes$/i, "$1");
v4(/(database)s$/i, "$1");
v0("person", "people");
v0("man", "men");
v0("child", "children");
v0("sex", "sexes");
v0("move", "moves");
v0("cow", "kine");
v2("equipment");
v2("information");
v2("rice");
v2("money");
v2("species");
v2("series");
v2("fish");
v2("sheep");
v2("jeans");
})();
function v5(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v3(v3)) + (v4(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
// GenBlkBrick
while((v0) != (null)){
(function (){
v0(/$/, "s");
v0(/s$/i, "s");
v0(/(ax|test)is$/i, "$1es");
v0(/(octop|vir)us$/i, "$1i");
v0(/(octop|vir)i$/i, "$1i");
v0(/(alias|status)$/i, "$1es");
v0(/(bu)s$/i, "$1ses");
v0(/(buffal|tomat)o$/i, "$1oes");
v0(/([ti])a$/i, "$1a");
v0(/([ti])um$/i, "$1a");
v0(/sis$/i, "ses");
v0(/ses$/i, "ses");
v0(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v0(/(hive)$/i, "$1s");
v0(/([^aeiouy]|qu)y$/i, "$1ies");
v0(/(x|ch|ss|sh)$/i, "$1es");
v0(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v0(/([m|l])ouse$/i, "$1ice");
v0(/([m|l])ice$/i, "$1ice");
v0(/^(ox)$/i, "$1en");
v0(/^(ox)en$/i, "$1en");
v0(/(quiz)$/i, "$1zes");
v1(/s$/i, "");
v1(/ss$/i, "ss");
v1(/(n)ews$/i, "$1ews");
v1(/([ti])um$/i, "$1um");
v1(/([ti])a$/i, "$1um");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v1(/(^analy)ses$/i, "$1sis");
v1(/(^analy)sis$/i, "$1sis");
v1(/([^f])ves$/i, "$1fe");
v1(/(hive)s$/i, "$1");
v1(/(tive)s$/i, "$1");
v1(/([lr])ves$/i, "$1f");
v1(/([^aeiouy]|qu)ies$/i, "$1y");
v1(/(s)eries$/i, "$1eries");
v1(/(m)ovies$/i, "$1ovie");
v1(/(x|ch|ss|sh)es$/i, "$1");
v1(/([m|l])ice$/i, "$1ouse");
v1(/([m|l])ouse$/i, "$1ouse");
v1(/(bus)es$/i, "$1");
v1(/(bus)$/i, "$1");
v1(/(o)es$/i, "$1");
v1(/(shoe)s$/i, "$1");
v1(/(cris|ax|test)es$/i, "$1is");
v1(/(cris|ax|test)is$/i, "$1is");
v1(/(octop|vir)i$/i, "$1us");
v1(/(octop|vir)us$/i, "$1us");
v1(/(alias|status)es$/i, "$1");
v1(/(alias|status)$/i, "$1");
v1(/^(ox)en/i, "$1");
v1(/(vert|ind)ices$/i, "$1ex");
v1(/(matr)ices$/i, "$1ix");
v1(/(quiz)zes$/i, "$1");
v1(/(database)s$/i, "$1");
v4("person", "people");
v4("man", "men");
v4("child", "children");
v4("sex", "sexes");
v4("move", "moves");
v4("cow", "kine");
v2("equipment");
v2("information");
v2("rice");
v2("money");
v2("species");
v2("series");
v2("fish");
v2("sheep");
v2("jeans");
})();
}
