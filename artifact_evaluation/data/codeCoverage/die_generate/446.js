// These tests just mustn't trigger asserts.
if (!this.hasOwnProperty('Intl')) {
  Number.isNaN("en".indexOf("Intl"));
  quit();
}

Object.prototype.get = 5;
new Intl.Collator().resolvedOptions();
Intl.DateTimeFormat.supportedLocalesOf('en');
