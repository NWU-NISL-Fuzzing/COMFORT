// GenBlkBrick
for((v0) = 0;(v0) < (v1);(v0) = (v0) + (1)){
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
{
(v0) >>>= 1;
(v1) >>>= 1;
(v2) += 1;
}
}
var v3 = (function (v1, v2, v3){
var v4 = ({ECB : v3(2005), CBC : v3(2006), CFB : v3(2007), CFB8 : v3(2008), CFB1 : v3(2009), OFB : v3(2010), CTR : v3(726), GCM : v3(726)}), v5 = v3(728);
for(var v6 in v5){
(v5[v6].module) = v4[v5[v6].mode];
}
(v1.exports) = v5;
});
var v4 = (v0) + (2);
{
var v5 = (v4) - (v1);
(v6) = ((v2) > (0.5)) ? ((v5) / (((2) - (v4)) - (v1))) : ((v5) / ((v4) + (v1)));
switch(v4){
}
(v7) /= 6;
}
(v7) += 1;
// GenBlkBrick
for(var v8 = v6;(((v8) >= (0)) && ((v8) < (v2))) && ((v8) < (v3));v8++){
// GenBlkBrick
for(var v9 = 0;(v9) > (- 1);--v9){
if((v9) < (0)){
(v9) += Math.pow(2, 32);
}
}
{
if((v8) === (6)){
break ;
}
(v6) += v8;
}
}
(v10) = v3(v0, v8, v9);
var v11 = (((v1) % (2)) === (0)) ? (((Math.PI) / (2.0)) + ((v1) / (2.0))) : ((Math.PI) / (2.0));
