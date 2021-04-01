// GenBlkBrick
for((v0) = 1;(v0) < (1e3);v0++){
var v1 = v0;
}
var v2 = ((1) << (v0)) - (1);
var v3 = Math.max(Math.ceil(((v2) - (v1)) / (v0)), 0);
(v4) = (v3) << (v0);
// GenBlkBrick
for(;(v0) >= (8);((v1[(v2) + (v4)]) = (v2) & (0xff), (v4) += v1, (v2) /= 256, (v0) -= 8)){
// GenBlkBrick
while((v1) <= (v1)){
// GenBlkBrick
for(var v5 = 0;(v5) < (2);v5++){
var v6 = (function (){
this.emit('data', (('\n1..') + (this.count)) + ('\n'));
this.emit('data', (('# tests ') + (this.count)) + ('\n'));
this.emit('data', (('# pass  ') + (this.pass)) + ('\n'));
if(this.fail){
this.emit('data', (('# fail  ') + (this.fail)) + ('\n'));
}else {
this.emit('data', '\n# ok\n');
}
this.emit('end');
});
var v7 = ((v5) < (0)) ? (- 1) : (1);
}
}
}
// GenBlkBrick
for((v8) = 0;(v8) < (v2);(v8) += 1){
{
var v9 = 0;
for(var v10 = 0;((v10) + (v8)) < (v3);v10++){
if((v4[(v10) + (v8)].area) > (v4[v10].area)){
var v5 = v4[(v10) + (v8)];
(v4[(v10) + (v8)]) = v4[v10];
(v4[v10]) = v5;
v9++;
}
}
if((v8) == (1)){
if((v9) == (0)){
break ;
}
}else {
(v8) = Math.floor(((v8) * (10)) / (13));
}
}
if((v7) === (6)){
break ;
}
}
var v11 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v6, v4);
});
{
(v12) = (v7) & (v8);
(v12) = (v7) | (v8);
(v12) = (v7) ^ (v8);
(v12) = (v7) << (v8);
(v12) = (v7) >> (v8);
(v12) = (v7) >>> (v8);
(v12) = ~ v7;
(v12) = (v7) & (v8);
(v12) = (v7) | (v8);
(v12) = (v7) ^ (v8);
(v12) = (v7) << (v8);
(v12) = (v7) >> (v8);
(v12) = (v7) >>> (v8);
(v12) = ~ v7;
(v12) = (v7) & (v8);
(v12) = (v7) | (v8);
(v12) = (v7) ^ (v8);
(v12) = (v7) << (v8);
(v12) = (v7) >> (v8);
(v12) = (v7) >>> (v8);
(v12) = ~ v7;
(v12) = (v7) & (v8);
(v12) = (v7) | (v8);
(v12) = (v7) ^ (v8);
(v12) = (v7) << (v8);
(v12) = (v7) >> (v8);
(v12) = (v7) >>> (v8);
(v12) = ~ v7;
(v12) = (v7) & (v8);
(v12) = (v7) | (v8);
(v12) = (v7) ^ (v8);
(v12) = (v7) << (v8);
(v12) = (v7) >> (v8);
(v12) = (v7) >>> (v8);
(v12) = ~ v7;
}
