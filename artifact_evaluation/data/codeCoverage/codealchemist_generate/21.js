var v0 = (function (v1){
this._pool.push(v1);
});
// GenBlkBrick
for((v1) = (v2) = 0;((0) <= (v2)) ? ((v2) < (v2)) : ((v2) > (v2));(v1) = ((0) <= (v2)) ? (++v2) : (--v2)){
if((v2) == (1)){
if((v1) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
(v3) = ((v2) | (0)) > ((v1) | (0));
if(v3){
(v1) = v2;
}else {
(v1) = 0.5;
}
(v4) = (v1) ? (v0(v2, v1)) : (('') + (Math.round(v2))).split('.');
function v5(){
if(! v3){
(v3) = true;
v0(v3.get());
}
return v4;
}
Object.defineProperty(v4, "1", ({get : (function (){
v1++;
return 9;
}), configurable : true}));
// GenBlkBrick
for(++v6;--v6;(v1) = ((((v1) %= (0x7fffffff) + (1)) & (0x40000000)) === (0x40000000)) ? ((v1) * (2)) : (((((v1) - (0x40000000)) * (2)) + (0x7fffffff)) + (1))){
if((v6) > (5)){
(v2) = (v2) + (v2);
break ;
}
}
