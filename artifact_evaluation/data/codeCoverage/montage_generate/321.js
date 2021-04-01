v0 = '15.9.3.2-3.js';
var v1 = 0;
var v2 = 1;
var v3 = 2;
var v4 = 3;
var v5 = 4;
var v6 = 5;
var v7 = 6;
var v8 = 7;
var v9 = 8;
var v10 = 9;
var v11 = 10;
var v12 = 11;
var v13 = 12;
var v14 = 13;
var v15 = 14;
var v16 = 15;
var v17 = 16;
var v18 = '15.9.3.1';
var v19 = 'Date( year, month, date, hours, minutes, seconds )';
writeHeaderToLog(v18 + ' ' + v19);
f0(new Date(1899, 11, 31, 16, 0, 0), 'new Date(1899,11,31,16,0,0)', [
    -2208988800000,
    1900,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1899,
    11,
    31,
    0,
    16,
    0,
    0,
    0
]);
f0(new Date(1899, 11, 31, 15, 59, 59), 'new Date(1899,11,31,15,59,59)', [
    -2208988801000,
    1899,
    11,
    31,
    0,
    23,
    59,
    59,
    0,
    1899,
    11,
    31,
    0,
    15,
    59,
    59,
    0
]);
f0(new Date(1900, 0, 1, 0, 0, 0), 'new Date(1900,0,1,0,0,0)', [
    -2208960000000,
    1900,
    0,
    1,
    1,
    8,
    0,
    0,
    0,
    1900,
    0,
    1,
    1,
    0,
    14,
    0,
    0
]);
f0(new Date(1900, 0, 1, 0, 0, 1), 'new Date(1900,0,1,0,0,1)', [
    -2208959999000,
    1900,
    0,
    1,
    1,
    8,
    0,
    1,
    0,
    1900,
    0,
    1,
    1,
    0,
    0,
    1,
    0
]);
test();
function f0(DateCase, DateString, ResultArray) {
    adjustResultArray(ResultArray);
    new TestCase(v18, DateString + '.getTime()', ResultArray[v1], DateCase.getTime());
    new TestCase(v18, DateString + '.valueOf()', ResultArray[v1], DateCase.valueOf());
    new TestCase(v18, DateString + '.getUTCFullYear()', ResultArray[v2], DateCase.getUTCFullYear());
    new TestCase(v18, DateString + '.getUTCMonth()', ResultArray[v3], DateCase.getUTCMonth());
    new TestCase(v18, DateString + '.getUTCDate()', ResultArray[v4], DateCase.getUTCDate());
    new TestCase(v18, DateString + '.getUTCDay()', ResultArray[v5], DateCase.getUTCDay());
    new TestCase(v18, DateString + '.getUTCHours()', ResultArray[v6], DateCase.getUTCHours());
    new TestCase(v18, DateString + '.getUTCMinutes()', ResultArray[v7], DateCase.getUTCMinutes());
    new TestCase(v18, DateString + '.getUTCSeconds()', ResultArray[v8], DateCase.getUTCSeconds());
    new TestCase(v18, DateString + '.getUTCMilliseconds()', ResultArray[v9], DateCase.getUTCMilliseconds());
    new TestCase(v18, DateString + '.getFullYear()', ResultArray[v10], DateCase.getFullYear());
    new TestCase(v18, DateString + '.getMonth()', ResultArray[v11], DateCase.getMonth());
    new TestCase(v18, DateString + '.getDate()', ResultArray[v12], DateCase.getDate());
    new TestCase(v18, DateString + '.getDay()', ResultArray[v13], DateCase.getDay());
    new TestCase(v18, DateString + '.getHours()', ResultArray[v14], DateCase.getHours());
    new TestCase(v18, DateString + '.getMinutes()', ResultArray[v15], DateCase.getMinutes());
    new TestCase(v18, DateString + '.getSeconds()', ResultArray[v16], DateCase.getSeconds());
    new TestCase(v18, DateString + '.getMilliseconds()', ResultArray[v17], DateCase.getMilliseconds());
}