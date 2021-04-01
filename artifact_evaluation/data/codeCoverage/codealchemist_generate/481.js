var v0 = (function (v1, v2, v3, v4){
var v5 = v1.put(v3, v2);
(v5.onsuccess) = (function (){
v4(null);
});
(v5.onerror) = (function (){
v4(this.error);
});
});
var v1 = (function (){
return this.getPropertyValue('fill');
});
(v1.SOUND) = "sound";
var v2 = v0.prototype;
(v1.prototype.onGestureEvent) = (function (v1){
var v2 = false;
for(var v3 = 0;((v3) < (this.allGestureListeners.length)) && (! v2);v3++){
(v2) |= this.allGestureListeners[v3].onGestureEvent(v1);
}
return v2;
});
Array.prototype.forEach.call(v0, v1);
Object.defineProperties(v2, ({foo : ({get : v1})}));
(v0.prototype.reset) = (function (){
(this.length) = 0;
this._duplicateId++;
});
