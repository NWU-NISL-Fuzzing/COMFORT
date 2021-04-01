var v0 = (function (v1){
for(var v2 = 0;(v2) < (this.__groups.length);v2++){
var v3 = this.__groups[v2];
for(var v4 = 0;(v4) < (v3.items.length);v4++){
var v5 = v3.items[v4];
if((v5) === (v1)){
v3.items.splice(v4, 1);
v3.labels.splice(v4, 1);
v3.names.splice(v4, 1);
v3.options.splice(v4, 1);
this._validationManager.remove(v1);
this._resetter.remove(v1);
this.fireEvent("change");
return true;
}
}
}
return false;
});
// GenBlkBrick
for(var v1 = 0;(v1) < (v1);v1++){
var v2 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2014SP2-WS2012R2-BYOL/skus/Standard/versions/12.2.50005?api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"12.2.50005\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP2-WS2012R2-BYOL/Skus/Standard/Versions/12.2.50005\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '411', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : 'a389ec26-098a-4e86-b958-b131ae5e3b72', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14904', 'x-ms-correlation-request-id' : '084c1fe0-b004-455a-8dca-e7960079f07a', 'x-ms-routing-request-id' : 'WESTUS:20170602T151908Z:084c1fe0-b004-455a-8dca-e7960079f07a', date : 'Fri, 02 Jun 2017 15:19:08 GMT', connection : 'close'}));
return v2;
});
var v3 = (function (v1){
var v2 = v1('jquery');
var v3 = (function (v4, v5){
(this.$element) = v2(v4);
(this.options) = v2.extend(({}), v2.fn.tree.defaults, v5);
this.$element.on('click', '.tree-item', v2.proxy((function (v6){
this.selectItem(v6.currentTarget);
}), this));
this.$element.on('click', '.tree-folder-header', v2.proxy((function (v6){
this.selectFolder(v6.currentTarget);
}), this));
this.render();
});
(v3.prototype) = ({constructor : v3, render : (function (){
this.populate(this.$element);
}), populate : (function (v7){
var v8 = this;
var v9 = v7.parent().find('.tree-loader:eq(0)');
v9.show();
this.options.dataSource.data(v7.data(), (function (v10){
v9.hide();
v2.each(v10.data, (function (v11, v12){
var v13;
if((v12.type) === ("folder")){
(v13) = v8.$element.find('.tree-folder:eq(0)').clone().show();
v13.find('.tree-folder-name').html(v12.name);
v13.find('.tree-loader').html(v8.options.loadingHTML);
v13.find('.tree-folder-header').data(v12);
}else {
if((v12.type) === ("item")){
(v13) = v8.$element.find('.tree-item:eq(0)').clone().show();
v13.find('.tree-item-name').html(v12.name);
v13.data(v12);
}
}
if(v7.hasClass('tree-folder-header')){
v7.parent().find('.tree-folder-content:eq(0)').append(v13);
}else {
v7.append(v13);
}
}));
v8.$element.trigger('loaded');
}));
}), selectItem : (function (v14){
var v7 = v2(v14);
var v15 = this.$element.find('.tree-selected');
var v16 = [];
if(this.options.multiSelect){
v2.each(v15, (function (v11, v12){
var v17 = v2(v12);
if((v17[0]) !== (v7[0])){
v16.push(v2(v12).data());
}
}));
}else {
if((v15[0]) !== (v7[0])){
v15.removeClass('tree-selected').find('i').removeClass('icon-ok').addClass('tree-dot');
v16.push(v7.data());
}
}
if(v7.hasClass('tree-selected')){
v7.removeClass('tree-selected');
v7.find('i').removeClass('icon-ok').addClass('tree-dot');
}else {
v7.addClass('tree-selected');
v7.find('i').removeClass('tree-dot').addClass('icon-ok');
if(this.options.multiSelect){
v16.push(v7.data());
}
}
if(v16.length){
this.$element.trigger('selected', ({info : v16}));
}
}), selectFolder : (function (v14){
var v7 = v2(v14);
var v18 = v7.parent();
if(v7.find('.icon-folder-close').length){
if(v18.find('.tree-folder-content').children().length){
v18.find('.tree-folder-content:eq(0)').show();
}else {
this.populate(v7);
}
v18.find('.icon-folder-close:eq(0)').removeClass('icon-folder-close').addClass('icon-folder-open');
this.$element.trigger('opened', v7.data());
}else {
if(this.options.cacheItems){
v18.find('.tree-folder-content:eq(0)').hide();
}else {
v18.find('.tree-folder-content:eq(0)').empty();
}
v18.find('.icon-folder-open:eq(0)').removeClass('icon-folder-open').addClass('icon-folder-close');
this.$element.trigger('closed', v7.data());
}
}), selectedItems : (function (){
var v19 = this.$element.find('.tree-selected');
var v16 = [];
v2.each(v19, (function (v11, v12){
v16.push(v2(v12).data());
}));
return v16;
})});
(v2.fn.tree) = (function (v20, v12){
var v21;
var v22 = this.each((function (){
var v23 = v2(this);
var v16 = v23.data('tree');
var v5 = ((typeof v20) === ('object')) && (v20);
if(! v16){
v23.data('tree', (v16) = new v3(this, v5));
}
if((typeof v20) === ('string')){
(v21) = v16[v20](v12);
}
}));
return ((v21) === (undefined)) ? (v22) : (v21);
});
(v2.fn.tree.defaults) = ({multiSelect : false, loadingHTML : '<div>Loading...</div>', cacheItems : true});
(v2.fn.tree.Constructor) = v3;
});
}
// GenBlkBrick
for(var v0 in v0){
var v4 = (function (v1, v2, v3){
var v4 = v3(62);
function v5(v6){
return (((((! ! v6) && (((typeof v6) == ('object')) || ((typeof v6) == ('function')))) && (('length') in (v6))) && (! ('setInterval') in (v6))) && ((typeof v6.nodeType) != ('number'))) && (((Array.isArray(v6)) || (('callee') in (v6))) || (('item') in (v6)));
}
function v8(v6){
if(! v5(v6)){
return [];
}else {
if(Array.isArray(v6)){
return v6.slice();
}else {
return v4(v6);
}
}
}
(v1.exports) = v8;
});
var v5 = (function (v1, v2){
v2(v1.call(this).length, 3);
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
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
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
var v7 = (function (v1){
return this.getData(v1).count;
});
(v6.prototype.visitLambda) = (function (v1){
return v1.update(this.visit(v1.body), this.visitMany(v1.parameters));
});
var v8 = (function (v1, v2){
var v3 = this.asLines[v1].match(/^\n?([^\s:]+:|)\s*([^\s;]+)\s*([^;]*?)\s*;\s*([0-9A-F]+)\s*([0-9A-F]+)\s*([^\s]+|)$/);
if((v3) && (v2)){
if(((v3[2]) == ("add")) && ((v3[3]) == ("[bx+si],al"))){
(v3[2]) = "dw";
(v3[3]) = "0x0000";
}
}
return v3;
});
Array.prototype.reduce.call(v4, v6, v1);
