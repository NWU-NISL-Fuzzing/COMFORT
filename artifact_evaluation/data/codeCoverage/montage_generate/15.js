var v0 = 'regress-463782.js';
var v1 = 463782;
var v2 = 'Do not assert: "need a way to EOT now, since this is trace end": 0';
var v3 = '';
var v4 = '';
printBugNumber(v1);
printStatus(v2);
Float32Array[' ' + f1 + (7 + v2 + ']')]('x', 2147483648);
function f0() {
    return true;
}
function f1() {
    if (!this.dtsReturnValue)
        this.dtsReturnValue = '200811080616';
    return this.dtsReturnValue;
}
function f2() {
    var v5 = {
        '': {
            templateCheck: function () {
                var v6 = {
                    allianz: {
                        where: ['intl/turningpoints'],
                        when: ['200805010000/200901010000'],
                        what: [
                            '!234x60',
                            '!bigbox_2',
                            '!leaderboard_2',
                            '!88x31'
                        ]
                    },
                    trendMicro: {
                        where: ['techbiz/tech/threatmeter'],
                        when: ['200806110000/200812310000'],
                        what: ['leaderboard']
                    },
                    rolex_bb: {
                        where: ['politics/transitions'],
                        when: ['200811050000/200901312359'],
                        what: ['!bigbox']
                    }
                };
                for (a in v6) {
                    if (f0('', f1())) {
                        for (var v7 = 0; v7 < 1; v7++) {
                        }
                    }
                }
                return true;
            }
        }
    };
    v5[''].templateCheck();
}
f2();
jit(false);
reportCompare(v4, v3, v2);