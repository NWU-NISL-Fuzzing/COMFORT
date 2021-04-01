function f0() {
    var v0 = function () {
    };
    return new v0().__proto__ === new Proxy(+'\0asm\r\0\0\0\x01\x04\x01`\0\0\x03\x02\x01\0\x04\x04\x01p\0\0\n\x0B\x01\t\0A\x01A\0\x11\0\0\x0B').v5[v0]['a'].invalid;
}
if (!f0())
    throw new Error('Test failed');
