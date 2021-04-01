var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(2012);
(v1.exports) = (function (v1){
var v2, v3, v5, v6;
return (((v1.data) && (! v1.errors)) ? ((v1.data.tokenizeCreditCard) ? (((v3) = v1.data.tokenizeCreditCard, (v5) = v3.creditCard, (v6) = v5.last4.substr(2, 4), (v2) = ({creditCards : []}))) : ((v1.data.tokenizeCvv) && ((v2) = (function (v1){
return ({creditCards : []});
})(v1)))) : ((v2) = v4(v1)), v2);
});
});
(v0.prototype._getAvailableSpace) = (function (v1){
var v2;
if((v1) && (v1.length)){
var v3 = this.drawerInstance.$canvasEditContainer, v4 = v3.get(0).getBoundingClientRect(), v5 = v1.get(0).getBoundingClientRect(), v6 = this.$popupContentWrapper.get(0).getBoundingClientRect(), v7 = 10, v8 = (v5.left) - (v4.left), v9 = (v5.top) - (v4.top);
(v2) = ({});
(v2.top) = v9;
(v2.left) = v8;
(v2.right) = ((v4.width) - (v8)) - (v5.width);
(v2.bottom) = ((v4.height) - (v9)) - (v5.height);
(v2.centerX) = (v8) + ((v5.width) / (2));
(v2.centerY) = (v9) + ((v5.height) / (2));
(v2.popup) = ({arrowSize : v7, top : v6.height, bottom : v6.height, left : v6.width, right : v6.width});
(v2.popupSizes) = v6;
(v2.canvasSizes) = v4;
(v2.triggerSizes) = v5;
}
(this.sizes) = v2;
return v2;
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(1616).atob, v5 = ({production : "https://api.braintreegateway.com:443", sandbox : "https://api.sandbox.braintreegateway.com:443"});
(v1.exports) = (function (v1){
var v2, v3, v6, v7, v8 = ({attrs : ({}), configUrl : ""});
return ((/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(v1)) ? (((v6) = v1.split("_"), (v7) = v6[0], (v3) = ({merchantId : v6.slice(2).join("_"), environment : v7}), (v8.attrs.tokenizationKey) = v1, (v8.configUrl) = (((v5[v3.environment]) + ("/merchants/")) + (v3.merchantId)) + ("/client_api/v1/configuration"))) : (((v2) = JSON.parse(v4(v1)), (v8.attrs.authorizationFingerprint) = v2.authorizationFingerprint, (v8.configUrl) = v2.configUrl)), v8);
});
});
var v2 = (function (v1){
this.handleTileJSONError();
});
(v0.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v1.prototype) = v2.prototype, new v1()));
// GenBlkBrick
for(var v3 = 10;(v3) < (14);v3++){
var v4 = (function (v1, v2, v3){
var v4 = ({ECB : v3(1793), CBC : v3(1792), CFB : v3(1791), CFB8 : v3(1790), CFB1 : v3(1789), OFB : v3(1788), CTR : v3(635), GCM : v3(635)}), v5 = v3(633);
for(var v6 in v5){
(v5[v6].module) = v4[v5[v6].mode];
}
(v1.exports) = v5;
});
if((v3) < (20)){
break ;
}
}
function v5(v1, v2){
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
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v4(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
// GenBlkBrick
for(var v6 = 0x3041;(v6) <= (0x3094);v6++){
var v7 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (function (v1){
var v2 = (((v6) + ((Math.random()) * (16))) % (16)) | (0);
(v6) = Math.floor((v6) / (16));
return ((v1) === ('x')) ? (v2) : ((v2) && ((0x7) | (0x8))).toString(16);
}));
var v8 = v7.indexOf('.');
}
