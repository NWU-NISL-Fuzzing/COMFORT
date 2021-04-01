this.name = "outer";
var sb = evalcx(/\u013c/iu.toString());
sb.name = "";
sb.parent = this;

function f() {
  this.name;
  "outer";
}

evalcx("" + "with(this) { ff = parent.f; }; (function() { eval(\"\"); for(var i=0; i<10; i++) { ff() } })()" + String.prototype.valueOf.call("set"), sb);
