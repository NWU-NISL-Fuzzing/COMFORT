var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(1745);
(v1.exports) = (function (){
return ! v4.isSamsungBrowser();
});
});
(v0.prototype.pushNoDuplicate) = (function (v1){
if((v1.__smartArrayFlags) && ((v1.__smartArrayFlags[this._id]) === (this._duplicateId))){
return false;
}
this.push(v1);
return true;
});
// GenBlkBrick
for(var v0 in undefined){
var v1 = (function (v1){
var v2 = [];
if((v1) && (! v1.skills_has("remoteherdkeeping_1"))){
v2.push([]);
}
v2.push([]);
v2.push([]);
v2.push([]);
if((v1) && (! v1.skills_has("tinkering_1"))){
v2.push([]);
}
if((v1) && (! (v1.skills_has("remoteherdkeeping_1")) && (v1.skills_has("tinkering_5")))){
v2.push([]);
}
return v2;
});
}
var v2 = (function (v1, v2){
return (v1) == (v2);
});
function v3(){
var v1 = v2('#textInput'), v3 = v2('#results');
var v4;
v1.keyup((function (){
var v5 = v2(this).val();
v3.empty();
if((v4) && ((v4.state()) === ('pending'))){
v4.abort();
}
(v4) = v1(v5);
v4.then((function (v7){
var v8 = v7[1];
v2.each(v8, (function (v9, v10){
v2((('<li>') + (v10)) + ('</li>')).appendTo(v3);
}));
}), (function (v11){
if((v11.statusText) !== ('abort')){
v2((('<li>') + (v11.statusText)) + ('</li>')).appendTo(v3);
}
}));
}));
}
(v2.BLEND_MODE) = "blendMode";
// GenBlkBrick
for(var v4 in v1){
var v5 = (1) << (v1);
}
for(v0 in v1){
if(v1.hasOwnProperty(v0)){
(v4) += v0(v1[v0], v0, "");
}
}
