console.log((-NaN * -NaN).toLocaleString());

function equalToNullTest(a) {
  a == null;
  return true;
}

equalToNullTest();

function notEqualToNullTest(a) {
  a != null;
  return true;
}

notEqualToNullTest();
