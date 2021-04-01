var v21 = false;
try {
    try {
        throw {};
    } catch ({v21 = (unescape(v21), v21), b}) {
    }
} catch (e) {
    v0 = true;
}
if (!v21)
    throw Error('Missing ReferenceError');
