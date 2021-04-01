// GenBlkBrick
for((v0) = 0;(v0) < (1e3);v0++){
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
}
(v3) = Math.max(Math.ceil(((v0) - (v1)) / (v2)), 0);
var v4 = (v3) * (v3);
// GenBlkBrick
while((v0) < (0)){
var v5 = (function (v1){
if(! v1.readme){
this.warn("missingReadme");
(v1.readme) = "ERROR: No README data found!";
}
});
var v6 = (function (){
return this.getPropertyValue('speak-header');
});
}
(v7) = (v3) ? (v6(v2, v3)) : (('') + (Math.round(v2))).split('.');
{
(v8) = (v4) / (v0);
(v13) = v5(v5, v6, v8);
(v14) = v5(v8, v9, v8);
(v9) = v5(v6, v11, v8);
(v10) = v5(v9, v13, v8);
(v11) = v5(v13, v9, v8);
(v12) = v5(v14, v10, v8);
v7.push(v11, v12);
}
(v15) = v5(v2, v3, v4);
var v16 = Math.pow(10, Math.floor(v1));
