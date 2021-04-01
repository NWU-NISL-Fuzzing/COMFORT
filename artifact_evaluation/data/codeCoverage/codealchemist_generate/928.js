var v0 = (function (){
var v1 = ({});
(v1.getBytesFromString) = (function (v2){
var v3 = [];
for(var v4 = 0;(v4) < (v2.length);++v4){
v3.push(v2.charCodeAt(v4));
}
return v3;
});
(v1.createHexString) = (function (v5){
var v6 = "";
for(var v4 = 0;(v4) < (v5.length);v4++){
var v7 = v5[v4].toString(16);
(v7) = (Array(((2) - (v7.length)) + (1)).join("0")) + (v7);
(v6) += v7;
}
return v6;
});
(v1.passportHeader) = (function (v9, v10, v11){
var v12 = [];
var v13 = [];
var v14 = [];
var v15 = [];
var v16 = [];
var v17 = [];
var v18 = v1.getBytesFromString("SAP_E2E_TA_UI5LIB");
(v18) = v18.concat(v1.getBytesFromString(new Array(((32) + (1)) - (v18.length)).join(' ')));
v12.splice.apply(v12, v15.concat(v18));
v12.splice.apply(v12, v16.concat(v18));
v12.splice.apply(v12, v14.concat(v1.getBytesFromString(v11)));
v12.splice.apply(v12, v17.concat(v9));
var v19 = v1.createHexString(v12).toUpperCase();
return (v19.substring(0, v13[0]).concat(v10)) + (v19.substring((v13[0]) + (v13[1])));
});
(v1.traceFlags) = (function (v20){
switch(v20){
}
});
(v1.createGUID) = (function (){
var v21 = (function (){
var v22 = Math.floor((Math.random()) * (0x10000));
return (new Array(((4) + (1)) - (v22.toString(16).length)).join('0')) + (v22.toString(16));
});
var v24 = (function (){
var v22 = ((Math.floor((Math.random()) * (0x10000))) & (0x0fff)) + (0x4000);
return (new Array(((4) + (1)) - (v22.toString(16).length)).join('0')) + (v22.toString(16));
});
var v25 = (function (){
var v22 = ((Math.floor((Math.random()) * (0x10000))) & (0x3fff)) + (0x8000);
return (new Array(((4) + (1)) - (v22.toString(16).length)).join('0')) + (v22.toString(16));
});
var v19 = (((((((v21()) + (v21())) + (v21())) + (v24())) + (v25())) + (v21())) + (v21())) + (v21());
return v19.toUpperCase();
});
return v1;
})();
// GenBlkBrick
while((v0) && ((v0) = v0.$parent)){
var v1 = (function (v1, v2, v3, v4){
(this.x) = (v1) || (0);
(this.y) = (v2) || (0);
(this.z) = (v3) || (0);
(this.w) = ((void 0) !== (v4)) ? (v4) : (1);
});
}
var v2 = (function (v1, v2, v3){
"use strict";
(v3.exports) = ({lineMode : false});
});
(v1.prototype.bind_events) = (function (){
var v1 = this;
var v2 = (function (v3, v4){
});
this.events.on('kernel_created.Session', v2);
this.events.on('kernel_dead.Session', v2);
this.events.on('kernel_killed.Session', v2);
this.events.on('kernel_dead.Kernel', (function (){
v1.delete();
}));
});
(v0.Statement) = v1;
// GenBlkBrick
for(var v3 = 0;(v3) < (9);v3++){
var v4 = (v3) / (4);
if((v3) === (2)){
(v5) = (v4) === (1);
}
}
function v6(){
if(! v5){
(v5) = true;
v1(v3.get());
}
return v4;
}
v1(v4);
