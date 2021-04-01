var v0 = (function (v1){
return (v1) > (0);
});
(v0.match.Url) = v0.Util.extend(v0.match.Match, ({urlPrefixRegex : /^(https?:\/\/)?(www\.)?/i, protocolRelativeRegex : /^\/\//, protocolPrepended : false, getType : (function (){
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
var v1 = (function (v1){
this.behavior.createColumns();
});
// GenBlkBrick
for(;(v0) < (10);){
// GenBlkBrick
for(var v2 = 1;(v2) < (v1);v2++){
{
v2++;
}
}
var v3 = (function (v1, v2){
var v3 = v1.get('ariaLabel'), v4 = v1.get('ariaLabelledBy'), v5 = v1.get('ariaDescribedBy');
if(v3){
v2.attr('aria-label', v3);
}
if(v4){
v2.attr('aria-labelledby', v4);
}
if(v5){
v2.attr('aria-describedby', v5);
}
});
}
Array.prototype.reduce.call(v3, v0, v2);
Object.defineProperty(v3.prototype, "opaqueSortCompareFn", ({set : (function (v2){
(this._opaqueSortCompareFn) = v2;
if(v2){
(this._renderOpaque) = this.renderOpaqueSorted;
}else {
(this._renderOpaque) = v3.renderUnsorted;
}
}), enumerable : true, configurable : true}));
function v4(v1, v2, v3, v4, v5){
(v3) = v3(v3);
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
(v8) = new v1(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
// GenBlkBrick
for(var v5 = 0;- 0;){
(v5) |= ((v5) >> (2)) & (1073741823);
var v6 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (function (v1){
var v2 = (((v5) + ((Math.random()) * (16))) % (16)) | (0);
(v5) = Math.floor((v5) / (16));
return ((v1) == ('x')) ? (v2) : (((v2) & (0x3)) | (0x8)).toString(16);
}));
}
