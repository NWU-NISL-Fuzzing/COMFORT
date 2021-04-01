var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(4), v5 = v3(74), v6 = v3(111), v7 = v3(180);
(v1.exports) = (function (v1){
v4(v4.S, v1, ({from : (function (v1){
var v2, v3, v4, v8, v9 = arguments[1];
return (v5(this), ((v2) = (void 0) !== (v9)) && (v5(v9)), ((void 0) == (v1)) ? (new this()) : (((v3) = [], (v2) ? (((v4) = 0, (v8) = v6(v9, arguments[2], 2), v7(v1, ! 1, (function (v1){
v3.push(v8(v1, v4++));
})))) : (v7(v1, ! 1, v3.push, v3)), new this(v3))));
})}));
});
});
Object.defineProperties(v0.prototype, ({enabled : ({get : (function (){
return this._enabled;
}), set : (function (v2){
(this._enabled) = v2;
(this.timestamp) = Date.now();
})})}));
var v1 = (function (v1, v2, v3){
var v4 = v3(28);
v3(94)("isFrozen", (function (v1){
return (function (v2){
return (! v4(v2)) || ((! ! v1) && (v1(v2)));
});
}));
});
var v2 = (function (v1){
var v2 = v1('https://xplat.file.core.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).put('/storageclitest3?restype=share&comp=acl', '*').reply(200, "", ({'transfer-encoding' : 'chunked', 'last-modified' : 'Tue, 14 Feb 2017 06:24:41 GMT', etag : '"0x8D454A2290B449C"', server : 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : '2485fd28-001a-0032-798b-86ced7000000', 'x-ms-version' : '2016-05-31', date : 'Tue, 14 Feb 2017 06:24:40 GMT', connection : 'close'}));
return v2;
});
v2(v1);
// GenBlkBrick
for((v3) = 1;(v3) < (10);v3++){
// GenBlkBrick
for(var v4 = 0;- 0;){
// GenBlkBrick
for((v5) = 1;(v5) < (10);v5++){
if((v5) > (0)){
(v6) = new Date(1970, 0, - 99999999, 0, 0, 0, - 1);
}else {
(v6) = new Date(1970, 0, - 99999999, 0, ((0) + (v5)) - (60), 0, - 1);
}
}
}
}
v6.setTime(v3);
var v7 = ((((v6.getFullYear()) + ('-')) + ((v6.getMonth()) + (1))) + ('-')) + (v5);
