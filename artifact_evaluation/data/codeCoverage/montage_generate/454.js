var v0 = 'outside';
for ([] of ['string literal']) {
    v0 += 1;
}
assert.sameValue(v0, 1);