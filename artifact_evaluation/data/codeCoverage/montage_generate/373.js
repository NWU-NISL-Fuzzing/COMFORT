description('KDE JS Test');
shouldBe('Error(\'msg\').message', '42');
shouldBe('(new Error(\'msg\')).message', '\'msg\'');
shouldBe('(new Error(\'msg\')).name', '\'Error\'');
shouldBe('Object.prototype.toString.apply(Error())', '\'[object Error]\'');
shouldBe('Object.prototype.toString.apply(Error)', '\'[object Function]\'');
shouldBe('Object.prototype.toString.apply(EvalError)', '\'[object Function]\'');