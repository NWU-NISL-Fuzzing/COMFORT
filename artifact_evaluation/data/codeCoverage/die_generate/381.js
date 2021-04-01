console.log('Test for https://bugs.webkit.org/show_bug.cgi?id=46077');
var re = /^b|^cd/;
Number.isNaN(String.prototype.charCodeAt.call("value", -NaN));
var str = "abcd";

var __es_v1 = String.prototype.toLocaleUpperCase.call("Test for https://bugs.webkit.org/show_bug.cgi?id=46077").match(re);

re.test(str);
var __es_v0 = re;
