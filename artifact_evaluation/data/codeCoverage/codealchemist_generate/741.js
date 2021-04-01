var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("b61c4e14e90e796e36f0d10792fcc505.svg");
});
v0(/s$/i, "");
// GenBlkBrick
for(var v1 = 0;(v1) < (7);v1++){
var v2 = ({type : 'Lagrange'});
}
[].reduce(v0, v1);
var v3 = (function (v1, v2, v3){
(function (v4){
'use strict';
var v5 = v1('readable-stream').Readable, v6 = ({objectMode : true});
function v7(){
if(! (this) instanceof (v7)){
return new v7();
}
(this._inflights) = ({});
}
(v7.prototype.put) = (function (v8, v9){
(this._inflights[v8.messageId]) = v8;
if(v9){
v9();
}
return this;
});
(v7.prototype.createStream) = (function (){
var v10 = new v5(v6), v11 = this._inflights, v12 = Object.keys(this._inflights), v14 = false, v15 = 0;
(v10._read) = (function (){
if((! v14) && ((v15) < (v12.length))){
this.push(v11[v12[v15++]]);
}else {
this.push(null);
}
});
(v10.destroy) = (function (){
if(v14){
return;
}
var v16 = this;
(v14) = true;
v4.nextTick((function (){
v16.emit('close');
}));
});
return v10;
});
(v7.prototype.del) = (function (v8, v9){
(v8) = this._inflights[v8.messageId];
if(v8){
delete this._inflights[v8.messageId];
v9(null, v8);
}else {
if(v9){
v9(new Error('missing packet'));
}
}
return this;
});
(v7.prototype.get) = (function (v8, v9){
(v8) = this._inflights[v8.messageId];
if(v8){
v9(null, v8);
}else {
if(v9){
v9(new Error('missing packet'));
}
}
return this;
});
(v7.prototype.close) = (function (v9){
(this._inflights) = null;
if(v9){
v9();
}
});
(v2.exports) = v7;
}).call(this, v1('_process'));
});
Object.defineProperty(v0.prototype, "instanceDivisor", ({get : (function (){
return this._instanceDivisor;
}), set : (function (v2){
(this._instanceDivisor) = v2;
if((v2) == (0)){
(this._instanced) = false;
}else {
(this._instanced) = true;
}
}), enumerable : true, configurable : true}));
var v4 = ({thereYet : v3, cap : v0});
for(var v5 = 0;- 0;){
v1++;
}
