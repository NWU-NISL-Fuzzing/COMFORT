var v0 = (function (v1, v2){
if((typeof v2) !== ("number")){
(v2) = 0;
}
if(((v2) + (v1.length)) > (this.length)){
return false;
}
return (this.indexOf(v1, v2)) !== (- 1);
});
var v1 = (function (v1){
this.engine.refresh(v1, this.shape.from);
});
if(v1.toSource){
(v0.toSource) = (function v2(){
return v1.toSource();
});
}
function v2(v1, v2, v3, v4){
if((v3) < (v4)){
var v5 = v1(v3, v4);
var v7 = (v3) - (1);
v0(v1, v5, v4);
var v9 = v1[v4];
for(var v10 = v3;(v10) < (v4);v10++){
if((v2(v1[v10], v9)) <= (0)){
(v7) += 1;
v0(v1, v7, v10);
}
}
v0(v1, (v7) + (1), v10);
var v11 = (v7) + (1);
v2(v1, v2, v3, (v11) - (1));
v2(v1, v2, (v11) + (1), v4);
}
}
for(var v3 in v0){
if(v0.hasOwnProperty(v3)){
(v2[v3]) = v0[v3];
}
}
if(v0.hasOwnProperty(v3)){
(v2[v3]) = v0[v3];
}
for(v0 in v1){
if(v1.hasOwnProperty(v0)){
(v3) += v1(v1[v0], v0, "");
}
}
// GenBlkBrick
for(var v4 = 0;(v4) < (41);v4++){
if((v4) === (6)){
break ;
}
// GenBlkBrick
while((v0) >= (0x20)){
var v5 = (function (v1){
(this.points.length) = 0;
this.canvas.clearContext(this.canvas.contextTop);
this._setShadow();
this.drawDot(v1);
});
}
}
