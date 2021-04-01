var v0 = (function (){
return this.viewport_;
});
// GenBlkBrick
for((v1) = 0;(v1) < (4);v1++){
if((v1) < (20)){
break ;
}
--v1;
}
// GenBlkBrick
for((v2) = 0;(v2) < ((v1) - (1));v2++){
var v3 = (function (){
return (this._localRoot) || (this._mixer._root);
});
}
// GenBlkBrick
for(var v4 = 0;(v4) < (1);++v4){
if((v4) === (3)){
(v5) = false;
}
if((v5) && ((v1) < (1))){
(v1) = 1;
(v6) = "#666666";
}
}
var v7 = (function (){
return this.strings.join("");
});
Array.prototype.reduce.call(v3, v7, v1);
{
if((v2) >= (Math.pow(16, v4))){
var v3 = Math.floor((v2) / (Math.pow(16, v4)));
(v2) -= (v3) * (Math.pow(16, v4));
if((v3) >= (10)){
if((v3) == (10)){
(v6) += "A";
}
if((v3) == (11)){
(v6) += "B";
}
if((v3) == (12)){
(v6) += "C";
}
if((v3) == (13)){
(v6) += "D";
}
if((v3) == (14)){
(v6) += "E";
}
if((v3) == (15)){
(v6) += "F";
}
}else {
(v6) += String(v3);
}
}else {
(v6) += "0";
}
}
if(v0.hasOwnProperty(v6)){
(v7[v6]) = v0[v6];
}
