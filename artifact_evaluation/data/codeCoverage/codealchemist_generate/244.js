var v0 = (function (v1, v2){
if((v1) === ('amqp')){
(v2.heartbeat) = (v2.heartbeat) || (580);
}
});
var v1 = (function (){
this._cleanValueChangeEvent();
this._renderValueChangeEvent();
});
var v2 = (function (v1){
(v1.regional.be) = ({closeText : "Зачыніць", prevText : "&larr;Папяр.", nextText : "Наст.&rarr;", currentText : "Сёньня", monthNames : [], monthNamesShort : [], dayNames : [], dayNamesShort : [], dayNamesMin : [], weekHeader : "Тд", dateFormat : "dd.mm.yy", firstDay : 1, isRTL : false, showMonthAfterYear : false, yearSuffix : ""});
v1.setDefaults(v1.regional.be);
return v1.regional.be;
});
(v0.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v2(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
v2(0, 1, 2, 3);
var v3 = ({get : v1, writable : false});
Object.defineProperty(v2.prototype, "useBlurVarianceShadowMap", ({get : (function (){
return ((this.filter) === (v2.FILTER_BLURVARIANCESHADOWMAP)) && (this._light.supportsVSM());
}), set : (function (v2){
(this.filter) = (v2) ? (v2.FILTER_BLURVARIANCESHADOWMAP) : (v2.FILTER_NONE);
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v4 in v0){
if(v0(v4)){
continue ;
}
}
