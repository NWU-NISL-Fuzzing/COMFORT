var v0 = (function (){
var v1 = Array.prototype.lastIndexOf.call(({length : []}), 1);
if((v1) === (- 1)){
return true;
}
});
var v1 = (function (v1, v2){
if(((v1) === (null)) || ((v1) === (undefined))){
(v1) = ({});
}
for(var v4 = 1;(v4) < (arguments.length);v4++){
var v6 = arguments[v4];
for(var v7 in v6){
if(! (v7) in (v1)){
(v1[v7]) = v6[v7];
}
}
}
return v1;
});
(v1.length) = 100;
var v2 = (function (v1, v2){
var v3 = v1.length;
var v4 = this.getColumnCount();
var v5 = new Array(v3);
var v7;
for(var v8 = 0;(v8) < (v3);++v8){
(v7) = [];
if(v2){
(v7.originalData) = v1[v8];
}
for(var v9 = 0;(v9) < (v4);++v9){
(v7[v9]) = v1[v8][this.getColumnId(v9)];
}
(v5[v8]) = v7;
}
return v5;
});
delete v2.foo;
var v3 = (function (v1, v2, v3){
(v1.exports) = v3(165)();
});
var v4 = (function (v1){
return (((typeof v1) === ('object')) && (v1)) && ((v1.constructor) === (Object));
});
var v5 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate4415?api-version=2015-03-01-preview').reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate4415\",\"name\":\"xplatTestHDInsightClusterCreate4415\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"West Europe\",\"etag\":\"7c0e70fb-6f6e-4acd-8f28-02b57687be68\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.4.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.4.1000.0.8269383.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Medium\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}}]},\"provisioningState\":\"InProgress\",\"clusterState\":\"HdInsightConfiguration\",\"createdDate\":\"2016-09-05T08:53:22.337\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate4415-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate4415.azurehdinsight.net\",\"port\":443}],\"tier\":\"standard\"}}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1470', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : 'ebc29e97-83b4-4a37-9a5a-0e0aebdc2611', server : 'Microsoft-IIS/8.5', 'x-powered-by' : 'ASP.NET', 'x-ms-ratelimit-remaining-subscription-reads' : '14915', 'x-ms-correlation-request-id' : '8f3b73ab-b883-46f5-827d-268b0a584d18', 'x-ms-routing-request-id' : 'WESTEUROPE:20160905T090749Z:8f3b73ab-b883-46f5-827d-268b0a584d18', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Mon, 05 Sep 2016 09:07:48 GMT'}));
return v2;
});
