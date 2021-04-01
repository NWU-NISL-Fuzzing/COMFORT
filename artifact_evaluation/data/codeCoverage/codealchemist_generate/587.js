var v0 = 1.5;
// GenBlkBrick
for(var v1, v2 = [], v3 = 0;(v3) < (256);v3++){
if((v2[v1]) === ('')){
continue ;
}
(v1) += ((v1) << (2)) & (4294967292);
}
// GenBlkBrick
while(((v0) - (v1)) > (1)){
for((v0) = v1;(v0) < (v2);(v0) += v3){
var v4 = v5[v0];
var v6 = v5[(v0) + (1)];
if((v7) !== (undefined)){
(v9) = (v4) - (v7);
(v10) = (v6) - (v11);
(v12) = Math.sqrt(((v9) * (v9)) + ((v10) * (v10)));
if((v14) !== (undefined)){
(v1) += v16;
(v17) = Math.acos((((v14) * (v9)) + ((v18) * (v10))) / ((v16) * (v12)));
if((v17) > (v19)){
if((v1) > (v0)){
(v0) = v1;
(v21) = v22;
(v23) = v0;
}
(v1) = 0;
(v22) = (v0) - (v3);
}
}
(v16) = v12;
(v14) = v9;
(v18) = v10;
}
(v7) = v4;
(v11) = v6;
}
}
if(((v0) && (v0.skills_has("ezcooking_1"))) && (! v0.making_recipe_is_known("100"))){
v2.push([]);
}
while((++v3) < (v1)){
var v2 = v3[v3];
if(v4(v2, v3, v3)){
(v2[v0++]) = v2;
}
}
var v4 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("d47d2c5ce2dd7d5bdaee2ebd8fde61f2.svg");
});
(v5) = v4(v3, v0, v1);
{
(v6) = (v3) / (v5);
(v11) = v4(v5, v6, v6);
(v12) = v4(v8, v9, v6);
(v7) = v4(v6, v11, v6);
(v8) = v4(v9, v13, v6);
(v9) = v4(v11, v7, v6);
(v10) = v4(v12, v8, v6);
v2.push(v9, v10);
}
