var v0 = (function (v1){
return ((3) === (arguments.length)) ? (this.setRGB(arguments[0], arguments[1], arguments[2])) : (this.set(v1));
});
// GenBlkBrick
for(var v1 = 1;(v1) <= (10);v1++){
{
var v2 = 0;
for(var v3 = 0;((v3) + (v1)) < (v3);v3++){
if((v4[(v3) + (v1)].area) > (v4[v3].area)){
var v5 = v4[(v3) + (v1)];
(v4[(v3) + (v1)]) = v4[v3];
(v4[v3]) = v5;
v2++;
}
}
if((v1) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
while((v3) < (10)){
v3++;
if((v2) < (20)){
break ;
}
if((v3) > (10)){
(v2) = 200;
v3++;
}
}
}
(Math.pow) = (function (v1, v2){
var v3 = ("") + (v0(v1, v2));
(v3) = v3.split("e");
(v3[0]) = v3[0].substr(0, 17);
return parseFloat(v3.join("e"));
});
var v4 = (function (v1, v2, v3){
"use strict";
var v4 = v3(2083);
(v1.exports) = ({create : (function (v1, v2){
var v3 = new v4(v1);
v3.initialize((function (){
v2(v3);
}));
})});
});
{
var v5 = (v1) - (v3);
(v6) = ((v2) > (0.5)) ? ((v5) / (((2) - (v1)) - (v3))) : ((v5) / ((v1) + (v3)));
switch(v1){
}
(v7) /= 6;
}
(v8) = (v2) ? (v4(v1, v2)) : (('') + (Math.round(v1))).split('.');
var v9 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("724802e432ab8683ca07516667271177.svg");
});
(v6) = (v6) - ((v1) * (1000));
