var v0 = (function (v1){
if((this._scrollBarEnabled) === (v1)){
return;
}
if(this._scrollBarEnabled){
this._removeScrollBar();
}
(this._scrollBarEnabled) = v1;
if(this._scrollBarEnabled){
this._initScrollBar();
}
});
v0(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
(v0.STRINGS) = "strings";
var v1 = (function (){
return "e";
});
Object.defineProperty(Array.prototype, "forEach", ({value : v1, writable : true, enumerable : false, configurable : true}));
var v2 = ({source : [], formatDropdownItem : v0, formatResult : v1});
(v0.prototype.sort) = (function (v1){
this.data.sort(v1);
});
var v3 = [].map(v0, false);
