var v0 = (function (v1, v2){
var v3 = [];
for(var v4 = 2;(v4) < (arguments.length);v4++){
v3.push(arguments[v4]);
}
this.actions.push(v3);
return this;
});
var v1 = (function (v1){
var v2 = v1('core/origin');
var v3 = v1('../global/helpers');
var v4 = v1('core/models/articleModel');
var v5 = v1('./views/editorArticleEditSidebarView');
var v6 = v1('./views/editorArticleEditView');
v2.on('editor:article', (function (v7){
if((v7.action) !== ('edit')){
return;
}
new v4(({_id : v7.id})).fetch(({success : (function (v8){
var v9 = v2.scaffold.buildForm(({model : v8}));
v3.setPageTitle(v8);
v2.sidebar.addView(new v5(({model : v8, form : v9})).$el);
v2.contentPane.setView(v6, ({model : v8, form : v9}));
})}));
}));
});
(v0.formatPropertyName) = v1;
v0(/^(ox)$/i, "$1en");
var v2 = (function (v1){
if((this._canaudio) && (this._audiochannels[v1])){
return this._audiochannels[v1]._def.volume;
}else {
return null;
}
});
(v2.prototype.visitMember) = (function (v1){
return v1.update(this.visit(v1.obj));
});
function v3(v1, v2, v3){
if(((v3) - (v2)) <= (1)){
return v1[v2];
}
var v4 = Math.floor(((v2) + (v3)) / (2));
var v6 = v3(v1, v2, v4);
var v7 = v3(v1, v4, v3);
var v8 = v0(v1, v2, v4, v3);
return Math.max(v8, v6, v7);
}
// GenBlkBrick
for(v0 in v1){
var v4 = (function (v1, v2, v3){
var v4 = v3(5159);
(v1.exports) = (function (v1, v2){
for(var v3 = v1.length;v3--;){
if(v4(v1[v3][0], v2)){
return v3;
}
}
return - 1;
});
});
var v5 = (function (){
this.callBase();
this._setPopupOption("width");
});
}
