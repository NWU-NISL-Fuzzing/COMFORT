var v0 = (function (v1){
var v2 = (v1) + (2);
function v3(v4){
debugger;
return ((v1) + (v4)) + (v2);
}
[].forEach(v3);
});
// GenBlkBrick
for(var v1 = [], v2 = 0;(v2) < (256);v2++){
// GenBlkBrick
for(var v0 = v1;(v0) < (v2);v0++){
var v3 = (function (v1){
return ((v1) < (0)) ? (- 1) : (((v1) > (0)) ? (1) : (0));
});
}
if((v1[v2]) === ('')){
continue ;
}
}
// GenBlkBrick
for(var v4 = - 5;(v4) < (v1);v4++){
// GenBlkBrick
for(var v5 = 0;(v5) < (0x8000);v5++){
if((v5) < (20)){
break ;
}
var v6 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/cf941040-29d3-4cbe-82c6-aef630d34d65?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : '2f1a4af0-68f0-4270-8104-1bfd9f649a44', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14993', 'x-ms-correlation-request-id' : '4d0d4835-bd6f-4f73-9373-824dd5472e7d', 'x-ms-routing-request-id' : 'WESTEUROPE:20171002T185350Z:4d0d4835-bd6f-4f73-9373-824dd5472e7d', date : 'Mon, 02 Oct 2017 18:53:50 GMT', connection : 'close'}));
return v2;
});
}
(v7) = (v5) ? (v3(v4, v5)) : (('') + (Math.round(v4))).split('.');
}
{
var v8 = (v2) - (v5);
(v9) = ((v4) > (0.5)) ? ((v8) / (((2) - (v2)) - (v5))) : ((v8) / ((v2) + (v5)));
switch(v2){
}
(v10) /= 6;
}
var v11 = (((v10) * (v9)) - ((v2) * (v5))) / (v8);
// GenBlkBrick
while((v2) < (v10)){
var v12 = Math.floor(((v2) * (13)) / (10));
{
var v13 = 0;
for(var v14 = 0;((v14) + (v12)) < (v3);v14++){
if((v4[(v14) + (v12)].area) > (v4[v14].area)){
var v5 = v4[(v14) + (v12)];
(v4[(v14) + (v12)]) = v4[v14];
(v4[v14]) = v5;
v13++;
}
}
if((v12) == (1)){
if((v13) == (0)){
break ;
}
}else {
(v12) = Math.floor(((v12) * (10)) / (13));
}
}
}
for(v4;(v4) < (v13);(v4) += 1){
(v2) = (v7[v4]) || (({}));
for(v4 in v2){
if(v2.hasOwnProperty(v4)){
(v5[v4]) = v2[v4];
}
}
}
for(var v15 = 0;(v15) < (v1);v15++){
(v2) -= (v11) * (v14);
(v11) += (v2) * (v14);
(v1[v15]) = v2;
(v7[v15]) = v11;
}
