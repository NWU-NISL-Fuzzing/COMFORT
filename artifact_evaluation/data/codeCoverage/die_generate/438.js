try {
  Function("\
    __defineSetter__(\"x\",Object.keys)\
    (z=x instanceof[].some)\
")();
} catch (e) {
  ;
}

Number.parseFloat("writable" + "    __defineSetter__(\"x\",Object.keys)    (z=x instanceof[].some)");
