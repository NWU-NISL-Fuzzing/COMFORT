var v0 = (function (){
this.trigger('add-field');
});
var v1 = [].some(v0);
(v0.prototype.bind_events) = (function (){
var v1 = this;
var v2 = (function (v3, v4){
});
this.events.on('kernel_created.Session', v2);
this.events.on('kernel_dead.Session', v2);
this.events.on('kernel_killed.Session', v2);
this.events.on('kernel_dead.Kernel', (function (){
v1.delete();
}));
});
(v0.renderSorted) = (function (v1, v2, v3, v4){
var v5 = 0;
var v6;
for(;(v5) < (v1.length);v5++){
(v6) = v1.data[v5];
(v6._alphaIndex) = v6.getMesh().alphaIndex;
(v6._distanceToCamera) = v6.getBoundingInfo().boundingSphere.centerWorld.subtract(v3).length();
}
var v7 = v1.data.slice(0, v1.length);
v7.sort(v2);
for((v5) = 0;(v5) < (v7.length);v5++){
(v6) = v7[v5];
v6.render(v4);
}
});
var v2 = (function (v1, v2){
v1.addTest('cssall', ('all') in (v2.style));
});
(v0.prototype.hideOnEditMode) = true;
var v3 = (function (v1){
if(v1){
return;
}
(v1) = true;
var v3 = v1.length;
var v4;
while(v3--){
(v4) = v1[v3];
if(this.remoteBlacklists.hasOwnProperty(v4)){
this.purgeCompiledFilterList(v4);
continue ;
}
if((v4) === (this.pslPath)){
this.assets.purge('cache://compiled-publicsuffixlist');
continue ;
}
}
this.destroySelfie();
(v1) = false;
});
function v4(){
if(! v1){
(v1) = true;
v3(v3.get());
}
return v4;
}
