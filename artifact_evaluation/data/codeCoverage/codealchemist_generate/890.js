var v0 = (function (v1){
return v1.waypoints.map((function (v2){
return ({x : v2.x, y : v2.y});
}));
});
(v0.PI_Q) = (Math.PI) / (4.0);
var v1 = (function (v1, v2, v3){
var v4 = v3(2234), v5 = v3(2233);
(v1.exports) = (function (v1, v2){
return ((null) != (v1)) && (v5(v1, v2, v4));
});
});
var v2 = Array.prototype.filter.call(v0, v1);
// GenBlkBrick
for(var v0 in v0){
(v0.prototype._onToolbarDestroyed) = (function (v1, v2){
if((this.toolbar) == (v2)){
this.removeTool();
}
});
(v0.SKEW) = "skew";
}
var v3 = (function (v1){
var v2 = ({ZERO : "zero", ONE : "one", TWO : "two", FEW : "few", MANY : "many", OTHER : "other"});
v1.value("$locale", ({"DATETIME_FORMATS" : ({"AMPMS" : [], "DAY" : [], "ERANAMES" : [], "ERAS" : [], "FIRSTDAYOFWEEK" : 6, "MONTH" : [], "SHORTDAY" : [], "SHORTMONTH" : [], "STANDALONEMONTH" : [], "WEEKENDRANGE" : [], "fullDate" : "y\u5e74M\u6708d\u65e5 EEEE", "longDate" : "y\u5e74M\u6708d\u65e5", "medium" : "y\u5e74M\u6708d\u65e5 ah:mm:ss", "mediumDate" : "y\u5e74M\u6708d\u65e5", "mediumTime" : "ah:mm:ss", "short" : "y/M/d ah:mm", "shortDate" : "y/M/d", "shortTime" : "ah:mm"}), "NUMBER_FORMATS" : ({"CURRENCY_SYM" : "NT$", "DECIMAL_SEP" : ".", "GROUP_SEP" : ",", "PATTERNS" : []}), "id" : "zh-hant", "localeID" : "zh_Hant", "pluralCat" : (function (v3, v4){
return v2.OTHER;
})}));
});
function v4(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v3(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v0(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
var v5 = (function (v1){
if(Array.isArray(v1)){
return v1;
}
return [];
});
