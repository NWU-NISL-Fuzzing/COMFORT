var v0 = (function (v1){
this.questInstanceLocation(v1, 'vision_quest', 1240, - 197, (5) * (60));
return ({ok : 1});
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(5238);
(v1.exports) = (function (v2, v3){
return (! (! v2) || (! v3)) && (((v2) === (v3)) || ((! v4(v2)) && ((v4(v3)) ? (v1(v2, v3.parentNode)) : ((("contains") in (v2)) ? (v2.contains(v3)) : ((! ! v2.compareDocumentPosition) && (! ! (16) & (v2.compareDocumentPosition(v3))))))));
});
});
// GenBlkBrick
for((v2) = 0;(v2) < (v1);v2++){
if((v2) === (6)){
break ;
}
(v2) += v1;
}
(v1.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v0(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
var v3 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v1, v2);
});
function v4(){
var v1 = v2('#textInput'), v3 = v2('#results');
var v4, v5 = '';
var v6 = (function (){
var v7 = v2(this).val();
if((v4) && ((v4.state()) === ('pending'))){
v4.reject(({statusText : 'abort'}));
}
if((v7) !== (v5)){
(v5) = v7;
v3.empty();
(v4) = v3(v5, 3);
v4.then((function (v9){
var v10 = v9[1];
v2.each(v10, (function (v11, v12){
v2((('<li>') + (v12)) + ('</li>')).appendTo(v3);
}));
}), (function (v13){
if((v13.statusText) !== ('abort')){
v2((('<li>') + (v13.statusText)) + ('</li>')).appendTo(v3);
}
}));
}
});
v1.keyup(v1(v6, 500));
}
(v4.UTC) = v1.UTC;
(v3.toString) = (function v1(){
return v4.toString();
});
