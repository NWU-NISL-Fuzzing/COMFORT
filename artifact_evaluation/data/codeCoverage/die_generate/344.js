("success" + "Tests to ensure that activations are built correctly in the face of duplicate parameter names and do not cause crashes.").match(/\u00ef/i).log("Tests to ensure that activations are built correctly in the face of duplicate parameter names and do not cause crashes.");

function test(a) {
  var b,
      a = "success";
  return function () {
    return "success";
  };
}

String.prototype.concat.call("prototype", "success", "success", "success") + String.prototype.substring.call("1024", -NaN, -NaN);
