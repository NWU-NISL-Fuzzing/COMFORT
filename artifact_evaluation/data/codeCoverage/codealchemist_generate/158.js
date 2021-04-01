var v0 = (function (v1, v2){
Object.keys(v1).forEach((function (v4){
(v1[v4].shortened) = v1[v4].resolved.replace(v2, '').replace(/\\/g, '/');
}));
return v1;
});
(v0.prototype.setDarkness) = (function (v1){
if((v1) >= (1.0)){
(this._darkness) = 1.0;
}else {
if((v1) <= (0.0)){
(this._darkness) = 0.0;
}else {
(this._darkness) = v1;
}
}
});
var v1 = (function (){
this.cursor();
return this.modes(1, 2);
});
(v1.prototype.add) = (function (v1){
if(v1){
if(v1.isTerrain){
var v2 = this.objects.length;
for(var v3 = 0, v4 = this.objects.length;(v3) < (v4);v3++){
if(this.objects[v3].isTerrain){
(v2) = v3;
break ;
}
}
(this.objects[v2]) = v1;
}else {
this.objects.push(v1);
}
}
});
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = (function (v5, v6){
v3.NotebookList.call(this, v5, v2.extend(({element_name : 'running'}), v6));
});
(v4.prototype) = Object.create(v3.NotebookList.prototype);
(v4.prototype.add_duplicate_button) = (function (){
});
(v4.prototype.sessions_loaded) = (function (v8){
(this.sessions) = v8;
this.clear_list();
var v9, v10;
for(v10 in v8){
if(! v8.hasOwnProperty(v10)){
continue ;
}
(v9) = this.new_item(- 1);
this.add_link(({name : v10, path : v10, type : 'notebook'}), v9);
}
v2('#running_list_placeholder').toggle(v2.isEmptyObject(v8));
});
(v4.prototype.add_link) = (function (v11, v9){
v3.NotebookList.prototype.add_link.apply(this, []);
var v12 = v9.find(".item_buttons").text('');
var v13 = this;
var v14 = v2('<button/>').addClass('btn btn-warning btn-xs').text('Shutdown').click((function (){
var v10 = v2(this).parent().parent().parent().data('path');
v13.shutdown_notebook(v10);
})).appendTo(v12);
});
(v1.KernelList) = v4;
return ({'KernelList' : v4});
});
(v1.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v0(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v0(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v2(v5);
return v5;
});
(v1.UTC) = v2.UTC;
Object.defineProperty(Object.prototype, "constructor", ({get : v0, set : v2, configurable : true}));
