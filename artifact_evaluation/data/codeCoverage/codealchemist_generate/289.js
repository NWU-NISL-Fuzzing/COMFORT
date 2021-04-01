var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(64), v5 = v3(184), v6 = v3(47);
(v1.exports) = (function (v1){
for(var v2 = v4(this), v3 = v6(v2.length), v7 = arguments.length, v9 = v5(((v7) > (1)) ? (arguments[1]) : (void 0), v3), v10 = ((v7) > (2)) ? (arguments[2]) : (void 0), v11 = ((void 0) === (v10)) ? (v3) : (v5(v10, v3));(v11) > (v9);){
(v2[v9++]) = v1;
}
return v2;
});
});
(v0.PATH) = "path";
var v1 = (function (v1){
return (v1.ui.escapeSelector) = (function (){
var v2 = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return (function (v3){
return v3.replace(v2, "\\$1");
});
})();
});
var v2 = (function (v1, v2, v3){
var v4 = v3(2229), v5 = v3(2195), v6 = v3(690);
(v1.exports) = (function (v1){
var v2 = v5(v1);
return (((1) == (v2.length)) && (v2[0][2])) ? (v6(v2[0][0], v2[0][1])) : ((function (v3){
return ((v3) === (v1)) || (v4(v3, v1, v2));
}));
});
});
v1("jeans");
(v0.warnings) = [];
v1(v2, v0);
(v1.UTC) = v2.UTC;
