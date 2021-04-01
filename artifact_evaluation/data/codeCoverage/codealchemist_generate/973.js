var v0 = (function (v1){
(this.options) = ({method : 'post', asynchronous : true, contentType : 'application/x-www-form-urlencoded', encoding : 'UTF-8', parameters : '', evalJSON : true, evalJS : true});
Object.extend(this.options, (v1) || (({})));
(this.options.method) = this.options.method.toLowerCase();
if(Object.isString(this.options.parameters)){
(this.options.parameters) = this.options.parameters.toQueryParams();
}else {
if(Object.isHash(this.options.parameters)){
(this.options.parameters) = this.options.parameters.toObject();
}
}
});
var v1 = (function (v1){
var v2 = v1.indexOf('\n');
return ((v2) > (0)) ? (v1.slice(0, v2)) : (v1);
});
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v1(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v0(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
for(var v0 in v2){
if((v0) === ("prop")){
(v3) = true;
}
}
// GenBlkBrick
for(var v0 in v2.prototype){
(v2.prototype.dispose) = (function (){
this.getGBuffer().dispose();
});
v2(/(alias|status)es$/i, "$1");
}
if((v3) && ((v1) < (1))){
(v1) = 1;
(v4) = "#666666";
}
function v5(){
if(! v3){
(v3) = true;
v0(v3.get());
}
return v4;
}
function v6(){
if(! v3){
(v3) = true;
v1(v3.get());
}
return v4;
}
