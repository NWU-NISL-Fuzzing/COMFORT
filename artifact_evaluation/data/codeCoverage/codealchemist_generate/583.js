// GenBlkBrick
while((v0) > (8)){
var v0 = (function (v1, v2, v3){
var v4 = v3(5276), v5 = v3(159), v6 = Object.prototype, v8 = v6.hasOwnProperty, v9 = v6.propertyIsEnumerable, v10 = (v4((function (){
return arguments;
})())) ? (v4) : ((function (v1){
return ((v5(v1)) && (v8.call(v1, "callee"))) && (! v9.call(v1, "callee"));
}));
(v1.exports) = v10;
});
var v1 = (function (v1){
(this.vertices[0]) = (v1) - (this.x);
(this.vertices[6]) = (v1) - (this.x);
});
}
(v1.prototype.toCSS) = (function (v1){
var v2 = [];
this.genCSS(v1, ({add : (function (v3, v4, v5){
v2.push(v3);
}), isEmpty : (function (){
return (v2.length) === (0);
})}));
return v2.join('');
});
(v0.escapeString) = v1;
var v2 = (function (v1, v2, v3){
var v4 = v3(352), v5 = v3(4919), v6 = v3(4918), v7 = "[object Null]", v8 = "[object Undefined]", v9 = (v4) ? (v4.toStringTag) : (void 0);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? (((void 0) === (v1)) ? (v8) : (v7)) : (((v9) && ((v9) in (Object(v1)))) ? (v5(v1)) : (v6(v1)));
});
});
// GenBlkBrick
for(var v0 in v0){
// GenBlkBrick
for(;(v0) < (10);){
var v3 = (function (v1){
this.textureManager.renameTexture(this.texture.key, v1);
(this._saved) = true;
return this.texture;
});
var v4 = (function (v1, v2, v3){
"use strict";
var v4 = v1("./$"), v5 = v1("./$.collection-weak"), v6 = v5.leakStore, v7 = v5.ID, v8 = v5.WEAK, v9 = v4.has, v10 = v4.isObject, v11 = (Object.isExtensible) || (v10), v13 = ({});
var v14 = v1("./$.collection")("WeakMap", (function (v15){
return (function (){
return v15(this, arguments[0]);
});
}), ({get : (function v15(v17){
if(v10(v17)){
if(! v11(v17)){
return v6(this).get(v17);
}
if(v9(v17, v8)){
return v17[v8][this[v7]];
}
}
}), set : (function v18(v17, v19){
return v5.def(this, v17, v19);
})}), v5, true, true);
if((new v14().set((Object.freeze) || (Object)(v13), 7).get(v13)) != (7)){
v4.each.call([], (function (v17){
var v20 = v14.prototype, v21 = v20[v17];
v1("./$.redef")(v20, v17, (function (v22, v23){
if((v10(v22)) && (! v11(v22))){
var v24 = v6(this)[v17](v22, v23);
return ((v17) == ("set")) ? (this) : (v24);
}
return v21.call(this, v22, v23);
}));
}));
}
});
}
var v5 = (function (v1){
(v1.expected) = ({});
v1.setSessionSingleton.expect('changes', []);
v1.executeQuery.expect(v1.beginCommand).return(v1.expected);
(v1.returned) = v1.sut();
});
}
var v6 = (function (v1){
return (({}).toString.call(v1)) === ("[object Function]");
});
var v7 = (function (){
if((arguments[0]) && ((typeof arguments[0]) === ('object'))){
var v2 = [], v3, v4;
for(v3 in arguments[0]){
v2.push(v3);
}
for(var v5 = 0, v6 = v2.length;(v5) < (v6);v5++){
(v3) = v2[v5];
(v4) = (v5) !== ((v6) - (1));
this._animate(v3, arguments[0][v3], arguments[1], v4);
}
}else {
this._animate.apply(this, arguments);
}
return this;
});
var v8 = (function (v1, v2){
(v1.TextareaContainer) = v1.Base.create("textarea-container", v1.Container, [], ({SERIALIZABLE_ATTRS : (function (){
return v1.TextareaContainer.superclass.SERIALIZABLE_ATTRS.call(this).concat([]);
}), renderUI : (function (){
v1.TextareaContainer.superclass.renderUI.call(this);
this.setStdModContent(v1.WidgetStdMod.BODY, "<textarea></textarea>");
(this._bodyNode) = this.getStdModNode(v1.WidgetStdMod.BODY);
(this._textarea) = this._bodyNode.one('textarea');
}), bindUI : (function (){
v1.TextareaContainer.superclass.bindUI.call(this);
if(this.resize){
this.resize.after('resize:resize', this._afterResizeTextarea, this);
}
}), _fillTextareaSize : (function (){
this.fillHeight(this._bodyNode);
var v3 = this._bodyNode.get('region');
this._textarea.setStyle('height', v3.height);
this._textarea.setStyle('width', v3.width);
}), _afterResizeTextarea : (function (v4){
this._fillTextareaSize();
}), syncUI : (function (){
v1.TextareaContainer.superclass.syncUI.call(this);
this.getStdModNode(v1.WidgetStdMod.BODY).one('textarea').set(this.get('value'));
v1.later(0, this, (function (){
this._fillTextareaSize();
}));
})}), ({ATTRS : ({value : ({getter : (function (){
return this.getStdModNode(v1.WidgetStdMod.BODY).one('textarea').get('value');
}), setter : (function (v5){
this.getStdModNode(v1.WidgetStdMod.BODY).one('textarea').set('value', v5);
})})})}));
});
