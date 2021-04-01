var v0 = (function (){
try{
Array.prototype.some.call(undefined);
return false;
}catch(v3){
return (v3) instanceof (TypeError);
}
});
(v0.prototype.isReady) = (function (v1, v2){
var v3 = v1.getMaterial();
if(v3.disableDepthWrite){
return false;
}
var v4 = [];
var v5 = [];
var v6 = v1.getMesh();
if((v3) && (v3.needAlphaTesting())){
v4.push("#define ALPHATEST");
if(v6.isVerticesDataPresent(v7.VertexBuffer.UVKind)){
v5.push(v7.VertexBuffer.UVKind);
v4.push("#define UV1");
}
if(v6.isVerticesDataPresent(v7.VertexBuffer.UV2Kind)){
v5.push(v7.VertexBuffer.UV2Kind);
v4.push("#define UV2");
}
}
if((v6.useBones) && (v6.computeBonesUsingShaders)){
v5.push(v7.VertexBuffer.MatricesIndicesKind);
v5.push(v7.VertexBuffer.MatricesWeightsKind);
if((v6.numBoneInfluencers) > (4)){
v5.push(v7.VertexBuffer.MatricesIndicesExtraKind);
v5.push(v7.VertexBuffer.MatricesWeightsExtraKind);
}
v4.push(("#define NUM_BONE_INFLUENCERS ") + (v6.numBoneInfluencers));
v4.push(("#define BonesPerMesh ") + ((v6.skeleton) ? ((v6.skeleton.bones.length) + (1)) : (0)));
}else {
v4.push("#define NUM_BONE_INFLUENCERS 0");
}
if(v2){
v4.push("#define INSTANCES");
v5.push("world0");
v5.push("world1");
v5.push("world2");
v5.push("world3");
}
var v8 = v4.join("\n");
if((this._cachedDefines) !== (v8)){
(this._cachedDefines) = v8;
(this._effect) = this._scene.getEngine().createEffect("depth", v5, [], [], v8);
}
return this._effect.isReady();
});
// GenBlkBrick
for((v1) = 0;(v1) < (65536);v1++){
var v2 = (function (v1){
var v2 = v1('https://ciserversb.servicebus.windows.net:443').get('/$Resources/NotificationHubs?api-version=2016-07').reply(200, "<feed xmlns=\"http://www.w3.org/2005/Atom\"><title type=\"text\">NotificationHubs</title><id>https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2016-07</id><updated>2013-06-03T21:13:39Z</updated><link rel=\"self\" href=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2016-07\"/><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2016-07\"><id>https://ciserversb.servicebus.windows.net/myhub?api-version=2016-07</id><title type=\"text\">myhub</title><published>2013-07-26T18:02:22Z</published><updated>2013-07-26T18:10:31Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhub?api-version=2016-07\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><WnsCredential><Properties><Property><Name>PackageSid</Name><Value>ms-app://s-1-15-2-2060948854-1555579440-2624401838-1061041892-4152237894-3341387579-3741301639</Value></Property><Property><Name>SecretKey</Name><Value>1t/f1uWV3ehU8Wo/+vRRusLPlmwUOYud</Value></Property><Property><Name>WindowsLiveEndpoint</Name><Value>https://login.live.com/accesstoken.srf</Value></Property></Properties></WnsCredential><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>f7ReDRk4hzKRfLtXHjrl3vTNabq8xPKi8OpvTKlokBU=</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>v7WXGFfWuD+6uVY40Y13h6gjt0Q/qb5QdIREMw5MtO0=</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry><entry xml:base=\"https://ciserversb.servicebus.windows.net/$Resources/NotificationHubs?api-version=2016-07\"><id>https://ciserversb.servicebus.windows.net/myhub2?api-version=2016-07</id><title type=\"text\">myhub2</title><published>2013-05-13T12:31:11Z</published><updated>2013-05-13T12:31:11Z</updated><author><name>ciserversb</name></author><link rel=\"self\" href=\"../myhub2?api-version=2016-07\"/><content type=\"application/xml\"><NotificationHubDescription xmlns=\"http://schemas.microsoft.com/netservices/2010/10/servicebus/connect\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RegistrationTtl>P90D</RegistrationTtl><AuthorizationRules><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights></Rights><CreatedTime>2013-05-13T12:31:11.0727424Z</CreatedTime><ModifiedTime>2013-05-13T12:31:11.0727424Z</ModifiedTime><KeyName>DefaultListenSharedAccessSignature</KeyName><PrimaryKey>wSEu4/IJLTn9X0ce7NBD1aFIsUEuL2H+Pa/3Cp36pcA=</PrimaryKey></AuthorizationRule><AuthorizationRule i:type=\"SharedAccessAuthorizationRule\"><ClaimType>SharedAccessKey</ClaimType><ClaimValue>None</ClaimValue><Rights><AccessRights>Listen</AccessRights><AccessRights>Manage</AccessRights><AccessRights>Send</AccessRights></Rights><CreatedTime>2013-05-13T12:31:11.0727424Z</CreatedTime><ModifiedTime>2013-05-13T12:31:11.0727424Z</ModifiedTime><KeyName>DefaultFullSharedAccessSignature</KeyName><PrimaryKey>FI8DkfgSZJCJ1BH/W7cIJf4oXPkM6HwuWuABvL88Znk=</PrimaryKey></AuthorizationRule></AuthorizationRules></NotificationHubDescription></content></entry></feed>", ({'transfer-encoding' : 'chunked', 'content-type' : 'application/atom+xml;type=feed;charset=utf-8', server : 'Microsoft-HTTPAPI/2.0', date : 'Mon, 03 Jun 2013 21:13:39 GMT'}));
return v2;
});
(v2.prototype.removePendingItem) = (function (){
});
}
(v3) = v0(v2, v3, v1);
if((v3) < ((2.5) / (2.75))){
(v3) = (((7.5625) * ((v3) -= (2.25) / (2.75))) * (v3)) + (0.9375);
}else {
(v3) = (((7.5625) * ((v3) -= (2.625) / (2.75))) * (v3)) + (0.984375);
}
(v2.DATASOURCE_RENDERTARGET) = 5;
Array.prototype.reduce.call(v2, v0, v3);
if(v3){
(v1) *= Math.pow(2.0, (v3) / (4.0));
}
