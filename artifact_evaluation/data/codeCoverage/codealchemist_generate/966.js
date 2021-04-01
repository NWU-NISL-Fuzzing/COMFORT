var v0 = (function (v1, v2, v3){
if((typeof v1) === ('function')){
(v1) = v1(v2, v3);
}
if((typeof v1) !== ('string')){
(v1) = this.slice(v1).map(this.str(v2, v3));
}
return v1.toString().split(/[\s,]+/).filter((function (v4){
return v4.length;
}));
});
// GenBlkBrick
for(var v1 = 0;(v1) < (4);v1++){
(v1) |= ((v1) & (255)) << (16);
if((v1) === (6)){
break ;
}
}
var v2 = [].map(v0, false);
(v2.length) = 20;
v2.reduce(v0, v1);
Object.defineProperty(v0.prototype, "gpuFrameTimeCounter", ({get : (function (){
return this._gpuFrameTime;
}), enumerable : true, configurable : true}));
(v2[0]) = v0('a');
// GenBlkBrick
for(var v3 = 0;(v3) < (4);v3++){
if((v3) === (6)){
break ;
}
if((v3) < (20)){
break ;
}
}
