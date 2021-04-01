var v0 = (function (v1, v2){
if(! this.chk){
this.sm.restrictSelected(v1, v2);
}
});
var v1 = (function (){
(this.regEA) = this.regPC++;
(this.regA) = this.addBCD(this.regA, this.abMem[this.regEA]);
});
var v2 = (function (v1, v2, v3){
var v4 = v3(4719), v5 = v3(4725);
(v1.exports) = (function (v1, v2){
var v3 = v5(v1, v2);
return (v4(v3)) ? (v3) : (void 0);
});
});
// GenBlkBrick
for(var v0 in v2.prototype){
(v0.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v2(v9, v4);
}));
return v4;
});
}
Array.prototype.forEach.call(v2, v1);
var v3 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v0, save : v0, init : v1, shutdown : v1, getAuthUrl : v0, revokeToken : v0});
Object.defineProperty(v3, "prop", ({get : v1, set : v0, enumerable : true, configurable : true}));
// GenBlkBrick
for(;(v0) > (0);(v0) = (v0) - (1)){
var v4 = (function (v1, v2){
var v3 = this._content, v4 = 0, v5 = 0, v6 = this.source, v7 = v3[v4];
if((v2) === (undefined)){
(v2) = null;
}
while((v7) !== (0)){
while((v4) < (v7)){
v1.call(v2, v4++, v5++, this, v6);
}
(v4) = Math.abs(v7);
(v7) = v3[v4];
}
return this;
});
(v4.enumerable) = true;
}
