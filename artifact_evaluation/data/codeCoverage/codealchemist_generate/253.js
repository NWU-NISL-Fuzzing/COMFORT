var v0 = (function (v1){
v1.addListener("keypress", this.handleKeyPress, this);
});
(v0.prototype.current) = (function v1(){
return this.__current.node;
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
(v0.reIndex) = (function (v1, v2, v3){
var v4 = new v0();
for(var v5 in v1._entries){
var v6 = parseInt(v5);
if((v6) >= (v2)){
(v6) += v3;
}
var v8 = v1.get(v5);
(v8.index) = v6;
v4.set(v6, v8);
}
return v4;
});
(v0._getAnimationBlendType) = (function (v1){
switch(v1.toLowerCase()){
}
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("34e883895743d98cd6e1587a918fd171.svg");
});
function v2(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v1(v3)) + (v0(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
