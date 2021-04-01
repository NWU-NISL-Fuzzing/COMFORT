try {
    throw 'foo';
} catch (e) {
    new e(64, 7);
} finally {
    throw 'baz';
}
