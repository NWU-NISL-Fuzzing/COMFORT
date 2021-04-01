var v0 = (function (){
if(this._isDestroyed){
return this;
}
this.triggerMethod('before:render', this);
this._destroyChildren();
if(this.collection){
this._addChildModels(this.collection.models);
this._initialEvents();
}
var v1 = this.getTemplate();
if(v1){
this._renderTemplate(v1);
this.bindUIElements();
}
this._getChildViewContainer();
this.sort();
(this._isRendered) = true;
this.triggerMethod('render', this);
return this;
});
var v1 = (function (v1){
var v2 = (function (){
return 'omg';
});
(function (){
var v3 = ({});
(v3[v2()]) = ({margin : '10px'});
v1.add(v3);
}).apply(this);
});
var v2 = (function (v1, v2, v3){
v2.superclass.call(this, v1, v2);
(v3) = (v3) || (({}));
(this.__min) = v3.min;
(this.__max) = v3.max;
(this.__step) = v3.step;
if(v4.isUndefined(this.__step)){
if((this.initialValue) == (0)){
(this.__impliedStep) = 1;
}else {
(this.__impliedStep) = (Math.pow(10, Math.floor((Math.log(this.initialValue)) / (Math.LN10)))) / (10);
}
}else {
(this.__impliedStep) = this.__step;
}
(this.__precision) = v0(this.__impliedStep);
});
(v0.property) = 12;
Object.defineProperty(v0, "UV4Kind", ({get : (function (){
return v0._UV4Kind;
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v3 = 0;(v3) < (v1);++v3){
(v0.PingPong) = (function (v1, v2){
var v3 = v0.Repeat(v1, (v2) * (2.0));
return (v2) - (Math.abs((v3) - (v2)));
});
}
// GenBlkBrick
for(var v0 in v2){
function v4(v1, v2, v3){
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
(v4) += ((v0(v3)) + (v2(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
}
while(v3--){
new v2();
}
