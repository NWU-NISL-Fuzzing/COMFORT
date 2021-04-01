var v0 = (function (v1){
var v2 = v1('https://ciserversb.servicebus.windows.net:443').get('/$Resources/NotificationHubs?api-version=2016-07').reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2016-07</id><updated>2013-06-03T21:14:09Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2016-07\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2016-07\"><id>https://ciserversb.servicebus.windows.net/myhub?api-version=2016-07</id><title type=\"text\">myhub</title><published>2013-07-26T18:02:22Z</published><updated>2013-07-26T18:10:31Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhub?api-version=2016-07\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><WnsCredential><Properties><Property><Name>PackageSid</Name><Value>ms-app://s-1-15-2-2060948854-1555579440-2624401838-1061041892-4152237894-3341387579-3741301639</Value></Property><Property><Name>SecretKey</Name><Value>1t/f1uWV3ehU8Wo/+vRRusLPlmwUOYud</Value></Property><Property><Name>WindowsLiveEndpoint</Name><Value>https://login.live.com/accesstoken.srf</Value></Property></Properties></WnsCredential><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>f7ReDRk4hzKRfLtXHjrl3vTNabq8xPKi8OpvTKlokBU=</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>v7WXGFfWuD+6uVY40Y13h6gjt0Q/qb5QdIREMw5MtO0=</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2016-07\"><id>https://ciserversb.servicebus.windows.net/myhub2?api-version=2016-07</id><title type=\"text\">myhub2</title><published>2013-05-13T12:31:11Z</published><updated>2013-05-13T12:31:11Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhub2?api-version=2016-07\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><CreatedTime>2013-05-13T12:31:11.0727424Z</CreatedTime><ModifiedTime>2013-05-13T12:31:11.0727424Z</ModifiedTime><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>wSEu4/IJLTn9X0ce7NBD1aFIsUEuL2H+Pa/3Cp36pcA=</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><CreatedTime>2013-05-13T12:31:11.0727424Z</CreatedTime><ModifiedTime>2013-05-13T12:31:11.0727424Z</ModifiedTime><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>FI8DkfgSZJCJ1BH/W7cIJf4oXPkM6HwuWuABvL88Znk=</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", ({'transfer-encoding' : 'chunked', 'content-type' : 'application/atom+xml;type=feed;charset=utf-8', server : 'Microsoft-HTTPAPI/2.0', date : 'Mon, 03 Jun 2013 21:14:08 GMT'}));
return v2;
});
var v1 = (function (v1){
if((this.labels.length) < (2)){
this.chart.removeLabelDomain(this);
return;
}
var v2, v3, v4, v5, v6;
var v7 = 0;
var v8 = 0;
var v9 = 0;
for(var v10 = 0, v11 = this.labels.length;(v10) < (v11);v10++){
(v2) = this.labels[v10];
(v3) = (this.chart.state.getSeriesState()) | (this.chart.state.getPointStateByIndex(v2.getIndex()));
(v4) = this.getLabelBounds_(v2, v3);
(v5) = this.chart.data().meta(v2.getIndex(), 'point');
(v6) = v5.getBounds();
if(! v10){
(v7) = v6.top;
}
(v9) += v4.height;
(v8) += v6.height;
}
(v8) += (this.chart.pointsPaddingValue_) * ((v11) - (1));
var v12 = (v7) + ((v8) / (2));
var v13 = (v12) - ((v9) / (2));
var v14 = this.chart.boundsValue_;
if(((v13) + (v9)) > ((v14.top) + (v14.height))){
(v13) = ((v14.top) + (v14.height)) - (v9);
}
if((v13) < (v14.top)){
(v13) = v14.top;
}
(this.y) = v13;
this.applyLabelsPosition_(v1);
});
v1(/(o)es$/i, "$1");
(v1.prototype.constructor) = v1;
var v2 = (function (){
return this.pointerNode.item.items[this.pointerPosition];
});
var v3 = (function (v1){
(this.chain) = [];
(this.id) = this._nextId();
(this.fired) = - 1;
(this.paused) = 0;
(this.results) = [];
(this.canceller) = v1;
(this.silentlyCancelled) = false;
(this.isFiring) = false;
});
var v4 = (function (v1, v2){
if(((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_LOADED)) || ((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_NONE))){
if(v1.material){
if((v1.material) instanceof (v3.StandardMaterial)){
(v2.materials) = (v2.materials) || ([]);
if(! v2.materials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.materials.push(v1.material.serialize());
}
}else {
if((v1.material) instanceof (v3.MultiMaterial)){
(v2.multiMaterials) = (v2.multiMaterials) || ([]);
if(! v2.multiMaterials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.multiMaterials.push(v1.material.serialize());
}
}
}
}
var v5 = v1._geometry;
if(v5){
if(! v2.geometries){
(v2.geometries) = ({});
(v2.geometries.boxes) = [];
(v2.geometries.spheres) = [];
(v2.geometries.cylinders) = [];
(v2.geometries.toruses) = [];
(v2.geometries.grounds) = [];
(v2.geometries.planes) = [];
(v2.geometries.torusKnots) = [];
(v2.geometries.vertexData) = [];
}
v0(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v2(v1, v2));
}
});
// GenBlkBrick
for(var v0 in []){
(v3.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v2(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v4(v1, v1.right);
}else {
break ;
}
}
}
}
});
}
