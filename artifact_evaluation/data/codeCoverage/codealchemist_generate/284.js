var v0 = (function (v1, v2, v3){
(this.def) = v1;
(this.value) = v2;
(this.target) = v3;
});
(v0.fn.plugin) = (function (){
return 'plugin';
});
(v0.GREEN_MULTIPLIER) = "gM";
function v1(v1, v2, v3){
(v1) = 1;
(v2) = 'str';
(v3) = 2.1;
if((((arguments[0]) === (1)) && ((arguments[1]) === ('str'))) && ((arguments[2]) === (2.1))){
return true;
}
}
var v2 = (function (v1){
this.getNode('MatrixMultPosition').inputs(({matrix : this.getOrCreateProjectionMatrix(), vec : this.getOrCreateViewVertex()})).outputs(({vec : v1}));
});
// GenBlkBrick
for(var v3 = 1;(v3) <= (20);v3++){
(v3) = ("0") + (v3);
var v5 = (function (v1, v2, v3, v4){
if(! Array.isArray(v1)){
(v1) = [];
}
if((typeof v2) === ('function')){
(v4) = v2;
(v2) = (v3) = undefined;
}else {
if((typeof v3) === ('function')){
(v4) = v3;
(v3) = undefined;
}
}
for(var v7 = 0;(v7) < (v1.length);++v7){
if((typeof v1[v7]) === ('string')){
(v1[v7]) = ({prompt : v1[v7], echo : true});
}
}
(this._cb) = v4;
(this._initialResponse) = true;
this._stream.once('USERAUTH_INFO_RESPONSE', this._onInfoResponse);
return this._stream.authInfoReq(v2, v3, v1);
});
}
v1(new RegExp(((v3.substr(0, 1).toLowerCase()) + (v3.substr(1))) + ("$")), (v3.substr(0, 1).toLowerCase()) + (v3.substr(1)));
function v6(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v0(v1);
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
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v5(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v1(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
