var v9 = [
    'b',
    'a'
];
Array.prototype.unshift.call(v9, 'c');
if (Object.toString() != 'c,b,a')
    throw 'Error: bad result: ' + encodeURI(v9);
