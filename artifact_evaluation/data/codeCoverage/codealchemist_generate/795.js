// GenBlkBrick
for(var v0 = 1;(v0) < (v1);v0++){
for(var v1 = 0;(v1) < (10);v1++){
if((v1) > (5)){
(v0) = (v0) + (v2);
break ;
}
}
// GenBlkBrick
for(var v2 = 0;(v2) < (500000);++v2){
if(((v3) = (v1) >> (2)) != (0)){
(v1) = v3;
(v2) += 2;
}
}
}
var v4 = (function (){
var v1 = this.buf;
var v2 = this.pos;
(this.pos) += 8;
if((this.pos) > (v1.length)){
return;
}
return this.buf.readDoubleLE(v2);
});
for(var v5 = 0;(v5) < (v1);v5++){
(v0) += (v1) * (v4[v5]);
(v1) *= (v5) - (v6);
}
(v1) |= ((v1) >> (4)) & (268435455);
switch(v0){
}
for(var v6 = 0;(v6) < (v3);v6++){
(v7) = (v6) % (v3);
v4.push((v2) + (v7), (v0) + (v7));
if((v7) == (v1)){
if(((v6) == (v5)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v2, v0);
}
v4.push(((v0) + (v3)) - (1), v0);
(v3) += v3;
(v2) += v3;
(v0) = 0;
}else {
if(((v6) >= (v5)) && ((v10) == (true))){
v4.push(v2, v0);
}else {
if((v6) < (v5)){
if((v10) == (true)){
v4.push(v2, v0);
}
v4.push(((v0) + (v3)) - (1), v0);
(v2) += v3;
(v0) += v3;
}
}
}
}
}
(v8) = (v7) ? (v4(v1, v7)) : (('') + (Math.round(v1))).split('.');
(v8[0]) = (v1) * (v2);
