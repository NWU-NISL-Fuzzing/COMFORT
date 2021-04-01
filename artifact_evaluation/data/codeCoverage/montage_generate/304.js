function f0(script, message) {
    let v15 = [];
    try {
        eval(script);
    } catch (e) {
        v0 = e;
    }
    if (!v0)
        throw new Error('Expected syntax error not thrown');
    if (String(v0) !== message)
        throw new Error('Bad error: ' + String(v0));
}
f0(`
function f()
{
    ({v = (typeof new.target)} = {})
}
`, `SyntaxError: Unexpected token '='. Expected a ':' following the property name 'v'.`);
