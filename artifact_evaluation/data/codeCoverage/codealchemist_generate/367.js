var v0 = (function (v1){
var v2 = this.paper.path().attr(v1);
if(this.doRegression){
this.addToRegression(v2);
}
return v2;
});
function v1(v1, v2){
var v3 = new v0();
return v3.replace(v1, v2);
}
(v1.UTC) = v0.UTC;
// GenBlkBrick
for(var v2 = (v1) - (1);(v2) >= (0);v2--){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
[].reduce(v0, v2);
function v5(v1, v2, v3, v4){
if((v3) < (v4)){
var v5 = v1(v3, v4);
var v7 = (v3) - (1);
v0(v1, v5, v4);
var v9 = v1[v4];
for(var v10 = v3;(v10) < (v4);v10++){
if((v2(v1[v10], v9)) <= (0)){
(v7) += 1;
v0(v1, v7, v10);
}
}
v0(v1, (v7) + (1), v10);
var v11 = (v7) + (1);
v5(v1, v2, v3, (v11) - (1));
v5(v1, v2, (v11) + (1), v4);
}
}
(v6) = (v2) ? (v1(v4, v2)) : (('') + (Math.round(v4))).split('.');
var v7 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (function (v1){
var v2 = (((v2) + ((Math.random()) * (16))) % (16)) | (0);
(v2) = Math.floor((v2) / (16));
return ((v1) === ('x')) ? (v2) : ((v2) && ((0x7) | (0x8))).toString(16);
}));
