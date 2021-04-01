var v0 = (function (v1, v2, v3){
var v4 = v3(321);
(v1.exports) = (function (v1){
return v4(this, v1).get(v1);
});
});
(v0.prototype.intersectsBoxMinMax) = (function (v1, v2){
var v3 = 0.0;
var v4 = Number.MAX_VALUE;
var v6;
var v7;
var v8;
var v9;
if((Math.abs(this.direction.x)) < (0.0000001)){
if(((this.origin.x) < (v1.x)) || ((this.origin.x) > (v2.x))){
return false;
}
}else {
(v6) = (1.0) / (this.direction.x);
(v7) = ((v1.x) - (this.origin.x)) * (v6);
(v8) = ((v2.x) - (this.origin.x)) * (v6);
if((v8) === (- Infinity)){
(v8) = Infinity;
}
if((v7) > (v8)){
(v9) = v7;
(v7) = v8;
(v8) = v9;
}
(v3) = Math.max(v7, v3);
(v4) = Math.min(v8, v4);
if((v3) > (v4)){
return false;
}
}
if((Math.abs(this.direction.y)) < (0.0000001)){
if(((this.origin.y) < (v1.y)) || ((this.origin.y) > (v2.y))){
return false;
}
}else {
(v6) = (1.0) / (this.direction.y);
(v7) = ((v1.y) - (this.origin.y)) * (v6);
(v8) = ((v2.y) - (this.origin.y)) * (v6);
if((v8) === (- Infinity)){
(v8) = Infinity;
}
if((v7) > (v8)){
(v9) = v7;
(v7) = v8;
(v8) = v9;
}
(v3) = Math.max(v7, v3);
(v4) = Math.min(v8, v4);
if((v3) > (v4)){
return false;
}
}
if((Math.abs(this.direction.z)) < (0.0000001)){
if(((this.origin.z) < (v1.z)) || ((this.origin.z) > (v2.z))){
return false;
}
}else {
(v6) = (1.0) / (this.direction.z);
(v7) = ((v1.z) - (this.origin.z)) * (v6);
(v8) = ((v2.z) - (this.origin.z)) * (v6);
if((v8) === (- Infinity)){
(v8) = Infinity;
}
if((v7) > (v8)){
(v9) = v7;
(v7) = v8;
(v8) = v9;
}
(v3) = Math.max(v7, v3);
(v4) = Math.min(v8, v4);
if((v3) > (v4)){
return false;
}
}
return true;
});
(v0.prototype.addVisitor) = (function (v1){
this.visitors.push(v1);
});
// GenBlkBrick
for(var v1 = 0;- 0;){
if((v1) < (20)){
break ;
}
}
{
(v2) = (v1) === (0);
}
(v3) = ((v1) | (0)) < (- 4);
function v4(){
if(! v3){
(v3) = true;
v0(v3.get());
}
return v4;
}
while(v1--){
new v4();
}
