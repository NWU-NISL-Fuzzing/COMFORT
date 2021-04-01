// GenBlkBrick
for(var v0 = 0;(v0) < (8);v0++){
var v1 = (function (v1){
return v1.BackendProjectName;
});
}
(v1.prototype._userIsMoving) = (function (){
if(! this._attachedCamera){
return false;
}
return ((((((this._attachedCamera.inertialAlphaOffset) !== (0)) || ((this._attachedCamera.inertialBetaOffset) !== (0))) || ((this._attachedCamera.inertialRadiusOffset) !== (0))) || ((this._attachedCamera.inertialPanningX) !== (0))) || ((this._attachedCamera.inertialPanningY) !== (0))) || (this._isPointerDown);
});
var v2 = (function (v1){
return v1.replace(/[^ (]*stack\.js/g, "stack.js");
});
Array.prototype.reduce.call(v1, v2, v0);
while(v0--){
new v1();
}
var v3 = (function (){
if(this.chk){
return;
}
var v1 = this.paramAsStr(1);
if(v1.equalsIgnoreCase("on")){
(v1) = "%U";
}else {
if(v1.equalsIgnoreCase("off")){
(v1) = null;
}
}
this.vwr.setHoverLabel(v1);
});
// GenBlkBrick
for((v4) = 0;(v4) < ((v1) + (1));v4++){
if((v4) === (6)){
break ;
}
var v5 = (function (v1){
(v1.expected) = ({});
v1.setSessionSingleton.expect('changes', []);
v1.executeQuery.expect(v1.beginCommand).return(v1.expected);
(v1.returned) = v1.sut();
});
}
function v6(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v2(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v5(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v3(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
