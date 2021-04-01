var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("76bb3e920ff642a218226a6c8a4cbc07.svg");
});
var v1 = (function (v1){
v1.memoryHighWriter[v1.registerC](v1, v1.registerC, v1.registerA);
});
var v2 = (function (v1){
'use strict';
(v1.SnakeLayer) = (function (v2, v3, v4, v1, v5){
(v1.width) = v3.cellWidth;
(v1.height) = v3.cellHeight;
(this.update) = (function (){
(v1.path) = v5.get();
});
(this.draw) = (function (){
v1.draw(v2);
});
(this.getPosition) = (function (){
return ((v1.path.length) === (0)) ? (null) : (v1.path[0]);
});
v4.add(this);
});
});
(v2.prototype.showPopup) = (function (v1, v2){
(this.popupIsVisible) = true;
this.$popup.removeClass('hidden');
this._adjustPosition(v2);
this.$popupContentWrapper.removeClass('popup-transparent');
this.drawerInstance.trigger(this.drawerInstance.EVENT_TOOLBAR_CHANGE_STATE, []);
});
var v3 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/ServiceBus/Namespaces/nodesdk-2').reply(500, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>InternalError</Code><Message>The server encountered an internal error. Please retry the request.</Message></Error>", ({'cache-control' : 'no-cache', 'content-length' : '229', 'content-type' : 'application/xml; charset=utf-8', server : '33.0.6198.18 (rd_rdfe_stable.130314-1521) Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : '55df8d6b5a1542a8a652644ed1c370de', date : 'Tue, 19 Mar 2013 20:16:11 GMT'}));
return v2;
});
v1(v2, v0);
// GenBlkBrick
for(var v4 = 0;(v4) < (6);++v4){
(v3.prototype.intersectsSphere) = (function (v1){
var v2 = (v1.center.x) - (this.origin.x);
var v3 = (v1.center.y) - (this.origin.y);
var v4 = (v1.center.z) - (this.origin.z);
var v5 = (((v2) * (v2)) + ((v3) * (v3))) + ((v4) * (v4));
var v6 = (v1.radius) * (v1.radius);
if((v5) <= (v6)){
return true;
}
var v7 = (((v2) * (this.direction.x)) + ((v3) * (this.direction.y))) + ((v4) * (this.direction.z));
if((v7) < (0.0)){
return false;
}
var v8 = (v5) - ((v7) * (v7));
return (v8) <= (v6);
});
}
Array.prototype.reduce.call(v0, v1, v4);
