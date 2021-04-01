var v0 = (function (v1, v2){
if(! v1){
(v1) = 0;
}
if(! v2){
(v2) = 0;
}
(this.a) = v1;
(this.b) = v1;
});
// GenBlkBrick
do {
var v1 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces?properties=dnssuffix').reply(200, "<string xmlns=\"http://schemas.microsoft.com/2003/10/Serialization/\">azurewebsites.net</string>", ({'cache-control' : 'private', 'content-length' : '94', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '4d699408d30000eead5d1256807145e9', date : 'Tue, 02 Aug 2016 19:57:31 GMT', connection : 'close'}));
return v2;
});
} while(v0);
function v2(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v0(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v1(v1.left, v1.left.right);
(v1) = v0(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v1(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v0(v1.right, v1.right.left);
(v1) = v1(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v2(v1.left, false);
v2(v1.right, true);
(v1) = v2(v1, true);
(v1) = v2(v1, false);
return v1;
}
(v0.prototype) = ((v1) === (null)) ? (Object.create(v1)) : (((v2.prototype) = v1.prototype, new v2()));
function v3(v1, v2, v3, v4, v5){
(v3) = v1(v3);
if(! v4){
(v4) = v7.base;
}
var v8;
(function v9(v1, v10, v11){
if((v1.start) > (v2)){
return;
}
var v12 = (v11) || (v1.type);
if((((v1.end) <= (v2)) && ((! v8) || ((v8.node.end) < (v1.end)))) && (v3(v12, v1))){
(v8) = new v2(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
var v4 = (function (v1){
return v1.split(/&/g).map((function (v2){
var v3 = v2.split(',');
if((v3.length) === (1)){
if((v3[0]) === ('')){
return null;
}
return v2;
}
return v3.map((function (v2){
if((v2) === ('')){
return null;
}
return v2;
}));
}));
});
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v4(v1);
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
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v2(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
if(v1.toSource){
(v2.toSource) = (function v2(){
return v1.toSource();
});
}
