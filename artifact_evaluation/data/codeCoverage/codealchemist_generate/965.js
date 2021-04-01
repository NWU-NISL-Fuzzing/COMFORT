var v0 = (function (v1){
this._removeTooltipFrom(v1);
this._addTooltipToTopOfStack();
});
Object.defineProperty(v0, "MatricesIndicesExtraKind", ({get : (function (){
return v0._MatricesIndicesExtraKind;
}), enumerable : true, configurable : true}));
(v0.WEIGHT) = "weight";
(v0.GetTags) = (function (v1, v2){
if((v2) === (void 0)){
(v2) = true;
}
if(! v1._tags){
return null;
}
if(v2){
var v3 = [];
for(var v4 in v1._tags){
if((v1._tags.hasOwnProperty(v4)) && ((v1._tags[v4]) === (true))){
v3.push(v4);
}
}
return v3.join(" ");
}else {
return v1._tags;
}
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (! v3(51)) && (! v3(33)((function (){
return (7) != (Object.defineProperty(v3(505)("div"), "a", ({get : (function (){
return 7;
})})).a);
})));
});
var v2 = (function (v1, v2, v3){
var v4 = v3(204), v5 = v3(202), v6 = "[object Symbol]";
(v1.exports) = (function (v1){
return (("symbol") == (typeof v1)) || ((v5(v1)) && ((v4(v1)) == (v6)));
});
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
function v4(v1, v2){
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
(v3) += ('\n') + (v1(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
