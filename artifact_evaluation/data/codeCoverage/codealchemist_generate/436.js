var v0 = (function (){
var v1 = this.modules;
return Object.keys(v1).map((function (v3){
return v1[v3];
}));
});
(v0.prototype.serialize) = (function (v1){
});
// GenBlkBrick
for(var v1 = 0;(v1) < (2);v1++){
if((v1) === (6)){
break ;
}
if((v1) === (6)){
break ;
}
}
(v1) -= 10;
var v2 = (function (v1, v2){
(v1.exports) = (function (v1, v2, v3){
for(var v4 = - 1, v5 = (v1) ? (v1.length) : (0);(++v4) < (v5);){
if(v3(v2, v1[v4])){
return ! 0;
}
}
return ! 1;
});
});
Array.prototype.reduce.call(v0, v2, v1);
(v0.prototype.copyTo) = (function (v1){
v1.position.copyFrom(this.position);
v1.direction.copyFrom(this.direction);
v1.color.copyFrom(this.color);
v1.colorStep.copyFrom(this.colorStep);
(v1.lifeTime) = this.lifeTime;
(v1.age) = this.age;
(v1.size) = this.size;
(v1.angle) = this.angle;
(v1.angularSpeed) = this.angularSpeed;
(v1.particleSystem) = this.particleSystem;
(v1.cellIndex) = this.cellIndex;
});
var v3 = (function (v1){
if(! this.peers.contains(v1)){
}else {
this.peers.remove(v1);
this.set('numpeers', this.peers.items.length);
}
});
