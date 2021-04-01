var v0 = (function (v1){
this._setProperty('-webkit-region-break-before', v1);
});
// GenBlkBrick
while(typeof 11){
var v1 = (function (v1, v2, v3){
var v4 = v3(137), v5 = v3(22), v6 = v3(101), v7 = v4.has, v8 = v4.get, v9 = v4.key, v10 = (function (v1, v2, v3){
if(v7(v1, v2, v3)){
return v8(v1, v2, v3);
}
var v4 = v6(v2);
return ((null) !== (v4)) ? (v10(v1, v4, v3)) : (void 0);
});
v4.exp(({getMetadata : (function (v1, v2){
return v10(v1, v5(v2), ((arguments.length) < (3)) ? (void 0) : (v9(arguments[2])));
})}));
});
(v1.MatchValidator) = v1.Util.extend(Object, ({invalidProtocolRelMatchRegex : /^[\w]\/\//, hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//, uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/, hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/, isValidMatch : (function (v2, v3, v4){
if(((((v3) && (! this.isValidUriScheme(v3))) || (this.urlMatchDoesNotHaveProtocolOrDot(v2, v3))) || (this.urlMatchDoesNotHaveAtLeastOneWordChar(v2, v3))) || (this.isInvalidProtocolRelativeMatch(v4))){
return false;
}
return true;
}), isValidUriScheme : (function (v5){
var v6 = v5.match(this.uriSchemeRegex)[0].toLowerCase();
return ((v6) !== ('javascript:')) && ((v6) !== ('vbscript:'));
}), urlMatchDoesNotHaveProtocolOrDot : (function (v2, v3){
return ((! ! v2) && ((! v3) || (! this.hasFullProtocolRegex.test(v3)))) && ((v2.indexOf('.')) === (- 1));
}), urlMatchDoesNotHaveAtLeastOneWordChar : (function (v2, v3){
if((v2) && (v3)){
return ! this.hasWordCharAfterProtocolRegex.test(v2);
}else {
return false;
}
}), isInvalidProtocolRelativeMatch : (function (v4){
return (! ! v4) && (this.invalidProtocolRelMatchRegex.test(v4));
})}));
}
(v0.prototype) = ({interpolate : (function (v1, v2, v3){
var v4 = (v1) + (((v2) - (v1)) * (v3));
if((v3) < (this.lensPos)){
(v4) += ((this.leftImpl.interpolate(v1, (v1) + (((v2) - (v1)) * (this.lensPos)), (v3) / (this.lensPos))) - (v4)) * (this.absStrength);
}else {
(v4) += ((this.rightImpl.interpolate((v1) + (((v2) - (v1)) * (this.lensPos)), v2, ((v3) - (this.lensPos)) / ((1) - (this.lensPos)))) - (v4)) * (this.absStrength);
}
return v4;
}), setLensPos : (function (v5, v6){
(this.lensPos) += ((v7.clipNormalized(v5)) - (this.lensPos)) * (v6);
}), setLensStrength : (function (v8, v6){
(this.lensStrength) += ((v7.clip(v8, - 1, 1)) - (this.lensStrength)) * (v6);
(this.absStrength) = v7.abs(this.lensStrength);
this.leftImpl.setFlipped((this.lensStrength) > (0));
this.rightImpl.setFlipped((this.lensStrength) < (0));
})});
var v2 = (function v2(v1, v2){
if((v2) === ('__proto__')){
if(! v1.call(v1, v2)){
return void 0;
}else {
if(v0){
return v0(v1, v2).value;
}
}
}
return v1[v2];
});
(v2.prototype) = ((v0) === (null)) ? (Object.create(v0)) : (((v1.prototype) = v0.prototype, new v1()));
var v3 = (function (v1, v2){
var v3 = (v1) >>> (16);
var v4 = (v1) & (65535);
var v5 = (v2) >>> (16);
var v6 = (v2) & (65535);
return (((v4) * (v6)) + ((((v3) * (v6)) + ((v4) * (v5))) << (16))) | (0);
});
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v0(v1);
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
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v3(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
v3(/(alias|status)$/i, "$1es");
