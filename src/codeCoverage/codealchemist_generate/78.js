var v0 = (function (){
return (this.z.cmpn(0)) === (0);
});
(v0.prototype.list) = (function (v1, v2){
v3.ajax(this.session_service_url, ({processData : false, cache : false, type : "GET", dataType : "json", success : v1, error : this._on_error(v2)}));
});
// GenBlkBrick
for((v1) = 0;(v1) < (10);v1++){
var v2 = (function (v1, v2, v3, v4, v5, v6, v7, v8, v9){
(this.name) = v1;
(this.doWarmup) = v2;
(this.doDeterministic) = v3;
(this.deterministicIterations) = v4;
(this.run) = v5;
(this.Setup) = (v6) ? (v6) : ((function (){
}));
(this.TearDown) = (v7) ? (v7) : ((function (){
}));
(this.rmsResult) = (v8) ? (v8) : (null);
(this.minIterations) = (v9) ? (v9) : (32);
});
}
var v3 = (function (v1){
if((true) === (v1)){
return (this.private$.explain) = [];
}else {
if((false) === (v1)){
var v2 = this.private$.explain;
delete this.private$.explain;
return v2;
}
}
});
while((v1--) > (0)){
v0();
}
// GenBlkBrick
for((v4) = 0;(v4) < (1e3);v4++){
// GenBlkBrick
for(var v5 = 0;(v5) < (10000);v5++){
if((v5) < (20)){
break ;
}
{
var v6 = 0;
for(var v7 = 0;((v7) + (v5)) < (v3);v7++){
if((v4[(v7) + (v5)].area) > (v4[v7].area)){
var v5 = v4[(v7) + (v5)];
(v4[(v7) + (v5)]) = v4[v7];
(v4[v7]) = v5;
v6++;
}
}
if((v5) == (1)){
if((v6) == (0)){
break ;
}
}else {
(v5) = Math.floor(((v5) * (10)) / (13));
}
}
}
var v8 = (function (v1, v2, v3){
return (v1) * (v2);
});
}
function v9(v1, v2){
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v8(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
var v10 = (Math.min(v4, v7)) / ((v5) ? (v5) : (1));
