var v0 = (function (v1){
return v1.allDocs(({include_docs : false, attachments : false})).then((function (v2){
return v2.rows.filter((function (v3){
return ! v3.id.startsWith('_design/');
})).length;
}));
});
function v1(v1, v2, v3, v4, v5){
var v6 = [], v7;
while(v6.length){
(v3) = v6.pop();
(v2) = v6.pop();
if(((v3) - (v2)) <= (v4)){
continue ;
}
(v7) = (v2) + ((Math.ceil((((v3) - (v2)) / (v4)) / (2))) * (v4));
v0(v1, v7, v2, v3, v5);
v6.push(v2, v7, v7, v3);
}
}
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = v3(17), v5 = v3(2084), v6 = v3(2067).getConfiguration, v7 = v3(27), v8 = v3(25), v9 = v3(157), v10 = ({});
(v1.exports) = ({create : v8((function (v1){
return (v1.authorization) ? ((v10[v1.authorization]) ? (v7.resolve(v10[v1.authorization])) : (v6(v1).then((function (v2){
var v3;
return ((v1.debug) && ((v2.isDebug) = ! 0), (v3) = new v5(v2), (v10[v1.authorization]) = v3, v3);
})))) : (v7.reject(new v4(({type : v9.INSTANTIATION_OPTION_REQUIRED.type, code : v9.INSTANTIATION_OPTION_REQUIRED.code, message : "options.authorization is required when instantiating a client."}))));
})), VERSION : "3.28.0", _clearCache : (function (){
(v10) = ({});
})});
});
// GenBlkBrick
for(v0 in []){
var v3 = (function (v1){
if(v1._insertTemplate){
return v1._insertTemplate;
}
var v2 = [];
var v3 = [];
var v4 = (("INSERT INTO ") + (v1._dbName)) + (" (");
v5();
v6();
(v4) = ((((v4) + (v2.join(","))) + (") VALUES (")) + (v3.join(','))) + (")");
(v1._insertTemplate) = v4;
return v4;
function v5(){
var v7 = v1._columnDiscriminators;
for(var v8 = 0;(v8) < (v7.length);v8++){
var v9 = v7[v8].split("=");
v2.push(v9[0]);
v3.push(v9[1]);
}
}
function v6(){
var v10 = v1._columns;
for(var v8 = 0;(v8) < (v10.length);v8++){
var v11 = v10[v8];
v2.push(v11._dbName);
v3.push('%s');
}
}
});
}
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v3(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v2(v3)[1]) : (v2(v3)[0]));
}else {
if(v4){
return (v5) + (v2(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v2(v3)[1]) : (v2(v3)[2]));
}
}
}
}
var v5 = (function (v1){
return (((typeof v1) === ('string')) && (v1)) && (/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(v1));
});
(v4.parse) = v5.parse;
// GenBlkBrick
for((v6) = 0;(v6) < (1e4);v6++){
Array.prototype.reduce.call(v1, v4, v6);
}
