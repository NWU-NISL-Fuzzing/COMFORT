var v0 = (function (v1, v2){
var v3 = ({x : (v2.x) - (v1.x), y : (v2.y) - (v1.y)});
return (v3.x) * (v3.y);
});
(v0.PATTERN_ERROR) = 3;
var v1 = (function (v1, v2, v3){
"use strict";
v3(134);
v3(0);
});
if(v1.toSource){
(v0.toSource) = (function v2(){
return v1.toSource();
});
}
// GenBlkBrick
for(var v2 = 0;(v2) < (4);v2++){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
for(var v5 = 0;(v5) <= (v3);v5++){
v0(v5);
}
(v6) = v0(v5, v3, v4);
(v0.prototype.clear) = (function (){
for(var v1 = 0, v2 = this._animatebles;(v1) < (v2.length);v1++){
var v3 = v2[v1];
if((v3) !== (null)){
(v3.clock) = null;
}
}
});
