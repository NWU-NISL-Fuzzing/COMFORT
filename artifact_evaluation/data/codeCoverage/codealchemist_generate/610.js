var v0 = (function (v1, v2){
return ((((3) * ((1) - (v1))) * (v1)) * (v1)) * (v2);
});
for(var v0 in v1){
if(v0.call(v1, v0)){
(v3[v0]) = v1[v0];
}
}
var v1 = (function (v1){
var v2 = Object.assign(({}), v1);
var v4 = Object.assign(({}), v2);
return [];
});
(v0.ToHex) = (function (v1){
var v2 = v1.toString(16);
if((v1) <= (15)){
return ("0") + (v2).toUpperCase();
}
return v2.toUpperCase();
});
// GenBlkBrick
for(var v2 = 0;(v2) < (3);++v2){
if((v2) < (20)){
break ;
}
}
var v3 = (function (v1, v2, v3){
var v4 = (function (v5, v6, v7){
var v8 = "";
if((v5.dumpLineNumbers) && (! v5.compress)){
switch(v5.dumpLineNumbers){
}
}
return v8;
});
(v4.asComment) = (function (v6){
return (((('/* line ') + (v6.debugInfo.lineNumber)) + (', ')) + (v6.debugInfo.fileName)) + (' */\n');
});
(v4.asMediaQuery) = (function (v6){
return (((('@media -sass-debug-info{filename{font-family:') + (('file://') + (v6.debugInfo.fileName).replace(/([.:\/\\])/g, (function (v9){
if((v9) == ('\\')){
(v9) = '\/';
}
return ('\\') + (v9);
})))) + ('}line{font-family:\\00003')) + (v6.debugInfo.lineNumber)) + ('}}\n');
});
(v2.exports) = v4;
});
// GenBlkBrick
for(var v4 = 0;(v4) < (v1);++v4){
if((v4) < (20)){
break ;
}
var v5 = (function (v1, v2, v3){
"use strict";
var v4 = v3(10);
(v1.exports) = ({FRAME_SERVICE_FRAME_CLOSED : ({type : v4.types.INTERNAL, code : "FRAME_SERVICE_FRAME_CLOSED", message : "Frame closed before tokenization could occur."}), FRAME_SERVICE_FRAME_OPEN_FAILED : ({type : v4.types.INTERNAL, code : "FRAME_SERVICE_FRAME_OPEN_FAILED", message : "Frame failed to open."})});
});
}
var v6 = (function v6(v1){
if((! v1) || ((v0.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v3.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v3.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v3.call(v1, v6));
});
