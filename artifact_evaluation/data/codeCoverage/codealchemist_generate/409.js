var v0 = "In-person meeting";
if(Array.isArray(v0)){
(v0) = v0.join('\n');
}
var v1 = (function (v1, v2){
var v3 = ("conversation_run_") + (v2.choice.split('-')[0]);
if(this[v3]){
return this[v3](v1, v2);
}
if((v2.choice) == ("yes")){
this.doDonate(v1, this.pendingDonations[v1.tsid]);
}else {
if((v2.choice) === ("giveEmblem")){
this.give_emblem(v1);
this.setAndBroadcastState('close');
}else {
this.setAndBroadcastState('close');
}
}
if((this.pendingDonations) && (this.pendingDonations[v1.tsid])){
delete this.pendingDonations[v1.tsid];
}
this.conversation_end(v1, v2);
});
var v2 = ({buildCallback : (function (v1){
(v2) = new v1(v1, this);
}), renderCallback : (function (v1, v4){
v2.setKolorPicker(v5(v1).data(v0));
v2.render(v4);
})});
Object.defineProperties(v2, ({prop : ({get : v1, enumerable : true, configurable : true})}));
for(v0 in v1){
if(v1.hasOwnProperty(v0)){
(v2[v0]) = v1[v0];
}
}
(v2[v0]) = (v2[(v0) + ("s")]) = v1(v0);
for(v0 in v1){
if(v1.hasOwnProperty(v0)){
(v0) += v1(v1[v0], v0, "");
}
}
