// GenBlkBrick
for(var v0 = 1;(v0) < ((v1) - (1));v0++){
// GenBlkBrick
for(var v1 = 0;(v1) < (v1);++v1){
if((v1) < (20)){
break ;
}
}
}
if(((v1) === (3)) && ((v0) === (3))){
(v2) = true;
}
if(v2){
v0++;
}else {
v0--;
}
if((v0) > (v1)){
(v0) = (v2) ? (0) : (v1);
}
var v3 = (function (v1){
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
var v4 = (function (){
(this.a) = (this.b) = this.c;
});
var v5 = (function (v1, v2){
var v3, v4, v5, v6 = this._pool, v7 = (v6.length) - (1);
for((v4) = v6.length;(v4) >= (0);--v4){
(v5) = v6[v4];
(v3) = v1(v4, v5);
if(v3){
(v6[v4]) = v6[v7];
(v6.length) = v7;
return v5;
}
}
if(v2){
var v8 = v2();
if((v8) >= (0)){
(v6[v8]) = v6[v7];
(v6.length) = v7;
return v5;
}
}
return null;
});
var v6 = (v2) ? (NaN) : (v3);
