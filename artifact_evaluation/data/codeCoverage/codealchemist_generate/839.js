var v0 = (function (v1){
(this.nextDate_) = v1.getStartDate().clone();
(this.endDate_) = Number(v1.getEndDate().toIsoString());
});
(v0.prototype.intersectsBox) = (function (v1){
return this.intersectsBoxMinMax(v1.minimum, v1.maximum);
});
// GenBlkBrick
for(var v1 = 0;(v1) < (3);++v1){
(v2) = (1) - (v1);
}
// GenBlkBrick
for((v3) = 0;(v3) < (1e4);v3++){
if((v3) === (6)){
break ;
}
if((v3) < (0)){
(v3) = (v1) + (v3);
}
}
v0(/ses$/i, "ses");
while((++v2) < (v1)){
(v2[v2]) = v3;
(v4[v2]) = (Math.sin(v3)) + ((((2) * (Math.random())) - (1)) * (v6));
(v3) += (v1) * ((1) + ((((2) * (Math.random())) - (1)) * (v8)));
}
if((v2) === (v2)){
(v2) = ((v2) <= (v1)) ? (v2) : (v1);
(v2) = ((v2) >= (v3)) ? (v2) : (v3);
}
(v4) = (v3) ? (v0(v1, v3)) : (('') + (Math.round(v1))).split('.');
