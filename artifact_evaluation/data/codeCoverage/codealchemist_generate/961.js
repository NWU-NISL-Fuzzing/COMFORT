var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(2099);
(v1.exports) = (function (v1){
var v2, v3, v5, v6;
return (((v1.data) && (! v1.errors)) ? ((v1.data.tokenizeCreditCard) ? (((v3) = v1.data.tokenizeCreditCard, (v5) = v3.creditCard, (v6) = v5.last4.substr(2, 4), (v2) = ({creditCards : []}))) : ((v1.data.tokenizeCvv) && ((v2) = (function (v1){
return ({creditCards : []});
})(v1)))) : ((v2) = v4(v1)), v2);
});
});
(v0.prototype.visitConditional) = (function (v1){
return v1.update(this.visit(v1.test), this.visit(v1.ifTrue), this.visit(v1.ifFalse));
});
(v0.prototype.dispose) = (function (){
this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver);
(this._onBeginFrameObserver) = null;
this.engine.onEndFrameObservable.remove(this._onEndFrameObserver);
(this._onEndFrameObserver) = null;
this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver);
(this._onBeforeShaderCompilationObserver) = null;
this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver);
(this._onAfterShaderCompilationObserver) = null;
(this.engine) = null;
});
(v0.prototype.collectDataFromObject) = (function (v1){
var v2 = ({});
return v2;
});
// GenBlkBrick
for(var v1 = 1;(v1) <= (v1);v1++){
v1--;
// GenBlkBrick
for(var v2 = [], v3 = 0;(256) > (v3);v3++){
Object.freeze(v2);
// GenBlkBrick
for(var v4 = 1;(v4) < (v1);v4++){
{
var v5 = 0;
for(var v6 = 0;((v6) + (v4)) < (v3);v6++){
if((v4[(v6) + (v4)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v4)];
(v4[(v6) + (v4)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v4) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v4) = Math.floor(((v4) * (10)) / (13));
}
}
}
}
}
function v7(){
var v1 = v2('#textInput'), v3 = v2('#results');
var v4;
v1.keyup((function (){
var v5 = v2(this).val();
v3.empty();
if((v4) && ((v4.state()) === ('pending'))){
v4.abort();
}
(v4) = v0(v5);
v4.then((function (v7){
var v8 = v7[1];
v2.each(v8, (function (v9, v10){
v2((('<li>') + (v10)) + ('</li>')).appendTo(v3);
}));
}), (function (v11){
if((v11.statusText) !== ('abort')){
v2((('<li>') + (v11.statusText)) + ('</li>')).appendTo(v3);
}
}));
}));
}
// GenBlkBrick
for((v8) = 0;(v8) < (1e3);v8++){
{
var v9 = 0;
for(var v10 = 0;((v10) + (v8)) < (v3);v10++){
if((v4[(v10) + (v8)].area) > (v4[v10].area)){
var v5 = v4[(v10) + (v8)];
(v4[(v10) + (v8)]) = v4[v10];
(v4[v10]) = v5;
v9++;
}
}
if((v8) == (1)){
if((v9) == (0)){
break ;
}
}else {
(v8) = Math.floor(((v8) * (10)) / (13));
}
}
}
while((++v1) < (v1)){
(v2[v1]) = v10;
(v4[v1]) = (Math.sin(v10)) + ((((2) * (Math.random())) - (1)) * (v6));
(v10) += (v3) * ((1) + ((((2) * (Math.random())) - (1)) * (v8)));
}
