var v0 = (function (v1){
var v2 = [];
v1.addListener("log", (function (v3){
v2.push(v3);
}));
v1.debug("Debug event");
v1.trace("Trace event 1");
v1.trace("Trace event 2");
v1.warn("Warning event");
v1.error("Aargh!", new Error("Pants are on fire!"));
v1.error("Simulated CouchDB problem", ({err : 127, cause : "incendiary underwear"}));
return v2;
});
(v0.prototype.concat) = (function (v1){
var v2 = (this.a) * (v1.a);
var v3 = 0.0;
var v4 = 0.0;
var v5 = (this.d) * (v1.d);
var v6 = ((this.tx) * (v1.a)) + (v1.tx);
var v7 = ((this.ty) * (v1.d)) + (v1.ty);
if(((this.b) !== (0.0)) || ((this.c) !== (0.0))){
(v2) += (this.b) * (v1.c);
(v3) += (this.b) * (v1.d);
(v4) += (this.c) * (v1.a);
(v5) += (this.c) * (v1.b);
}
if(((v1.b) !== (0.0)) || ((v1.c) !== (0.0))){
(v3) += (this.a) * (v1.b);
(v4) += (this.d) * (v1.c);
(v6) += (this.ty) * (v1.c);
(v7) += (this.tx) * (v1.b);
}
(this.a) = v2;
(this.b) = v3;
(this.c) = v4;
(this.d) = v5;
(this.tx) = v6;
(this.ty) = v7;
return this;
});
(v0.prototype.removeAllTiles) = (function (){
(this.tileArray) = [];
(this.sector) = null;
});
var v1 = (function (v1, v2){
v1.addTag('kind', 'interface');
});
(v1.prototype._on_success) = (function (v1){
var v2 = this;
return (function (v3, v4, v5){
v2._update_model(v3);
if(v1){
v1(v3, v4, v5);
}
});
});
// GenBlkBrick
for(;(v0) < (10);){
(v1.asComment) = (function (v1){
return (((('/* line ') + (v1.debugInfo.lineNumber)) + (', ')) + (v1.debugInfo.fileName)) + (' */\n');
});
(v1.prototype.isInFrustum) = (function (v1){
for(var v2 = 0;(v2) < (6);v2++){
if((v1[v2].dotCoordinate(this.centerWorld)) <= (- this.radiusWorld)){
return false;
}
}
return true;
});
}
if(v1.now){
(v0.now) = (function v2(){
return v0.clock.now;
});
}
function v2(v1, v2, v3, v4, v5){
return v1(v0(v1, v2, v3, v4), v5);
}
