var v0 = (function (){
this.close();
this._dispatchFrame.parentNode.removeChild(this._dispatchFrame);
(this._dispatchFrame) = null;
this._cleanupFrame();
});
(v0.HtmlTag) = v0.Util.extend(Object, ({whitespaceRegex : /\s+/, constructor : (function (v2){
v0.Util.assign(this, v2);
(this.innerHtml) = (this.innerHtml) || (this.innerHTML);
}), setTagName : (function (v3){
(this.tagName) = v3;
return this;
}), getTagName : (function (){
return (this.tagName) || ("");
}), setAttr : (function (v4, v5){
var v6 = this.getAttrs();
(v6[v4]) = v5;
return this;
}), getAttr : (function (v4){
return this.getAttrs()[v4];
}), setAttrs : (function (v7){
var v6 = this.getAttrs();
v0.Util.assign(v6, v7);
return this;
}), getAttrs : (function (){
return (this.attrs) || ((this.attrs) = ({}));
}), setClass : (function (v8){
return this.setAttr('class', v8);
}), addClass : (function (v8){
var v9 = this.getClass(), v10 = this.whitespaceRegex, v11 = v0.Util.indexOf, v12 = (! v9) ? ([]) : (v9.split(v10)), v13 = v8.split(v10), v14;
while((v14) = v13.shift()){
if((v11(v12, v14)) === (- 1)){
v12.push(v14);
}
}
(this.getAttrs()['class']) = v12.join(" ");
return this;
}), removeClass : (function (v8){
var v9 = this.getClass(), v10 = this.whitespaceRegex, v11 = v0.Util.indexOf, v12 = (! v9) ? ([]) : (v9.split(v10)), v15 = v8.split(v10), v16;
while((v12.length) && ((v16) = v15.shift())){
var v17 = v11(v12, v16);
if((v17) !== (- 1)){
v12.splice(v17, 1);
}
}
(this.getAttrs()['class']) = v12.join(" ");
return this;
}), getClass : (function (){
return (this.getAttrs()['class']) || ("");
}), hasClass : (function (v8){
return (((' ') + (this.getClass())) + (' ').indexOf(((' ') + (v8)) + (' '))) !== (- 1);
}), setInnerHtml : (function (v18){
(this.innerHtml) = v18;
return this;
}), getInnerHtml : (function (){
return (this.innerHtml) || ("");
}), toAnchorString : (function (){
var v3 = this.getTagName(), v19 = this.buildAttrsStr();
(v19) = (v19) ? ((' ') + (v19)) : ('');
return [].join("");
}), buildAttrsStr : (function (){
if(! this.attrs){
return "";
}
var v7 = this.getAttrs(), v20 = [];
for(var v21 in v7){
if(v7.hasOwnProperty(v21)){
v20.push((((v21) + ('="')) + (v7[v21])) + ('"'));
}
}
return v20.join(" ");
})}));
(v0.prototype.create) = (function (v1){
if((! v1) && (this._buffer)){
return;
}
(v1) = (v1) || (this._data);
if(! this._buffer){
if(this._updatable){
(this._buffer) = this._engine.createDynamicVertexBuffer(v1);
(this._data) = v1;
}else {
(this._buffer) = this._engine.createVertexBuffer(v1);
}
}else {
if(this._updatable){
this._engine.updateDynamicVertexBuffer(this._buffer, v1);
(this._data) = v1;
}
}
});
var v1 = (function (v1){
return ! ! this.__actions[v1];
});
// GenBlkBrick
for(var v2 = 0;(v2) < (3);v2++){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
Array.prototype.reduce.call(v1, v0, v3);
(v5) = v1(v3, v2, v4);
var v6 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("b77f03b86b600f905cb12fca49cecf28.svg");
});
