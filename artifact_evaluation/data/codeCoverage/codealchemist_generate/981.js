var v0 = (function (v1, v2, v3){
v3(106)("Int8", 1, (function (v1){
return (function (v2, v3, v4){
return v1(this, v2, v3, v4);
});
}));
});
(v0.prototype.reset) = (function (){
(this.length) = 0;
this._duplicateId++;
});
// GenBlkBrick
for(var v1 = 10;(v1) < (14);v1++){
var v2 = (function (v1){
v1.parentNode.appendChild(v1);
});
{
var v3 = 0;
for(var v4 = 0;((v4) + (v1)) < (v3);v4++){
if((v4[(v4) + (v1)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v1)];
(v4[(v4) + (v1)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v1) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
var v5 = ((v1) * (v1)) - (((4) * (v3)) * (v4));
[].reduce(v0, v4);
function v6(v1, v2){
var v3 = ({dx : v1.v, dv : v0(v1)}), v5 = v2(v1, (v2) * (0.5), v3), v7 = v2(v1, (v2) * (0.5), v5), v8 = v2(v1, v2, v7), v9 = ((1.0) / (6.0)) * (((v3.dx) + ((2.0) * ((v5.dx) + (v7.dx)))) + (v8.dx)), v10 = ((1.0) / (6.0)) * (((v3.dv) + ((2.0) * ((v5.dv) + (v7.dv)))) + (v8.dv));
(v1.x) = (v1.x) + ((v9) * (v2));
(v1.v) = (v1.v) + ((v10) * (v2));
return v1;
}
Array.prototype.reduce.call(v6, v0, v5);
(v7) = v2(v5, v1, v4);
