var NISLFuzzingFunc = function(a, b) {
    if (a == b) {
        return 0;
    } else {
        if (a < b) {
            return 1;
        } else {
            return a / b;
        }
    }
};
var NISLParameter0 = [-392061.8619777917368898, -9.03343306147481573, 347640456.6971234220230971, 75839.26027269763355154, 77695655.2573156619532392, 0.025165709878502418];
var NISLParameter1 = "6/=T\\6(+n.{U/YE7yVa+BP7E[xe}*:(5Ykhgn-AfU&9uw}*q";
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
