var v0 = (function (v1){
(this.dom) = v1;
});
var v1 = (function (){
if(! this.match){
return this.custom.xhr.getAllResponseHeaders();
}
var v1 = this.custom.responseHeaders;
var v2 = '';
for(var v3 in v1){
if(! v1.hasOwnProperty(v3)){
continue ;
}
(v2) += (((v3) + (': ')) + (v1[v3])) + ('\r\n');
}
return v2;
});
(v0.prototype._getProperty) = (function (v1){
return this._actionManager._getProperty(v1);
});
// GenBlkBrick
for(var v0 in v1.prototype){
Object.defineProperty(v1.prototype, "gpuFrameTimeCounter", ({get : (function (){
return this._gpuFrameTime;
}), enumerable : true, configurable : true}));
}
// GenBlkBrick
for(var v2 = 5;(v2) < (10);v2++){
// GenBlkBrick
for((v3) = 0;(v3) < (v1);v3++){
for(var v4 = 0;- 0;){
v3++;
}
}
}
function v5(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v0(v3);
(v4) += v1(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
(v6) = v1(v4, v2, v3);
var v7 = ((v4) * (v4)) - (((4) * (v3)) * (v2));
