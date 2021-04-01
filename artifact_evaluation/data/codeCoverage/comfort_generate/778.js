var NISLFuzzingFunc = function(obj) {
    var toString = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return true;
        }
    }
    return false;
};
var NISLParameter0 = [92348591.34021948667769564, 1231.020916443864221868, -94.8315705685414292, 702222517.7477827380550617, -1.7791014280033041, -333446929.44349697674766875, -9688577.5084422106681737, -482937179.43884925286971144, 89.18090106060182176, 439916.9433193766290215, 8756778.9594653121058494, 7291652.13059858216365583];
NISLFuzzingFunc(NISLParameter0);
