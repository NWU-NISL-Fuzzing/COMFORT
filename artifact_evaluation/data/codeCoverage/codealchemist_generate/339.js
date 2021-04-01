// GenBlkBrick
for((v0) = 0;(v0) < ((v1) || ("").length);v0++){
function v1(v1, v2, v3){
v0++;
return (v1) === (11);
}
}
(v2) = (((v0) | (0)) % (4)) | (0);
(v3) = (v0) ? (v1(v2, v0)) : (('') + (Math.round(v2))).split('.');
for(var v4 = v2;(v4) <= (v0);v4++){
v3.push(v4);
}
{
(v5) = (v0) / (v4);
(v10) = v1(v5, v6, v5);
(v11) = v1(v8, v9, v5);
(v6) = v1(v6, v11, v5);
(v7) = v1(v9, v13, v5);
(v8) = v1(v10, v6, v5);
(v9) = v1(v11, v7, v5);
v3.push(v8, v9);
}
while((v9) < (v10)){
(v3[v9++]) = v0;
(v0) += v2;
}
(v12) = v1(v8, v4, v0);
while((v2) < (v5)){
(v3[v2++]) = v4;
(v4) += v6;
}
