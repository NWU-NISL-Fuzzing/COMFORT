var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/9135e259-1f76-4dbd-a5c8-bc4fcdf3cf1c/providers/Microsoft.Compute/locations/westus/operations/6755743c-77f8-4ec4-91f1-3a3299d1a60b?api-version=2017-03-30').reply(200, "{\r\n  \"startTime\": \"2017-10-04T23:58:13.0104006+00:00\",\r\n  \"endTime\": \"2017-10-04T23:59:06.9609074+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"6755743c-77f8-4ec4-91f1-3a3299d1a60b\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '184', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : '64e02c07-da64-431a-89d5-1f0dad0aed07_131506966718292467', 'x-ms-request-id' : '924cd167-4290-489f-abd5-599dd1fa3aae', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14721', 'x-ms-correlation-request-id' : '0953e38f-a1d8-4647-a71d-58e7af176eb0', 'x-ms-routing-request-id' : 'WESTUS:20171004T235915Z:0953e38f-a1d8-4647-a71d-58e7af176eb0', date : 'Wed, 04 Oct 2017 23:59:15 GMT', connection : 'close'}));
return v2;
});
v0("sheep");
(v0.htmlParser.HtmlParser) = v0.Util.extend(Object, ({htmlRegex : (function (){
var v2 = /!--([\s\S]+?)--/, v3 = /[0-9a-zA-Z][0-9a-zA-Z:]*/, v4 = /[^\s\0"'>\/=\x01-\x1F\x7F]+/, v5 = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, v6 = (((v4.source) + ('(?:\\s*=\\s*')) + (v5.source)) + (')?');
return new RegExp([].join(""), 'gi');
})(), htmlCharacterEntitiesRegex : /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi, parse : (function (v8){
var v9 = this.htmlRegex, v10, v11 = 0, v12, v13 = [];
while(((v10) = v9.exec(v8)) !== (null)){
var v14 = v10[0], v15 = v10[3], v16 = (v10[1]) || (v10[4]), v17 = ! ! v10[2], v18 = v8.substring(v11, v10.index);
if(v18){
(v12) = this.parseTextAndEntityNodes(v18);
v13.push.apply(v13, v12);
}
if(v15){
v13.push(this.createCommentNode(v14, v15));
}else {
v13.push(this.createElementNode(v14, v16, v17));
}
(v11) = (v10.index) + (v14.length);
}
if((v11) < (v8.length)){
var v19 = v8.substring(v11);
if(v19){
(v12) = this.parseTextAndEntityNodes(v19);
v13.push.apply(v13, v12);
}
}
return v13;
}), parseTextAndEntityNodes : (function (v19){
var v13 = [], v20 = v0.Util.splitAndCapture(v19, this.htmlCharacterEntitiesRegex);
for(var v21 = 0, v22 = v20.length;(v21) < (v22);(v21) += 2){
var v23 = v20[v21], v24 = v20[(v21) + (1)];
if(v23){
v13.push(this.createTextNode(v23));
}
if(v24){
v13.push(this.createEntityNode(v24));
}
}
return v13;
}), createCommentNode : (function (v14, v15){
return new v0.htmlParser.CommentNode(({text : v14, comment : v0.Util.trim(v15)}));
}), createElementNode : (function (v14, v16, v17){
return new v0.htmlParser.ElementNode(({text : v14, tagName : v16.toLowerCase(), closing : v17}));
}), createEntityNode : (function (v19){
return new v0.htmlParser.EntityNode(({text : v19}));
}), createTextNode : (function (v19){
return new v0.htmlParser.TextNode(({text : v19}));
})}));
// GenBlkBrick
for((v1) = 0;(v1) < (1e6);v1++){
(v1) += (5) * (2);
}
while((v1--) > (0)){
v0();
}
(v2) = (v1) - (v1);
if((((v0) >>> (v1)) & (1)) != (0)){
v2++;
}
// GenBlkBrick
for(;(~ ~ v1) != (4);(v1) = ((v1) + (1)) | (0)){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v1)) < (v3);v4++){
if((v4[(v4) + (v1)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v1)];
(v4[(v4) + (v1)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v1) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
