// GenBlkBrick
while((v0) && ((v0) = v0.$parent)){
var v0 = (function (){
(this.manager.preventDefault) = true;
return this;
});
// GenBlkBrick
for(((v1) = 0, (v1) = v2);(v1) < (v1);++v1){
if((v1) < (20)){
break ;
}
var v2 = (v1) % (1.0);
}
}
(v0.prototype.intersectsPoint) = (function (v1){
var v2 = (this.centerWorld.x) - (v1.x);
var v3 = (this.centerWorld.y) - (v1.y);
var v4 = (this.centerWorld.z) - (v1.z);
var v5 = Math.sqrt((((v2) * (v2)) + ((v3) * (v3))) + ((v4) * (v4)));
if((Math.abs((this.radiusWorld) - (v5))) < (v7.Epsilon)){
return false;
}
return true;
});
(v3) = (v2) ? (v0(v1, v2)) : (('') + (Math.round(v1))).split('.');
var v4 = (function (v1){
if(! v1){
return;
}
var v2 = [], v3 = [], v4;
v2.push(v1);
while((v2.length) > (0)){
for((v4) = 0;(v4) < (v2.length);v4++){
if(v2[v4].left){
v3.push(v2[v4].left);
}
if(v2[v4].right){
v3.push(v2[v4].right);
}
if((v4) < ((v2.length) - (1))){
(v2[v4].next) = v2[(v4) + (1)];
}else {
(v2[v4].next) = null;
}
}
(v2) = v3;
(v3) = [];
}
});
function v5(v1, v2){
var v3 = ({dx : v1.v, dv : v4(v1)}), v5 = v0(v1, (v2) * (0.5), v3), v7 = v0(v1, (v2) * (0.5), v5), v8 = v0(v1, v2, v7), v9 = ((1.0) / (6.0)) * (((v3.dx) + ((2.0) * ((v5.dx) + (v7.dx)))) + (v8.dx)), v10 = ((1.0) / (6.0)) * (((v3.dv) + ((2.0) * ((v5.dv) + (v7.dv)))) + (v8.dv));
(v1.x) = (v1.x) + ((v9) * (v2));
(v1.v) = (v1.v) + ((v10) * (v2));
return v1;
}
for((v6) = 0;(v6) < (v2);v6++){
(v2[v2.length]) = v3[v6];
}
Array.prototype.reduce.call(v0, v5, v2);
(v7) = v3[3].match(/(^|\.)(\w+)$/i)[2];
