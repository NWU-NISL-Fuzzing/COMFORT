var v0 = (function (){
var v1 = [];
if(! this.isEmpty()){
this.root_.traverse_((function (v2){
v1.push(v2.key);
}));
}
return v1;
});
// GenBlkBrick
for((v1) = 0;(v1) < (9);v1++){
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
Math.floor(v3);
var v4 = Math.floor((Math.log(v2)) / (Math.log(v1)));
while((v3--) > (0)){
v0();
}
(v5) = v0(v2, v1, v4);
(v6) = (v3) ? (v0(v5, v3)) : (('') + (Math.round(v5))).split('.');
if((v4) === (1)){
(v7) = (v5) === ("1");
}
