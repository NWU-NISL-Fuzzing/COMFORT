var v0 = (function (v1){
(v1) = v1.trim();
if((v1.length) === (0)){
return 0;
}
return v1.split(/ +/).length;
});
function v1(){
return (v0()) | (0);
}
var v2 = (function (v1){
(v1.properties['marker-color']) = '#f0f';
(v1.properties['marker-size']) = 'small';
});
function v3(v1, v2, v3, v4, v5){
(v3) = v0(v3);
if(! v4){
(v4) = v7.base;
}
var v8;
(function v9(v1, v10, v11){
if((v1.start) > (v2)){
return;
}
var v12 = (v11) || (v1.type);
if((((v1.end) <= (v2)) && ((! v8) || ((v8.node.end) < (v1.end)))) && (v3(v12, v1))){
(v8) = new v1(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
(v0.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v1.prototype) = v2.prototype, new v1()));
Object.defineProperty(v1.prototype, "captureInterFrameTime", ({get : (function (){
return this._captureInterFrameTime;
}), set : (function (v2){
(this._captureInterFrameTime) = v2;
}), enumerable : true, configurable : true}));
(v1.prototype.showPopup) = (function (v1, v2){
(this.popupIsVisible) = true;
this.$popup.removeClass('hidden');
this._adjustPosition(v2);
this.$popupContentWrapper.removeClass('popup-transparent');
this.drawerInstance.trigger(this.drawerInstance.EVENT_TOOLBAR_CHANGE_STATE, []);
});
// GenBlkBrick
for(var v4 in v0){
function v5(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v3(v3);
(v4) += v0(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
(v2.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v3(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v0(v1, v1.right);
}else {
break ;
}
}
}
}
});
}
