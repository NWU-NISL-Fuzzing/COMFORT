// GenBlkBrick
for(var v0 = 0;(v0) < (500000);++v0){
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
var v3 = (function (){
this.route('first');
this.route('second');
});
}
(v1) = (v1) - ((v0) * ((((1000) * (60)) * (60)) * (24)));
var v4 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v3, v0);
});
{
var v5 = (v1) - (v2);
(v6) = ((v0) <= (0.5)) ? ((v5) / ((v1) + (v2))) : ((v5) / (((2) - (v1)) - (v2)));
switch(v1){
}
(v7) /= 6;
}
(v4.PATH) = "path";
(v4.prototype.serialize) = (function (v1){
});
for(var v8 = 0;(v8) < (v6);v8++){
(v9) = (v8) % (v3);
v4.push((v2) + (v9), (v1) + (v9));
if((v9) == (v0)){
if(((v8) == (v5)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v2, v1);
}
v4.push(((v1) + (v3)) - (1), v1);
(v6) += v3;
(v2) += v3;
(v1) = 0;
}else {
if(((v8) >= (v5)) && ((v10) == (true))){
v4.push(v2, v1);
}else {
if((v8) < (v5)){
if((v10) == (true)){
v4.push(v2, v1);
}
v4.push(((v1) + (v3)) - (1), v1);
(v2) += v3;
(v1) += v3;
}
}
}
}
}
(v10) = (v8) ? (v4(v2, v8)) : (('') + (Math.round(v2))).split('.');
