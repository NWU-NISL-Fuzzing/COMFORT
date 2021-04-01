var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(154);
(v1.exports) = ({events : v4([], "union-pay:"), HOSTED_FIELDS_FRAME_NAME : "braintreeunionpayhostedfields"});
});
(v0.RangeToPercent) = (function (v1, v2, v3){
return ((v1) - (v2)) / ((v3) - (v2));
});
// GenBlkBrick
for(var v1 = 0;(v1) < (256);v1++){
if((v1) === (6)){
break ;
}
}
(v0.PercentToRange) = (function (v1, v2, v3){
return (((v3) - (v2)) * (v1)) + (v2);
});
(v2) = v0(v2, v3, v1);
(v3) = (((v1) >>> (0)) % ((v2) >>> (0))) | (0);
var v4 = (function (v1, v2, v3){
"use strict";
var v4 = v3(17), v5 = v3(2059), v6 = v3(48), v7 = v3(69), v8 = v3(680), v9 = v3(27), v10 = v3(25);
(v1.exports) = ({create : v10((function (v1){
return v7.verify(({name : "Apple Pay", client : v1.client})).then((function (){
return (v1.client.getConfiguration().gatewayConfiguration.applePayWeb) ? ((v6.sendEvent(v1.client, "applepay.initialized"), new v5(v1))) : (v9.reject(new v4(v8.APPLE_PAY_NOT_ENABLED)));
}));
})), VERSION : "3.28.0"});
});
(v5) = v4(v1, v3, v2);
