var v0 = (function (v1){
return v1.age;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(5118);
(v1.exports) = (function (v1, v2){
return (! ((null) == (v1)) || (! v1.length)) && ((v4(v1, v2, 0)) > (- 1));
});
});
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("5c04ac2b97de83c767c22cb0028544ee.svg");
});
// GenBlkBrick
for(var v0 in v2.prototype){
var v3 = (function (v1){
'use strict';
v1.module('esn.profile-popover-card').component('profilePopoverContent', ({templateUrl : '/views/modules/profile-popover-card/profile-popover-content/profile-popover-content.html', controller : 'profilePopoverContentController', bindings : ({user : '<', isCurrentUser : '<', hideComponent : '&'})}));
});
}
(v0.prototype) = Object.create(v3.prototype);
var v4 = (function (){
(this.undoStack) = [];
(this.redoStack) = [];
(this.changesStack) = [];
});
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v3(v1);
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
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v1(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
var v6 = (function (v1){
return (v1.charAt(0).toLowerCase()) + (v1.slice(1));
});
