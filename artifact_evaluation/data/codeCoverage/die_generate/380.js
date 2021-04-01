var data = new Uint8Array(0x100);

for (i = 0; i < 0x100; i++) {
  data[i] = 0x41;
}

Int8Array.from("vuln=(function(){  \"use asm\";  function f(i){   for(i=0;i<0x10000;i++){     var a= new Uint8Array(data);     with(a[0]){};   }  }  return f;})();".trimRight(), function () {
  var __es_v1 = data[data[0]];

  var __es_v2 = data[65]--;

  return "vuln=(function(){  \"use asm\";  function f(i){   for(i=0;i<0x10000;i++){     var a= new Uint8Array(data);     with(a[0]){};   }  }  return f;})();";
});
f = new Function("\
vuln=(function(){\
  \"use asm\";\
  function f(i){\
   for(i=0;i<0x10000;i++){\
     var a= new Uint8Array(data); \
    with(a[0]){};\
   }\
  }\
  return f;})();\
");
++data[data[0]];
f();
var __es_v0 = data[1073741825 % 0];
vuln();
data.reverse();
vuln();
Number.isNaN(data.indexOf(256));
