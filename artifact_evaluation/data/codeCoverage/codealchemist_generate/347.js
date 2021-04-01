var v0 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v4 = v3(1915);
(v1.exports) = (function (v1){
return ((- 1) !== ((v1) = (v1) || (v2.navigator.userAgent).indexOf("MSIE"))) || (v4(v1));
});
}).call(this, v3(10));
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(1883), v5 = v3(1876), v6 = v3(1873), v7 = v3(1854), v8 = v3(1767), v9 = v3(1747), v10 = v3(1734), v11 = v3(1730), v12 = v3(1729), v13 = v3(1727), v14 = v3(1725), v15 = v3(1721), v16 = v3(1716), v17 = v3(1713), v18 = v3(1710), v19 = v3(1708), v20 = v3(1702);
(v1.exports) = ({americanExpress : v4, applePay : v5, client : v6, dataCollector : v7, hostedFields : v8, ideal : v9, masterpass : v10, googlePayment : v14, paymentRequest : v11, paypal : v12, paypalCheckout : v13, threeDSecure : v15, unionpay : v16, usBankAccount : v17, vaultManager : v18, venmo : v19, visaCheckout : v20, VERSION : "3.28.0"});
});
function v2(){
var v1 = v2('#textInput'), v3 = v2('#results');
var v4, v5 = '';
var v6 = (function (){
var v7 = v2(this).val();
if((v4) && ((v4.state()) === ('pending'))){
v4.reject(({statusText : 'abort'}));
}
if((v7) !== (v5)){
(v5) = v7;
v3.empty();
(v4) = v0(v5, 3);
v4.then((function (v9){
var v10 = v9[1];
v2.each(v10, (function (v11, v12){
v2((('<li>') + (v12)) + ('</li>')).appendTo(v3);
}));
}), (function (v13){
if((v13.statusText) !== ('abort')){
v2((('<li>') + (v13.statusText)) + ('</li>')).appendTo(v3);
}
}));
}
});
v1.keyup(v1(v6, 500));
}
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(15), v5 = v3(1860), v6 = v3(1843).getConfiguration, v7 = v3(28), v8 = v3(25), v9 = v3(152), v10 = ({});
(v1.exports) = ({create : v8((function (v1){
return (v1.authorization) ? ((v10[v1.authorization]) ? (v7.resolve(v10[v1.authorization])) : (v6(v1).then((function (v2){
var v3;
return ((v1.debug) && ((v2.isDebug) = ! 0), (v3) = new v5(v2), (v10[v1.authorization]) = v3, v3);
})))) : (v7.reject(new v4(({type : v9.INSTANTIATION_OPTION_REQUIRED.type, code : v9.INSTANTIATION_OPTION_REQUIRED.code, message : "options.authorization is required when instantiating a client."}))));
})), VERSION : "3.28.0", _clearCache : (function (){
(v10) = ({});
})});
});
var v4 = (function (){
return this.colorPicker_.getSelectedColor();
});
(function (){
v3(/$/, "s");
v3(/s$/i, "s");
v3(/(ax|test)is$/i, "$1es");
v3(/(octop|vir)us$/i, "$1i");
v3(/(octop|vir)i$/i, "$1i");
v3(/(alias|status)$/i, "$1es");
v3(/(bu)s$/i, "$1ses");
v3(/(buffal|tomat)o$/i, "$1oes");
v3(/([ti])a$/i, "$1a");
v3(/([ti])um$/i, "$1a");
v3(/sis$/i, "ses");
v3(/ses$/i, "ses");
v3(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v3(/(hive)$/i, "$1s");
v3(/([^aeiouy]|qu)y$/i, "$1ies");
v3(/(x|ch|ss|sh)$/i, "$1es");
v3(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v3(/([m|l])ouse$/i, "$1ice");
v3(/([m|l])ice$/i, "$1ice");
v3(/^(ox)$/i, "$1en");
v3(/^(ox)en$/i, "$1en");
v3(/(quiz)$/i, "$1zes");
v4(/s$/i, "");
v4(/ss$/i, "ss");
v4(/(n)ews$/i, "$1ews");
v4(/([ti])um$/i, "$1um");
v4(/([ti])a$/i, "$1um");
v4(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v4(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v4(/(^analy)ses$/i, "$1sis");
v4(/(^analy)sis$/i, "$1sis");
v4(/([^f])ves$/i, "$1fe");
v4(/(hive)s$/i, "$1");
v4(/(tive)s$/i, "$1");
v4(/([lr])ves$/i, "$1f");
v4(/([^aeiouy]|qu)ies$/i, "$1y");
v4(/(s)eries$/i, "$1eries");
v4(/(m)ovies$/i, "$1ovie");
v4(/(x|ch|ss|sh)es$/i, "$1");
v4(/([m|l])ice$/i, "$1ouse");
v4(/([m|l])ouse$/i, "$1ouse");
v4(/(bus)es$/i, "$1");
v4(/(bus)$/i, "$1");
v4(/(o)es$/i, "$1");
v4(/(shoe)s$/i, "$1");
v4(/(cris|ax|test)es$/i, "$1is");
v4(/(cris|ax|test)is$/i, "$1is");
v4(/(octop|vir)i$/i, "$1us");
v4(/(octop|vir)us$/i, "$1us");
v4(/(alias|status)es$/i, "$1");
v4(/(alias|status)$/i, "$1");
v4(/^(ox)en/i, "$1");
v4(/(vert|ind)ices$/i, "$1ex");
v4(/(matr)ices$/i, "$1ix");
v4(/(quiz)zes$/i, "$1");
v4(/(database)s$/i, "$1");
v2("person", "people");
v2("man", "men");
v2("child", "children");
v2("sex", "sexes");
v2("move", "moves");
v2("cow", "kine");
v1("equipment");
v1("information");
v1("rice");
v1("money");
v1("species");
v1("series");
v1("fish");
v1("sheep");
v1("jeans");
})();
(v4.Transform) = (function (v1, v2){
var v3 = new v4(new v4.Vector3(0, 0, 0), new v4.Vector3(0, 0, 0));
v4.TransformToRef(v1, v2, v3);
return v3;
});
(v3.formatDijitFormWidget) = v0;
