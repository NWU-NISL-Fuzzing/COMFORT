var v0 = (function (v1, v2){
(this._loadItemDeferred) = this._loadItem(v1).always(v2);
return this._loadItemDeferred;
});
// GenBlkBrick
for((v1) = 1;(v1) < (1e3);v1++){
var v2 = (function (){
if((this.abcline.length) <= ((this.pos) + (1))){
return null;
}
return this.abcline[(this.pos) + (1)];
});
var v3 = (((v1) + ((16) * (Math.random()))) % (16)) | (0);
}
Array.prototype.reduce.call(v2, v0, v3);
if(v0.now){
(v2.now) = (function v2(){
return v2.clock.now;
});
}
// GenBlkBrick
while((new Date().getTime()) < ((v1) + (v2))){
var v4 = (((v1) + ((Math.random()) * (16))) % (16)) | (0);
// GenBlkBrick
while(false){
var v5 = (function (){
this.trigger("finished", ({tween : this}));
this.trigger("finish", ({tween : this}));
(this.finished) = true;
});
(v5.DATA_VERSION_2_3) = "2.3";
}
}
// GenBlkBrick
while((v0) == (2046)){
// GenBlkBrick
for(var v6 = 0;(v6) < (v1);v6++){
{
var v7 = 0;
for(var v8 = 0;((v8) + (v6)) < (v3);v8++){
if((v4[(v8) + (v6)].area) > (v4[v8].area)){
var v5 = v4[(v8) + (v6)];
(v4[(v8) + (v6)]) = v4[v8];
(v4[v8]) = v5;
v7++;
}
}
if((v6) == (1)){
if((v7) == (0)){
break ;
}
}else {
(v6) = Math.floor(((v6) * (10)) / (13));
}
}
var v9 = Math.acos(Math.max(- 1, Math.min(1, (v7) / (v8))));
}
var v10 = (function (){
return this._wrap;
});
}
var v0, v1, v11 = ((v7) + (v8)) / (2);
function v12(v1, v2){
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
(v3) += ('\n') + (v10(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
