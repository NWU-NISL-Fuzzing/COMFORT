if (RegExp('SourceText').exec('1') !== null) {
    $ERROR('#1: RegExp("0").exec("1") === null');
}