var v0 = (function (){
(this.abMem[this.regS--]) = this.regA;
(this.regS) |= 0x100;
});
// GenBlkBrick
for(var v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = (1) / (3), v7 = 0;(v7) < (v7);++v7){
var v8 = (v1) / (1000);
}
if((v4) === (v4)){
(v4) = ((v4) <= (v3)) ? (v4) : (v3);
(v4) = ((v4) >= (v8)) ? (v4) : (v8);
}
(v9) = (v2) ? (v0(v3, v2)) : (('') + (Math.round(v3))).split('.');
(v10) = (v5) ? (v0(v1, v5)) : (('') + (Math.round(v1))).split('.');
{
(v11) = (v1) / (v3);
(v16) = v0(v5, v6, v11);
(v17) = v0(v8, v9, v11);
(v12) = v0(v6, v11, v11);
(v13) = v0(v9, v13, v11);
(v14) = v0(v16, v12, v11);
(v15) = v0(v17, v13, v11);
v10.push(v14, v15);
}
while((v2) < (v11)){
(v9[v2++]) = v4;
(v4) += v12;
}
v10.reduce(v0, v5);
