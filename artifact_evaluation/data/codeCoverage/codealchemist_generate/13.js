var v0 = (function (v1){
var v2 = this;
v2.getEditor().setHighlightActiveLine(v1);
});
var v1 = (function (v1, v2){
(v1.exports) = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTh2MThIMHoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMTh2MThIMHoiLz4KICAgIDxwYXRoIGZpbGw9IiM3MzdGOEQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMgMmg0djRIM1Yyem04IDVoNXY0aC01Vjd6bTAgNWg1djRoLTV2LTR6bS0xLTJINnYzaDR2Mkg0VjdoMnYxaDR2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=";
});
(v1.DATA_VERSION_5_6) = "5.6";
var v2 = (function (v1){
this.setResolution(this.getResolutionForZoom(v1));
});
// GenBlkBrick
for(var v3 = 6;(v3) < (10);v3++){
v2(/(database)s$/i, "$1");
}
var v4 = (function (){
return ({currentID : this.currentID, threads : this.threads});
});
v1(v4, v2);
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v1(v1);
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
(v3) += ('\n') + (v2(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
