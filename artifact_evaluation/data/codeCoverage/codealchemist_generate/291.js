// GenBlkBrick
for(v0 in []){
var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v1('./Language');
(v2.exports) = (function (){
var v5 = ({feature : '(?:[Ff]unktionalität|[Ff]eature|[Aa]spekt|[Uu]secase|[Aa]nwendungsfall)', scenario : '(?:[Ss]zenario|[Ss]zenario( g|G)rundriss|[Gg]eschehnis)', examples : '(?:[Bb]eispiele?)', pending : '(?:[Tt]odo|[Oo]ffen)', only : '(?:[Nn]ur|[Ee]inzig)', background : '(?:[Gg]rundlage|[Hh]intergrund|[Ss]etup|[Vv]orausgesetzt)', given : '(?:[Aa]ngenommen|[Gg]egeben( sei(en)?)?|[Mm]it|[Uu]nd|[Aa]ber|[Aa]ußer)', when : '(?:[Ww]enn|[Ff]alls|[Uu]nd|[Aa]ber)', then : '(?:[Dd]ann|[Ff]olglich|[Aa]ußer|[Uu]nd|[Aa]ber)', _steps : []});
return new v4('German', v5);
})();
});
}
// GenBlkBrick
for(var v1 = 0;(v1) < (32);v1++){
{
var v2 = 0;
for(var v3 = 0;((v3) + (v1)) < (v3);v3++){
if((v4[(v3) + (v1)].area) > (v4[v3].area)){
var v5 = v4[(v3) + (v1)];
(v4[(v3) + (v1)]) = v4[v3];
(v4[v3]) = v5;
v2++;
}
}
if((v1) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
(v4) = (v2) ? (v0(v3, v2)) : (('') + (Math.round(v3))).split('.');
var v5 = (function (v1, v2, v3){
return v3(v1, v2, "Function");
});
(v3) = (v3) - ((v2) * ((1000) * (60)));
var v6 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v5, v3);
});
// GenBlkBrick
for((v7) = 0;(v7) < (10);v7++){
// GenBlkBrick
for(var v0 in v0.prototype){
var v8 = (function (v1, v2, v3){
var v4 = v3(325);
(v1.exports) = (function (v1, v2){
var v3 = v4(this, v1), v5 = v3.size;
return (v3.set(v1, v2), (this.size) += ((v3.size) == (v5)) ? (0) : (1), this);
});
});
var v9 = (function (){
(this.regEAWrite) = this.abMem[this.regPC++];
(this.regRN) = (this.regRZ) = (this.abMem[this.regEAWrite]) = ((this.abMem[this.regEAWrite]) - (1)) & (0xff);
});
}
}
(v0[v4[v2]]) = (v0[v4[v2].substring(0, 3)]) = v8(v2);
