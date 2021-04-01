var v0 = (function (v1){
return (((v1) & (4096)) | (0)) != (0);
});
// GenBlkBrick
for(var v1 = 1;(v1) < (1024);v1++){
(v2) = (1) - (v1);
}
if((v0) && ((v0.length) > (0))){
for(((v1) = 0, (v2) = v0.length);(v1) < (v2);v1++){
(v1) += ((v0[v1].width) * (v0[v1].scaleX)) + (v4);
}
var v5 = (- v1) / (2.0);
for(((v1) = 0, (v2) = v0.length);(v1) < (v2);v1++){
(v6) = v0[v1];
(v7) = v6.scaleX;
(v8) = v0[v1].width;
v6.setPosition((v5) + (((v8) * (v7)) / (2)), 0);
(v5) += ((v8) * (v7)) + (v4);
}
}
for(var v3 = 0;(v3) < ((v1) + (v2));v3++){
var v3 = v4[(v5) ? (((v4.length) - (1)) - (v3)) : (v3)];
if((v3) && (! v6(v3, (v3) === (v1)))){
v1++;
}
}
(v4) = v0(v2, v3, v2);
(function v0(){
for(var v1 = 1;(v1) <= (10);v1++){
if((v1) === (6)){
return;
}
(v2) += v1;
}
})();
(v5) = v0(v3, v1, v2);
// GenBlkBrick
while(false){
(v1) = (v1) - (2);
}
