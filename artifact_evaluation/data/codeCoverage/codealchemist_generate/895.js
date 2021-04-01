var v0 = (function (v1){
return v1.defineLocale('id', ({months : "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort : "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays : "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort : "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin : "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat : ({LT : "HH.mm", L : "DD/MM/YYYY", LL : "D MMMM YYYY", LLL : "D MMMM YYYY [pukul] LT", LLLL : "dddd, D MMMM YYYY [pukul] LT"}), meridiem : (function (v2, v3, v4){
if((v2) < (11)){
return 'pagi';
}else {
if((v2) < (15)){
return 'siang';
}else {
if((v2) < (19)){
return 'sore';
}else {
return 'malam';
}
}
}
}), calendar : ({sameDay : '[Hari ini pukul] LT', nextDay : '[Besok pukul] LT', nextWeek : 'dddd [pukul] LT', lastDay : '[Kemarin pukul] LT', lastWeek : 'dddd [lalu pukul] LT', sameElse : 'L'}), relativeTime : ({future : "dalam %s", past : "%s yang lalu", s : "beberapa detik", m : "semenit", mm : "%d menit", h : "sejam", hh : "%d jam", d : "sehari", dd : "%d hari", M : "sebulan", MM : "%d bulan", y : "setahun", yy : "%d tahun"}), week : ({dow : 1, doy : 7})}));
});
var v1 = (function (v1, v2){
return Array.prototype.map.call(arguments, v0);
});
(v1.prototype.getVisitors) = (function (){
return this.visitors;
});
(v1.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v0(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
var v2 = Array.prototype.filter.call(v1, v0);
Object.defineProperties(v0.prototype, ({enabled : ({get : (function (){
return this._enabled;
}), set : (function (v2){
(this._enabled) = v2;
(this.timestamp) = Date.now();
})})}));
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : false}));
(v1.escapeString) = v0;
