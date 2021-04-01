// GenBlkBrick
for((v0) = 2;(v0) <= (v1);v0++){
var v1 = (function (){
this.debounce('generate-request', (function (){
if((this.url) == (null)){
return;
}
if(this.auto){
this.generateRequest();
}
}), this.debounceDuration);
});
}
var v2 = (function (v1, v2, v3){
var v4 = v3(688), v5 = v3(2220), v6 = v3(473);
(v1.exports) = (function (v1){
return (v6(v1)) ? (v4(v1, ! 0)) : (v5(v1));
});
});
// GenBlkBrick
for(var v3 = 0;(v3) < (256);v3++){
if((v3) < (20)){
break ;
}
}
var v4 = (function (v1){
return v1.defineLocale('vi', ({months : "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort : "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdays : "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort : "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin : "CN_T2_T3_T4_T5_T6_T7".split("_"), longDateFormat : ({LT : "HH:mm", L : "DD/MM/YYYY", LL : "D MMMM [năm] YYYY", LLL : "D MMMM [năm] YYYY LT", LLLL : "dddd, D MMMM [năm] YYYY LT", l : "DD/M/YYYY", ll : "D MMM YYYY", lll : "D MMM YYYY LT", llll : "ddd, D MMM YYYY LT"}), calendar : ({sameDay : "[Hôm nay lúc] LT", nextDay : '[Ngày mai lúc] LT', nextWeek : 'dddd [tuần tới lúc] LT', lastDay : '[Hôm qua lúc] LT', lastWeek : 'dddd [tuần rồi lúc] LT', sameElse : 'L'}), relativeTime : ({future : "%s tới", past : "%s trước", s : "vài giây", m : "một phút", mm : "%d phút", h : "một giờ", hh : "%d giờ", d : "một ngày", dd : "%d ngày", M : "một tháng", MM : "%d tháng", y : "một năm", yy : "%d năm"}), ordinal : (function (v2){
return v2;
}), week : ({dow : 1, doy : 4})}));
});
// GenBlkBrick
for(var v5 = ((v1) < (0)) ? (Math.max(0, (v0) + (v1))) : ((v1) || (0));(v5) < (v0);v5++){
// GenBlkBrick
for((v6) = 0;(v6) < (9);v6++){
var v7 = (((v5) + ((Math.random()) * (16))) % (16)) | (0);
}
}
Array.prototype.reduce.call(v2, v1, v7);
(v0) = (0.5) * ((- Math.pow(2, (- 10) * ((v0) - (1)))) + (2));
while((v7) < (0x100)){
if((v1) & (v7)){
v0++;
}
(v7) <<= 1;
}
