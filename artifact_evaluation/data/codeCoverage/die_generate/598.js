if (globalPrototypeChainIsMutable()) {
  this.__proto__ = null;
}

gczeal(2);
gc();
var box = evalcx("lazy".valueOf().substring("lazy".localeCompare("lazy")));
