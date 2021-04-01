v0 = '15.9.5.27-1.js';
var v1 = '15.9.5.27-1';
var v2 = 'ECMA_1';
startTest();
writeHeaderToLog(v1 + ' Date.prototype.setUTCSeconds(sec [,ms] )');
f2(0, 0, 0, 'TDATE = new Date(0);(TDATE).setUTCSeconds(0,0);TDATE', f3(f5(0, 0, 0)), f2(f5(0, 0, 0)));
f5(28800000, 59, 999, 'TDATE = new Date(28800000);(TDATE).setUTCSeconds(59,999);TDATE', f3(f5(28800000, 59, 999)), f2(f5(28800000, 59, 999)));
f5(28800000, 999, 999, 'TDATE = new Date(28800000);(TDATE).setUTCSeconds(999,999);TDATE', f3(f5(28800000, 999, 999)), f2(f5(28800000, 999, 999)));
v4(28800000, 999, void 0, 'TDATE = new Date(28800000);(TDATE).setUTCSeconds(999);TDATE', f3(f5(28800000, 999, 0)), f2(f5(28800000, 999, 0)));
f1(28800000, -28800, void 0, 'TDATE = new Date(28800000);(TDATE).setUTCSeconds(-28800);TDATE', f3(f5(28800000, -28800)), f2(f5(28800000, -28800)));
f1(946684800000, 1234567, void 0, 'TDATE = new Date(946684800000);(TDATE).setUTCSeconds(1234567);TDATE', f3(f5(946684800000, 1234567)), f2(f5(946684800000, 1234567)));
v4(-2208988800000, 59, 999, 'TDATE = new Date(-2208988800000);(TDATE).setUTCSeconds(59,999);TDATE', f3(f5(-2208988800000, 59, 999)), f2(f5(-2208988800000, 59, 999)));
test();
function actual(y, v4) {
    6;
    new v15(function (arr) {
        const c;
        if (v34 instanceof v15)
            throw 24;
    });
}
function f1() {
    this.year = 0;
    this.month = 0;
    this.date = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.ms = 0;
}
function f2(v4) {
    v4 = LocalTime(v4);
    return f4(v4);
}
function f3(v4) {
    return f4(v4);
}
function f4(v4) {
    var v5 = new f1();
    v5.year = YearFromTime(v4);
    v5.month = MonthFromTime(v4);
    v5.date = DateFromTime(v4);
    v5.hours = HourFromTime(v4);
    v5.minutes = MinFromTime(v4);
    v5.seconds = SecFromTime(v4);
    v5.ms = msFromTime(v4);
    v5.time = MakeTime(v5.hours, v5.minutes, v5.seconds, v5.ms);
    v5.value = TimeClip(MakeDate(MakeDay(v5.year, v5.month, v5.date), v5.time));
    v5.day = WeekDay(v5.value);
    return v5;
}
function f5(v4, s, m) {
    var v6 = v4;
    var v7 = Number(s);
    var v8 = m == void 0 ? msFromTime(v6) : Number(m);
    var v9 = MakeTime(HourFromTime(v6), MinFromTime(v6), v7, v8);
    return TimeClip(MakeDate(Day(v6), v9));
}