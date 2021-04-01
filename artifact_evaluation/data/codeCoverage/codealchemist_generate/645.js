// GenBlkBrick
for(var v0 = 0;(v0) < (4);v0++){
(v1) = ((v0) >>> (0)) < (4294967292);
}
var v2 = (v1) && (! v2);
if(v0){
(v2) = ! v2;
}
if(v2){
v0++;
}else {
v0--;
}
var v3 = (function (v1){
var v2 = v1.arraycopy(v1.makeU32Buffer(256), []);
var v3 = (function (){
var v4 = 0xffffffff;
(this.getCRC) = (function (){
return (~ v4) >>> (0);
});
(this.updateCRC) = (function (v5){
(v4) = ((v4) << (8)) ^ (v2[(((v4) >>> (24)) ^ (v5)) & (0xff)]);
});
(this.updateCRCRun) = (function (v5, v6){
while((v6--) > (0)){
(v4) = ((v4) << (8)) ^ (v2[(((v4) >>> (24)) ^ (v5)) & (0xff)]);
}
});
});
return v3;
});
if((v0) === (3)){
(v4) = false;
}
if((! v2) && ((((v1.height) != (null)) && ((v1.height) === (v2.height))) || (((((v1.height) == (null)) && ((v2.height) == (null))) && ((v1.top) === (v2.top))) && ((v1.bottom) === (v2.bottom))))){
(v5) = false;
}
(v6) = v3(v2, v3, v0);
