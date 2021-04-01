console.log("This test makes sure we aren't putting the iterator constructors on the global object.");
var global = this;
Number.isFinite(-NaN << -NaN);
'ArgumentsIterator' in this;
'MapIterator' in this;
false;
