try {
    v17();
    Date.parseFunctions = { count: 0 };
    Date.parseRegexes = [];
    Date.formatFunctions = { count: 0 };
    Date.prototype.dateFormat = function (format) {
        if (Date.formatFunctions[format] == null) {
            Date.createNewFormat(format);
        }
        var v0 = Date.formatFunctions[format];
        return this[v0]();
    };
    Date.createNewFormat = function (format) {
        var v1 = 'format' + Date.formatFunctions.count++;
        Date.formatFunctions[format] = v1;
        var v2 = 'Date.prototype.' + v1 + ' = function(){return ';
        var v3 = false;
        var v4 = '';
        for (var v5 = 0; v5 < format.length; ++v5) {
            v4 = format.charAt(v5);
            if (!v3 && v4 == '\\') {
                v3 = true;
            } else if (v3) {
                v3 = false;
                v2 += '\'' + String.escape(v4) + '\' + ';
            } else {
                v2 += Date.getFormatCode(v4);
            }
        }
        eval(v2.substring(0, v2.length - 3) + ';}');
    };
    Date.getFormatCode = function (character) {
        switch (character) {
        case 'd':
            return 'String.leftPad(this.getDate(), 2, \'0\') + ';
        case 'D':
            return 'Date.dayNames[this.getDay()].substring(0, 3) + ';
        case 'j':
            return 'this.getDate() + ';
        case 'l':
            return 'Date.dayNames[this.getDay()] + ';
        case 'S':
            return 'this.getSuffix() + ';
        case 'w':
            return 'this.getDay() + ';
        case 'z':
            return 'this.getDayOfYear() + ';
        case 'W':
            return 'this.getWeekOfYear() + ';
        case 'F':
            return 'Date.monthNames[this.getMonth()] + ';
        case 'm':
            return 'String.leftPad(this.getMonth() + 1, 2, \'0\') + ';
        case 'M':
            return 'Date.monthNames[this.getMonth()].substring(0, 3) + ';
        case 'n':
            return '(this.getMonth() + 1) + ';
        case 't':
            return 'this.getDaysInMonth() + ';
        case 'L':
            return '(this.isLeapYear() ? 1 : 0) + ';
        case 'Y':
            return 'this.getFullYear() + ';
        case 'y':
            return '(\'\' + this.getFullYear()).substring(2, 4) + ';
        case 'a':
            return '(this.getHours() < 12 ? \'am\' : \'pm\') + ';
        case 'A':
            return '(this.getHours() < 12 ? \'AM\' : \'PM\') + ';
        case 'g':
            return '((this.getHours() %12) ? this.getHours() % 12 : 12) + ';
        case 'G':
            return 'this.getHours() + ';
        case 'h':
            return 'String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, \'0\') + ';
        case 'H':
            return 'String.leftPad(this.getHours(), 2, \'0\') + ';
        case 'i':
            return 'String.leftPad(this.getMinutes(), 2, \'0\') + ';
        case 's':
            return 'String.leftPad(this.getSeconds(), 2, \'0\') + ';
        case 'O':
            return 'this.getGMTOffset() + ';
        case 'T':
            return 'this.getTimezone() + ';
        case 'Z':
            return '(this.getTimezoneOffset() * -60) + ';
        default:
            return '\'' + String.escape(character) + '\' + ';
        }
    };
    Date.parseDate = function (input, format) {
        if (Date.parseFunctions[format] == null) {
            Date.createParser(format);
        }
        var v0 = Date.parseFunctions[format];
        return Date[v0](input);
    };
    Date.createParser = function (format) {
        var v1 = 'parse' + Date.parseFunctions.count++;
        var v6 = Date.parseRegexes.length;
        var v7 = 1;
        Date.parseFunctions[format] = v1;
        var v2 = 'Date.' + v1 + ' = function(input){\n' + 'var y = -1, m = -1, d = -1, h = -1, i = -1, s = -1;\n' + 'var d = new Date();\n' + 'y = d.getFullYear();\n' + 'm = d.getMonth();\n' + 'd = d.getDate();\n' + 'var results = input.match(Date.parseRegexes[' + v6 + ']);\n' + 'if (results && results.length > 0) {';
        var v8 = '';
        var v3 = false;
        var v4 = '';
        for (var v5 = 0; v5 < format.length; ++v5) {
            v4 = format.charAt(v5);
            if (!v3 && v4 == '\\') {
                v3 = true;
            } else if (v3) {
                v3 = false;
                v8 += String.escape(v4);
            } else {
                v9 = Date.formatCodeToRegex(v4, v7);
                v7 += v9.g;
                v8 += v9.s;
                if (v9.g && v9.c) {
                    v2 += v9.c;
                }
            }
        }
        v2 += 'if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n' + '{return new Date(y, m, d, h, i, s);}\n' + 'else if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n' + '{return new Date(y, m, d, h, i);}\n' + 'else if (y > 0 && m >= 0 && d > 0 && h >= 0)\n' + '{return new Date(y, m, d, h);}\n' + 'else if (y > 0 && m >= 0 && d > 0)\n' + '{return new Date(y, m, d);}\n' + 'else if (y > 0 && m >= 0)\n' + '{return new Date(y, m);}\n' + 'else if (y > 0)\n' + '{return new Date(y);}\n' + '}return null;}';
        Date.parseRegexes[v6] = new RegExp('^' + v8 + '$');
        eval(v2);
    };
    Date.formatCodeToRegex = function (character, v7) {
        switch (character) {
        case 'D':
            return {
                g: 0,
                c: null,
                s: '(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)'
            };
        case 'j':
        case 'd':
            return {
                g: 1,
                c: 'd = parseInt(results[' + v7 + '], 10);\n',
                s: '(\\d{1,2})'
            };
        case 'l':
            return {
                g: 0,
                c: null,
                s: '(?:' + Date.dayNames.join('|') + ')'
            };
        case 'S':
            return {
                g: 0,
                c: null,
                s: '(?:st|nd|rd|th)'
            };
        case 'w':
            return {
                g: 0,
                c: null,
                s: '\\d'
            };
        case 'z':
            return {
                g: 0,
                c: null,
                s: '(?:\\d{1,3})'
            };
        case 'W':
            return {
                g: 0,
                c: null,
                s: '(?:\\d{2})'
            };
        case 'F':
            return {
                g: 1,
                c: 'm = parseInt(Date.monthNumbers[results[' + v7 + '].substring(0, 3)], 10);\n',
                s: '(' + Date.monthNames.join('|') + ')'
            };
        case 'M':
            return {
                g: 1,
                c: 'm = parseInt(Date.monthNumbers[results[' + v7 + ']], 10);\n',
                s: '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)'
            };
        case 'n':
        case 'm':
            return {
                g: 1,
                c: 'm = parseInt(results[' + v7 + '], 10) - 1;\n',
                s: '(\\d{1,2})'
            };
        case 't':
            return {
                g: 0,
                c: null,
                s: '\\d{1,2}'
            };
        case 'L':
            return {
                g: 0,
                c: null,
                s: '(?:1|0)'
            };
        case 'Y':
            return {
                g: 1,
                c: 'y = parseInt(results[' + v7 + '], 10);\n',
                s: '(\\d{4})'
            };
        case 'y':
            return {
                g: 1,
                c: 'var ty = parseInt(results[' + v7 + '], 10);\n' + 'y = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n',
                s: '(\\d{1,2})'
            };
        case 'a':
            return {
                g: 1,
                c: 'if (results[' + v7 + '] == \'am\') {\n' + 'if (h == 12) { h = 0; }\n' + '} else { if (h < 12) { h += 12; }}',
                s: '(am|pm)'
            };
        case 'A':
            return {
                g: 1,
                c: 'if (results[' + v7 + '] == \'AM\') {\n' + 'if (h == 12) { h = 0; }\n' + '} else { if (h < 12) { h += 12; }}',
                s: '(AM|PM)'
            };
        case 'g':
        case 'G':
        case 'h':
        case 'H':
            return {
                g: 1,
                c: 'h = parseInt(results[' + v7 + '], 10);\n',
                s: '(\\d{1,2})'
            };
        case 'i':
            return {
                g: 1,
                c: 'i = parseInt(results[' + v7 + '], 10);\n',
                s: '(\\d{2})'
            };
        case 's':
            return {
                g: 1,
                c: 's = parseInt(results[' + v7 + '], 10);\n',
                s: '(\\d{2})'
            };
        case 'O':
            return {
                g: 0,
                c: null,
                s: '[+-]\\d{4}'
            };
        case 'T':
            return {
                g: 0,
                c: null,
                s: '[A-Z]{3}'
            };
        case 'Z':
            return {
                g: 0,
                c: null,
                s: '[+-]\\d{1,5}'
            };
        default:
            return {
                g: 0,
                c: null,
                s: String.escape(character)
            };
        }
    };
    Date.prototype.getTimezone = function () {
        return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/, '$1').replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, '$1$2$3');
    };
    Date.prototype.getGMTOffset = function () {
        return (this.getTimezoneOffset() > 0 ? '-' : '+') + String.leftPad(Math.floor(this.getTimezoneOffset() / 60), 2, '0') + String.leftPad(this.getTimezoneOffset() % 60, 2, '0');
    };
    Date.prototype.getDayOfYear = function () {
        var v10 = 0;
        Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
        for (var v5 = 0; v5 < this.getMonth(); ++v5) {
            v10 += Date.daysInMonth[v5];
        }
        return v10 + this.getDate() - 1;
    };
    Date.prototype.getWeekOfYear = function () {
        var v11 = this.getDayOfYear() + (4 - this.getDay());
        var v12 = new Date(this.getFullYear(), 0, 1);
        var v13 = 7 - v12.getDay() + 4;
        document.write(v13);
        return String.leftPad((v11 - v13) / 7 + 1, 2, '0');
    };
    Date.prototype.isLeapYear = function () {
        var v14 = this.getFullYear();
        return (v14 & 3) == 0 && (v14 % 100 || v14 % 400 == 0 && v14);
    };
    Date.prototype.getFirstDayOfMonth = function () {
        var v15 = (this.getDay() - (this.getDate() - 1)) % 7;
        return v15 < 0 ? v15 + 7 : v15;
    };
    Date.prototype.getLastDayOfMonth = function () {
        var v15 = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
        return v15 < 0 ? v15 + 7 : v15;
    };
    Date.prototype.getDaysInMonth = function () {
        Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
        return Date.daysInMonth[this.getMonth()];
    };
    Date.prototype.getSuffix = function () {
        switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return 'st';
        case 2:
        case 22:
            return 'nd';
        case 3:
        case 23:
            return 'rd';
        default:
            return 'th';
        }
    };
    String.escape = function (string) {
        return string.replace(/('|\\)/g, '\\$1');
    };
    String.leftPad = function (val, size, v4) {
        var v16 = new String(val);
        if (v4 == null) {
            v4 = ' ';
        }
        while (v16.length < size) {
            v16 = v4 + v16;
        }
        return v16;
    };
    Date.daysInMonth = [
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
    Date.monthNames = [
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
    Date.dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    v17['#6: -4\\u000A>>\\u000A1 === -2'][v17] = 50;
    Date.monthNumbers = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11
    };
    Date.patterns = {
        ISO8601LongPattern: 'Y-m-d H:i:s',
        ISO8601ShortPattern: 'Y-m-d',
        ShortDatePattern: 'n/j/Y',
        LongDatePattern: 'l, F d, Y',
        FullDateTimePattern: 'l, F d, Y g:i:s A',
        MonthDayPattern: 'F d',
        ShortTimePattern: 'g:i A',
        LongTimePattern: 'g:i:s A',
        SortableDateTimePattern: 'Y-m-d\\TH:i:s',
        UniversalSortableDateTimePattern: 'Y-m-d H:i:sO',
        YearMonthPattern: 'F, Y'
    };
    var v17 = new Date('1/1/2007 1:11:11');
    for (v5 = 0; v5 < 4000; ++v5) {
        var v18 = v17.dateFormat('Y-m-d');
        var v19 = v17.dateFormat('l, F d, Y g:i:s A');
        v17.setTime(v17.getTime() + 84266956);
    }
} catch (e) {
    v18('JSC EXCEPTION FUZZ: Caught exception: ' + e);
}
