// GenBlkBrick
for(var v0 = 10;(v0) > (5);v0--){
// GenBlkBrick
for(var v1 = 0;(v1) < (10000);v1++){
var v2 = (function (v1, v2, v3){
var v4 = v1[0];
var v5 = v1[1];
var v6 = 0;
(v6) += (v2.get(v4, v5)) * (v3[0]);
(v6) += (v2.get((v4) + (1), v5)) * (v3[1]);
(v6) += (v2.get((v4) + (2), v5)) * (v3[2]);
(v6) += (v2.get((v4) + (3), v5)) * (v3[3]);
(v6) += (v2.get((v4) + (4), v5)) * (v3[4]);
(v6) += (v2.get((v4) + (5), v5)) * (v3[5]);
(v6) += (v2.get((v4) + (6), v5)) * (v3[6]);
(v6) += (v2.get((v4) + (7), v5)) * (v3[7]);
(v6) += (v2.get((v4) + (8), v5)) * (v3[8]);
(v6) += (v2.get((v4) + (9), v5)) * (v3[9]);
(v6) += (v2.get((v4) + (10), v5)) * (v3[10]);
return v6;
});
}
if((v1) > (5)){
(v0) = (v0) + (v2);
break ;
}
}
var v3 = (function (){
return this.getPropertyValue('border-radius');
});
(v4) = (v1) ? (v3(v0, v1)) : (('') + (Math.round(v0))).split('.');
Array.prototype.reduce.call(v2, v3, v0);
var v5 = Math.pow(v0, - v1);
(v6) += ((v1) * (v5)) + (1);
{
(v7) = (v6) / (v0);
(v12) = v2(v5, v6, v7);
(v13) = v2(v8, v9, v7);
(v8) = v2(v6, v11, v7);
(v9) = v2(v9, v13, v7);
(v10) = v2(v12, v8, v7);
(v11) = v2(v13, v9, v7);
v4.push(v10, v11);
}
(v3[v4[v5]]) = (v3[v4[v5].substring(0, 3)]) = v2(v5);
