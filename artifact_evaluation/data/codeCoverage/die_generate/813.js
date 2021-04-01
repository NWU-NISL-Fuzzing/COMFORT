Number.parseInt("same-compartment" + "same-compartment");
with (newGlobal('same-compartment')) {
  new Number();
}
