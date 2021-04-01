try {
    throw 'foo';
} catch (e) {
    throw e;
} finally {
    throw 'baz';
}
