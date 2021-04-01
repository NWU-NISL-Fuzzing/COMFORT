// Test that zero-based line numbers supplied by Reflect.parse don't cause
// assertions.
function parseAsModule(source) {
  return Reflect.parse(source, {
    target: "module",
    line: 0
  });
}

var __es_v0 = 0 .toPrecision().localeCompare(/\u13a6/iu.toString());
