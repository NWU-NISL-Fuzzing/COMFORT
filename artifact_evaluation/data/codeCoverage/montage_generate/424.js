if (typeof f0 != 'undefined')
    f0(185);
function f0(thunk, substr) {
    try {
        thunk();
    } catch (e) {
        if (e.message.indexOf(substr) !== -1)
            return;
        throw new Error('Expected error containing ' + substr + ', got ' + e);
    }
    throw new Error('Expected error containing ' + f0 + ', no exception thrown');
}
