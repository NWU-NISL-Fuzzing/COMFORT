var v0 = (function (){
return this.destroyed;
});
var v1 = (function (){
return this.getPropertyValue('-webkit-mask-box-image-source');
});
(v1.match.Url) = v1.Util.extend(v1.match.Match, ({urlPrefixRegex : /^(https?:\/\/)?(www\.)?/i, protocolRelativeRegex : /^\/\//, protocolPrepended : false, getType : (function (){
return 'url';
}), getUrl : (function (){
var v1 = this.url;
if(((! this.protocolRelativeMatch) && (! this.protocolUrlMatch)) && (! this.protocolPrepended)){
(v1) = (this.url) = ('http://') + (v1);
(this.protocolPrepended) = true;
}
return v1;
}), getAnchorHref : (function (){
var v1 = this.getUrl();
return v1.replace(/&amp;/g, '&');
}), getAnchorText : (function (){
var v2 = this.getUrl();
if(this.protocolRelativeMatch){
(v2) = this.stripProtocolRelativePrefix(v2);
}
if(this.stripPrefix){
(v2) = this.stripUrlPrefix(v2);
}
(v2) = this.removeTrailingSlash(v2);
return v2;
}), stripUrlPrefix : (function (v3){
return v3.replace(this.urlPrefixRegex, '');
}), stripProtocolRelativePrefix : (function (v3){
return v3.replace(this.protocolRelativeRegex, '');
}), removeTrailingSlash : (function (v2){
if((v2.charAt((v2.length) - (1))) === ('/')){
(v2) = v2.slice(0, - 1);
}
return v2;
})}));
var v2 = (function (v1, v2, v3){
return ({restrict : 'A', compile : (function (v4, v5){
var v6 = v2(v5.ngBindHtml);
var v7 = v2(v5.ngBindHtml, (function v8(v9){
return (v9) || ('').toString();
}));
v3.$$addBindingClass(v4);
return (function v10(v11, v12, v13){
v3.$$addBindingInfo(v12, v13.ngBindHtml);
v11.$watch(v7, (function v14(){
v12.html((v1.getTrustedHtml(v6(v11))) || (''));
}));
});
})});
});
// GenBlkBrick
for(var v0 in v2.prototype){
(v0.prototype._userIsMoving) = (function (){
if(! this._attachedCamera){
return false;
}
return ((((((this._attachedCamera.inertialAlphaOffset) !== (0)) || ((this._attachedCamera.inertialBetaOffset) !== (0))) || ((this._attachedCamera.inertialRadiusOffset) !== (0))) || ((this._attachedCamera.inertialPanningX) !== (0))) || ((this._attachedCamera.inertialPanningY) !== (0))) || (this._isPointerDown);
});
var v3 = (function (v1){
if(((v1) % (4096)) > (0)){
(v1) += (4096) - ((v1) % (4096));
}
return v1;
});
}
// GenBlkBrick
for(var v4 = 0;(v4) < (41);v4++){
(v5) = (v4) % (10);
}
(v6) = (v4) ? (v0(v5, v4)) : (('') + (Math.round(v5))).split('.');
{
v6.push((v4) / (v5));
(v4) *= - v3;
}
