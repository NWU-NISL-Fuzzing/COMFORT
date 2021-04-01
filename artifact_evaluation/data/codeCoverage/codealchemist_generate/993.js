var v0 = (function (v1){
return String(v1.getFullYear());
});
(v0.prototype) = ({constructor : v0, urls : true, email : true, twitter : true, phone : true, hashtag : false, newWindow : true, stripPrefix : true, truncate : undefined, className : "", htmlParser : undefined, matchParser : undefined, tagBuilder : undefined, link : (function (v2){
var v3 = this.getHtmlParser(), v4 = v3.parse(v2), v5 = 0, v6 = [];
for(var v7 = 0, v8 = v4.length;(v7) < (v8);v7++){
var v9 = v4[v7], v10 = v9.getType(), v11 = v9.getText();
if((v10) === ('element')){
if((v9.getTagName()) === ('a')){
if(! v9.isClosing()){
v5++;
}else {
(v5) = Math.max((v5) - (1), 0);
}
}
v6.push(v11);
}else {
if(((v10) === ('entity')) || ((v10) === ('comment'))){
v6.push(v11);
}else {
if((v5) === (0)){
var v13 = this.linkifyStr(v11);
v6.push(v13);
}else {
v6.push(v11);
}
}
}
}
return v6.join("");
}), linkifyStr : (function (v14){
return this.getMatchParser().replace(v14, this.createMatchReturnVal, this);
}), createMatchReturnVal : (function (v15){
var v16;
if(this.replaceFn){
(v16) = this.replaceFn.call(this, this, v15);
}
if((typeof v16) === ('string')){
return v16;
}else {
if((v16) === (false)){
return v15.getMatchedText();
}else {
if((v16) instanceof (v0.HtmlTag)){
return v16.toAnchorString();
}else {
var v17 = this.getTagBuilder(), v18 = v17.build(v15);
return v18.toAnchorString();
}
}
}
}), getHtmlParser : (function (){
var v3 = this.htmlParser;
if(! v3){
(v3) = (this.htmlParser) = new v0.htmlParser.HtmlParser();
}
return v3;
}), getMatchParser : (function (){
var v19 = this.matchParser;
if(! v19){
(v19) = (this.matchParser) = new v0.matchParser.MatchParser(({urls : this.urls, email : this.email, twitter : this.twitter, phone : this.phone, hashtag : this.hashtag, stripPrefix : this.stripPrefix}));
}
return v19;
}), getTagBuilder : (function (){
var v17 = this.tagBuilder;
if(! v17){
(v17) = (this.tagBuilder) = new v0.AnchorTagBuilder(({newWindow : this.newWindow, truncate : this.truncate, className : this.className}));
}
return v17;
})});
(v0.prototype.dispose) = (function (){
var v1 = this._scene.reflectionProbes.indexOf(this);
if((v1) !== (- 1)){
this._scene.reflectionProbes.splice(v1, 1);
}
if(this._renderTargetTexture){
this._renderTargetTexture.dispose();
(this._renderTargetTexture) = null;
}
});
(v0.prototype.isRunning) = (function (){
return (this.timer) !== (null);
});
var v1 = (function (){
var v1 = Array.prototype.slice;
var v3 = this;
var v4 = v1.call(arguments);
return (function (){
return v3.apply(this, v4.concat(v1.call(arguments)));
});
});
var v2 = (function (v1){
return ((v1) && (v1.files)) && ((v1.files.length) > (0));
});
var v3 = (function (v1){
return ((! ! v1) && ((this.width) === (v1.width))) && ((this.height) === (v1.height));
});
var v4 = (function (){
(this.date) = Date.parse('10:30:45 P.M.');
});
