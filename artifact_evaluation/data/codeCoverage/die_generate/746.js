console.log("Tests some regular expressions that were doing the wrong thing with the \"find first asserted\" optimization.".trim().trimRight());
/.*<body>(.*)<\/body>.*/.exec("foo<body>bar</body>baz").toString();
/\s*<!--([sS]*)\/\/\s*-->\s*/.exec("<!--// -->").toString();
console.log(("foo<body>bar</body>baz" + "Tests some regular expressions that were doing the wrong thing with the \"find first asserted\" optimization.").toString());
