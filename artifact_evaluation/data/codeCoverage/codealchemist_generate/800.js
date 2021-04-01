// GenBlkBrick
for(var v0 in Object){
var v0 = (function (v1, v2, v3){
var v4 = v3(5065);
(v1.exports) = (function (v1, v2){
return (! ((null) == (v1)) || (! v1.length)) && ((v4(v1, v2, 0)) > (- 1));
});
});
}
(v0.prototype.name) = 'XRefEntryException';
var v1 = (function (v1, v2){
var v3;
var v4;
var v5 = 0;
var v6;
var v7;
var v8;
var v9;
if(! v2){
(v2) = 0;
}
var v10 = v1.slice(v2, (v2) + (1)).toLowerCase();
var v11 = (v2) + (2);
var v12 = (function (v13){
return v13;
});
switch(v10){
}
return [];
});
(v0.prototype.disableDisplayOnlyPassInPipeline) = (function (v1, v2){
var v3 = this._renderPipelines[v1];
if(! v3){
return;
}
v3._disableDisplayOnlyPass(v2);
});
(v0._AddTagTo) = (function (v1, v2){
(v2) = v2.trim();
if((((v2) === ("")) || ((v2) === ("true"))) || ((v2) === ("false"))){
return;
}
if((v2.match(/[\s]/)) || (v2.match(/^([!]|([|]|[&]){2})/))){
return;
}
v0.EnableFor(v1);
(v1._tags[v2]) = true;
});
function v2(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v1(v3);
(v4) += v0(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
var v3 = (function (){
return this.save.writePending;
});
var v4 = (function (v1){
var v2 = [], v3 = v1.length, v4, v5, v6;
var v7 = [];
for(var v8 = 0;(v8) < (v3);++v8){
(v6) = v1[v8];
if(v4){
v2.push(v6);
continue ;
}
if(('--') == (v6)){
(v4) = true;
continue ;
}
(v5) = this.optionFor(v6);
if(v5){
if(v5.required){
(v6) = v1[++v8];
if((null) == (v6)){
return this.optionMissingArgument(v5);
}
this.emit(('option:') + (v5.name()), v6);
}else {
if(v5.optional){
(v6) = v1[(v8) + (1)];
if(((null) == (v6)) || ((('-') == (v6[0])) && (('-') != (v6)))){
(v6) = null;
}else {
++v8;
}
this.emit(('option:') + (v5.name()), v6);
}else {
this.emit(('option:') + (v5.name()));
}
}
continue ;
}
if(((v6.length) > (1)) && (('-') == (v6[0]))){
v7.push(v6);
if((v1[(v8) + (1)]) && (('-') != (v1[(v8) + (1)][0]))){
v7.push(v1[++v8]);
}
continue ;
}
v2.push(v6);
}
return ({args : v2, unknown : v7});
});
