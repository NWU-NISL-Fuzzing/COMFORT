// GenBlkBrick
for(var v0 = 0;(v0) < (24);v0++){
// GenBlkBrick
for(((v1) = 0, (v1) = v2);(v1) < (v1);++v1){
(v2) = ((v1) | (0)) < (- 4);
}
}
if(! v0){
var v3 = ((v2) + (1)) + (1);
if(! v3){
(v4) = v3;
}
if(v4){
(v4) = false;
}
if(v3){
(v4) = false;
}
}
for(;(v0) > (0);((v1[(v2) + (v4)]) = (v3) & (0xff), (v4) += v1, (v3) /= 256, (v0) -= 8)){
}
if((v3) > (v4)){
(v3) = (v2) ? (0) : (v4);
}
var v5 = (function (v1, v2, v3){
var v4 = v3(22), v5 = v3(75), v6 = v3(39)("species");
(v1.exports) = (function (v1, v2){
var v3, v7 = v4(v1).constructor;
return (((void 0) === (v7)) || ((void 0) == ((v3) = v4(v7)[v6]))) ? (v2) : (v5(v3));
});
});
var v6 = (function (v1){
if(v2){
return;
}
(v2) = true;
var v3 = v1.length;
var v4;
while(v3--){
(v4) = v1[v3];
if(this.remoteBlacklists.hasOwnProperty(v4)){
this.purgeCompiledFilterList(v4);
continue ;
}
if((v4) === (this.pslPath)){
this.assets.purge('cache://compiled-publicsuffixlist');
continue ;
}
}
this.destroySelfie();
(v2) = false;
});
(v7) = v6(v1, v4, v0);
if(v2){
v4++;
}else {
v4--;
}
