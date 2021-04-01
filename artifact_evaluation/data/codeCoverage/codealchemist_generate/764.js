var v0 = (function (v1){
(this.bounceEnabled) = v1;
});
var v1 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2016-WS2016/skus/Standard/versions?api-version=2017-03-30').reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"13.0.21640\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2016/Skus/Standard/Versions/13.0.21640\"\r\n  }\r\n]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '300', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : 'cfb57526-ba8d-4fd1-8d20-891d9fbad1b9', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14904', 'x-ms-correlation-request-id' : '44c3534b-ac5f-45b2-9d26-7037f6b3782d', 'x-ms-routing-request-id' : 'WESTUS:20170602T151922Z:44c3534b-ac5f-45b2-9d26-7037f6b3782d', date : 'Fri, 02 Jun 2017 15:19:22 GMT', connection : 'close'}));
return v2;
});
v1(v0);
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("4738f493074ab28831244b26665fec4b.svg");
});
function v3(){
var v1 = v2('#textInput'), v3 = v2('#results');
var v4, v5 = '';
var v6 = (function (){
var v7 = v2(this).val();
if((v4) && ((v4.state()) === ('pending'))){
v4.reject(({statusText : 'abort'}));
}
if((v7) !== (v5)){
(v5) = v7;
v3.empty();
(v4) = v1(v5, 3);
v4.then((function (v9){
var v10 = v9[1];
v2.each(v10, (function (v11, v12){
v2((('<li>') + (v12)) + ('</li>')).appendTo(v3);
}));
}), (function (v13){
if((v13.statusText) !== ('abort')){
v2((('<li>') + (v13.statusText)) + ('</li>')).appendTo(v3);
}
}));
}
});
v1.keyup(v2(v6, 500));
}
if(v1.toSource){
(v2.toSource) = (function v2(){
return v1.toSource();
});
}
// GenBlkBrick
for(var v4 = 0;(v4) < (300);v4++){
// GenBlkBrick
while((v0) != (null)){
// GenBlkBrick
for((v5) = 0;(v5) < (9);v5++){
var v6 = (function (v1, v2){
var v3 = v1.crypto, v4 = v1.config;
var v5 = JSON.stringify(v2);
if(v4.cipherKey){
(v5) = v3.encrypt(v5);
(v5) = JSON.stringify(v5);
}
return v5;
});
}
}
(v1.formatDijitFormWidget) = v6;
}
// GenBlkBrick
for(var v7 = 0;(v7) < (100);++v7){
v2(/(vert|ind)ices$/i, "$1ex");
if((v7) < (20)){
break ;
}
}
