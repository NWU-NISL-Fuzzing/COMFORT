function String() {
    const v0 = 123;
    {
        const v0 = 456;
    }
    return v0 === 123;
}
if (!String())
    throw new Error('Test failed');