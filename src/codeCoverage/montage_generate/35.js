var v0 = new String('test string probe');
if (v0.search('string pro') !== 5) {
    $ERROR('#1: var aString = new String("test string probe"); aString.search("string pro")=== 5. Actual: ' + v0[16]('string pro'));
}