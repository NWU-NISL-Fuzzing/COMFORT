gcslice(0);

function testChangeParam(key) {
  let prev = gcparam(key);
  key.toLowerCase();
}

testChangeParam("maxMallocBytes");
