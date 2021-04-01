var v0 = (function (v1, v2, v3, v4){
if(! v1){
return;
}
var v5 = v1.getProperty(v4.name);
if((v5) !== (v3)){
v2.push(v1);
v1.setProperty(v4.name, v3);
}
});
var v1 = (function (){
if(! this.$$instance){
(this.$$allowconstruct) = true;
(this.$$instance) = new this();
delete this.$$allowconstruct;
}
return this.$$instance;
});
(v1.prototype.execute) = (function (v1){
});
(v0.prototype.contains) = (function (v1){
return (v1) in (this._entries);
});
(v0.prototype.visitBinary) = (function (v1){
return v1.update(this.visit(v1.left), this.visit(v1.right));
});
// GenBlkBrick
while((v0) < (- 8)){
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = v3(894), v5 = v3(218);
(v1.exports) = v3(350)("Set", (function (v1){
return (function (){
return v1(this, ((arguments.length) > (0)) ? (arguments[0]) : (void 0));
});
}), ({add : (function (v1){
return v4.def(v5(this, "Set"), (v1) = ((0) === (v1)) ? (0) : (v1), v1);
})}), v4);
});
(v2.prototype.updateControlsFromObject) = (function (v1){
this.collectDataFromObject(v1);
this.updateControls(this.data);
});
}
(v2.prototype.get_info) = (function (v1, v2){
v3.ajax(this.session_url, ({processData : false, cache : false, type : "GET", dataType : "json", success : this._on_success(v1), error : this._on_error(v2)}));
});
var v3 = (function (v1){
return ((v1) && ((this.re) == (v1.re))) && ((this.im) == (v1.im));
});
