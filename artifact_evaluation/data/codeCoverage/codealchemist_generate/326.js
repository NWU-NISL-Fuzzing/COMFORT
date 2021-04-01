var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(15), v5 = v3(1976), v6 = v3(73), v7 = v3(1975), v8 = v3(634), v9 = v3(152), v10 = v3(46), v11 = v3(28), v12 = v3(25);
(v1.exports) = ({create : v12((function (v1){
return v6.verify(({name : "iDEAL", client : v1.client})).then((function (){
var v2;
return (v5.supportsPopups()) ? (((v2) = v1.client.getConfiguration().gatewayConfiguration.braintreeApi) ? ((v2.ideal) ? ((v10.sendEvent(v1.client, "ideal.initialization"), new v7(v1)._initialize())) : (v11.reject(new v4(v8.IDEAL_NOT_ENABLED)))) : (v11.reject(new v4(v9.BRAINTREE_API_ACCESS_RESTRICTED)))) : (v11.reject(new v4(v8.IDEAL_BROWSER_NOT_SUPPORTED)));
}));
})), VERSION : "3.28.0"});
});
var v1 = (function (v1){
return (((v1) === (0)) || ((v1) === (1))) ? (v1) : (((Math.pow(2, (- 10) * (v1))) * (Math.sin(((((v1) - ((0.3) / (4))) * (Math.PI)) * (2)) / (0.3)))) + (1));
});
// GenBlkBrick
while(v2--){
if((v2) === (6)){
break ;
}
while((v2--) > (0)){
v0();
}
}
// GenBlkBrick
for(var v3 = 1;(v3) <= (v1);v3++){
if((v3) > (Math.PI)){
(v3) = Math.PI;
}else {
if((v3) <= (0)){
(v3) = 0.001;
}
}
{
var v4 = 0;
for(var v5 = 0;((v5) + (v3)) < (v3);v5++){
if((v4[(v5) + (v3)].area) > (v4[v5].area)){
var v5 = v4[(v5) + (v3)];
(v4[(v5) + (v3)]) = v4[v5];
(v4[v5]) = v5;
v4++;
}
}
if((v3) == (1)){
if((v4) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
}
(v3) = (0.5) * ((- Math.pow(2, (- 10) * ((v3) - (1)))) + (2));
// GenBlkBrick
for(;(v3) < (v1);++v3){
(v3) += Math.sin((1.5) * (v2));
}
var v6 = ((- v4) + (Math.sqrt(v5))) / ((2) * (v3));
if((v2) == (2)){
(v3) += v2[v2];
(v3) += v2[v6];
(v3) += v2[v5];
(v3) += v2[v4];
}
