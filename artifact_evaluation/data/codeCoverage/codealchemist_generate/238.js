var v0 = (function (){
var v1 = Object.getOwnPropertyDescriptor(Number, "length");
if((((((v1.writable) === (false)) && ((v1.enumerable) === (false))) && ((v1.configurable) === (false))) && ((v1.hasOwnProperty('get')) === (false))) && ((v1.hasOwnProperty('set')) === (false))){
return true;
}
});
(v0.FRAME_Y) = "frameY";
(v0.prototype._detachCameras) = (function (v1){
var v2 = v3.Tools.MakeArray((v1) || (this._cameras));
if(! v2){
return;
}
for(var v4 = 0;(v4) < (v2.length);v4++){
var v5 = v2[v4];
var v6 = v5.name;
v5.detachPostProcess(this._postProcesses[(this._singleInstance) ? (0) : (v6)]);
if(this._cameras[v6]){
(this._cameras[v6]) = null;
}
for(var v7 in this._renderPasses){
this._renderPasses[v7]._decRefCount();
}
}
});
// GenBlkBrick
for((v1) = 0;(v1) < ((v1) + (1));v1++){
if((v1) !== (0)){
(v1) += (v1) - (v1);
}
if((v1) < (20)){
break ;
}
}
for(var v2 = 0;(v2) <= (v1);v2++){
v0(v2);
}
function v3(v1){
try{
throw v1;
}catch(v2){
return v2;
}
}
var v4 = (function (){
var v1 = this.average();
(this.asc) = (((this.forceup) || (this.isgrace)) || ((v1) < (6))) && (! this.forcedown);
return this.asc;
});
(v5) = (v2) ? (v4(v1, v2)) : (('') + (Math.round(v1))).split('.');
