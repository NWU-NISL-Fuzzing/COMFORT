var v0 = (function (v1, v2, v3){
"use asm";
var v4 = new v1.Int32Array(v3);
function v5(v6){
(v6) = (v6) | (0);
return + v4[(v6) >> (2)];
}
return ({foo : v5});
});
var v1 = (function (v1){
var v2 = v1('http://xplattestadla8391.azuredatalakeanalytics.net:443').get('/Jobs/6a9c06d8-245a-4beb-acec-6a133864febf?api-version=2016-11-01').reply(200, "{\"jobId\":\"6a9c06d8-245a-4beb-acec-6a133864febf\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrptest2@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-12-12T06:43:22.6050882+00:00\",\"state\":\"Compiling\",\"result\":\"None\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-12-12T06:43:22.6050882+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2017-12-12T06:43:22.8394881+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"}],\"properties\":{\"owner\":\"jasonsrptest2@SPI\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls8812.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/12/12/06/43/6a9c06d8-245a-4beb-acec-6a133864febf/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls8812.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/12/12/06/43/6a9c06d8-245a-4beb-acec-6a133864febf/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS adlacatalogitem4298; CREATE DATABASE adlacatalogitem4298; CREATE TABLE adlacatalogitem4298.dbo.adlacatalogitem1460( UserId int, Start DateTime, Region string, Query string, Duration int, Urls string, ClickedUrls string, INDEX idx1 CLUSTERED (Region ASC) PARTITIONED BY (UserId) HASH (Region)); ALTER TABLE adlacatalogitem4298.dbo.adlacatalogitem1460 ADD IF NOT EXISTS PARTITION (1); DROP FUNCTION IF EXISTS adlacatalogitem4298.dbo.adlacatalogitem8213; CREATE FUNCTION adlacatalogitem4298.dbo.adlacatalogitem8213() RETURNS @result TABLE ( s_date DateTime, s_time string, s_sitename string, cs_method string, cs_uristem string, cs_uriquery string, s_port int, cs_username string, c_ip string, cs_useragent string, cs_cookie string, cs_referer string, cs_host string, sc_status int, sc_substatus int, sc_win32status int, sc_bytes int, cs_bytes int, s_timetaken int) AS BEGIN @result = EXTRACT s_date DateTime, s_time string, s_sitename string, cs_method string, cs_uristem string, cs_uriquery string, s_port int, cs_username string, c_ip string, cs_useragent string, cs_cookie string, cs_referer string, cs_host string, sc_status int, sc_substatus int, sc_win32status int, sc_bytes int, cs_bytes int, s_timetaken int FROM @\\\"/Samples/Data/WebLog.log\\\" USING Extractors.Text(delimiter:' '); RETURN; END; CREATE VIEW adlacatalogitem4298.dbo.adlacatalogitem443 AS SELECT * FROM ( VALUES(1,2),(2,4) ) AS T(a, b); CREATE PROCEDURE adlacatalogitem4298.dbo.adlacatalogitem9916() AS BEGIN CREATE VIEW adlacatalogitem4298.dbo.adlacatalogitem443 AS SELECT * FROM ( VALUES(1,2),(2,4) ) AS T(a, b); END;\",\"algebraFilePath\":\"adl://xplattestadls8812.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/12/12/06/43/6a9c06d8-245a-4beb-acec-6a133864febf/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT1.194054S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", ({'cache-control' : 'private, no-cache, no-store, max-age=0', 'transfer-encoding' : 'chunked', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : 'b470e25e-aa5d-4ae0-b8f2-8acf5e85e5b7', 'x-content-type-options' : 'nosniff', 'strict-transport-security' : 'max-age=15724800; includeSubDomains', date : 'Tue, 12 Dec 2017 06:43:24 GMT', connection : 'close'}));
return v2;
});
(v0.prototype.dispose) = (function (){
if(! this._webGLTexture){
return;
}
this._references--;
if((this._references) === (0)){
this._engine._releaseTexture(this);
(this._webGLTexture) = null;
}
});
(v1.prototype.getInstanceDivisor) = (function (){
return this._buffer.instanceDivisor;
});
(v0.SUB_TYPE) = "subType";
var v2 = (function (){
var v1 = this.getCssPrefix();
return this.getChildren("span").not(((".") + (v1)) + ("-item-off")).length;
});
(v0.INHERIT_ANIMATION) = "inheritAnimation";
// GenBlkBrick
for(var v3 = 1;(v3) < (1024);v3++){
// GenBlkBrick
while(true){
var v4 = (function (v1){
(this.lineJoin_) = v1;
(this.checksum_) = undefined;
});
}
Array.prototype.reduce.call(v1, v4, v3);
}
