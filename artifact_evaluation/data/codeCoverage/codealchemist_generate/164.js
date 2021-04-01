var v0 = (function (v1, v2, v3){
var v4 = v3(217), v5 = v3(169), v6 = "[object AsyncFunction]", v7 = "[object Function]", v8 = "[object GeneratorFunction]", v9 = "[object Proxy]";
(v1.exports) = (function (v1){
if(! v5(v1)){
return ! 1;
}
var v2 = v4(v1);
return ((((v2) == (v7)) || ((v2) == (v8))) || ((v2) == (v6))) || ((v2) == (v9));
});
});
(v0.prototype.getOrAddWithFactory) = (function (v1, v2){
var v3 = this.get(v1);
if((v3) !== (undefined)){
return v3;
}
(v3) = v2(v1);
if(v3){
this.add(v1, v3);
}
return v3;
});
var v1 = ({get : v0, writable : false});
(v0.prototype['break']) = (function (){
this.notify(v1);
});
var v2 = (function (v1){
this._setProperty('-webkit-font-smoothing', v1);
});
var v3 = (function (v1){
(this.m_maxMotorForce) = v1;
});
(v1.viewOpenTitle) = "Open this pad in read-only mode in a new tab";
v2(v3, v0);
