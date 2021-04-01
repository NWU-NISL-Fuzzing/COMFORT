// GenBlkBrick
for((v0) = 0;(v0) < (v1);(v0) += 1){
// GenBlkBrick
for(var v1 = 0;(v1) < (4);v1++){
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
if((v3) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
// GenBlkBrick
for(var v4 = 0;((v4) + (v3)) < (v2);v4++){
(v5) = ((v3) | (0)) <= ((v4) | (0));
var v6 = ({valueOf : (function (){
if((v5) === (true)){
return 3;
}else {
return 2;
}
})});
}
}
// GenBlkBrick
for(var v7 = [], v8 = 0;(256) > (v8);v8++){
if((v7[v1]) === ('')){
continue ;
}
}
(v9) = v7[v1];
if((v4) == (2)){
(v3) += v2[v4];
(v3) += v2[v8];
(v3) += v2[v1];
(v3) += v2[v2];
}
if((v4) > (v2)){
(v4) = (v5) ? (0) : (v2);
}
var v10 = (function (v1, v2){
'use strict';
'ngInject';
(v1.cancel) = (function (){
v2.dismiss();
});
(v1.submit) = (function (){
v2.close(true);
});
});
for(var v11 = 0;(v11) < (v8);v11++){
(v7[v11]) = v6[v11];
}
// GenBlkBrick
for((v12) = 1;(v12) < (1e3);v12++){
var v13 = (function (v1, v2){
if(v2){
(this.JoyPad) &= (0xFF) ^ ((1) << (v1));
if((! this.cGBC) && ((! this.usedBootROM) || (! this.usedGBCBootROM))){
(this.interruptsRequested) |= 0x10;
(this.remainingClocks) = 0;
this.checkIRQMatching();
}
}else {
(this.JoyPad) |= (1) << (v1);
}
(this.memory[0xFF00]) = ((this.memory[0xFF00]) & (0x30)) + (((((this.memory[0xFF00]) & (0x20)) == (0)) ? ((this.JoyPad) >> (4)) : (0xF)) & ((((this.memory[0xFF00]) & (0x10)) == (0)) ? ((this.JoyPad) & (0xF)) : (0xF)));
(this.CPUStopped) = false;
});
}
