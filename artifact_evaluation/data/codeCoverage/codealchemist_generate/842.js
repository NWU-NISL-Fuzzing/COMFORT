var v0 = 'mui-icon';
if((v0.length) < (v1)){
for(var v2 = v0.length;(v2) < (v1);v2++){
(v0) = ("0") + (v0);
}
}
var v1 = (function (v1, v2, v3){
(v2.isDark) = false;
(v2.cssClass) = "ace-sqlserver";
(v2.cssText) = ".ace-sqlserver .ace_gutter {\
background: #ebebeb;\
color: #333;\
overflow: hidden;\
}\
.ace-sqlserver .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-sqlserver {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-sqlserver .ace_identifier {\
color: black;\
}\
.ace-sqlserver .ace_keyword {\
color: #0000FF;\
}\
.ace-sqlserver .ace_numeric {\
color: black;\
}\
.ace-sqlserver .ace_storage {\
color: #11B7BE;\
}\
.ace-sqlserver .ace_keyword.ace_operator,\
.ace-sqlserver .ace_lparen,\
.ace-sqlserver .ace_rparen,\
.ace-sqlserver .ace_punctuation {\
color: #808080;\
}\
.ace-sqlserver .ace_set.ace_statement {\
color: #0000FF;\
text-decoration: underline;\
}\
.ace-sqlserver .ace_cursor {\
color: black;\
}\
.ace-sqlserver .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-sqlserver .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-sqlserver .ace_constant.ace_language {\
color: #979797;\
}\
.ace-sqlserver .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-sqlserver .ace_invalid {\
background-color: rgb(153, 0, 0);\
color: white;\
}\
.ace-sqlserver .ace_support.ace_function(6, 150, 14);\
}\
.ace-sqlserver .ace_class {\
color: #008080;\
}\
.ace-sqlserver .ace_support.ace_other {\
color: #6D79DE;\
}\
.ace-sqlserver .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F;\
}\
.ace-sqlserver .ace_comment {\
color: #008000;\
}\
.ace-sqlserver .ace_constant.ace_numeric {\
color: black;\
}\
.ace-sqlserver .ace_variable {\
color: rgb(49, 132, 149);\
}\
.ace-sqlserver .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-sqlserver .ace_support.ace_storedprocedure {\
color: #800000;\
}\
.ace-sqlserver .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-sqlserver .ace_list {\
color: rgb(185, 6, 144);\
}\
.ace-sqlserver .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-sqlserver .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-sqlserver .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-sqlserver .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-sqlserver .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-sqlserver .ace_gutter-active-line {\
background-color: #dcdcdc;\
}\
.ace-sqlserver .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-sqlserver .ace_meta.ace_tag {\
color: #0000FF;\
}\
.ace-sqlserver .ace_string.ace_regex {\
color: #FF0000;\
}\
.ace-sqlserver .ace_string {\
color: #FF0000;\
}\
.ace-sqlserver .ace_entity.ace_other.ace_attribute-name {\
color: #994409;\
}\
.ace-sqlserver .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";
var v4 = v1("../lib/dom");
v4.importCssString(v2.cssText, v2.cssClass);
});
(v1.prototype.reset) = (function (){
this.setState(v0);
});
while((v0.length) < (v1)){
(v0) = (v2[0]) + (v0);
}
// GenBlkBrick
for(var v2 = 0;(v2) < (3);v2++){
// GenBlkBrick
for(var v3 = 0;(v3) < (18);++v3){
// GenBlkBrick
for(var v4 = 1;(v4) < (1024);v4++){
(v5) = (((v4) | (0)) % (4)) | (0);
}
if((v4) === (6)){
break ;
}
}
(v3) = (v3) - ((v2) * ((1000) * (60)));
}
for(;(v0) >= (8);((v1[(v2) + (v2)]) = (v3) & (0xff), (v2) += v5, (v3) /= 256, (v0) -= 8)){
}
// GenBlkBrick
for(var v6 = 0;(v6) < (50);++v6){
if((v5) === (6)){
break ;
}
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
}
