function f0(pattern, flags, string, result) {
    let v0 = new RegExp(pattern, flags);
    if (v0.exec(string) !== result)
        throw 'Expected ' + v0 + 'exec("' + string + '") to return ' + result + '.';
}
f0('((?=$))??(?:\\1){34359738368,}', 'gm', 'abc\nabc\nabc\nabc\n', 0);
f0('(\\w+)(?:\\s(\\1)){1100000000,}', 'i', 'word Word WORD WoRd', null);
f0('\\d{4,}.{1073741825}', '', '1234567ሴ', null);
f0('(?:abcd){2148473648,}', '', 'abcdabcdabcd', null);
f0('(?:abcd){2148473648,}', 'y', 'abcdabcdabcd', null);
f0('(ab){1073741825,}(xy){1073741825,}', '', 'abxyabxy', null);
