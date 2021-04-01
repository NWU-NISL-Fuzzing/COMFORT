// GenBlkBrick
for(var v0 = 0;(v0) < (5);v0++){
var v1 = (function (v1, v2, v3){
var v4 = v3(219), v5 = v3(172), v6 = "[object AsyncFunction]", v7 = "[object Function]", v8 = "[object GeneratorFunction]", v9 = "[object Proxy]";
(v1.exports) = (function (v1){
if(! v5(v1)){
return ! 1;
}
var v2 = v4(v1);
return ((((v2) == (v7)) || ((v2) == (v8))) || ((v2) == (v6))) || ((v2) == (v9));
});
});
}
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westeurope/operations/0502de55-2f7a-41b3-9185-51e349c8b573?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : 'a4c3c439-b53f-44a4-9b60-e146b4de35ed', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14999', 'x-ms-correlation-request-id' : 'bec83fa2-b334-4e40-8118-096d3f67b707', 'x-ms-routing-request-id' : 'WESTEUROPE:20170728T120014Z:bec83fa2-b334-4e40-8118-096d3f67b707', date : 'Fri, 28 Jul 2017 12:00:14 GMT', connection : 'close'}));
return v2;
});
// GenBlkBrick
for(var v3 = 1;(v3) <= (100);v3++){
var v4 = (v3) - (1);
{
var v5 = 0;
for(var v6 = 0;((v6) + (v4)) < (v3);v6++){
if((v4[(v6) + (v4)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v4)];
(v4[(v6) + (v4)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v4) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v4) = Math.floor(((v4) * (10)) / (13));
}
}
}
(v0) -= (v6) * (Math.floor((v4) / (v5)));
var v7 = Math.max(v0, v3, v4), v8 = Math.min(v0, v3, v4);
for(var v9 = 0;(v9) < (v7);v9++){
(v10) = (v9) % (v3);
v4.push((v8) + (v10), (v5) + (v10));
if((v10) == (v0)){
if(((v9) == (v4)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v8, v5);
}
v4.push(((v5) + (v3)) - (1), v5);
(v7) += v3;
(v8) += v3;
(v5) = 0;
}else {
if(((v9) >= (v4)) && ((v10) == (true))){
v4.push(v8, v5);
}else {
if((v9) < (v4)){
if((v10) == (true)){
v4.push(v8, v5);
}
v4.push(((v5) + (v3)) - (1), v5);
(v8) += v3;
(v5) += v3;
}
}
}
}
}
for(var v11 = 0;(v11) < (10);++v11){
(v12) += ((v4) * (v11)) + (1);
}
// GenBlkBrick
for((((v5) < (0)) && (((v5) += v7) < (0))) && ((v5) = 0);(v5) < (v7);++v5){
{
var v13 = 0;
for(var v14 = 0;((v14) + (v6)) < (v3);v14++){
if((v4[(v14) + (v6)].area) > (v4[v14].area)){
var v5 = v4[(v14) + (v6)];
(v4[(v14) + (v6)]) = v4[v14];
(v4[v14]) = v5;
v13++;
}
}
if((v6) == (1)){
if((v13) == (0)){
break ;
}
}else {
(v6) = Math.floor(((v6) * (10)) / (13));
}
}
var v15 = v1;
}
