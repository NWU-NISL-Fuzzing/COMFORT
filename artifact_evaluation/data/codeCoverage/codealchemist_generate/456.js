// GenBlkBrick
for(var v0 = 1;(v0) <= (100);v0++){
var v1 = (function (v1){
var v2 = v1('http://xplattestadla8391.azuredatalakeanalytics.net:443').get('/catalog/usql/databases/master?api-version=2016-11-01').reply(200, "{\r\n  \"@odata.context\":\"https://xplattestadla8391.azuredatalakeanalytics.net/sqlip/$metadata#databases/$entity\",\"computeAccountName\":\"xplattestadla8391\",\"databaseName\":\"master\",\"version\":\"9d759286-2c8a-4b89-87f4-37ce2b7bb10d\"\r\n}", ({'cache-control' : 'private, no-cache, no-store, max-age=0', 'transfer-encoding' : 'chunked', 'content-type' : 'application/json; odata.metadata=minimal', expires : '-1', 'x-ms-request-id' : '13a20675-4b09-4a9b-850b-f79ea3933887', 'odata-version' : '4.0', 'x-content-type-options' : 'nosniff', 'strict-transport-security' : 'max-age=15724800; includeSubDomains', date : 'Tue, 12 Dec 2017 06:43:21 GMT', connection : 'close'}));
return v2;
});
}
{
v0++;
}
(v1.PATH_CONSTRAINT) = "path";
function v2(v1, v2, v3){
if(! v1){
return null;
}
var v4 = ({});
for(var v5 in v1){
if(v1.call(v1, v5)){
(v4[v5]) = v2.call(v3, v1[v5], v5, v1);
}
}
return v4;
}
var v0 = v1(v2);
var v3 = (function (v1){
var v2 = ({});
for(var v3 = 0;(v3) < (v1.length);(v3) += 2){
var v4 = v1[v3];
var v5 = v1[(v3) + (1)];
(v2[v4]) = v5;
}
return v2;
});
// GenBlkBrick
do {
// GenBlkBrick
while(v5--){
var v6 = (function (v1){
return (v1) = ((v1) > (0)) && (((v1) & ((v1) - (1))) == (0));
});
(v6.VERSION) = "version";
}
} while((0) < (--v4));
Array.prototype.reduce.call(v3, v1, v4);
