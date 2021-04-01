var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("bb7ddc9339dfedf06dfb18707be64408.svg");
});
function v1(v1){
var v2 = typeof v1;
if((! v1) || (((v2) != ("object")) && (! v1.prototype))){
return v2;
}
var v3 = (v1.prototype) ? (v1.prototype) : (Object.getPrototypeOf(v1));
if(v3.hasOwnProperty("__class__")){
return v3["__class__"];
}
var v5 = v3.constructor.toString().trim();
var v6 = v5.indexOf("(");
var v7 = v5.substring(9, v6);
Object.defineProperty(v3, "__class__", ({value : v7, enumerable : false, writable : true}));
return v7;
}
var v2 = Array.prototype.filter.call(v0, v1);
(v0.prototype) = Error.prototype;
function v3(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v1(v7)]) = v0(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
var v4 = (v1.prototype) = new v3();
// GenBlkBrick
for(var v0 in v0.prototype){
var v5 = (function (){
this.sandbox.restore();
});
}
(v6) = v2[3].match(/(^|\.)(\w+)$/i)[2];
