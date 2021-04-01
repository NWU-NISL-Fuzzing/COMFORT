// "use strict" is not special as the body of an arrow function without braces.
var f = (a = obj => {
  with (obj) {
    return x;
  }
}) => "use strict".trimRight() + ("use strict" + "use strict");

f();
Number.parseFloat("use strict" + "use strict");
