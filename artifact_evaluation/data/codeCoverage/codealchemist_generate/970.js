var v0 = (function (v1){
var v2 = this.set(v1.elements[0], v1.elements[1], v1.elements[2]).length();
var v3 = this.set(v1.elements[4], v1.elements[5], v1.elements[6]).length();
var v4 = this.set(v1.elements[8], v1.elements[9], v1.elements[10]).length();
(this.x) = v2;
(this.y) = v3;
(this.z) = v4;
return this;
});
var v1 = (function (v1){
return (v1[0]) += 1;
});
if(v1.toSource){
(v0.toSource) = (function v2(){
return v1.toSource();
});
}
(v1.backToFrontSortCompare) = (function (v1, v2){
if((v1._distanceToCamera) < (v2._distanceToCamera)){
return 1;
}
if((v1._distanceToCamera) > (v2._distanceToCamera)){
return - 1;
}
return 0;
});
var v2 = (function (){
if((this.systemNoticeStore.count()) > (0)){
this.statusBar.systemNoticeButton.show();
}else {
this.statusBar.systemNoticeButton.hide();
}
});
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(72), v5 = v3(15), v6 = v3(592), v7 = v3(1700), v8 = v3(152), v9 = v3(28), v10 = v3(25);
(v1.exports) = ({create : v10((function (v1){
return v4.verify(({name : "US Bank Account", client : v1.client})).then((function (){
return (v1.client.getConfiguration().gatewayConfiguration.braintreeApi) ? ((v1.client.getConfiguration().gatewayConfiguration.usBankAccount) ? (new v7(v1)) : (v9.reject(new v5(v6.US_BANK_ACCOUNT_NOT_ENABLED)))) : (v9.reject(new v5(v8.BRAINTREE_API_ACCESS_RESTRICTED)));
}));
})), VERSION : "3.28.0"});
});
// GenBlkBrick
while((v0) && (v1)){
var v4 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/arm-apiapp-tests1465-WestUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '23db882eeccb0aa9984265eb2cc8086c', date : 'Tue, 02 Aug 2016 21:09:56 GMT', connection : 'close'}));
return v2;
});
var v5 = (function (v1){
var v2 = this._baseLayer.options;
return ((v2.time) = new Date(v1).toISOString(), new this._baseLayer.constructor(this._baseLayer.getURL(), v2));
});
}
var v6 = (function (){
(this.y) = 0;
});
