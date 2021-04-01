var v0 = (function (v1, v2, v3){
var v4 = v3(5244), v5 = v3(5241);
(v1.exports) = (function (v1, v2){
var v3 = v5(v1, v2);
return (v4(v3)) ? (v3) : (void 0);
});
});
(v0.prototype.toString) = (function (){
return ((((((((((("[object dragonBones.Matrix] a:") + (this.a)) + (" b:")) + (this.b)) + (" c:")) + (this.c)) + (" d:")) + (this.d)) + (" tx:")) + (this.tx)) + (" ty:")) + (this.ty);
});
(v0.prototype.getLight) = (function (){
return this._light;
});
(v0.prototype._finalizeFrame) = (function (v1, v2, v3, v4){
(v4) = (v4) || (this._scene.activeCamera._postProcesses);
if(((v4.length) === (0)) || (! this._scene.postProcessesEnabled)){
return;
}
var v5 = this._scene.getEngine();
for(var v6 = 0, v7 = v4.length;(v6) < (v7);v6++){
if((v6) < ((v7) - (1))){
v4[(v6) + (1)].activate(this._scene.activeCamera, v2);
}else {
if(v2){
v5.bindFramebuffer(v2, v3);
}else {
v5.restoreDefaultFramebuffer();
}
}
if(v1){
break ;
}
var v8 = v4[v6];
var v9 = v8.apply();
if(v9){
v8.onBeforeRenderObservable.notifyObservers(v9);
this._prepareBuffers();
v5.bindBuffers(this._vertexBuffers, this._indexBuffer, v9);
v5.draw(true, 0, 6);
v8.onAfterRenderObservable.notifyObservers(v9);
}
}
v5.setDepthBuffer(true);
v5.setDepthWrite(true);
});
(v0.COMPATIBLE_VERSION) = "compatibleVersion";
// GenBlkBrick
for((v1) = 0;(v1) < (10);v1++){
{
var v2 = 0;
for(var v3 = 0;((v3) + (v1)) < (v3);v3++){
if((v4[(v3) + (v1)].area) > (v4[v3].area)){
var v5 = v4[(v3) + (v1)];
(v4[(v3) + (v1)]) = v4[v3];
(v4[v3]) = v5;
v2++;
}
}
if((v1) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
var v4 = (Math.PI) * (((v3) * (v3)) + ((v3) * (v3)));
(v5) = ((v4) <= (0.5)) ? ((v2) / ((v3) + (v1))) : ((v2) / (((2) - (v3)) - (v1)));
