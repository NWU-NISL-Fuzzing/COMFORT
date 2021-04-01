var v0 = (function (v1){
if(this.auctions){
for(var v2 in this.auctions.active){
var v3 = this.auctions.active[v2];
if((v3.stack.tsid) == (v1)){
return v2;
}
}
}
return null;
});
var v1 = (function (v1, v2, v3){
while((v2) < (v3)){
var v4 = v1[v2];
(v1[v2]) = v1[v3];
(v1[v3]) = v4;
++v2;
--v3;
}
});
var v2 = (function (v1, v2){
return ((v1) + (".")) + (v2);
});
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v1(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v1(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v2(v5);
return v5;
});
// GenBlkBrick
for((v0) = v1;(v0) < (v2);(v0) += v3){
(v1.DATASOURCE_CUBERAW) = 8;
}
Object.defineProperty(Array.prototype, "forEach", ({value : v1, writable : true, enumerable : false, configurable : true}));
var v3 = (function (v1, v2, v3){
var v4 = v3(4);
v4((v4.P) + (v4.R), "Map", ({toJSON : v3(634)("Map")}));
});
var v4 = (function (v1){
'use strict';
var v2 = v1.defineLocale('zh-tw', ({months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'), weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'), weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'), weekdaysMin : '日_一_二_三_四_五_六'.split('_'), longDateFormat : ({LT : 'HH:mm', LTS : 'HH:mm:ss', L : 'YYYY/MM/DD', LL : 'YYYY年M月D日', LLL : 'YYYY年M月D日 HH:mm', LLLL : 'YYYY年M月D日dddd HH:mm', l : 'YYYY/M/D', ll : 'YYYY年M月D日', lll : 'YYYY年M月D日 HH:mm', llll : 'YYYY年M月D日dddd HH:mm'}), meridiemParse : /凌晨|早上|上午|中午|下午|晚上/, meridiemHour : (function (v3, v4){
if((v3) === (12)){
(v3) = 0;
}
if((((v4) === ('凌晨')) || ((v4) === ('早上'))) || ((v4) === ('上午'))){
return v3;
}else {
if((v4) === ('中午')){
return ((v3) >= (11)) ? (v3) : ((v3) + (12));
}else {
if(((v4) === ('下午')) || ((v4) === ('晚上'))){
return (v3) + (12);
}
}
}
}), meridiem : (function (v3, v5, v6){
var v7 = ((v3) * (100)) + (v5);
if((v7) < (600)){
return '凌晨';
}else {
if((v7) < (900)){
return '早上';
}else {
if((v7) < (1130)){
return '上午';
}else {
if((v7) < (1230)){
return '中午';
}else {
if((v7) < (1800)){
return '下午';
}else {
return '晚上';
}
}
}
}
}
}), calendar : ({sameDay : '[今天]LT', nextDay : '[明天]LT', nextWeek : '[下]ddddLT', lastDay : '[昨天]LT', lastWeek : '[上]ddddLT', sameElse : 'L'}), dayOfMonthOrdinalParse : /\d{1,2}(日|月|週)/, ordinal : (function (v8, v9){
switch(v9){
}
}), relativeTime : ({future : '%s內', past : '%s前', s : '幾秒', ss : '%d 秒', m : '1 分鐘', mm : '%d 分鐘', h : '1 小時', hh : '%d 小時', d : '1 天', dd : '%d 天', M : '1 個月', MM : '%d 個月', y : '1 年', yy : '%d 年'})}));
return v2;
});
