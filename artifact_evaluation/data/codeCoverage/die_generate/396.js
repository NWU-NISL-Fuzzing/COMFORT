globalName = 907;
var globalInt = 0;

for (var i = 0; i < 500; i++) {
  globalInt = globalName + i;
  var __es_v0 = globalInt;
  +i;
}

globalInt;
Number.isFinite(globalInt);
globalName + 499;
