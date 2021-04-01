// GenBlkBrick
for(var v0 = 0;(v0) < (v1);(v0) += 3){
{
var v1 = 0;
for(var v2 = 0;((v2) + (v0)) < (v3);v2++){
if((v4[(v2) + (v0)].area) > (v4[v2].area)){
var v5 = v4[(v2) + (v0)];
(v4[(v2) + (v0)]) = v4[v2];
(v4[v2]) = v5;
v1++;
}
}
if((v0) == (1)){
if((v1) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
}
// GenBlkBrick
for(var v3 = 0x3041;(v3) <= (0x3094);v3++){
var v4 = (function (v1, v2, v3){
"use strict";
var v4 = v3(1900);
(v1.exports) = (function (){
return ! v4.isSamsungBrowser();
});
});
(v5) = (v1) ? (v4(v3, v1)) : (('') + (Math.round(v3))).split('.');
}
while((++v2) < (v3)){
var v2 = v3[v2];
if(v4(v2, v2, v3)){
(v5[v0++]) = v2;
}
}
while((++v3) < (v0)){
var v2 = v3[v3];
if(v4(v2, v3, v3)){
(v5[v1++]) = v2;
}
}
(v5[(v1) - (1)]) = v5[v0];
(v6) = v4(v2, v3, v1);
if((v0) && (! v0.skills_has("cheffery_1"))){
v5.push([]);
}
while((++v3) < (v6)){
var v2 = v3[v3];
if(v4(v2, v3, v3)){
(v5[v2++]) = v2;
}
}
