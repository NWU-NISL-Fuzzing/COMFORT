var v0 = (function (v1, v2){
return ({compile : (function (v3, v4){
if(! v2){
v1.warn('modal-animation-class is now deprecated. Use uib-modal-animation-class instead.');
}
if(v4.modalAnimation){
v3.addClass(v4.modalAnimationClass);
}
})});
});
var v1 = (function (v1){
v1.services.viewer.dispose();
});
(v1._GlobalId) = 0;
(v1.prototype) = v0.prototype;
// GenBlkBrick
for(var v2 = 0;(v2) < (100);++v2){
(v3) = ~ v2;
}
// GenBlkBrick
while((v0) > (v2)){
// GenBlkBrick
do {
var v5 = (function (v1){
var v2 = this.paramAsStr(v1);
var v3 = v2.equals("*");
if((v2.length) == (0)){
this.invArg();
}
if(v3){
switch(this.tokAt((v1) + (1))){
}
}
if((this.tokAt((v1) + (1))) == (269484209)){
(v2) += this.paramAsStr(++v1);
}
(this.iToken) = v1;
return v2;
});
var v6 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westeurope/operations/0502de55-2f7a-41b3-9185-51e349c8b573?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : '66182c60-3f3d-4d87-960b-03aa0720b253', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14996', 'x-ms-correlation-request-id' : '317be792-29fa-4ab0-a38a-6f7910b16f45', 'x-ms-routing-request-id' : 'WESTEUROPE:20170728T121258Z:317be792-29fa-4ab0-a38a-6f7910b16f45', date : 'Fri, 28 Jul 2017 12:12:57 GMT', connection : 'close'}));
return v2;
});
} while((0) < (--v4));
}
Array.prototype.reduce.call(v5, v6, v2);
function v7(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v1(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v5(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v6(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
