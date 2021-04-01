var v0 = (function (){
"use strict";
(v1.after) = (function (v2, v3, v4){
var v5 = [];
v2((function (v6, v7){
v5.push(v7);
}));
var v8 = v5.indexOf(v3.operand);
if(((v8) === (- 1)) || ((v8) > ((v5.length) - (2)))){
return [];
}else {
return [];
}
});
});
(v0.match.Twitter) = v0.Util.extend(v0.match.Match, ({getType : (function (){
return 'twitter';
}), getTwitterHandle : (function (){
return this.twitterHandle;
}), getAnchorHref : (function (){
return ('https://twitter.com/') + (this.twitterHandle);
}), getAnchorText : (function (){
return ('@') + (this.twitterHandle);
})}));
var v1 = (function (v1, v2, v3){
var v4 = v3(2128);
(v1.exports) = (function (v1){
return (v4(v1)) ? (void 0) : (v1);
});
});
// GenBlkBrick
for(var v0 in v0.prototype){
var v2 = (function (v1, v2, v3){
(v1.exports) = (! v3(131)) && (! v3(201)((function (){
return (7) != (Object.defineProperty(v3(597)("div"), "a", ({get : (function (){
return 7;
})})).a);
})));
});
(v0.prototype._moveArrow) = (function (v1, v2){
this.$arrow.css(({left : v1, top : v2}));
});
}
var v3 = (function (v1){
var v2 = ({ZERO : "zero", ONE : "one", TWO : "two", FEW : "few", MANY : "many", OTHER : "other"});
v1.value("$locale", ({"DATETIME_FORMATS" : ({"MONTH" : [], "SHORTMONTH" : [], "DAY" : [], "SHORTDAY" : [], "AMPMS" : [], "medium" : "dd MMM y HH:mm:ss", "short" : "dd/MM/yyyy HH:mm", "fullDate" : "EEEE, d 'ta'’ MMMM y", "longDate" : "d 'ta'’ MMMM y", "mediumDate" : "dd MMM y", "shortDate" : "dd/MM/yyyy", "mediumTime" : "HH:mm:ss", "shortTime" : "HH:mm"}), "NUMBER_FORMATS" : ({"DECIMAL_SEP" : ".", "GROUP_SEP" : ",", "PATTERNS" : [], "CURRENCY_SYM" : "₤"}), "pluralCat" : (function (v3){
if((v3) == (1)){
return v2.ONE;
}
if(((v3) == (0)) || (((((v3) % (100)) >= (2)) && (((v3) % (100)) <= (4))) && ((v3) == (Math.floor(v3))))){
return v2.FEW;
}
if(((((v3) % (100)) >= (11)) && (((v3) % (100)) <= (19))) && ((v3) == (Math.floor(v3)))){
return v2.MANY;
}
return v2.OTHER;
}), "id" : "mt"}));
});
(v3.prototype._movePopup) = (function (v1){
var v2 = this.sizes, v3, v4 = ({}), v5, v6, v7 = (v2.popupSizes.width) / (2), v8 = (v2.popupSizes.height) / (2), v9;
switch(v1){
}
if(v3){
(v4.top) = v6;
(v9) = ((v5) + (v2.popupSizes.width)) - (v2.canvasSizes.width);
if((v9) > (0)){
(v7) += v9;
(v4.right) = 0;
}else {
if((v5) < (0)){
(v7) += v5;
(v5) = 0;
}
(v4.left) = v5;
}
}else {
(v4.left) = v5;
(v9) = ((v6) + (v2.popupSizes.height)) - (v2.canvasSizes.height);
if((v9) > (0)){
(v8) += v9;
(v4.bottom) = 0;
}else {
if((v6) < (0)){
(v8) += v6;
(v6) = 0;
}
(v4.top) = v6;
}
}
this.$popupContentWrapper.attr('data-position', v1);
this.$popupContentWrapper.removeAttr('style');
this.$popupContentWrapper.css(v4);
this._moveArrow(v7, v8);
});
var v4 = ({get : v3, enumerable : true});
(v3.prototype.addEffect) = (function (v1){
(this._renderEffects[v1._name]) = v1;
});
