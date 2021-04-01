var v0 = (function (){
if(this.options.parsed){
return this.options.parsed.call(this, this.columns);
}
});
var v1 = ({className : 'tag', begin : /\\/, relevance : 0, contains : []});
(v1.help_button) = "Help";
// GenBlkBrick
for((v2) = 0;(v2) < (v1);(v2) += 1){
if((v2) === (6)){
break ;
}
// GenBlkBrick
for(var v3 = (v1) - (1);(v3) >= (0);v3--){
var v4 = (function (v1, v2, v3){
"use strict";
var v4 = v3(5), v5 = v3(506);
v4((v4.P) + ((v4.F) * (! v3(83)([].reduceRight, ! 0))), "Array", ({reduceRight : (function (v1){
return v5(this, v1, arguments.length, arguments[1], ! 0);
})}));
});
function v5(v1, v2, v3){
var v4 = ({'ss' : (v2) ? ('секунда_секунди_секунд') : ('секунду_секунди_секунд'), 'mm' : (v2) ? ('хвилина_хвилини_хвилин') : ('хвилину_хвилини_хвилин'), 'hh' : (v2) ? ('година_години_годин') : ('годину_години_годин'), 'dd' : 'день_дні_днів', 'MM' : 'місяць_місяці_місяців', 'yy' : 'рік_роки_років'});
if((v3) === ('m')){
return (v2) ? ('хвилина') : ('хвилину');
}else {
if((v3) === ('h')){
return (v2) ? ('година') : ('годину');
}else {
return ((v1) + (' ')) + (v4(v4[v3], + v1));
}
}
}
}
}
(v1.h) = v2;
for(var v6 = 0;(v6) < (v1.length);v6++){
var v2 = v1[v6];
var v3 = (v4) ? (v5.apply(v4, [])) : (v5(v2, v6, v1));
if((v3) > (v2)){
(v2) = v3;
(v7) = v2;
}
}
while((++v3) < (v6)){
var v2 = v3[v3];
if(v4){
(v1[v2]) = v4[v3];
}else {
(v1[v2[0]]) = v2[1];
}
}
// GenBlkBrick
for((((v2) < (0)) && (((v2) += v3) < (0))) && ((v2) = 0);(v2) < (v3);++v2){
(v4.LENGTHS) = "lengths";
(v3) = ((v3) & (2147483647)) | (0);
}
