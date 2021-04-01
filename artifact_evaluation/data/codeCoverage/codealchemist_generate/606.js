var v0 = (function (v1, v2, v3, v4, v5){
var v6 = (this.pos.x) - (this.oldpos.x);
var v7 = (this.pos.y) - (this.oldpos.y);
var v8 = ((v6) * (v3)) + ((v7) * (v4));
if((this.body.immovable) && (v5.body.immovable)){
(v1) *= 0.5;
(v2) *= 0.5;
this.pos.add(v1, v2);
this.oldpos.set(this.pos.x, this.pos.y);
v5.pos.subtract(v1, v2);
v5.oldpos.set(v5.pos.x, v5.pos.y);
return;
}else {
if((! this.body.immovable) && (! v5.body.immovable)){
(v1) *= 0.5;
(v2) *= 0.5;
this.pos.add(v1, v2);
v5.pos.subtract(v1, v2);
if((v8) < (0)){
this.reverse();
v5.reverse();
}
}else {
if(! this.body.immovable){
this.pos.subtract(v1, v2);
if((v8) < (0)){
this.reverse();
}
}else {
if(! v5.body.immovable){
v5.pos.subtract(v1, v2);
if((v8) < (0)){
v5.reverse();
}
}
}
}
}
});
(v0.DEFAULT_INSTANCE) = undefined;
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2/skus/Standard/versions?api-version=2017-03-30').reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"11.1.65236\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Standard/Versions/11.1.65236\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"11.5.65236\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2/Skus/Standard/Versions/11.5.65236\"\r\n  }\r\n]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '607', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : '2e0a4a4e-9ee8-4c80-86ec-5957b9805560', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14895', 'x-ms-correlation-request-id' : '596e9d84-fc35-4e12-bec4-25e8ea428b44', 'x-ms-routing-request-id' : 'WESTUS:20170602T151907Z:596e9d84-fc35-4e12-bec4-25e8ea428b44', date : 'Fri, 02 Jun 2017 15:19:06 GMT', connection : 'close'}));
return v2;
});
var v2 = (function (v1, v2, v3){
var v4 = v3(248), v5 = v3(682);
(v1.exports) = (function (v1, v2){
return v4(v1, v5(v1), v2);
});
});
// GenBlkBrick
while((v0) < ((v1) - (v2))){
function v3(v1, v2, v3){
(v4) = (this.valueOf()) !== (false);
}
(v1.prototype.advanceTime) = (function (v1){
if((v1) !== (v1)){
(v1) = 0.0;
}
var v2 = (Date.now()) * (0.001);
if((v1) < (0.0)){
(v1) = (v2) - (this._systemTime);
}
(this._systemTime) = v2;
if((this.timeScale) !== (1.0)){
(v1) *= this.timeScale;
}
if((v1) === (0.0)){
return;
}
if((v1) < (0.0)){
(this.time) -= v1;
}else {
(this.time) += v1;
}
var v4 = 0, v5 = 0, v6 = this._animatebles.length;
for(;(v4) < (v6);++v4){
var v7 = this._animatebles[v4];
if((v7) !== (null)){
if((v5) > (0)){
(this._animatebles[(v4) - (v5)]) = v7;
(this._animatebles[v4]) = null;
}
v7.advanceTime(v1);
}else {
v5++;
}
}
if((v5) > (0)){
(v6) = this._animatebles.length;
for(;(v4) < (v6);++v4){
var v8 = this._animatebles[v4];
if((v8) !== (null)){
(this._animatebles[(v4) - (v5)]) = v8;
}else {
v5++;
}
}
(this._animatebles.length) -= v5;
}
});
}
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v0(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v3(v1, v1.right);
}else {
break ;
}
}
}
}
});
(v0.prototype.popupClass) = 'popup-wrapper';
var v4 = (function (v1, v2){
"use strict";
var v3 = ({getReceiveURL : (function (v4, v5){
return ((((v4.base) + ("/")) + (v5)) + ("/xhr")) + (v4.queryString);
}), onHeartbeat : (function (){
}), sendHeartbeat : (function (v6){
v6.sendRaw("[]");
}), onFinished : (function (v6, v7){
if((v7) === (200)){
v6.reconnect();
}else {
v6.onClose(1006, (("Connection interrupted (") + (v7)) + (")"), false);
}
})});
(v2.__esModule) = true;
(v2["default"]) = v3;
});
