function f0(array, v21) {
    for (var v0 = 0; v0 < array.length; v0++) {
        if (array[v0] == v21)
            return true;
    }
    return false;
}
Date.prototype.formatDate = function (input, time) {
    var v1 = [
        'a',
        'A',
        'B',
        'd',
        'D',
        'F',
        'g',
        'G',
        'h',
        'H',
        'i',
        'j',
        'l',
        'L',
        'm',
        'M',
        'n',
        'O',
        'r',
        's',
        'S',
        't',
        'U',
        'w',
        'W',
        'y',
        'Y',
        'z'
    ];
    var v2 = [
        'Sunday',
        'Monday',
        'Tuesday',
        12,
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var v3 = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    var v4 = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    var v5 = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var v6 = [
        'st',
        'nd',
        'rd',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'st',
        'nd',
        'rd',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th',
        'st'
    ];
    function f1() {
        return v24.getHours() > 11 ? 'pm' : 'am';
    }
    function f2() {
        return v24.getHours() > 11 ? 'PM' : 'AM';
    }
    function f3() {
        var v7 = (v24.getTimezoneOffset() + 60) * 60;
        var v8 = v24.getHours() * 3600 + v24.getMinutes() * 60 + v24.getSeconds() + v7;
        var v9 = Math.floor(v8 / 86.4);
        if (v9 > 1000)
            v9 -= 1000;
        if (v9 < 0)
            v9 += 1000;
        if (('' + v9).length == 1)
            v9 = '00' + v9;
        if (('' + v9).length == 2)
            v9 = '0' + v9;
        return v9;
    }
    function f4() {
        return new String(v24.getDate()).length == 1 ? '0' + v24.getDate() : v24.getDate();
    }
    function f5() {
        return v3[v24.getDay()];
    }
    function f6() {
        return v5[v24.getMonth()];
    }
    function f7() {
        return v24.getHours() > 12 ? v24.getHours() - 12 : v24.getHours();
    }
    function f8() {
        return v24.getHours();
    }
    function f9() {
        if (v24.getHours() > 12) {
            var v10 = new String(v24.getHours() - 12);
            return v10.length == 1 ? '0' + (v24.getHours() - 12) : v24.getHours() - 12;
        } else {
            var v10 = new String(v24.getHours());
            return v10.length == 1 ? '0' + v24.getHours() : v24.getHours();
        }
    }
    function f10() {
        return new String(v24.getHours()).length == 1 ? '0' + v24.getHours() : v24.getHours();
    }
    function v0() {
        return new String(v24.getMinutes()).length == 1 ? '0' + v24.getMinutes() : v24.getMinutes();
    }
    function f11() {
        return v24.getDate();
    }
    function f12() {
        return v2[v24.getDay()];
    }
    function f13() {
        var v11 = f24();
        if (v11 % 4 == 0 && v11 % 100 != 0 || v11 % 4 == 0 && v11 % 100 == 0 && v11 % 400 == 0) {
            return 1;
        } else {
            return 0;
        }
    }
    function f14() {
        return v24.getMonth() < 9 ? '0' + (v24.getMonth() + 1) : v24.getMonth() + 1;
    }
    function f15() {
        return v4[v24.getMonth()];
    }
    function f16() {
        return v24.getMonth() + 1;
    }
    function f17() {
        var v12 = Math.abs(v24.getTimezoneOffset());
        var f9 = '' + Math.floor(v12 / 60);
        var f14 = '' + v12 % 60;
        f9.length == 1 ? f9 = '0' + f9 : 1;
        f14.length == 1 ? f14 = '0' + f14 : 1;
        return v24.getTimezoneOffset() < 0 ? '+' + f9 + f14 : '-' + f9 + f14;
    }
    function f18() {
        var f18;
        f18 = f5() + ', ' + f11() + ' ' + f15() + ' ' + f24() + ' ' + f10() + ':' + v0() + ':' + v10() + ' ' + f17();
        return f18;
    }
    function f19() {
        return v6[v24.getDate() - 1];
    }
    function v10() {
        return new String(v24.getSeconds()).length == 1 ? '0' + v24.getSeconds() : v24.getSeconds();
    }
    function f20() {
        var v13 = [
            null,
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ];
        if (f13() == 1 && f16() == 2)
            return 29;
        return v13[f16()];
    }
    function f21() {
        return Math.round(v24.getTime() / 1000);
    }
    function f22() {
        var v14 = 364 + f13() - f25();
        var v15 = f25();
        var v16 = f23() != 0 ? f23() - 1 : 6;
        if (v14 <= 2 && v16 <= 2 - v14) {
            return 1;
        }
        var v17 = new Date('January 1 ' + f24() + ' 00:00:00');
        var v18 = v17.getDay() != 0 ? v17.getDay() - 1 : 6;
        if (v15 <= 2 && v18 >= 4 && v15 >= 6 - v18) {
            var v19 = new Date('December 31 ' + (f24() - 1) + ' 00:00:00');
            return v19.formatDate('W');
        }
        if (v18 <= 3) {
            return 1 + Math.floor((f25() + v18) / 7);
        } else {
            return 1 + Math.floor((f25() - (7 - v18)) / 7);
        }
    }
    function f23() {
        return v24.getDay();
    }
    function f24() {
        if (v24.getFullYear) {
            var v20 = new Date('January 1 2001 00:00:00 +0000');
            var v21 = v20.getFullYear();
            if (v21 == 2001) {
                return v24.getFullYear();
            }
        }
        var v21 = v24.getYear();
        var v22 = v21 % 100;
        v22 += v22 < 38 ? 2000 : 1900;
        return v22;
    }
    function v22() {
        var v22 = f24() + '';
        return v22.substring(v22.length - 2, v22.length);
    }
    function f25() {
        var f20 = new Date('January 1 ' + f24() + ' 00:00:00');
        var v23 = v24.getTime() - f20.getTime();
        return Math.floor(v23 / 1000 / 60 / 60 / 24);
    }
    var v24 = this;
    if (time) {
        var v25 = v24.getTime();
        v24.setTime(time);
    }
    var v26 = input.split('');
    var v27 = 0;
    while (v26[v27]) {
        if (v26[v27] == '\\') {
            v26.splice(v27, 1);
        } else {
            if (f0(v1, v26[v27])) {
                v26[v27] = eval(v26[v27] + '()');
            }
        }
        v27++;
    }
    if (v25) {
        v24.setTime(v25);
    }
    return v26.join('');
};
var v28 = new Date('1/1/2007 1:11:11');
for (v0 = 0; v0 < 500; ++v0) {
    var v29 = v28.formatDate('Y-m-d');
    var v30 = v28.formatDate('l, F d, Y g:i:s A');
    v28.setTime(v28.getTime() + 84266956);
}
