var v0 = (function (){
var v1 = this.defaultSize;
var v2 = ({});
(v2[100]) = (v1) - (8);
(v2[200]) = (v1) + (20);
(v2[600]) = v1;
for(var v3 in v2){
this.axis.setItemSize(parseInt(v3, 10), v2[v3]);
}
this.assertItem(0, 0, this.axis.getItemAtPosition((0) * (v1)));
this.assertItem(10, 0, this.axis.getItemAtPosition((10) * (v1)));
this.assertItem(101, 0, this.axis.getItemAtPosition(((101) * (v1)) - (8)));
this.assertItem(201, 0, this.axis.getItemAtPosition((((201) * (v1)) - (8)) + (20)));
this.assertItem(601, 0, this.axis.getItemAtPosition((((601) * (v1)) - (8)) + (20)));
this.assertItem(0, 4, this.axis.getItemAtPosition(((0) * (v1)) + (4)));
this.assertItem(10, 4, this.axis.getItemAtPosition(((10) * (v1)) + (4)));
this.assertItem(101, 4, this.axis.getItemAtPosition((((101) * (v1)) - (8)) + (4)));
this.assertItem(201, 4, this.axis.getItemAtPosition(((((201) * (v1)) - (8)) + (20)) + (4)));
this.assertItem(601, 4, this.axis.getItemAtPosition(((((601) * (v1)) - (8)) + (20)) + (4)));
this.assertItem(0, (v1) - (1), this.axis.getItemAtPosition((((0) * (v1)) + (v1)) - (1)));
this.assertItem(10, (v1) - (1), this.axis.getItemAtPosition((((10) * (v1)) + (v1)) - (1)));
this.assertItem(101, (v1) - (1), this.axis.getItemAtPosition(((((101) * (v1)) - (8)) + (v1)) - (1)));
this.assertItem(201, (v1) - (1), this.axis.getItemAtPosition((((((201) * (v1)) - (8)) + (20)) + (v1)) - (1)));
this.assertItem(601, (v1) - (1), this.axis.getItemAtPosition((((((601) * (v1)) - (8)) + (20)) + (v1)) - (1)));
});
var v1 = (function (){
return this._state;
});
(v1.UTC) = v0.UTC;
var v2 = (function (v1){
v1.put("template/popover/popover-template.html", (((((((((((("<div tooltip-animation-class=\"fade\"\n") + ("  uib-tooltip-classes\n")) + ("  ng-class=\"{ in: isOpen() }\">\n")) + ("  <div class=\"arrow\"></div>\n")) + ("\n")) + ("  <div class=\"popover-inner\">\n")) + ("      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n")) + ("      <div class=\"popover-content\"\n")) + ("        uib-tooltip-template-transclude=\"contentExp()\"\n")) + ("        tooltip-template-transclude-scope=\"originScope()\"></div>\n")) + ("  </div>\n")) + ("</div>\n")) + (""));
});
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(1847).atob, v5 = ({production : "https://api.braintreegateway.com:443", sandbox : "https://api.sandbox.braintreegateway.com:443"});
(v1.exports) = (function (v1){
var v2, v3, v6, v7, v8 = ({attrs : ({}), configUrl : ""});
return ((/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(v1)) ? (((v6) = v1.split("_"), (v7) = v6[0], (v3) = ({merchantId : v6.slice(2).join("_"), environment : v7}), (v8.attrs.tokenizationKey) = v1, (v8.configUrl) = (((v5[v3.environment]) + ("/merchants/")) + (v3.merchantId)) + ("/client_api/v1/configuration"))) : (((v2) = JSON.parse(v4(v1)), (v8.attrs.authorizationFingerprint) = v2.authorizationFingerprint, (v8.configUrl) = v2.configUrl)), v8);
});
});
(v2.escapeString) = v1;
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v2(v1);
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
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v1(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
// GenBlkBrick
for(var v0 in v1.prototype){
(v3.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
(v2.normalizeRadian) = (function (v1){
(v1) = ((v1) + (Math.PI)) % ((Math.PI) * (2.0));
(v1) += ((v1) > (0.0)) ? (- Math.PI) : (Math.PI);
return v1;
});
}
