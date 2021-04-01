var v0 = (function (v1, v2){
var v3 = v2.createImageData(v1.width, v1.height);
var v4 = v1.data;
var v5 = v3.data;
var v6;
for((v6) = 0;(v6) < (v4.length);(v6) += 4){
var v7 = v4[v6];
var v8 = v4[(v6) + (1)];
var v9 = v4[(v6) + (2)];
var v10 = (((0.299) * (v7)) + ((0.587) * (v8))) + ((0.114) * (v8));
(v5[v6]) = v10;
(v5[(v6) + (1)]) = v10;
(v5[(v6) + (2)]) = v10;
(v5[(v6) + (3)]) = 255;
}
return v3;
});
var v1 = (function (v1, v2){
v2.internalOnMessage(v1);
});
var v2 = (function (v1, v2, v3){
var v4 = v3(924), v5 = v3(511);
(v1.exports) = (Object.keys) || ((function (v1){
return v4(v1, v5);
}));
});
var v3 = (function (){
'use strict';
v1.module('skipWithTime');
var v2 = v3.TestScheduler, v4 = v3.ReactiveTest.onNext, v5 = v3.ReactiveTest.onError, v6 = v3.ReactiveTest.onCompleted, v7 = v3.ReactiveTest.subscribe;
v8('skipWithTime zero', (function (){
var v9 = new v2();
var v10 = v9.createHotObservable(v4(210, 1), v4(220, 2), v6(230));
var v11 = v9.startScheduler((function (){
return v10.skipWithTime(0, v9);
}));
v11.messages.assertEqual(v4(210, 1), v4(220, 2), v6(230));
v10.subscriptions.assertEqual(v7(200, 230));
}));
v8('skipWithTime some', (function (){
var v9 = new v2();
var v10 = v9.createHotObservable(v4(210, 1), v4(220, 2), v6(230));
var v11 = v9.startScheduler((function (){
return v10.skipWithTime(15, v9);
}));
v11.messages.assertEqual(v4(220, 2), v6(230));
v10.subscriptions.assertEqual(v7(200, 230));
}));
v8('skipWithTime late', (function (){
var v9 = new v2();
var v10 = v9.createHotObservable(v4(210, 1), v4(220, 2), v6(230));
var v11 = v9.startScheduler((function (){
return v10.skipWithTime(50, v9);
}));
v11.messages.assertEqual(v6(230));
v10.subscriptions.assertEqual(v7(200, 230));
}));
v8('skipWithTime error', (function (){
var v12 = new Error();
var v9 = new v2();
var v10 = v9.createHotObservable(v5(210, v12));
var v11 = v9.startScheduler((function (){
return v10.skipWithTime(50, v9);
}));
v11.messages.assertEqual(v5(210, v12));
v10.subscriptions.assertEqual(v7(200, 210));
}));
v8('skipWithTime never', (function (){
var v9 = new v2();
var v10 = v9.createHotObservable();
var v11 = v9.startScheduler((function (){
return v10.skipWithTime(50, v9);
}));
v11.messages.assertEqual();
v10.subscriptions.assertEqual(v7(200, 1000));
}));
v8('skipWithTime twice 1', (function (){
var v9 = new v2();
var v10 = v9.createHotObservable(v4(210, 1), v4(220, 2), v4(230, 3), v4(240, 4), v4(250, 5), v4(260, 6), v6(270));
var v11 = v9.startScheduler((function (){
return v10.skipWithTime(15, v9).skipWithTime(30, v9);
}));
v11.messages.assertEqual(v4(240, 4), v4(250, 5), v4(260, 6), v6(270));
v10.subscriptions.assertEqual(v7(200, 270));
}));
v8('skipWithTime twice 2', (function (){
var v9 = new v2();
var v10 = v9.createHotObservable(v4(210, 1), v4(220, 2), v4(230, 3), v4(240, 4), v4(250, 5), v4(260, 6), v6(270));
var v11 = v9.startScheduler((function (){
return v10.skipWithTime(30, v9).skipWithTime(15, v9);
}));
v11.messages.assertEqual(v4(240, 4), v4(250, 5), v4(260, 6), v6(270));
v10.subscriptions.assertEqual(v7(200, 270));
}));
});
Object.defineProperty(v1.prototype, "isSupported", ({get : (function (){
return this._multiRenderTarget.isSupported;
}), enumerable : true, configurable : true}));
(v2.prototype.renderAlphaTestSorted) = (function (v1){
return v2.renderSorted(v1, this._alphaTestSortCompareFn, this._scene.activeCamera, false);
});
(v0.prototype.remove) = (function (v1){
if((v1) >= (this._root.size)){
return v2;
}
var v3 = v1(this._root, v1);
return this.removeNode(v3);
});
(v3.prototype.removeNode) = (function (v1){
this.shiftDown(v1);
var v2 = v1.parent;
if((v2.left) === (v1)){
(v2.left) = v3;
}else {
if((v2.right) === (v1)){
(v2.right) = v3;
}
}
this.removeLeafNode(v1);
(this._root) = v2(v2);
return v1;
});
