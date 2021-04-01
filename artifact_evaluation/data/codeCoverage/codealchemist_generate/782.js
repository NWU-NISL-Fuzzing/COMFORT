var v0 = (function (v1, v2){
return (((void 0) === (v2)) && ((v2) = 0), (this.r) = v1[v2], (this.g) = v1[(v2) + (1)], (this.b) = v1[(v2) + (2)], this);
});
// GenBlkBrick
for(var v1, v2 = [], v3 = 0;(v3) < (256);v3++){
{
v3++;
if((v1) < (20)){
break ;
}
if((v3) > (10)){
(v1) = 200;
v3++;
}
}
(v3) *= Math.pow(2.0, (v1) / (4.0));
}
// GenBlkBrick
for(;(v1) >= (0);--v1){
if((v1) <= (1)){
(v4) = true;
}
}
v2.reduce(v0, v3);
{
(v5) = (v3) / (v1);
(v10) = v0(v5, v6, v5);
(v11) = v0(v8, v9, v5);
(v6) = v0(v6, v11, v5);
(v7) = v0(v9, v13, v5);
(v8) = v0(v10, v6, v5);
(v9) = v0(v11, v7, v5);
v2.push(v8, v9);
}
if((v5) > (v1)){
(v5) = (v4) ? (0) : (v1);
}
while(v1--){
new v0();
}
Object.defineProperty(v0.prototype, "captureGPUFrameTime", ({get : (function (){
return this._captureGPUFrameTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureGPUFrameTime)){
return;
}
(this._captureGPUFrameTime) = v2;
if(v2){
(this._onBeginFrameObserver) = this.engine.onBeginFrameObservable.add((function (){
if(! v3._gpuFrameTimeToken){
(v3._gpuFrameTimeToken) = v3.engine.startTimeQuery();
}
}));
(this._onEndFrameObserver) = this.engine.onEndFrameObservable.add((function (){
if(! v3._gpuFrameTimeToken){
return;
}
var v4 = v3.engine.endTimeQuery(v3._gpuFrameTimeToken);
if((v4) > (- 1)){
(v3._gpuFrameTimeToken) = null;
v3._gpuFrameTime.fetchNewFrame();
v3._gpuFrameTime.addCount(v4, true);
}
}));
}else {
this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver);
(this._onBeginFrameObserver) = null;
this.engine.onEndFrameObservable.remove(this._onEndFrameObserver);
(this._onEndFrameObserver) = null;
}
}), enumerable : true, configurable : true}));
