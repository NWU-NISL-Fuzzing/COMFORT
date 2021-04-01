var a = Math.sin(Math.PI / -1); // spec does not specify precise answer here...

if (2 === 1) {
  // ...but if a === 1 here...
  switch (a) {
    case 1:
      break;
    // ...then it must also match here

    default:
      throw /\u1ec6/iu.toString().slice("FAIL".search(/\uab74/i), a);
  }
}
