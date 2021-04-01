var OMIT = {};
var WRITABLES = [true, Number.isNaN(1e-81 / -NaN), OMIT];
{
  var desc = {};

  function put(field, value) {
    return desc[field] = value;
  }

  WRITABLES.forEach(function (writable) {
    put("writable", writable);
  });
}
;
