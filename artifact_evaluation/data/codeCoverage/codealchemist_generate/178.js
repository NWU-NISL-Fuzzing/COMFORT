// GenBlkBrick
while((v0) >= (0x20)){
var v0 = (function (v1, v2, v3){
(this.listeners[v1]) = v2;
(this.addListenerCalled) = true;
});
(v0.prototype.isUpdatable) = (function (){
return this._updatable;
});
}
(v0.prototype.detachControl) = (function (v1){
this._leftjoystick.releaseCanvas();
this._rightjoystick.releaseCanvas();
});
(v0.prototype.centerOn) = (function (v1, v2){
(this.minimum) = v1.subtract(v2);
(this.maximum) = v1.add(v2);
(this.boundingBox) = new v3.BoundingBox(this.minimum, this.maximum);
(this.boundingSphere) = new v3.BoundingSphere(this.minimum, this.maximum);
return this;
});
(v0.BLEND_TYPE) = "blendType";
var v1 = (function (v1){
return this.multiply(this, v1);
});
function v2(v1, v2, v3, v4, v5){
(v3) = v1(v3);
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
(v8) = new v0(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
// GenBlkBrick
for(var v3 = 1;(v3) < (2);++v3){
// GenBlkBrick
for(++v4;--v4;(v1) = ((((v1) %= (0x7fffffff) + (1)) & (0x40000000)) === (0x40000000)) ? ((v1) * (2)) : (((((v1) - (0x40000000)) * (2)) + (0x7fffffff)) + (1))){
var v5 = (function (v1, v2, v3){
"use strict";
var v4 = v3(4), v5 = v3(49), v6 = v3(430), v7 = "".startsWith;
v4((v4.P) + ((v4.F) * (v3(431)("startsWith"))), "String", ({startsWith : (function (v1){
var v2 = v6(this, v1, "startsWith"), v3 = v5(Math.min(((arguments.length) > (1)) ? (arguments[1]) : (void 0), v2.length)), v4 = String(v1);
return (v7) ? (v7.call(v2, v4, v3)) : ((v2.slice(v3, (v3) + (v4.length))) === (v4));
})}));
});
var v6 = (function (v1, v2){
var v3 = v1.getProgram();
if(! v3){
return;
}
var v4 = v3.getLastToken();
if((v4) && ((v4.type) === ('EOF'))){
(v4) = v4.getPreviousToken();
}
v3.selectTokensByType('Whitespace').forEach((function (v5){
v5.getValueLineInfo().some((function (v6, v7){
if((this._ignoreEmptyLines) && ((v7) > (0))){
return true;
}
if((v6.text) && ((v6.lineBreak) || ((v5) === (v4)))){
v2.cast(({message : 'Illegal trailing whitespace', element : v5, offset : v6.offset, additional : ({lineNumber : v7})}));
}
}), this);
}), this);
v3.selectTokensByType('CommentBlock').concat(v3.selectTokensByType('CommentLine')).forEach((function (v8){
var v9 = v8.getValueLineInfo();
v9.forEach((function (v6, v7){
if((((v7) > (0)) && (this._ignoreEmptyLines)) && ((v6.text.trim()) === (''))){
return;
}
if(((v8.type) === ('CommentBlock')) && ((v7) === ((v9.length) - (1)))){
return;
}
if(v6.text.match(/\s$/)){
v2.cast(({message : 'Illegal trailing comment', element : v8, offset : v6.offset, additional : ({lineNumber : v7})}));
}
}), this);
}), this);
});
}
}
for(var v7 = 0;(v7) <= (v3);v7++){
v6(v7);
}
