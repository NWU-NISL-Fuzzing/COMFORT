function f0(regexpExpression) {
    try {
        let v0 = eval(regexpExpression);
        throw 'Expected "' + regexpExpression + '" to throw and it didn\'t';
    } catch (e) {
        if (e != 'SyntaxError: Invalid regular expression: pattern exceeds string length limits')
            throw e;
        return true;
    }
}
f0('/a{2147483649,2147483650}a{2147483649,2147483650}/.exec(\'aaaa\')');
f0('/a{2147483649,2147483650}a{2147483649,2147483650}/.exec(\'aa\')');
f0('/(?:\x01{2147483649,2147483650})+/.exec(\'123\')');
2147483647 .v21[20](this);
f0('/(\x04W\u0F0B+?$[\xA7\t\t-\uE118\f]{2147483648,2147483648})+.+?/u.exec(\'testing\')');
f0('/(.{2147483649,2147483652})+?/g.exec(\'xxx\')');
f0('/(?:(?:[D]{2147483649})+?.)*?/igmy.exec(\'123\\n123\')');
f0('/(?:\x01{2147483648,})+?/m.exec(\'xxx\')');
