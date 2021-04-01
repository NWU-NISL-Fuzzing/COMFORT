var v0 = (function (v1){
var v2 = v1('http://management.core.windows.net:443').get('/8d57ddbd-c779-40ea-b660-1015f4bf027d/services/WebSpaces/uksouthwebspace/sites/clitests5648/instanceids').reply(200, "<ArrayOfstring xmlns=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><string>40246b89542972727ac11c54edceb52d89c7db18f79fd8034ec2ba95cd1d438f</string></ArrayOfstring>", ({'cache-control' : 'private', 'content-length' : '230', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.442 (rd_rdfe_stable.161012-2349) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : 'e0c1b04c52f43e1c889c02d1a5d38d41', date : 'Wed, 02 Nov 2016 16:39:28 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1, v2){
return (function (){
var v3 = 'markup+css+clike+javascript+abap+actionscript+apacheconf+apl+applescript+aspnet+autoit+autohotkey+bash+basic+batch+c+brainfuck+bison+csharp+cpp+coffeescript+ruby+css-extras+d+dart+diff+docker+eiffel+elixir+erlang+fsharp+fortran+gherkin+git+glsl+go+groovy+handlebars+haskell+haxe+http+icon+inform7+ini+j+jade+java+julia+keyman+kotlin+latex+less+lolcode+lua+makefile+markdown+matlab+mel+mizar+monkey+nasm+nginx+nim+nix+nsis+objectivec+ocaml+oz+parigp+parser+pascal+perl+php+php-extras+powershell+processing+prolog+puppet+pure+python+q+qore+r+jsx+rest+rip+roboconf+crystal+rust+sas+sass+scss+scala+scheme+smalltalk+smarty+sql+stylus+swift+tcl+textile+twig+typescript+verilog+vhdl+vim+wiki+yaml', v4 = [];
(v3) = v3.split('+');
v3.unshift('core');
v3.forEach((function (v5){
v4.push((('./app/bower_components/prism/components/prism-') + (v5)) + ('.js'));
}));
return v1.src(v4).pipe(v2.concat('bundle.js')).pipe(v1.dest('./app/bower_components/prism'));
});
});
var v2 = (function (){
Object.defineProperty(Object.prototype, "1", ({get : (function (){
return 6.99;
}), configurable : true}));
return 0;
});
var v3 = (function (v1, v2, v3){
"use strict";
(v1.exports) = ({supportsPopups : v3(387)});
});
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v1(v1);
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
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
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
function v5(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v4(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v0(v1)) ? (v3(v3)[1]) : (v3(v3)[0]));
}else {
if(v4){
return (v5) + (v3(v3)[1]);
}else {
return (v5) + ((v0(v1)) ? (v3(v3)[1]) : (v3(v3)[2]));
}
}
}
}
Object.defineProperty(v1.prototype, "isSupported", ({get : (function (){
return this._multiRenderTarget.isSupported;
}), enumerable : true, configurable : true}));
(function (){
v5(/$/, "s");
v5(/s$/i, "s");
v5(/(ax|test)is$/i, "$1es");
v5(/(octop|vir)us$/i, "$1i");
v5(/(octop|vir)i$/i, "$1i");
v5(/(alias|status)$/i, "$1es");
v5(/(bu)s$/i, "$1ses");
v5(/(buffal|tomat)o$/i, "$1oes");
v5(/([ti])a$/i, "$1a");
v5(/([ti])um$/i, "$1a");
v5(/sis$/i, "ses");
v5(/ses$/i, "ses");
v5(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v5(/(hive)$/i, "$1s");
v5(/([^aeiouy]|qu)y$/i, "$1ies");
v5(/(x|ch|ss|sh)$/i, "$1es");
v5(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v5(/([m|l])ouse$/i, "$1ice");
v5(/([m|l])ice$/i, "$1ice");
v5(/^(ox)$/i, "$1en");
v5(/^(ox)en$/i, "$1en");
v5(/(quiz)$/i, "$1zes");
v1(/s$/i, "");
v1(/ss$/i, "ss");
v1(/(n)ews$/i, "$1ews");
v1(/([ti])um$/i, "$1um");
v1(/([ti])a$/i, "$1um");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v1(/(^analy)ses$/i, "$1sis");
v1(/(^analy)sis$/i, "$1sis");
v1(/([^f])ves$/i, "$1fe");
v1(/(hive)s$/i, "$1");
v1(/(tive)s$/i, "$1");
v1(/([lr])ves$/i, "$1f");
v1(/([^aeiouy]|qu)ies$/i, "$1y");
v1(/(s)eries$/i, "$1eries");
v1(/(m)ovies$/i, "$1ovie");
v1(/(x|ch|ss|sh)es$/i, "$1");
v1(/([m|l])ice$/i, "$1ouse");
v1(/([m|l])ouse$/i, "$1ouse");
v1(/(bus)es$/i, "$1");
v1(/(bus)$/i, "$1");
v1(/(o)es$/i, "$1");
v1(/(shoe)s$/i, "$1");
v1(/(cris|ax|test)es$/i, "$1is");
v1(/(cris|ax|test)is$/i, "$1is");
v1(/(octop|vir)i$/i, "$1us");
v1(/(octop|vir)us$/i, "$1us");
v1(/(alias|status)es$/i, "$1");
v1(/(alias|status)$/i, "$1");
v1(/^(ox)en/i, "$1");
v1(/(vert|ind)ices$/i, "$1ex");
v1(/(matr)ices$/i, "$1ix");
v1(/(quiz)zes$/i, "$1");
v1(/(database)s$/i, "$1");
v2("person", "people");
v2("man", "men");
v2("child", "children");
v2("sex", "sexes");
v2("move", "moves");
v2("cow", "kine");
v0("equipment");
v0("information");
v0("rice");
v0("money");
v0("species");
v0("series");
v0("fish");
v0("sheep");
v0("jeans");
})();
