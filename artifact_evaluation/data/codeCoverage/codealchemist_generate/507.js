var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(0), v5 = v3(27)(2);
v4((v4.P) + ((v4.F) * (! v3(23)([].filter, ! 0))), "Array", ({filter : (function (v1){
return v5(this, v1, arguments[1]);
})}));
});
(v0.prototype._enable) = (function (v1){
var v2 = v3.Tools.MakeArray((v1) || (this._cameras));
if(! v2){
return;
}
for(var v4 = 0;(v4) < (v2.length);v4++){
var v5 = v2[v4];
var v6 = v5.name;
for(var v7 = 0;(v7) < (this._indicesForCamera[v6].length);v7++){
if((v5._postProcesses[this._indicesForCamera[v6][v7]]) === (undefined)){
v1[v4].attachPostProcess(this._postProcesses[(this._singleInstance) ? (0) : (v6)], this._indicesForCamera[v6][v7]);
}
}
for(var v9 in this._renderPasses){
this._renderPasses[v9]._incRefCount();
}
}
});
// GenBlkBrick
for(var v1 = 3;(v1) >= (0);v1--){
var v2 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/xTestResource9703-SouthCentralUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : 'e8460e94924f07549d94032e1e4109d6', date : 'Tue, 02 Aug 2016 19:57:16 GMT', connection : 'close'}));
return v2;
});
(v2.prototype._onApplyCropButtonClick) = (function (){
this.cropper.applyCrop();
});
}
var v3 = (function (v1, v2, v3){
var v4 = v3(131), v5 = v3(132);
(v1.exports) = (function (v1){
return (function (v2, v3){
var v6, v7, v8 = String(v5(v2)), v10 = v4(v3), v11 = v8.length;
return (((v10) < (0)) || ((v10) >= (v11))) ? ((v1) ? ("") : (void 0)) : ((((((((v6) = v8.charCodeAt(v10)) < (55296)) || ((v6) > (56319))) || (((v10) + (1)) === (v11))) || (((v7) = v8.charCodeAt((v10) + (1))) < (56320))) || ((v7) > (57343))) ? ((v1) ? (v8.charAt(v10)) : (v6)) : ((v1) ? (v8.slice(v10, (v10) + (2))) : ((((v7) - (56320)) + (((v6) - (55296)) << (10))) + (65536))));
});
});
});
Array.prototype.reduce.call(v0, v2, v1);
// GenBlkBrick
for(var v0 in v0.prototype){
var v4 = (function (v1, v2){
return (v1.ordering) - (v2.ordering);
});
}
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v0(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
function v6(v1, v2, v3, v4, v5){
v5(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v3));
}
