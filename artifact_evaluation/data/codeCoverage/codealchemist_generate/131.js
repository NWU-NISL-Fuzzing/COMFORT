// GenBlkBrick
for(var v0 = 1;(v0) < (2);++v0){
var v1 = (function (){
this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
return this;
});
}
(v1.prototype.selectColor) = (function (v1){
if(v2.isFunction(this.options.onSelect)){
this.options.onSelect.call(this.element, v1);
}
});
while((v0) < (v1)){
v2(v0);
++v0;
}
// GenBlkBrick
while((v0) && ((v0) = v0.$parent)){
var v2 = (function (){
var v1 = 0;
return ((v1) == (0)) || ("failure");
});
}
function v3(v1, v2, v3, v4){
(v5) = true;
return (v1) === (v2);
}
// GenBlkBrick
for(var v4 in v2){
(v4) += "0,";
// GenBlkBrick
for(var v5 = 1;(v5) < (5);v5++){
var v6 = (function (v1, v2, v3){
var v4 = v3(460), v5 = v3(5134), v6 = v3(5133), v7 = "[object Null]", v8 = "[object Undefined]", v9 = (v4) ? (v4.toStringTag) : (void 0);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? (((void 0) === (v1)) ? (v8) : (v7)) : (((v9) && ((v9) in (Object(v1)))) ? (v5(v1)) : (v6(v1)));
});
});
// GenBlkBrick
for((v7) = 0;(v7) < (4);v7++){
var v8 = (function (v1, v2){
this.normal.copy(v1);
(this.constant) = v2;
return this;
});
}
}
}
// GenBlkBrick
while((v0) && ((v0.nodeType) == (1))){
var v9 = (function (v1, v2, v3){
"use strict";
var v4 = v3(2120), v5 = v3(456);
(v1.exports) = ({isIe : v4, isIe9 : v5});
});
var v10 = (function (v1, v2, v3, v4){
return v1("dijit.form.SimpleTextarea", v4, ({baseClass : "dijitTextBox dijitTextArea", rows : "3", cols : "20", templateString : "<textarea ${!nameAttrSetting} data-dojo-attach-point='focusNode,containerNode,textbox' autocomplete='off'></textarea>", postMixInProperties : (function (){
if((! this.value) && (this.srcNodeRef)){
(this.value) = this.srcNodeRef.value;
}
this.inherited(arguments);
}), buildRendering : (function (){
this.inherited(arguments);
if((v3("ie")) && (this.cols)){
v2.add(this.textbox, "dijitTextAreaCols");
}
}), filter : (function (v6){
if(v6){
(v6) = v6.replace(/\r/g, "");
}
return this.inherited(arguments);
}), _onInput : (function (v7){
if(this.maxLength){
var v8 = parseInt(this.maxLength);
var v6 = this.textbox.value.replace(/\r/g, '');
var v10 = (v6.length) - (v8);
if((v10) > (0)){
var v11 = this.textbox;
if(v11.selectionStart){
var v12 = v11.selectionStart;
var v13 = 0;
if(v3("opera")){
(v13) = (this.textbox.value.substring(0, v12).match(/\r/g)) || ([]).length;
}
(this.textbox.value) = (v6.substring(0, ((v12) - (v10)) - (v13))) + (v6.substring((v12) - (v13)));
v11.setSelectionRange((v12) - (v10), (v12) - (v10));
}else {
if(this.ownerDocument.selection){
v11.focus();
var v14 = this.ownerDocument.selection.createRange();
v14.moveStart("character", - v10);
(v14.text) = '';
v14.select();
}
}
}
}
this.inherited(arguments);
})}));
});
}
{
if((v4) === ("prop1")){
v5++;
}
if((v4) === ("prop2")){
v0++;
}
if((v4) === ("prop3")){
v7++;
}
}
