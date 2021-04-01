var v0 = (function (v1){
var v2 = this.handlers;
for(var v3 = 0, v4 = v2.length;(v3) < (v4);(v3) += 2){
var v5 = v2[v3];
var v6 = v2[(v3) + (1)];
if(v5.test(v1)){
return v6;
}
}
return null;
});
// GenBlkBrick
for(var v1 = 1;(v1) < (5);v1++){
var v2 = (function (v1, v2, v3){
v3(414)("asyncIterator");
});
}
// GenBlkBrick
while(typeof 11){
var v3 = (function (v1, v2, v3){
"use strict";
(v2.snippetText) = "";
(v2.scope) = "golang";
});
var v4 = (function (v1, v2, v3){
"use strict";
var v4 = v3(2076);
(v1.exports) = ({create : (function (v1, v2){
var v3 = new v4(v1);
v3.initialize((function (){
v2(v3);
}));
})});
});
}
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v2(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v3(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
if((v1) === (0)){
(v6) = (typeof v2) === ("undefined");
}
v3("information");
function v7(){
if(! v6){
(v6) = true;
v3(v3.get());
}
return v4;
}
var v8 = (function (v1, v2, v3){
(function (v1){
var v4 = v3(123), v5 = (((("object") == (typeof v2)) && (v2)) && (! v2.nodeType)) && (v2), v6 = ((((v5) && (("object") == (typeof v1))) && (v1)) && (! v1.nodeType)) && (v1), v7 = ((v6) && ((v6.exports) === (v5))) ? (v4.Buffer) : (void 0), v8 = (v7) ? (v7.allocUnsafe) : (void 0);
(v1.exports) = (function (v1, v2){
if(v2){
return v1.slice();
}
var v3 = v1.length, v4 = (v8) ? (v8(v3)) : (new v1.constructor(v3));
return (v1.copy(v4), v4);
});
}).call(this, v3(99)(v1));
});
