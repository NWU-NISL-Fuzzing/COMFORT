var v0 = (function (){
'use strict';
v1.module('switch');
var v2 = v3.TestScheduler, v4 = v3.ReactiveTest.onNext, v5 = v3.ReactiveTest.onError, v6 = v3.ReactiveTest.onCompleted;
v7('switch Promise', (function (){
var v8 = v3.Observable.fromArray([]);
v8['switch']().subscribe((function (v9){
v10(3, v9);
v11();
}));
}));
v7('switch Promise error', (function (){
var v8 = v3.Observable.fromArray([]);
v8['switch']().subscribe((function (v9){
v10(3, v9);
v11();
}), (function (v12){
v10(2, v12);
v11();
}));
}));
v13('switch Data', (function (){
var v14 = new v2();
var v15 = v14.createHotObservable(v4(300, v14.createColdObservable(v4(10, 101), v4(20, 102), v4(110, 103), v4(120, 104), v4(210, 105), v4(220, 106), v6(230))), v4(400, v14.createColdObservable(v4(10, 201), v4(20, 202), v4(30, 203), v4(40, 204), v6(50))), v4(500, v14.createColdObservable(v4(10, 301), v4(20, 302), v4(30, 303), v4(40, 304), v6(150))), v6(600));
var v16 = v14.startScheduler((function (){
return v15['switch']();
}));
v16.messages.assertEqual(v4(310, 101), v4(320, 102), v4(410, 201), v4(420, 202), v4(430, 203), v4(440, 204), v4(510, 301), v4(520, 302), v4(530, 303), v4(540, 304), v6(650));
}));
v13('switch inner throws', (function (){
var v17 = new Error();
var v14 = new v2();
var v15 = v14.createHotObservable(v4(300, v14.createColdObservable(v4(10, 101), v4(20, 102), v4(110, 103), v4(120, 104), v4(210, 105), v4(220, 106), v6(230))), v4(400, v14.createColdObservable(v4(10, 201), v4(20, 202), v4(30, 203), v4(40, 204), v5(50, v17))), v4(500, v14.createColdObservable(v4(10, 301), v4(20, 302), v4(30, 303), v4(40, 304), v6(150))), v6(600));
var v16 = v14.startScheduler((function (){
return v15['switch']();
}));
v16.messages.assertEqual(v4(310, 101), v4(320, 102), v4(410, 201), v4(420, 202), v4(430, 203), v4(440, 204), v5(450, v17));
}));
v13('switch outer throws', (function (){
var v17 = new Error();
var v14 = new v2();
var v15 = v14.createHotObservable(v4(300, v14.createColdObservable(v4(10, 101), v4(20, 102), v4(110, 103), v4(120, 104), v4(210, 105), v4(220, 106), v6(230))), v4(400, v14.createColdObservable(v4(10, 201), v4(20, 202), v4(30, 203), v4(40, 204), v6(50))), v5(500, v17));
var v16 = v14.startScheduler((function (){
return v15['switch']();
}));
v16.messages.assertEqual(v4(310, 101), v4(320, 102), v4(410, 201), v4(420, 202), v4(430, 203), v4(440, 204), v5(500, v17));
}));
v13('switch no inner', (function (){
var v14 = new v2();
var v15 = v14.createHotObservable(v6(500));
var v16 = v14.startScheduler((function (){
return v15['switch']();
}));
v16.messages.assertEqual(v6(500));
}));
v13('switch inner completes', (function (){
var v14 = new v2();
var v15 = v14.createHotObservable(v4(300, v14.createColdObservable(v4(10, 101), v4(20, 102), v4(110, 103), v4(120, 104), v4(210, 105), v4(220, 106), v6(230))), v6(540));
var v16 = v14.startScheduler((function (){
return v15['switch']();
}));
v16.messages.assertEqual(v4(310, 101), v4(320, 102), v4(410, 103), v4(420, 104), v4(510, 105), v4(520, 106), v6(540));
}));
});
var v1 = (function (v1, v2, v3){
var v4 = v1('./_export');
v4(v4.S, 'Math', ({signbit : (function (v5){
return (((v5) = + v5) != (v5)) ? (v5) : (((v5) == (0)) ? (((1) / (v5)) == (Infinity)) : ((v5) > (0)));
})}));
});
// GenBlkBrick
for(var v2 = 0;(v2) < (1);++v2){
if((v2) === (6)){
break ;
}
if((v2) === (6)){
break ;
}
}
var v3 = (function (v1, v2, v3){
var v4 = v3(30), v5 = v3(127).onFreeze;
v3(96)("preventExtensions", (function (v1){
return (function (v2){
return ((v1) && (v4(v2))) ? (v1(v5(v2))) : (v2);
});
}));
});
var v4 = (function (v1, v2){
var v3 = v1.determinedBy;
var v4 = v1.constraints;
for(var v5 = 0;(v5) < (v4.size());v5++){
var v6 = v4.at(v5);
if(((v6) != (v3)) && (v6.isSatisfied())){
v2.add(v6);
}
}
});
var v5 = ({get : v3, enumerable : false, configurable : false});
(v3.indexArray) = (function (v1, v2, v3){
var v4 = (function (v5, v6, v7, v8, v9){
if((v7) === (v8)){
(v6[v9]) = v5[v7];
}else {
var v10 = Math.floor(((v7) + (v8)) / (2));
var v12 = ((2) * (v9)) + (1);
var v13 = ((2) * (v9)) + (2);
v4(v5, v6, v7, v10, v12);
v4(v5, v6, (v10) + (1), v8, v13);
(v6[v9]) = v3(v6[v12], v6[v13]);
}
});
var v14 = [];
if((v1) && (v1.length)){
v4(v1, v14, 0, (v1.length) - (1), 0);
}
var v15 = new v3(v2, v3);
(v15._data) = v14;
(v15._original) = v1;
return v15;
});
Array.prototype.reduce.call(v5, v3, v2);
